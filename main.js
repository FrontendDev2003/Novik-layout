document.addEventListener("DOMContentLoaded", function(event) {

  const navBtn = document.querySelector('.nav-btn');
  const navigation = document.querySelector('.nav');

  navBtn.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
    if (navigation.classList.contains('nav-open')) {
      navBtn.src = 'img/menu/gray cross.png';
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:0em;");
      document.getElementsByClassName('nav-btn')[0].style.width = "23px";
      document.getElementsByClassName('nav-btn')[0].style.height = "23px";
      setTimeout(function(){document.getElementsByClassName('novik-languages')[0].style.display = "block"},220)
    } else {
      navBtn.src = 'img/menu/menu-lines.png';
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:0em;");
      document.getElementsByClassName('nav-btn')[0].style.width = "33px";
      document.getElementsByClassName('nav-btn')[0].style.height = "19px";
      document.getElementsByClassName('novik-languages')[0].style.display = "none";
    }
  });
});