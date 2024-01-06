const TEMA_USUARIO = document.getElementById('theme')
const DOCUMENTO_THEME = document.getElementById('body')

//localStorage.clear()
mantenerTemaUsuario()
function changeTheme (){
    const estiloActual = DOCUMENTO_THEME.classList[0]
    const temaElegidoUsuario = TEMA_USUARIO.value

    DOCUMENTO_THEME.classList.replace(estiloActual, `${temaElegidoUsuario}--theme`);
    localStorage.setItem("userTheme", temaElegidoUsuario)
    //localStorage.clear()
    //console.log(localStorage.length)
}

function mantenerTemaUsuario (){
    const estiloDocumentoOriginal = DOCUMENTO_THEME.classList[0]
    const estiloLocalEstorage = localStorage.getItem("userTheme")

    console.log(estiloLocalEstorage ,estiloDocumentoOriginal)
    if (Boolean(estiloLocalEstorage)){ // EL null es un booleano
        console.log("hola mundo")
        console.log(Boolean(estiloLocalEstorage), estiloLocalEstorage)
        DOCUMENTO_THEME.classList.replace(estiloDocumentoOriginal, `${estiloLocalEstorage}--theme`);
        return
    }
    else {
        return
    }
    

    
}

TEMA_USUARIO.addEventListener("change",changeTheme)


