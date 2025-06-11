# Extension Antescofo pour Visual Studio Code

Cette extension fournit la coloration syntaxique pour le langage Antescofo dans Visual Studio Code, ainsi que quelques commandes à destination d'un objet antescofo~ via OSC. Cf. aussi l'extension analgue pour [Antescofo Sublime Package](https://github.com/arshiacont/antescofo-sublime-package/tree/master)

## À propos d'Antescofo

Antescofo est un couplage d'une machine d'écoute temps réel avec un langage synchrone réactif et temporisé. Le langage est utilisé pour l'écriture de pièces musicales impliquant des musiciens live et des processus informatiques, et le système temps réel assure sa performance et sa synchronisation correctes malgré les erreurs d'écoute ou de performance.

## Fonctionnalités

- **Coloration syntaxique :** support pour les éléments syntaxiques d'Antescofo
  - **Reconnaissance des mots-clés** : Événements (NOTE, CHORD, TRILL, BPM) et actions (GROUP, LOOP, etc.)
  - **Commentaires** : Support des commentaires en ligne (`//`, `;`) et bloc (`/* */`)
  - **Chaînes de caractères** et nombres
  - **Auto-complétion** des crochets et guillemets
    - **Support des identificateur** :
    - Variables `$variable`
    - Processus `::process`
    - Fonctions et attributs `@function`
    - Objets `obj::object`
    - Patterns `pattern::pattern`
    - Tracks `track::track`

- **Commandes :** envoyées via OSC à Antescofo. Accessible via la palette de commande
  - "Antescofo: Send Full Score"
  - "Antescofo: Send Selection"
  - "Antescofo: Play"
  - "Antescofo: Play from Cursor"
  - "Antescofo: Stop"
  - "Antescofo: Eval Command"
On peut changer le port et l'adresse à laquelle on contacte antescofo~ via le fichier de configuration (pomme-,) puis en filtrant avec "antescofo" pour retrouver les variables correspodnantes.

## Extensions de fichiers supportées

- `.asco`
- `.asco.txt`

## Installation manuelle

1. Téléchargez ou clonez ce dépôt dans le dossier dans votre répertoire d'extensions VS Code :
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`
2. Renommer le `JeanLouisGiavitto.antescofo-support`
3. démarrez VS Code


## Structure des fichiers

```
antescofo-language-support/
├── package.json                    # Configuration de l'extension
├── extension.js                    # Code ppour l'envoi des commandes OSC
├── language-configuration.json     # Configuration du langage
├── README.md                       # Ce fichier
└── syntaxes/
    └── antescofo-language.json     # Définition de la grammaire

```

## Utilisation

1. Ouvrez un fichier avec l'extension `.asco` ou `.asco.txt`
2. VS Code devrait automatiquement détecter le langage Antescofo
3. Si ce n'est pas le cas, cliquez sur le sélecteur de langage en bas à droite et choisissez "Antescofo"

## Exemples de syntaxe

### Événements musicaux
```antescofo
NOTE C4 0.5 myLabel
CHORD (C4 E4 G4) 1.0
BPM 120
```

### Actions et contrôle
```antescofo
GROUP {
    print "Hello Antescofo"
    1.0s print "One second later"
}

LOOP $i 10 {
    print "Iteration" $i
}
```

### Variables et fonctions
```antescofo
$myVar := 42
@myFunction($x) := { $x * 2 }
```

### Processus et objets
```antescofo
@proc_def ::myProcess() {
    // Code du processus
}

@obj_def obj::myObject {
    // Définition de l'objet
}
```

## Mots-clés supportés

### Événements
- `NOTE`, `CHORD`, `TRILL`, `BPM`, `EVENT`

### Actions
- `GROUP`, `LOOP`, `IF`, `WHENEVER`, `WHILE`
- `START`, `STOP`, `ABORT`, `KILL`
- `PRINT`, `OSC`, `MAX`, `PD`

### Attributs (préfixés par @)
- `@tempo`, `@sync`, `@tight`, `@loose`
- `@local`, `@global`, `@immediate`
- Et quelques autres...

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## Ressources

- [Documentation officielle Antescofo](https://antescofo-doc.ircam.fr)
- [Page du projet Antescofo](http://repmus.ircam.fr/antescofo)
- [Forum Antescofo](https://discussion.forum.ircam.fr/c/antescofo)

## Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## Auteur

Jean-Louis Giavitto

