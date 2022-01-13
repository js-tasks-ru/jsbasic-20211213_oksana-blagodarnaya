import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();

    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let btnLeft = this.elem.querySelector('.carousel__arrow_left');

    btnRight.addEventListener('click', this.onClickRight);
    btnLeft.addEventListener('click', this.onClickLeft);
    console.log(this.elem);
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('Carousel'); 
    
    this.slides.forEach(el => {
      
      this.elem.insertAdjacentHTML("afterBegin", `
        <!--Кнопки переключения-->

        <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
            <!--Верстка 1-ого слайда-->

            <div class="carousel__slide" data-id="penang-shrimp">
                <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
                <div class="carousel__caption">
                    <span class="carousel__price">€${el.price.toFixed(2)}</span>
                    <div class="carousel__title">${el.name}</div>
                <button type="button" class="carousel__button">
                    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
                </div>
            </div>
        </div>
      `);
    });
  }
  
  onClickRight = (event) => {
    console.log('click');
    //let customEvent = new CustomEvent('product-add', { bubbles: true, detail: this.slides.id });
    //this.elem.dispatchEvent(customEvent);
    
  }

  onClickLeft = (event) => {
    console.log('click');
    
    
  }

}
