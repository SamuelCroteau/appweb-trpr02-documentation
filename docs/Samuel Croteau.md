# Revue de code de Marc-Antoine Jobin par Samuel Croteau

## Code Review \#1

### Le travaille fait

Marc-Antoine à généré le backend et il l'a rendu fonctionnel, il a inclus les routes des requêtes présentes dans les exercices. Ces dernières fonctionnent bien même si nous avons pas beaucoup de travaille effectué pour l'instant. Nous avons également fait la page d'acceuil avec le style et un bouton qui, plus tard, nous amènera vers la page de création de vaisseau.

### Le code 

Le code est conforme aux normes vu en classe et respecte les bonnes pratiques.

## Code Review \#2

### Le travaille fait

Marc-Antoine a configuré les routes en respectant la structure présenté dans le cours.
Lui et moi avons apporté quelques modifications au style de la page d'acceuil pour la rendre plus belle. Il a également ajouté un bouton qui nous amène vers la page de création de vaisseau, ce bouton auquel j'ai ajouté une belle petite couleur jaune comme le reste de la page. Il a également fait quelques composants comme les deux suivants:

### Le code

Dans CombatEnemy.vue, 
Marc-Antoine utilise les props pour passer les données entre les composants, ce qui fait du sens. Le code est bien structuré et facile à lire.
Il utilise également des computed pour calculer le pourcentage de vie restant, pour obtenir un resultat éventuellement près du voutre. Le takeDamage est bien fait, mais ne semble pas être utilisé dans le code, pour l'instant. 
CombatPlayer.vue est très similaire ce qui est normal, car il s'agit d'une logique similaire.

## Code Review \#3

### Le travaille fait

- Logique du fetch enemies
- Classe fighter (avec fetch enemies)
- Resolve combat method appelé par handleAttack
- Affichage de GameView, combatEnemy et combatPlayer
- Game actions, game infos
- NavBar (Cela fait longtemps mais j'avais oublié de l'ajouter)
- Un pop-up pour sortir de game (avec commentaire sur l'élégence de la solution)
- Constantes de fighter stats

- test resolve combat
- test scoreboard

### Le code 
Le code est bien structuré et respecte les bonnes pratiques. Il utilise des props pour passer les données entre les composants. Les méthodes sont bien nommées et le code est facile à lire. Les tests sont bien écrits et couvrent ce qui est à tester.
Le modale de confirmation pour quitter le jeu est bien fait, il n'utilise pas celui vu en classe, mais il est tout de même efficace. Les classes ajoutées remplissent leurs roles et le code est bien structuré.

