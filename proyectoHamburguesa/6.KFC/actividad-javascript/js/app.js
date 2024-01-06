function changetheme() {
    const themeValue = document.getElementById('theme2').value;
    const theme = document.getElementById('theme')

    if (themeValue === 'dr') {
        theme.classList.remove('theme-light');
        theme.classList.add('theme-dark');
    }else{
        theme.classList.remove('theme-dark');
        theme.classList.add('theme-light');        
    }
}

function changelanguage() {
    const lenguageValue = document.getElementById('lenguaje').value;
    const language = document.getElementById('theme')

    if (lenguageValue === 'en') {
        location.href='En/index.html';
    }else{
        location.href='../index.html';
    
    }
}






















