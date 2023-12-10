function toggleMode() {
  
  //ALTERAÇÃO DE CLASSE
    const html= document.documentElement
    html.classList.toggle('light')

  //PEGAR A TAG IMAGEM
    const img = document.querySelector("#profile img");

    // SUBS CONFORME A CLASSE

    if(html.classList.contains('light')){
      img.setAttribute('src', './assets/Perfil.jpg')
       img.setAttribute("alt", "Foto de Luiz Henrique ")
    }
    else{
      img.setAttribute("src", "./assets/TestePf.jpg")
      img.setAttribute('alt', "Foto de Luiz Henrique")
    }



}
