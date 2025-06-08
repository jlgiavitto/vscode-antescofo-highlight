const vscode = require("vscode");
const osc = require("osc");

function getOscPort() {
    const config = vscode.workspace.getConfiguration("antescofo");
    return new osc.UDPPort({
        localAddress: "0.0.0.0",
        localPort: 57121,
        remoteAddress: config.get("host"),
        remotePort: config.get("port")
    });
}

function sendOscMessage(address, args) {
    const port = getOscPort();
    port.open();
    port.on("ready", function () {
        port.send({ address, args });
        port.close();
    });
}

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand("antescofo.sendScore", () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const fullText = editor.document.getText();
                sendOscMessage("/antescofo/cmd", [{ type: "s", value: "score" }, { type: "s", value: fullText }]);
            }
        }),
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
        vscode.commands.registerCommand("antescofo.playFromCursor", () => {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const line = editor.selection.active.line + 1;
                sendOscMessage("/antescofo/cmd", [{ type: "s", value: "playfrom" }, { type: "i", value: line }]);
            }
        }),
        vscode.commands.registerCommand("antescofo.stop", () => {
            sendOscMessage("/antescofo/cmd", [{ type: "s", value: "stop" }, ]);
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