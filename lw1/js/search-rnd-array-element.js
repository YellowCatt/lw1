var array = [],
  poisk = "",
  isFound = false,
  i, fullmass = "",
  N = 10,
  inputError;
 

for (i = 0; i < N; i++) {
  array[i] = Math.floor(Math.random() * (10 - 0 + 1 ) + 0 );
  fullmass = fullmass + array[i] + " ";
}

do {
  poisk = prompt("Введите число: ");
  inputError = false;
  {(poisk !== null)
    if ((poisk == " ") || (isNaN(poisk))){
      alert("Ошибка");
      inputError = true;
    }
  }
}while (inputError == true);

if (poisk !== null) {
  for (i = 0; i < N; i++) {
    if (array[i] == poisk) {
      isFound = true;
    }
  }
  alert(fullmass);

  if (!isFound) {
    alert("Элемент " + poisk + " не найден");
  } else {
    alert("Элемент " + poisk + " найден");
  }
}
