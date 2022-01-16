import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.open();
    this.setTitle();
    this.setBody();
  }

  open = () => {
    let body = document.querySelector('body');
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.elem.insertAdjacentHTML('afterBegin', `
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
    `);
    
    body.append(this.elem);
    body.classList.add('.is-modal-open');
    console.log(body); 
  }

  setTitle = (title) => {
    let h3 = this.elem.querySelector('.modal__title');
    h3.innerHTML = title;
    console.log(h3);
  }

  setBody = (node) => {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = node;
    console.log(node);
 }

}
