let imagens= document.querySelectorAll('.mini_foto');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modalimg');
let btClose = document.querySelector('#botaofechar');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
