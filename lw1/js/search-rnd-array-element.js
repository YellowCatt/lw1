const N = 10;
var array = [],
  searchNumber, 
  IsFound = false,
  i,
  fullmass = " ";

for (i = 0; i < N; i++) {
  array[i] = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  fullmass = fullmass + array[i] + " ";
}

do {
  searchNumber = prompt("search namber: ");
  if ((searchNumber == "") || (isNaN(searchNumber)) || searchNumber <= 0) {
    alert("Ошибка ввода");
  }
} while ((searchNumber == "") || (isNaN(searchNumber)) || searchNumber <= 0);

for (i = 0; i < N; i++) {
  if (array[i] == searchNumber) {
    IsFound = true;
    break;
  }
}

alert(fullmass);

if (!IsFound) {
  alert("Element " + searchNumber + " not found");
} else {
  alert("Element " + searchNumber + " is found!");
}
