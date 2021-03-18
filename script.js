const modal = document.querySelector('#my-modal');
const modalButton = document.querySelector('#modal-button');
const closeButton = document.querySelector('.close');
modalButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);
function openModal(){
     modal.style.display = 'block';
}
function closeModal(){
     modal.style.display = 'none';
}
function outsideClick(event){
     if(event.target == modal){
          modal.style.display = 'none';
     }
}