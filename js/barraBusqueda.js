const BARRA_BUSQUEDA = document.getElementById('barraBusqueda');
console.log("hey bay")
projects = 
  [ 
    {
      nombre : "macondo",
      image : "./media/macondo.webp",
      url : "http://"
    },
    {
      nombre : "harry potter",
      image : "./media/harryPotter.png"
    }
  ];

function buscar(){
  search = BARRA_BUSQUEDA .value;
  let filter = projects.filter(function(project){
    return project.nombre ==  search
  })
  response = document.getElementById('response');
  filter.forEach(function(element){
    p = document.createElement('p');
    p.innerText = element.nombre
    response.appendChild(p);
  });
}

BARRA_BUSQUEDA.addEventListener('input', buscar)