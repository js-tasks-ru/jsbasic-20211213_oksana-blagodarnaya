import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.btnRight = this.elem.querySelector('.ribbon__arrow_right');
    this.btnLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.btnRight.addEventListener('click', this.onClickBtnRight);
    this.btnLeft.addEventListener('click', this.onClickBtnLeft);
    
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
    //console.log(this.elem); 
  }

  onClickBtnLeft = () => {
    let navBar = this.elem.querySelector('.ribbon__inner');
    navBar.scrollBy(-350, 0);
    navBar.addEventListener('scroll', () => {
      let navBarWidth = navBar.offsetWidth;
      let posScroll = navBar.scrollLeft;

      /*if (posScroll === navBarWidth) {
        this.btnLeft.classList.toggle('ribbon__arrow_visible');
        //this.btnRight.classList.toggle('ribbon__arrow_visible');
      } */
      this.btnRight.classList.toggle('ribbon__arrow_visible');
      //console.log(navBarWidth);
      console.log(posScroll);
      
    });
    
  }


  onClickBtnRight = () =>{
    let navBar = this.elem.querySelector('.ribbon__inner');
    navBar.scrollBy(350, 0);
    /*navBar.addEventListener('scroll', () => {
      let posScroll = navBar.scrollLeft;
      if (posScroll === 0) {
        this.btnLeft.classList.toggle('ribbon__arrow_visible');
        console.log(true);
      }
    });*/
    console.log(navBar.scrollLeft);
  }


}
