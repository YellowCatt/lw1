var array = [],
  searchNumber,
  isFound = false,
  i, fullmass = "",
  N = 10,
  inputError;
 
for (i = 0; i < N; i++) {
  array[i] = Math.floor(Math.random() * (N - 0 + 1 ) + 0 );
  fullmass = fullmass + array[i] + " ";
}

do {
  searchNumber = prompt("Введите число:");
  inputError = false;
  if ((searchNumber !== null) && (searchNumber == "") || (isNaN(searchNumber))){ 
      alert("Ошибка");
      inputError = true;
    }
}while (inputError == true);

if (searchNumber !== null) {
  for (i = 0; i < N; i++) {
    if (array[i] == searchNumber) {
      isFound = true;
    }
  }
  alert(fullmass);

  if (!isFound) {
    alert("Элемент " + searchNumber + " не найден");
  } else {
    alert("Элемент " + searchNumber + " найден");
  }
}
