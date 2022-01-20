import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
    
  }

  render() {
    this.elem = createElement('<div class="products-grid"></div>');
    this.elem.innerHTML = `
      <div class="products-grid__inner">
      </div>
    `;
    
    let gridInner = this.elem.querySelector('.products-grid__inner');
    
    this.products.forEach(el => {
      //console.log(el);
      let ProductCard = document.createElement('div');
      ProductCard.classList.add('ProductCard');
      ProductCard.innerHTML = `
          <div class="card__top">
              <img src="/assets/images/products/${el.image}" class="card__image" alt="product">
              <span class="card__price">€${el.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
              <div class="card__title">${el.name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
          </div>
      `;
      gridInner.append(ProductCard);
    });

  }

  updateFilter(filters) {
    let gridInner = this.elem.querySelector('.products-grid__inner');
    this.elem.removeChild(gridInner);
    this.elem.innerHTML = `
      <div class="products-grid__inner">
      </div>
    `;
    //console.log(this.elem);

    this.products.filter(el => {
      let gridInner = this.elem.querySelector('.products-grid__inner');
      //console.log(filters.nuts);
      //console.log(el.nuts);
            
      if (filters.noNuts) { 
        if (el.nuts !== true) {
          //console.log(el);
              let ProductCard = document.createElement('div');
              ProductCard.classList.add('ProductCard');
              ProductCard.innerHTML = `
                  <div class="card__top">
                      <img src="/assets/images/products/${el.image}" class="card__image" alt="product">
                      <span class="card__price">€${el.price.toFixed(2)}</span>
                  </div>
                  <div class="card__body">
                      <div class="card__title">${el.name}</div>
                      <button type="button" class="card__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                  </div>
              `;
              gridInner.append(ProductCard);
        } 
        
      }
      
      if (filters.vegeterianOnly) { 
        if (el.vegeterian === true) {
          //console.log(el);
          let ProductCard = document.createElement('div');
              ProductCard.classList.add('ProductCard');
              ProductCard.innerHTML = `
                  <div class="card__top">
                      <img src="/assets/images/products/${el.image}" class="card__image" alt="product">
                      <span class="card__price">€${el.price.toFixed(2)}</span>
                  </div>
                  <div class="card__body">
                      <div class="card__title">${el.name}</div>
                      <button type="button" class="card__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                  </div>
              `;
              gridInner.append(ProductCard);
        }
      }

      if (filters.maxSpiciness) { 
        if (el.spiciness <= 2) {
          //console.log(el);
          let ProductCard = document.createElement('div');
              ProductCard.classList.add('ProductCard');
              ProductCard.innerHTML = `
                  <div class="card__top">
                      <img src="/assets/images/products/${el.image}" class="card__image" alt="product">
                      <span class="card__price">€${el.price.toFixed(2)}</span>
                  </div>
                  <div class="card__body">
                      <div class="card__title">${el.name}</div>
                      <button type="button" class="card__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                  </div>
              `;
              gridInner.append(ProductCard);
        }
      }

      if (filters.category) { 
        if (el.category === filters.category) {
          //console.log(el);
          let ProductCard = document.createElement('div');
              ProductCard.classList.add('ProductCard');
              ProductCard.innerHTML = `
                  <div class="card__top">
                      <img src="/assets/images/products/${el.image}" class="card__image" alt="product">
                      <span class="card__price">€${el.price.toFixed(2)}</span>
                  </div>
                  <div class="card__body">
                      <div class="card__title">${el.name}</div>
                      <button type="button" class="card__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                  </div>
              `;
              gridInner.append(ProductCard);
            
        }
      }
      //console.log(ProductCard);

    });
   
    //console.log(this.elem);
  } 
}
