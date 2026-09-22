function search() {
   const towns = Array.from(document.getElementsByTagName('li'));
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
    
      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   result.textContent = `${matches} matches found`;

}