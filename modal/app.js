const modalBtn = document.querySelector('.modal-btn');
const overLay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){
    overLay.classList.add('open-modal');
});


closeBtn.addEventListener('click',function(){
    overLay.classList.remove('open-modal');
});

