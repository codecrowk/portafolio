/*---------- SELECT MENU COMPONENT ----------*/
let HTML_ROOT_DIV = document.getElementById('main');
const BODY_HTML_SELECT = document.querySelector('body');

const HTML_ELEMENTS =
  [
    { element : "section", 
      setAtribute : {
        id : "selection-section",
      },
      parentID : "main",
      classList : ["accesibilidad", "mb-4"]
    },
    { element : "div",
      setAtribute : {
        id : "selection-container",
      },
      parentID : "selection-section",
      classList : ["container"]
    },
    { element : "div",
      setAtribute : {
        id : "selection-row",
      },
      parentID : "selection-container",
      classList : ["row"]
    },
  ]

/*--------------- FUNCTIONS ---------------*/
/*--- Make Elementes ---*/
function addClassElement (userElement, userClassName){
  userElement.classList.add(...userClassName);
}

function addAtribute (userElement ,userAtributeObject){
  for (const key in userAtributeObject) {
    userElement.setAttribute(key, userAtributeObject[key]);
  }
}

function createNewElement (userElementTag, userElementAtributes, userElementParent, userClassName){
  const parentID = document.querySelector(`#${userElementParent}`);
  let newElement = document.createElement(userElementTag);
  addClassElement(newElement, userClassName);
  addAtribute(newElement ,userElementAtributes)
  parentID.appendChild(newElement);
}
/*--- Add Selection ---*/
function createSelecComponent (userSelectName, userParentID){
  const component =
    [
      { element : "div",
        setAtribute : {
          id : `${userSelectName}-col`,
        },
        parentID : userParentID,
        classList : ["col-6"]
      },
      { element : "div",
        setAtribute : {
          id : `${userSelectName}-container`,
        },
        parentID : `${userSelectName}-col`,
        classList : ["d-grid", "col-6", "mx-auto"]
      },
      { element : "label",
        setAtribute : {
          id : `${userSelectName}-label`,
          for : `${userSelectName}`,
        },
        parentID : `${userSelectName}-container`,
        classList : []
      },
      { element : "select",
        setAtribute : {
          id : `${userSelectName}`,
        },
        parentID : `${userSelectName}-container`,
        classList : []
      },
    ]
  
  return component
}

function addNewOption (userSelectID, userOptionValue) {
  const optionAtributes = 
    { element : "option",
      setAtribute : {
        value : userOptionValue,
      },
      parentID : userSelectID,
      classList : []
    }
  
  let elementValues = Object.values(optionAtributes); 
  createNewElement(...elementValues) 
}

/*---------- RUN PROGRAM  ----------*/
addClassElement(BODY_HTML_SELECT, ["bg-dark", "text-white"]);
const selectLanguage = createSelecComponent("language", "selection-row");
const selectTheme = createSelecComponent("theme", "selection-row");

HTML_ELEMENTS.forEach(element => {
  let elementValues = Object.values(element); 
  createNewElement (...elementValues);
});

selectLanguage.forEach(element => {
  let elementValues = Object.values(element); 
  createNewElement (...elementValues);
});

selectTheme.forEach(element => {
  let elementValues = Object.values(element); 
  createNewElement (...elementValues);
});

//----- BUTTONS CREATE
let buttonList = 
  {
    language : ['english', 'spanish'],
    theme : ['ligth', 'dark', 'free']
  }

for (const key in buttonList) {
/*   addNewOption () */
  console.log (key, 'hellow baby')
  buttonList[key].forEach(element => {
    addNewOption (key, element)
  });
} 
/* function createMenuItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us')); */