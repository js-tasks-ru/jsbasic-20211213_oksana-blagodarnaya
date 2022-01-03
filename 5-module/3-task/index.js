function initCarousel() {
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  btnLeft.style.display = 'none';

  let banner = document.querySelector('.carousel__inner');
  let bannerWidth = banner.offsetWidth;
  let coordinates = 0;
  
  btnRight.addEventListener('click', ()=>{
    
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
  });

  btnLeft.addEventListener('click', ()=>{
    
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

  });
}
