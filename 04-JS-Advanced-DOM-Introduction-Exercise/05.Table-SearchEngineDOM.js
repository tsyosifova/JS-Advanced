function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const rows = document.querySelectorAll('tbody tr');
      let searchText = searchField.value;

      if (searchText === '') {
         return;
      }

      searchField.value = '';

      for (let row = 0; row < rows.length; row++) {
         let cols = rows[row].querySelectorAll('td');

         for (let col = 0; col < cols.length; col++) {
            let colData = cols[col].textContent;

            if (colData.includes(searchText)) {

               rows[row].classList.add('select');
               break;
            } else {
               rows[row].classList.remove('select');
            }

         }

      }

   }
}