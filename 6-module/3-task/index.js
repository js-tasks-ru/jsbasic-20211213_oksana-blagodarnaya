import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.onClickAdd();
    this.btnRight = this.elem.querySelector('.carousel__arrow_right');
    this.btnLeft = this.elem.querySelector('.carousel__arrow_left');
    this.btnLeft.style.display = 'none';
    this.btnRight.addEventListener('click', this.onClickRight);
    this.btnLeft.addEventListener('click', this.onClickLeft);
    this.currentSlide = 0;
    //console.log(this.elem);
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.insertAdjacentHTML('afterBegin', `
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt='icon'>
        </div>
        <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      `);
    // Слайды должны быть тут
    let banner = this.elem.querySelector('.carousel__inner');
    this.slides.forEach(el => {
      
      banner.insertAdjacentHTML('beforeend', `
            <div class="carousel__slide" data-id=${el.id}>
                <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
                <div class="carousel__caption">
                    <span class="carousel__price">€${el.price.toFixed(2)}</span>
                    <div class="carousel__title">${el.name}</div>
                <button type="button" class="carousel__button">
                    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
                </div>
            </div>
      `);
    });
  }
  onClickRight = () => {
    let banner = this.elem.querySelector('.carousel__inner');
    let bannerWidth = banner.offsetWidth;
    this.currentSlide++;
    let translateWidth = this.currentSlide * bannerWidth;
    this.btnLeft.style.display = '';
    if (this.currentSlide === this.slides.length - 1) {
      this.btnRight.style.display = 'none';
    } 
    banner.style.transform = `translateX(${-translateWidth}px)`;
  }
  onClickLeft = () => {
    let banner = this.elem.querySelector('.carousel__inner');
    let bannerWidth = banner.offsetWidth;
    this.currentSlide--;
    let translateWidth =  this.currentSlide * bannerWidth;
    this.btnRight.style.display = '';
    if (this.currentSlide === 0) {
      this.btnLeft.style.display = 'none';
    }
    banner.style.transform = `translateX(${-translateWidth}px)`;
  }

  onClickAdd () {
    let btn = this.elem.querySelectorAll('.carousel__button');
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
          console.log(this.slides[i].id);
          let customEvent = new CustomEvent('product-add', { bubbles: true, detail: this.slides[i].id });
          this.elem.dispatchEvent(customEvent);

        }); 
      }
  }
  
}
