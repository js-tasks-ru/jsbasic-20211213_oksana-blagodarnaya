import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.divClassModal = document.createElement('div');
    this.divClassModal.classList.add('modal');
    this.divClassModal.innerHTML = `
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    `;

    this.btnClose = this.divClassModal.querySelector('.modal__close');
    this.btnClose.addEventListener('click', this.close);
    this.closeBtnEsc();
    //console.log(document);
  }

  open = () => {
    let body = document.querySelector('body');
    body.append(this.divClassModal);
    body.classList.add('is-modal-open');
    //console.log(body);
  }

  setTitle = (title) => {
    let h3 = this.divClassModal.querySelector('.modal__title');
    h3.innerHTML = title;
    //console.log(h3);
  }

  setBody = (nodeDiv) => {
    let divModalBody = this.divClassModal.querySelector('.modal__body');
    divModalBody.innerHTML= '';
    divModalBody.appendChild(nodeDiv);
    //console.log(divModalBody);
 }

 close = () => {
  let body = document.querySelector('body');
  body.innerHTML = '';
  body.classList.remove('is-modal-open');
 }

 closeBtnEsc = () => {
  let body = document.querySelector('body');
  body.addEventListener('keydown', function(event) {
          
      if (event.code === 'Escape') {
       body.classList.remove('is-modal-open');
       body.innerHTML = '';
      } 
  });
 }

}
