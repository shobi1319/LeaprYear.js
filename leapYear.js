var year = prompt("Enter year: ");
if (!isNaN(year)) {
    if((year % 4===0 && year % 100 !== 0) || (year%4 === 0 && year % 400 === 0)){
     alert("leap");
   }
}