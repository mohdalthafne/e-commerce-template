let menuBar = document.querySelector('.navbar');

let menuBtn = document.querySelector('.fa-ellipsis-vertical').onclick = () =>{
    menuBar.classList.toggle('show');
}
window.onscroll = () =>{
   menuBar.classList.remove('show');
}
