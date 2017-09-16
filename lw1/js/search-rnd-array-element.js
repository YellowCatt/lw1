const N = 10;
var  array = []
var searchNumber, IsFound, i;
var fullmass = " ";

IsFound = false;
  for (i = 0; i < N; i++) {
    array[i] = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  }
  
  do {
	searchNumber = prompt("search namber: ");
	if ((searchNumber == "") || (isNaN(searchNumber)) || searchNumber<=0) {
	  alert("Ошибка ввода");
	}
  } while((searchNumber == "") || (isNaN(searchNumber)) || searchNumber<=0);
  
  for (i = 0; i < N; i++) {
    if (array[i] == searchNumber) {
      IsFound = true;
      break;
    }
  }
  
  for (i = 0; i < N; i++) {
	fullmass = fullmass + array[i] + " ";
  }
  
  alert(fullmass);
  
  if (!IsFound) {
	alert("Element " + searchNumber + " not found");
  }else {
    alert("Element " + searchNumber + " is found!");
  }
