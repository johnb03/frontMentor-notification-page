/* <a href="http://" class="chess">Chess Club</a> */

const notificationMessage = document.getElementById("notification-mesagge");
let link;

link = `<a href="http://" class="chess">Chess Club</a>` ;

//creacion del div
function crearDiv(user) {
  let div = document.createElement("div");
  div.classList.add("userDiv");
  div.innerHTML = user.info;
  notificationMessage.appendChild(div);
}



//usuarios unread
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

//usuarios read
class usuariosRe {
  constructor(avatar, nombre, alert, date, imageSend) {
    this.avatar = avatar;
    this.nombre = nombre;
    this.alert = alert;
    this.date = date;
    this.imageSend = imageSend;
    this.info = `<div id="user" class=" rounded-md  flex  p-3  gap-3  text-xs 
    sm:text-xl  hover:cursor-pointer ">
<picture  class=" w-12">
<img  src=${avatar} alt=${nombre}>
</picture>

<div id="user__info" class=" w-[10rem] sm:w-full">
<h3 id="name" class=""><strong>${nombre}</strong>
   <span id="alert" class="hover:text-primaryBlue font-mendium">${alert} </span></h3>
<p id="date"> ${date}</p>
</div>
<picture class="w-12 sm:w-20"><img src=${imageSend} alt=""></picture> 
</div>`;
  }
  verInfoRe() {
    crearDiv(this);
  }
}
//usuarios sin imagen enviada
class usuariosRe2 {
  constructor(avatar, nombre, alert, date) {
    this.avatar = avatar;
    this.nombre = nombre;
    this.alert = alert;
    this.date = date;
    this.info = `<div id="user" class=" rounded-md  flex  p-3  gap-3  text-xs 
    sm:text-xl  hover:cursor-pointer ">
<picture  class=" w-12">
<img  src=${avatar} alt=${nombre}>
</picture>
<div id="user__info" class=" w-[12rem] sm:w-full">
<h3 id="name" class=""><strong>${nombre}</strong>
   <p id="alert" class="hover:text-primaryBlue font-mendium">${alert} </p></h3>
<p id="date"> ${date}</p>`;
  }
  verInfoRe2() {
    crearDiv(this);
  }
}

//usuarios texto add
class usuariosText {
  constructor(avatar, nombre, alert, date, textSend) {
    this.avatar = avatar;
    this.nombre = nombre;
    this.alert = alert;
    this.date = date;
    this.textSend = textSend;
    this.info = `<div id="user" class=" rounded-md  flex  p-3  gap-3  text-xs 
    sm:text-xl  hover:cursor-pointer ">
<picture  class=" w-12">
<img  src=${avatar} alt=${nombre}>
</picture>

<div id="user__info" class=" w-[10rem] sm:w-full">
<h3 id="name" class=""><strong>${nombre}</strong>
   <span id="alert" class="hover:text-primaryBlue font-mendium">${alert} </span></h3>
<p id="date"> ${date}</p>
<p class=" sm:text-[1.3rem] w-[14rem] sm:w-[40.625rem] sm:h-24 p-1 h-20  text-wrapp-2  border-solid border-2 border-x-Grayish_blue   mt-1 border-y-Grayish_blue hover:bg-Light_grayish_blue_2 hover:border-none hover:cursor-pointer">${textSend}</p>
</div>
</div>`
  }
  verInfoText() {
    crearDiv(this);
  }
}



//informacion de usuarios
let mark = new usuariosUn(
  "/assets/images/avatar-mark-webber.webp",
  "Mark Webber",
  "reacted to your recent post My first tournament today!",
  "1m ago"
);
let angela = new usuariosUn(
  "/assets/images/avatar-angela-gray.webp",
  "Angela Gray",
  "followed you",
  "5m ago"
);
let jacob = new usuariosUn(
  "/assets/images/avatar-jacob-thompson.webp",
"Jacob Thompson",
`has joined your group ${link} `,
"1 day ago"
)


let kimberly = new usuariosRe(
  "/assets/images/avatar-kimberly-smith.webp",
  "Kimberly Smith",
  "commented on your picture",
  "1 week ago",
  "/assets/images/image-chess.webp"
)

let nathan = new usuariosRe2(
  "/assets/images/avatar-nathan-peterson.webp",
  "Nathan Peterson",
  "reacted to your recent post 5 end-game strategies to increase your win rate",
  " 2 weeks ago"
)

let anna = new usuariosRe2(
  "/assets/images/avatar-anna-kim.webp",
  "Anna Kim", 
  `left the group ${link}`,
  "2 weeks ago"

)


let rizky = new usuariosText(
  "/assets/images/avatar-rizky-hasanuddin.webp",
  "Rizky Hasanuddin",
  "sent you a private message",
  "5 days ago",
  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
)



mark.verInfoUn();
angela.verInfoUn();
jacob.verInfoUn();
rizky.verInfoText();
kimberly.verInfoRe();
nathan.verInfoRe2();
anna.verInfoRe2();



