# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/Frontend%20Mentor%20-%20Notifications%20page%20-%20127.0.0.1.png)





### Links

- Solution URL: [Add solution URL here](https://github.com/johnb03/frontMentor-notification-page)
- Live Site URL: [Add live site URL here](https://thunderous-lokum-8b0544.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
-Vanilla Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - CSS framework




### What I learned

Usando los conocimientos que obtube con el DOM desarrolle la aplicacion creando
funciones para crear tarjetas dinamicas, tambien integrarlas en el HTML atravez de JS,
con tailwind pude desarrollar un mejor css y controlar mejor este framwork.

***@apply***
con apply se puede crear componentes de varias clases que se compilaran en el framework muy util y organiza tareas repetitivas.


```css
.notification__mesage {
  @apply flex flex-col
        min-w-[18rem] rounded-lg
       sm:w-full ;
       
}
```

***POO***
con POO de JS creamos la targeta para integrarlas en el DOM 
```js
class usuariosUn {
  constructor(avatar, nombre, alert, date, imageSend) {
    this.avatar = avatar;
    this.nombre = nombre;
    this.alert = alert;
    this.date = date;
    this.imageSend = imageSend;
    this.info = `<div id="user" class=" rounded-md  flex  p-3  gap-3  text-xs 
    sm:text-xl unread hover:cursor-pointer ">
<picture  class=" w-12">
<img class="w-[100%] h-auto" src=${avatar} alt=${nombre}>
</picture>

<div id="user__info" class=" w-[13rem] sm:w-full">
<h3 id="name" class="unread"><strong>${nombre}</strong>
   <span id="alert" class="hover:text-primaryBlue font-mendium">${alert}</span></h3>
<p id="date"> ${date}</p>
 <picture class="w-12 sm:w-20"><img src=${imageSend} alt=""></picture> 
</div>
</div>`;
  }
  verInfoUn() {
    crearDiv(this);
  }
}
```


### Continued development

Seguire probando vanilla JS con el DOM para luego pasar a REACT.

## Author
- Frontend Mentor - [@johnb03](https://www.frontendmentor.io/profile/johnb03)

