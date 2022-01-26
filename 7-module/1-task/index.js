import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.onClickLink();
    this.btnRight = this.elem.querySelector('.ribbon__arrow_right');
    this.btnLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.btnRight.addEventListener('click', this.onClickBtnRight);
    this.btnLeft.addEventListener('click', this.onClickBtnLeft);
    this.navBar = this.elem.querySelector('.ribbon__inner');
    this.navBar.addEventListener('scroll', this.onScroll);
  }

  render(){
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.insertAdjacentHTML('afterBegin', `
              
              <!--Кнопка прокрутки влево-->
              <button class="ribbon__arrow ribbon__arrow_left ">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
              </button>

              <!--Ссылки на категории-->
              <nav class="ribbon__inner">
                <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
                <a href="#" class="ribbon__item" data-id="salads">Salads</a>
                <a href="#" class="ribbon__item" data-id="soups">Soups</a>
                <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
                <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
                <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
                <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
                <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
                <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
              </nav>

              <!--Кнопка прокрутки вправо-->
              <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
              </button>
            
    `);
    
  }

  onClickBtnRight = () => {
    this.navBar.scrollBy(350, 0);
  }

  onClickBtnLeft = () => {
    this.navBar.scrollBy(-350, 0);
  }

  onScroll = () => {
    let scrollWidth = this.navBar.scrollWidth;
    let clientWidth = this.navBar.clientWidth;
    let scrollLeft  = this.navBar.scrollLeft;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    
    if (scrollRight < 1) {
      this.btnRight.classList.remove('ribbon__arrow_visible');
    } else {
      this.btnRight.classList.add('ribbon__arrow_visible');
    }

    if (scrollLeft === 0) {
      this.btnLeft.classList.remove('ribbon__arrow_visible');
    } else {
      this.btnLeft.classList.toggle('ribbon__arrow_visible');
    }
  }

  onClickLink = () => {
    let link = this.elem.querySelectorAll('.ribbon__item');
    
    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener('click', (event) => {
        //console.log(link[i].dataset.id);
        event.preventDefault();
        
        let customEvent = new CustomEvent('ribbon-select', {detail: link[i].dataset.id, bubbles: true })
        this.elem.dispatchEvent(customEvent);
      }); 
    }
  }

}
