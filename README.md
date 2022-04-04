# Log

Les logs vont être à destination de deux publics différents :

- les utilisateurs de notre site/API
- les administrateur de notre site/API

## Log utilisateur

Les utilisateurs n'ont pas besoin de connaître le message d'erreur explicite. Il a seulement besoin de l'information comme quoi quelque chose s'est mal passé.

Une API/site bien codée ne doit pas avoir d'erreur ! S'il y en avait ça serait par la tentative de l'utiliser d'une façon non conforme. C'est bien souvent le fait de pirates.

## Log administrateur

Pour gérer/administrer notre plateforme, nous avons besoin de logs pour connaître ce qui est fait dessus.
Les logs les plus importants restant les logs des erreurs.
Dans la majorité des cas, celles-ci seront enregistrées dans des fichiers physiques.
Nous pourrons les récupérer via SSH.

Pour afficher les logs dans le terminal, il y a des modules qui existent comme DEBUG.


## Tuto logs

https://sematext.com/blog/node-js-error-handling/