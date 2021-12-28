function highlight(table) {
  

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let tdFirst = row.firstElementChild;
    let tdLast = row.lastElementChild;
    
    if (tdLast.dataset.available === undefined) {
      row.hidden = true;
    } else {
      
        if (tdLast.getAttribute('data-available') === 'true') {
          row.classList.add('available'); 
        } else {
          row.classList.add('unavailable'); 
        }
    }

   if (tdLast.previousElementSibling.textContent === "m") {
      row.classList.add('male');
    } 
    if (tdLast.previousElementSibling.textContent === "f") {
      row.classList.add('female');
    }
    
    if (tdFirst.nextElementSibling.textContent < 18) {
      row.style = "text-decoration: line-through";
    }
    
  }

}
