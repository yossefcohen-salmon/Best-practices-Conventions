# Exercice : réservation de vol

Une compagnie aérienne prépare son nouveau système de réservation de billets. Un développeur de l'équipe a écrit le code qui crée les réservations, envoie l'e-mail de confirmation et récupère les informations des vols. Le code fonctionne, mais il a été écrit trop vite : il ne respecte pas les conventions de l'équipe.

Avant qu'il parte en production, c'est à vous de le relire. Vous devez repérer les problèmes et expliquer comment les corriger, pour être sûr que les clients reçoivent une réservation fiable, que leurs données personnelles (passeport, téléphone, token) ne se retrouvent pas dans les logs, et que le code reste facile à lire et à maintenir pour toute l'équipe.

Les bonnes pratiques à appliquer sont celles des exemples du dépôt : nommage, structure du projet, responsabilité unique (SRP), portée des variables, logs, `try/catch`, et `async/await` avec `Promise.all`.

## Où trouver votre code

1. Ouvrez l'onglet **Pull requests**.
2. Vous verrez une pull request nommée `fix: [your name]'s fox for flight-reservation exercise`.
3. Cliquez sur votre pull request.
4. Cliquez sur l'onglet **Files changed**.

Vous voyez le nouveau code qui doit être ajouté à la branche `main`. Corrigez-le avant le merge, selon les bonnes pratiques et les conventions.

## Laisser vos commentaires

Vous avez trois façons de commenter le code.

### Commenter une ligne

1. Cliquez sur le **+** au début de la ligne.
2. Écrivez votre commentaire : ce qui ne va pas, et comment l'écrire correctement.
3. Cliquez sur le bouton vert **Start a review**.

### Commenter plusieurs lignes

1. Cliquez sur le **+** au début de la première ligne.
2. Faites défiler jusqu'à la dernière ligne concernée.
3. Écrivez votre commentaire.
4. Cliquez sur le bouton vert **Start a review**.

### Commentaire global

Pour un commentaire sur l'ensemble du code, par exemple le design ou l'organisation du projet, cliquez sur **Submit review** en haut de la page et écrivez votre commentaire.

## Terminer l'exercice

Quand vous avez fini tous vos commentaires :

1. Cliquez sur le bouton vert **Submit review** en haut de la page.
2. Cliquez sur **Submit review** dans la fenêtre qui s'ouvre.
