const vscode = require("vscode");
const osc = require("osc");

function getOscPort() {
    const config = vscode.workspace.getConfiguration("antescofo");
    console.log("JeanLouis getOscPort", config.get("port"));

    return new osc.UDPPort({
        localAddress: config.get("hosteditor"),
        localPort: config.get("porteditor"),
        remoteAddress: config.get("host"),
        remotePort: config.get("port")
    });
}

function sendOscMessage(address, args) {
    console.log("JeanLouis sendOscMessage adress", address, "and args:", args);
    const port = getOscPort();
    port.on("error", function (error) {
        console.log("Erreur port UDP: ", error.message);
    });
    port.on("ready", function () {
        const message = { address: address, args: args };
        port.send(message);
        setTimeout(() => { port.close(); }, 100);
    });
    port.open();
}

function activate(context) {
    console.log("JeanLouis Extension Antescofo activée");

    context.subscriptions.push(
        vscode.commands.registerCommand("antescofo.sendSelection", () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const selText = editor.document.getText(editor.selection);
                sendOscMessage("/antescofo/cmd", [{ type: "s", value: "playstring" }, { type: "s", value: selText }]);
            }
        }),
        vscode.commands.registerCommand("antescofo.play", () => {
            sendOscMessage("/antescofo/cmd", [{ type: "s", value: "play" }]);
        }),
        vscode.commands.registerCommand("antescofo.stop", () => {
            sendOscMessage("/antescofo/cmd", [{ type: "s", value: "stop" },]);
        }),
        vscode.commands.registerCommand("antescofo.start", () => {
            sendOscMessage("/antescofo/cmd", [{ type: "s", value: "start" },]);
        }),
        vscode.commands.registerCommand("antescofo.evalCommand", async () => {
            const input = await vscode.window.showInputBox({ prompt: "Enter Antescofo Command" });
            if (input) {
                sendOscMessage("/antescofo/cmd", [{ type: "s", value: "eval" }, { type: "s", value: input }]);
            }
        })
    );
}

exports.activate = activate;

function deactivate() { }
exports.deactivate = deactivate;

