function toggleCode(codeId) {
  const codeBlock = document.getElementById("code" + codeId);
  const button = codeBlock.previousElementSibling;

  if (codeBlock.style.display === "block") {
    codeBlock.style.display = "none";
    button.textContent = "Kodu Göstər";
  } else {
    codeBlock.style.display = "block";
    button.textContent = "Kodu Gizlət";
  }
}

// Bütün metodlara aid suallar

// 1) Bütün dəyişənləri ekrana yazdırın
let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103];
arr.forEach(item => console.log(item));
document.getElementById("result1").textContent = arr.join(", ");

// 2) Bütün sayları topla və ekrana yazdır
let sum = 0;
arr.forEach(item => {
  if (typeof item === "number") {
    sum += item;
  }
});
document.getElementById("result2").textContent = `Bütün rəqəmlərin cəmi: ${sum}`;

// 3) Bütün stringləri tapın, böyük hərfə çevirin və yeni array yaradın
let upperStrings = [];
arr.forEach(item => {
  if (typeof item === "string") {
    upperStrings.push(item.toUpperCase());
  }
});
document.getElementById("result3").textContent = upperStrings.join(", ");

// 4) Bütün müsbət ədədləri tap və ekrana yazdır
let positiveNumbers = [];
arr.forEach(item => {
  if (typeof item === "number" && item > 0) {
    positiveNumbers.push(item);
  }
});
document.getElementById("result4").textContent = positiveNumbers.join(", ");

// 5) Arrayı tərsinə çevirib göndərin (reverse istifadə etmədən)
let reversedArr = [];
arr.forEach(item => {
  reversedArr.unshift(item);
});
document.getElementById("result5").textContent = reversedArr.join(", ");

// 6) Bütün cüt ədədləri ekrana yazdır
let evenNumbers = [];
arr.forEach(item => {
  if (typeof item === "number" && item % 2 === 0) {
    evenNumbers.push(item);
  }
});
document.getElementById("result6").textContent = evenNumbers.join(", ");

// 7) Bütün stringlərin uzunluğunu tapın və "string-length" şəklində ekrana yazdırın
let stringLengths = [];
arr.forEach(item => {
  if (typeof item === "string") {
    stringLengths.push(`${item}-uzunluğu: ${item.length}`);
  }
});
document.getElementById("result7").textContent = stringLengths.join(", ");

// 8) Bütün rəqəmləri iki ilə vur və ekrana yazdır
let doubledNumbers = [];
arr.forEach(item => {
  if (typeof item === "number") {
    doubledNumbers.push(item * 2);
  }
});
document.getElementById("result8").textContent = doubledNumbers.join(", ");

// Map ilə olan suallar

// 1) Hər bir elementi iki misli olan yeni array yaradın
let arr1 = [4, 48, 13, 53, -29, 103];
let doubledArr = arr1.map(item => item * 2);
document.getElementById("result9").textContent = doubledArr.join(", ");

// 2) Hər bir elementi 100 ilə toplayan array yaradın
let addedHundred = arr1.map(item => item + 100);
document.getElementById("result10").textContent = addedHundred.join(", ");

// 3) İlk hərfi saxlayan array yaradın
let arr2 = ["apple", "banana", "orange", "fexreddin", "niyameddin"];
let firstLetters = arr2.map(item => item[0]);
document.getElementById("result11").textContent = firstLetters.join(", ");

// 4) Bütün hərfləri böyük edib uzunluq qaytaran array yaradın
let capitalizedWithLength = arr2.map(item => [item.toUpperCase(), item.length]);
document.getElementById("result12").textContent = JSON.stringify(capitalizedWithLength);

// Filter ilə olan suallar

// 1) Bütün müsbət ədədləri qaytaran array yaradın
let arr6 = [15, 19, 23, 12, 4, 2, 49, 25, 1, -20, 103, -59, 13];
let positiveArr = arr6.filter(item => item > 0);
document.getElementById("result13").textContent = positiveArr.join(", ");

// 2) Bütün mənfi ədədləri qaytaran array yaradın
let negativeArr = arr6.filter(item => item < 0);
document.getElementById("result14").textContent = negativeArr.join(", ");

// Find ilə olan suallar

// 1) "java" deyimini tapın
let arr4 = ["java", "summer", "spring", "adelel", "fero", "imi", "ibo"];
let foundJava = arr4.find(item => item === "java");
document.getElementById("result15").textContent = foundJava;

// 2) Length-i 6-ya bərabər olan dəyişəni tapın
let foundLength6 = arr4.find(item => item.length === 6);
document.getElementById("result16").textContent = foundLength6;

// Some və Every sualları

// 1) Array-də hər hansı bir string var?
let hasString = arr.some(item => typeof item === "string");
document.getElementById("result17").textContent = `Arraydə string var? ${hasString}`;

// 2) Bütün ədədlər müsbətdir?
let allPositive = arr.every(item => typeof item === "number" && item > 0);
document.getElementById("result18").textContent = `Bütün ədədlər müsbətdir? ${allPositive}`;

// 3) Arraydə heç olmasa bir cüt ədəd varmı?
let hasEvenNumber = arr.some(item => typeof item === "number" && item % 2 === 0);
document.getElementById("result19").textContent = `Arraydə cüt ədəd var? ${hasEvenNumber}`;

// 4) Arraydəki bütün stringlər uzunluğu 5-dən böyükdürmü?
let allStringsLongerThan5 = arr.every(item => typeof item === "string" && item.length > 5);
document.getElementById("result20").textContent = `Bütün stringlər uzunluğu 5-dən böyükdür? ${allStringsLongerThan5}`;

// 5) Arraydə heç olmasa bir mənfi ədəd varmı?
let hasNegativeNumber = arr.some(item => typeof item === "number" && item < 0);
document.getElementById("result21").textContent = `Arraydə mənfi ədəd var? ${hasNegativeNumber}`;

// 6) Arraydəki bütün elementlər ya string, ya da rəqəmdir?
let allAreStringOrNumber = arr.every(item => typeof item === "string" || typeof item === "number");
document.getElementById("result22").textContent = `Bütün elementlər ya string, ya da rəqəmdir? ${allAreStringOrNumber}`;

// 7) Arraydə heç olmasa bir ədəd 100-dən böyükdürmü?
let hasNumberGreaterThan100 = arr.some(item => typeof item === "number" && item > 100);
document.getElementById("result23").textContent = `Arraydə 100-dən böyük ədəd var? ${hasNumberGreaterThan100}`;

// 8) Bütün ədədlər təkdirmi?
let allOddNumbers = arr.every(item => typeof item === "number" && item % 2 !== 0);
document.getElementById("result24").textContent = `Bütün ədədlər təkdir? ${allOddNumbers}`;
