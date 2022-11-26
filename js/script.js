//prompt km
let km = prompt ('Quanti km devi percorrere?')

console.log (km)

//prompt età 

let eta = prompt ('inserisci la tua età')

console.log(eta)

//calcolo prezzo

let firstprice = km * '0.21'

console.log(firstprice)

//applico sconti 
if(eta < 18){
    let discountvalue = (firstprice / 100) *20;
    let finalPrice = (firstprice - discountvalue).toFixed(2);
    console.log(finalPrice)
}

else if (eta > 65){
    let discountvalue = (firstprice / 100) *40;
    let finalPrice = (firstprice - discountvalue).toFixed(2);
    console.log(finalPrice)
}

else{
    let finalPrice = firstprice
    console.log(finalPrice)
}


