export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider'); 
    this.elem.innerHTML = `
        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">2</span>
        </div>

        <!--Заполненная часть слайдера-->
        <div class="slider__progress" style="width: 50%;"></div>

        <!--Шаги слайдера-->
        <div class="slider__steps">
          
        </div>
    `;

    let divSliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < steps; i++) {
      divSliderSteps.insertAdjacentHTML('beforeend', `<span> </span>`);
    };

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let sliderValue = this.elem.querySelector('.slider__value');
    divSliderSteps.firstElementChild.classList.add('slider__step-active');
    sliderValue.innerHTML = '1';
    thumb.style.left = `25%`;        //  меняем положение ползунка
    progress.style.width = `25%`;    // меняем закрашеную область до ползунка 

    this.elem.addEventListener('click', this.onClick);
    //console.log(this.elem);
  }

  onClick = (event) => {
    
    let divSliderValue = this.elem.querySelector('.slider__value');
    let left = event.clientX - this.elem.getBoundingClientRect().left; // расстояние от начала элемента слайдера до места, на котором находился курсор в момент клика
    let leftRelative = left / this.elem.offsetWidth; //выбрать значение слайдера из дипазона - `0, 1, 2, 3, 4`.
    let segments = this.steps - 1;  // кол-во сегментов
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);  // округлили и получили "сегмент слайдера" на котором кликнули
    let valuePercents = value / segments * 100; // значение в процентах для перемещения ползунка
    divSliderValue.innerHTML = value;   // Записать новое значение внутрь элемента с классом `slider__value`.
    let divSliderSteps = this.elem.querySelector('.slider__steps');
    
    for (let i = 1; i < divSliderSteps.childNodes.length; i++) {
     let el = divSliderSteps.childNodes[i];
     el.classList.remove('slider__step-active');   // удаляем активный класс со спана, так как кликнули уже на другом
    }

    let span = divSliderSteps.childNodes[value+1];    //нашли активный спан
    span.classList.add('slider__step-active');       // присвоили класс активному спану

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    thumb.style.left = `${valuePercents}%`;        //  меняем положение ползунка
    progress.style.width = `${valuePercents}%`;    // меняем закрашеную область до ползунка 

    let customEvent = new CustomEvent('slider-change', {detail: value, bubbles: true })
    this.elem.dispatchEvent(customEvent);
    
  }
}
