# Revue de code de Samuel Croteau par Marc-Antoine Jobin

## Code Review \#1

Samuel a fait le déploiement du site sur github pages, bien qu'il ait fait toutes les étapes, un bug mystérieux fait que la page ne se publie pas correctement. Il m'a aussi aidé pour la page d'accueil, qui pour l'instant a uniquement un bouton qui n'amène vers rien et de l'écriture, donc pas beaucoup de code à commenter, non plus pour le site de revue de code, car aucun code n'est nécessaire. Il y en aura probablement plus la semaine prochaine. 

## Code Review \#2

Cette semaine, Samuel a fait le code pour le leaderboard et la creation du personnage. Il a utilisé la route nécessaire pour fetch de la base de donnee, pour les joueurs top du leaderboard et pour les types de vaisseau, et tout semble bien clair et indenté. Par contre, le bootstrap n'est clairement pas encore au point, mais cela va venir. Les variables sont aussi bien nommées et le texte qui apparait à l'écran ne contient pas de fautes d'orthographe est est en francais. Il utilise defineComponent, qui me semble intelligent dans cette situation. Pour l'affichage des conbattants, il utilise une boucle foreach, ce qui est la meilleure manière de procéder.

## Code Review \#3

travail fait:
playerstore(pour passage de nom et ship), handlerepair, premiere version du gameview(que jai change apres), tests


Cette semaine, samuel a créé le playerStore, car il ne réussisais pas à les passer comme on voulait au début avec les routes, donc il a utilisé cela à la place, qui marche aussi. Il a aussi codé le handleRepair, qui est logique et qui utilise les bonnes valeurs et constantes, et il a aussi fait la première version du gamview, c'est à dire qu'il a tenté de faire afficher le joueur et lennemi etc sur lecran de jeu, mais je suis repassé dessus par la suite car ils ne s'affichait pas correctement. Ensuite, il a fait des tests pour la creation de personnage pour verifier que cela ne laisse pas passer le joueur si le nom est vide.


