let HTML_MAIN_DIV = document.getElementById('main');
const BODY_HTML = document.querySelector('body');

function addClassElement (userElement, userClassName){
  userElement.classList.add(...userClassName);
}

function addAtribute (userElement, userAtributes){
 for (const key in userAtributes) {
  userElement.setAttribute(key, userAtributes[key]); 
 } 
}

function createNewElement (userElementName, userAtributes, userParentID, userClassName){
  const parentID = document.querySelector(`#${userParentID}`);
  let newElement = document.createElement(userElementName);
  addClassElement(newElement, userClassName);
  addAtribute (newElement, userAtributes)
  parentID.appendChild(newElement);
}
function makeID (userID) {
  userID = userID.replaceAll(" ", "_");
  return userID
}

function cardFactory (userParentID, userImageURL, userID) {
  userID = makeID (userID)
  
  const cardInfo = 
  [
    {
      elementTag : "div",
      atributes : {
        id : `${userID}-col` 
      },
      parentID : userParentID,
      classList : ["col-md-3", "mb-4"]
    },
    {
      elementTag : "div",
      atributes : {
        id : `${userID}-card` 
      },
      parentID : `${userID}-col`,
      classList : ["card", "h-100"]
    },
    {
      elementTag : "div",
      atributes : {
        id : `${userID}-imgContainer` 
      },
      parentID : `${userID}-card`,
      classList : []
    },
    {
      elementTag : "img",
      atributes : {
        id : `${userID}-img`,
        src : userImageURL,
        alt : `${userID}IMG` 
      },
      parentID : `${userID}-imgContainer`,
      classList : ["card-img-top", "image--order"]
    },
    {
      elementTag : "div",
      atributes : {
        id : `${userID}-body`,
      },
      parentID : `${userID}-card`,
      classList : ["card-body"]
    },
    {
      elementTag : "p",
      atributes : {
        id : `${userID}-price`,
      },
      parentID : `${userID}-body`,
      classList : ["card-text", "text-success", "fs-4"]
    },
    {
      elementTag : "h2",
      atributes : {
        id : `${userID}-title`,
      },
      parentID : `${userID}-body`,
      classList : ["card-title"]
    },
    {
      elementTag : "p",
      atributes : {
        id : `${userID}-items`,
      },
      parentID : `${userID}-body`,
      classList : ["card-text"]
    },
    {
      elementTag : "div",
      atributes : {
        id : `${userID}-buttonContainer`,
      },
      parentID : `${userID}-card`,
      classList : ["card-body", "d-flex", "justify-content-center", "align-items-end"]
    },
    {
      elementTag : "button",
      atributes : {
        id : `${userID}-button`,
        type : "button"
      },
      parentID : `${userID}-buttonContainer`,
      classList : ["btn", "btn-primary", "buy-btn"]
    },

  ]
  return cardInfo;
}

const hamburguerTags = [
  {
    elementTag : "section",
    atributes : {
      id : "menuSection" 
    },
    parentID : "main",
    classList : []
  },
  {
    elementTag : "div",
    atributes : {
      id : "menuContainer" 
    },
    parentID : "menuSection",
    classList : ["container"]
  },
  {
    elementTag : "div",
    atributes : {
      id : "menuRow-1" 
    },
    parentID : "menuContainer",
    classList : ["row"]
  },
  {
    elementTag : "div",
    atributes : {
      id : "menuRow-2" 
    },
    parentID : "menuContainer",
    classList : ["row"]
  },
]

/*---------- RUN PROGRAM  ----------*/
addClassElement(BODY_HTML_SELECT, ["bg-dark", "text-white"]);

hamburguerTags.forEach(element => {
  let elementValues = Object.values(element);
  console.log(elementValues)
  createNewElement (...elementValues)
});

let hamburgerMenu = [
  {parent : "menuRow-1", url : "./assets/hamburguesa-1.webp", title : "menuItem1"},
  {parent : "menuRow-1", url : "./assets/hamburguesa-2.webp", title : "menuItem2"},
  {parent : "menuRow-1", url : "./assets/hamburguesa-3.webp", title : "menuItem3"},
  {parent : "menuRow-1", url : "./assets/hamburguesa-4.webp", title : "menuItem4"},
  {parent : "menuRow-2", url : "./assets/hamburguesa-5.webp", title : "menuItem5"},
  {parent : "menuRow-2", url : "./assets/hamburguesa-6.webp", title : "menuItem6"},
  {parent : "menuRow-2", url : "./assets/hamburguesa-7.webp", title : "menuItem7"},
  {parent : "menuRow-2", url : "./assets/hamburguesa-8.webp", title : "menuItem8"},
]

hamburgerMenu.forEach(element => {
  let elementValues = Object.values(element) 
  let newCard = cardFactory (...elementValues)
  newCard.forEach(element => {
    let elementValues = Object.values(element);
    createNewElement (...elementValues)
  });
});
