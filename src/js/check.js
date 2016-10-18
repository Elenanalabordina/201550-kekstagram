
  var getMessage =function (a,b) {
  if(a===true) {
    return "Переданное GIF-изображение анимировано и содержит"+ b +"кадров";
  }
   {
    return "Переданное GIF-изображение не анимировано";
  }
  if(typeof a==="number") {
    return "Переданное SVG-изображение содержит" + a + "объектов и" + b * 4 + "атрибутов";
  }
  if(Array.isArray(a)) {
   var amountOfRedPoints = 0;
   for(var i = 0; i < a.length; i++){
     amountOfRedPoints += a[i];
   }
     return "Количество красных точек во всех строчках изображения:" + amountOfRedPoints;
   }

   if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0
    var sumA = 0;
    var sumB = 0;
    for (var i=0; i<a.length; i++) {
      sumA += a[i];
      sumB += b[i]
    artifactsSquare += sumA  * sumB;
   }
   return "Общая площадь артефактов сжатия:"+ artifactsSquare +"пикселей";
 }
 {
    return "Переданы некорректные данные";
  }
