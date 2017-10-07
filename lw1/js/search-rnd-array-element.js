const N = 10;
var array = [], searchNumber, IsFound = false, i, fullmass = " ";

for (i = 0; i < N; i++) {
  array[i] = Math.floor(Math.random() * (15 - 0 + 0)) + 0;
  fullmass = fullmass + array[i] + " ";
}

do{
  searchNumber = prompt("search namber: ");
  if ((searchNumber == "") || (isNaN(searchNumber))) {
    alert("Error");
  }
  if (searchNumber == null) {
    windows.stop;
  }
} while ((searchNumber == "") || (isNaN(searchNumber)) || (searchNumber == " "));

if (searchNumber >= 0) {
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
}
