# M413 - TD1 : Réponses aux Questions

## Exercice 1 : Commençons avec l'objet document.

### Quel sera l'évènement qui déclenchera l'appelle de votre fonction ?

Ce sera le chargement de la page.

### Quel méthode avez-vous utilisée pour récupérer l'objet représentant votre balise \<h1\>

J'ai utilisé la méthode getElementById

### Quelle propriété de l'objet représentant votre balise \<h1\> avez-vous utilisée pour récupérer le texte de celui-ci ?

La propriété "textContent"

### Quelle(s) méthode(s) avez-vous utilisée pour récypérer l'objet représentant la première balise \<h2\> ?

J'ai utilisé la méthode querySelectorAll pour stocker toutes les balises h2 dans la variable h2s et ai choisi le premier élément en faisant h2s[0]

### Comment faire pour connaitre le nombre de balise \<h2\> du document ?

Il faut utiliser la propriété .length de l'objet obtenu grâce à un querySelectorAll()

### Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?

J'ai utilisé la méthode querySelectorAll() en précisant la classe avec '.firstOrLast'.

### Comment avez-vous déterminé si un nombre est pair ?

En regardant si le nombre d'élément obtenu avec la méthode querySelectorAll('firstOrLast') modulo 2 est congrue à zéro.

## 6.2 Les propriétés innerHTML, innerText et textContent

### Quelles différences existe-t-il entre les 3 propriétés ?

- innerHTML permet de récupérer le contenu HTML d'un élément, balises inclues

- innerText permet de récupérer le contenu texte d'un élément.

- textContent renvoie tout le contenu texte d'un élément, balise interne incluses.

## 6.3 La propriété document.lastModified

### Comment modifier votre code pour qu'il permette de sélectionner le 1er auteur de la liste ?

document.querySelectorAll('meta[name]')[0].getAttribute("content");

### Même question avec le dernier auteur de la liste

Il faura changer le 0 par la propriété length de la liste - 1

# Exercice 2 : L'objet Date

## 7.1 setInteral() et setTimeout()

### Laquelle des deux méthodes de l'objet window avez-vous utilisez ? Pourquoi ?

J'ai utiliser la méthode setInterval car elle permet d'appeller plusieurs fois une fonction, contrairement à setTimeout qui ne l'appelle qu'une fois.

# Exercice 3 : HTML, CSS et JavaScript

## 8.1 Champ Texte et Couleur d'arrière-plan

### Quel évènement avez-vous utilisé ?

J'ai utilisé l'évènement "keydown"

### Comment avez-vous fait changer la couleur du champ texte ? 

En changeant l'attribut "style" de la balise.