function showModal(titleHtml,contentHtml,buttons){
  const div = document.createElement('div');
  div.classList.add('modal');
  div.innerHTML = `
      <div class="modal__inner">
            <div class="modal__top">
                <div class="modal__title">${titleHtml}</div>
                <button class="modal__close" type="button">
                    <span class="material-icons">close</span>
                </button>
            </div>
            <div class="modal__content">${contentHtml}</div>
            <div class="modal__bottom"></div>
        </div>
  `;
  for(const button of buttons){
    const element = document.createElement('button');
    element.setAttribute('type','button');
    element.classList.add('modal__button');
    element.textContent = button.label;
    element.addEventListener('click',() => {
      if(button.triggerClose){
        document.body.removeChild(div);
      }
      button.onClick(div);
    });
    div.querySelector('.modal__bottom').appendChild(element);
  }
  div.querySelector('.modal__close').addEventListener('click',() => {
    document.body.removeChild(div);
  });
  document.body.appendChild(div);
}
showModal('Sample Modal Title','<p>I am the Content of this Modal</p>',[
  {
    label: 'Got It',
    onClick: (div) => {
      console.log('The Button was Clicked!');
    },
    triggerClose: false
  },
  {
    label: 'Decline',
    onClick: (div) => {
      console.log('Decline.');
    },
    triggerClose: false
  },
]);