/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows; 
    this.render();
  }

  render() {
    this.elem = document.createElement('table');
    this.elem.classList.add('UserTable'); 

    this.elem.innerHTML = `
      <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    let tbody = this.elem.lastElementChild;
        
    this.rows.forEach(el => {
      let tr = document.createElement('tr');
      
      tr.innerHTML = `
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.salary}</td>
          <td>${el.city}</td>
          <td><button class = "remove-button"> X </button> </td>
        `;
      tr.classList.add('everyRow');  
      tbody.append(tr);
    });

    let rowsInTable = this.elem.querySelectorAll('.everyRow');
    
    for (let rowForDlt of rowsInTable){
      let btnDelete = rowForDlt.querySelector('button');
      
      btnDelete.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target.closest('.everyRow'));
        target.closest('.everyRow').remove();
      });
    }

  } 
}
