
function onMenuButtonClick(e){
    console.log(e)
    document.getElementById('whoAmI').scrollIntoView();
    window.scrollBy(0,-75)

}

const button1 = document.querySelector('#navbarButton1')

button1.addEventListener('click',onMenuButtonClick);