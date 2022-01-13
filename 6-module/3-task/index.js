import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();

    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let btnLeft = this.elem.querySelector('.carousel__arrow_left');
    btnLeft.style.display = 'none';
        
    btnRight.addEventListener('click', this.onClickRight);
    btnLeft.addEventListener('click', this.onClickLeft);
    //console.log(slides[0]);

  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('Carousel');
    this.elem.insertAdjacentHTML("afterBegin", `
        <!--Кнопки переключения-->

        <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      `);

    
    this.slides.forEach(el => {
      
      this.elem.insertAdjacentHTML("afterBegin", `
        
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
    //console.log('click');
    let customEvent = new CustomEvent('product-add', { bubbles: true, detail: this.slides.id });
    this.elem.dispatchEvent(customEvent);
    let coordinates = 0;
    let banner = this.elem.querySelector('.carousel__img');
    let bannerWidth = banner.offsetWidth;
    console.log(bannerWidth);
    console.log(event);
    
    switch (coordinates) {
      case coordinates = 0:
        banner.style.transform = `translateX(${-bannerWidth}px)`;
        coordinates = -bannerWidth;
        btnRight.style.display = '';
        btnLeft.style.display = '';
        break;

      case coordinates = -bannerWidth:
        banner.style.transform = `translateX(${-bannerWidth * 2}px)`;
        coordinates = -bannerWidth * 2;
        btnRight.style.display = '';
        btnLeft.style.display = '';
        break;

      case coordinates = -bannerWidth * 2:
        banner.style.transform = `translateX(${-bannerWidth * 3}px)`;
        coordinates = -bannerWidth * 3;
        btnRight.style.display = 'none';
        btnLeft.style.display = '';
        console.log(banner.style.transform, coordinates);
        break;
      default:
        console.log( "Нет таких значений" );
    }
    
  }

  onClickLeft = (event) => {
    console.log('click');
    let customEvent = new CustomEvent('product-add', { bubbles: true, detail: this.slides.id });
    this.elem.dispatchEvent(customEvent);
    let coordinates = 0;
    let banner = this.elem.querySelector('.carousel__img');
    let bannerWidth = banner.offsetWidth;
    
        
    switch (coordinates) {
      case coordinates = -bannerWidth * 3:
        banner.style.transform = `translateX(${-bannerWidth * 2}px)`;
        coordinates = -bannerWidth * 2;
        btnLeft.style.display = '';
        btnRight.style.display = '';
        break;

      case coordinates = -bannerWidth * 2:
        banner.style.transform = `translateX(${-bannerWidth}px)`;
        coordinates = -bannerWidth;
        btnLeft.style.display = '';
        btnRight.style.display = '';
        break;

      case coordinates = -bannerWidth:
        banner.style.transform = `translateX(${0}px)`;
        coordinates = 0;
        btnLeft.style.display = 'none';
        btnRight.style.display = '';
        break;

      default:
        console.log( "Нет таких значений" );
    }
    
  }

}
