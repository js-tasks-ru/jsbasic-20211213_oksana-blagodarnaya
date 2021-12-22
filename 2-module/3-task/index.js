let calculator = {
  read(a, b){
      this.a = a;
      this.b = b;
  },

  sum(a, b){
    if(isFinite(this['a']) === true && isFinite(this['b']) === true){
         return this['a'] + this['b'] ;
    }
    
  },

  mul(a, b){
    if(isFinite(this['a']) === true && isFinite(this['b']) === true){
      return this['a'] * this['b'] ;
 }
    
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
