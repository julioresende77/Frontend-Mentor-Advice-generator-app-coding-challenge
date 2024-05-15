# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/Advice-generator.gif)
![](./design/desktop-design.png)
![](./design/mobile-design.png)
![](./design/active-states.jpg)


### Links

- Solution URL: [Repositorio GitHub](https://github.com/julioresende77/Frontend-Mentor-Advice-generator-app-coding-challenge)
- Live Site URL: [Link do site](https://julioresende77.github.io/Frontend-Mentor-Advice-generator-app-coding-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Interacting with JavaScript and consuming the Advice Slip JSON API



```html
<picture>
  <source srcset="./src/images/pattern-divider-mobile.svg" media="(max-width: 768px)">
  <img src="src/images/pattern-divider-desktop.svg" alt="Pattern divider">
</picture>

<button id="advice-update">
  <img src="src/images/icon-dice.svg" alt="Dice icon">
</button>
```
```css
@media(min-width: 768px) {
    .advice {
        padding-inline: 50px;
        width: 386px;
    }

    .advice p {
        font-size: 21px;
        padding: 26px;
    }
}

```
```css
Transform: translateY
.advice .advice-update {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: var(--advice-dice-color);
    transform: translateY(50%);
}
```
```js
async function pegarResposta() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        if(!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const data = await resposta.json();

        elementoConselho.innerText = data.slip.advice;
        descricaoConselho.innerText = `ID: ${data.slip.id}`;

        return data.slip.advice;
    }catch (error) {
        console.error('Erro ao obter conselho:', error);
        return 'Não foi possível obter um conselho. Tente novamente mais tarde.';
    }
}

## Author

- GitHub - [Julio Resende](https://github.com/julioresende77)
- Twitter - [@ResendeDev](https://twitter.com/ResendeDev)
- Frontend Mentor - [@julioresende77](https://www.frontendmentor.io/profile/julioresende77)