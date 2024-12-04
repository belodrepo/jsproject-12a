//Javascript gyakorlás
/*Első Javascript programon
Kódolta: Gipsz Jakab */

//alert("Helló ez itt az első Javascript kódom!");

/*let price1 = 1000;
let price2 = 2000;
let total = price1 + price2;
//alert("A végösszeg: " + total);
console.log("A végösszeg: " + total);*/

function formReset() {
    document.getElementById("myForm").reset();
    location.reload();

}

window.onload = function hidePriceTable() {
    document.getElementById('priceTable').style.display = "none";
}

function showPriceTable() {
    document.getElementById('priceTable').style.display = "show";
}


let price = document.getElementById('priceInput'); //Ár input elérése
let amount = document.getElementById('amountInput'); //Mennyiség input elérése
let result = document.querySelector("span.result"); //Eredmény span elem elérése
let priceErr = document.querySelector("span.price-error"); //Ár hiba span elem elérése
let amountErr = document.querySelector("span.amount-error"); //Mennyiség hiba span elem elérése

function Multiply(a, b) {
    return a * b;
}

function calcTotal() { //Fő eljárás
    //debugger;
    //A kiválasztási lista aktuális elemének az elérése
let selectTop = document.querySelectorAll('option:checked')[0].innerHTML;

//A kiválasztási lista aktuális elemének az elérése a megadott ID alapján.
//let selectTop = selTop.options[selTop.selectedIndex].innerHTML;

//Az összesítő táblázat celláinak az elérése
let tdTop = document.querySelector("td.td-top");
let tdPrice = document.querySelector("td.td-price");
let tdAmount = document.querySelector("td.td-amount");
let tdSum = document.querySelector("td.td-sum");
    let total = Multiply(parseFloat(price.value), parseFloat(amount.value)); //Eredmény kiszámítása

    //Validációs logika
    if (price.value == "") { //Ár input mező ellenőrzése
        priceErr.innerHTML = "Nem adtál meg árat!";
        price.style.borderColor = "red";
        amount.style.borderColor = "white";
        amountErr.innerHTML = "";
    }
    else if (price.value < 0) {//Az ár nem lehet nullánál kisebb érték
        priceErr.innerHTML = "Az ár nem lehet negatív szám!";
    }
    else if (amount.value == "") { //Mennyiség input mező ellenőrzése
        amountErr.innerHTML = "Nem adtál meg mennyiséget!";
        amount.style.borderColor = "red";
        price.style.borderColor = "white";
        priceErr.innerHTML = "";
    }
    else if (amount.value <= 0 || amount.value > 10) { //A mennyiségnek 1 és 10 közé kell esnie
        amountErr.innerHTML = "Csak egy és tíz között rendelhető!";
    }
    else { //Ha minden rendben
        priceErr.innerHTML = "";
        amountErr.innerHTML = "";
        amount.style.borderColor = "white";
        price.style.borderColor = "white";
        result.innerHTML = total;

        //Az összesítő táblázat adatainak a betöltése
        tdTop.innerHTML = selectTop;
        tdPrice.innerHTML = price.value;
        tdAmount.innerHTML = amount.value;
        tdSum.innerHTML = total;
    }



}


