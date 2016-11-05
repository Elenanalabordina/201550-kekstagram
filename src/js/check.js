
  var getMessage =function (a,b) {
  if(a===true) {
    return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
  }
  if (a === false) {
    return "Переданное GIF-изображение не анимировано";
  }
  if(typeof a==="number") {
    return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
  }
   if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;
    var shorterLength;
    if(a.length <= b.length) {
      shorterLength = a.length;
   }
   else {
     shorterLength = b.length;
   }
    for (var i=0; i < shorterLength; i++) {
    artifactsSquare += a[i] * b[i];
   }
    return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
 }
 if(Array.isArray(a)) {
  var amountOfRedPoints = 0;
  for(var i = 0; i < a.length; i++){
    amountOfRedPoints += a[i];
   }
    return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
 }
    return "Переданы некорректные данные";
  };
