# Extension Antescofo pour Visual Studio Code

Cette extension fournit la coloration syntaxique pour le langage Antescofo dans Visual Studio Code.

## À propos d'Antescofo

Antescofo est un couplage d'une machine d'écoute temps réel avec un langage synchrone réactif et temporisé. Le langage est utilisé pour l'écriture de pièces musicales impliquant des musiciens live et des processus informatiques, et le système temps réel assure sa performance et sa synchronisation correctes malgré les erreurs d'écoute ou de performance.

## Fonctionnalités

- **Coloration syntaxique complète** : Support pour tous les éléments syntaxiques d'Antescofo
- **Reconnaissance des mots-clés** : Événements (NOTE, CHORD, TRILL, BPM) et actions (GROUP, LOOP, etc.)
- **Support des identifiants spéciaux** :
  - Variables `$variable`
  - Processus `::process`
  - Fonctions et attributs `@function`
  - Objets `obj::object`
  - Patterns `pattern::pattern`
  - Tracks `track::track`
- **Commentaires** : Support des commentaires en ligne (`//`, `;`) et bloc (`/* */`)
- **Chaînes de caractères** et nombres
- **Auto-complétion** des crochets et guillemets

## Extensions de fichiers supportées

- `.asco`
- `.asco.txt`

## Installation

### Méthode 1: Installation manuelle

1. Téléchargez ou clonez ce dépôt
2. Copiez le dossier dans votre répertoire d'extensions VS Code :
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`
3. Redémarrez VS Code

### Méthode 2: Installation depuis VSIX (si disponible)

1. Ouvrez VS Code
2. Allez dans Extensions (Ctrl+Shift+X)
3. Cliquez sur "..." puis "Install from VSIX..."
4. Sélectionnez le fichier `.vsix`

## Structure des fichiers

```
antescofo-language-support/
├── package.json                    # Configuration de l'extension
├── language-configuration.json     # Configuration du langage
├── syntaxes/
│   └── antescofo-language.json     # Définition de la grammaire
└── README.md                       # Ce fichier
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
- Et bien d'autres...

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

## Auteurs

Basé sur la documentation officielle d'Antescofo et inspiré du package
Sublime Text existant.

