const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];


/*
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
*/

/*Vypište do stránky všechna čísla.*/
document.body.innerHTML +=`<p>Číselný seznam je: ${numbers}</p>`


/*Vypište do stránky druhé mocniny všech čísel.*/
const druhemocniny = (array) => {
    let drmoc = []
    array.map(num => {
    drmoc.push(num*num)
})
document.body.innerHTML+=`<p>Druhé mocniny všech čísel jsou: ${drmoc}</p>`
}
druhemocniny(numbers)



/* Vypište do stránky pouze záporná čísla. */
const zaporne = (array) => {
    let zapornylist = []
    array.forEach(num => {
        if (num < 0) {
            zapornylist.push(num)
        }
    })
    document.body.innerHTML+=`<p>Záporná jsou to tato čísla: ${zapornylist}</p>`
}
zaporne(numbers)


/*Vypište do stránky absolutní hodnotu všech čísel.*/

const absolutni = (array) => {
    let absolutnilist =[]
    array.forEach(num => {
        if (num < 0) {
            absolutnilist.push(num *-1)
        } else {
            absolutnilist.push(num)
        }
    })
    document.body.innerHTML+=`<p>Absolutní hodnoty čísel jsou: ${absolutnilist}</p>`
}
absolutni(numbers)


/*Vypište do stránky pouze sudá čísla.*/
const suda = (array) => {
    let sudylist =[]
    array.forEach(num => {
        if (num % 2 == 0) {
            sudylist.push(num)
        }
    })
    document.body.innerHTML+=`<p>Seznam sudých čísel z listu je: ${sudylist}</p>`
}
suda(numbers)


/*Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.*/
const absolutnidelenatremi = (array) => {
    let absdeltremi =[]
    array.forEach(num => {
        if (num < 0 && num % 3 == 0) {
            absdeltremi.push(num *-1)
        } else if (num >= 0 && num % 3 == 0) {
            absdeltremi.push(num)
        }
    })
    document.body.innerHTML+=`<p>Absolutní hodnoty čísel dělitelné třemi jsou: ${absdeltremi}</p>`
}
absolutnidelenatremi(numbers)



/* Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5. */

const vzdalenostodpetky = (array) => {
    let seznamek = []
    array.forEach((num) => {
        let numvzdalenost = array.indexOf(5) - array.indexOf(num)
        seznamek.push(`# ${num} je vzdálené od čísla 5 o ${numvzdalenost} pozic`)    
    })
    document.body.innerHTML+=`<p>Seznam vzdáleností každého čísla ze seznamu od čísla 5:</P>`
    document.body.innerHTML+=seznamek
}
vzdalenostodpetky(numbers)



/*Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.*/
const vzdalenostodpetkynadruhou = (array) => {
    let seznamek1 = []
    array.forEach((num,index) => {
        let numvzdalenost1 = Math.pow((array.indexOf(5) - array.indexOf(num)),2)
        seznamek1.push(numvzdalenost1)
    })
    document.body.innerHTML+=`<p>Druhé mocnicny vzdáleností všech čísel od čísla 5 jsou: ${seznamek1}</p>`
}
vzdalenostodpetkynadruhou(numbers)



/*Spočítejte, kolik je v seznamu záporných čísel.*/
let pocet = 0
const pocetzapornych = (array) => {
    let zapornylist = []
    array.forEach(num => {
        if (num < 0) {
            zapornylist.push(num)
            pocet += 1
        }
    })
    document.body.innerHTML+=`<p>Počet všch záporných čísel ze seznamu je ${pocet} a jsou to tato čísla ${zapornylist}</p>`
}
pocetzapornych(numbers)



/*Spočítejte součet všech čísel v poli. */
let sum1 = 0
const soucetvsech = (array) => {
    array.forEach(num => {
      sum1+= num
    })
    document.body.innerHTML+=`<p>Součet všech čísel ze seznamu je ${sum1}</p>`
}
soucetvsech(numbers)



/*Spočítejte průměr všech čísel v poli.*/
let sum2 = 0
const prumer = (array) => {
    array.forEach(num => {
        sum2 += num;
    })
    let lengthy = array.length
    document.body.innerHTML+=`<p>Průměr všch čísel ze seznamu je ${sum2/lengthy}</p>`
}
prumer(numbers)


/*Spočítejte součet všech kladných čísel v poli. */
let sum3 = 0
const soucetkladnych = (array) => {
    array.forEach(num => {
        if (num > 0) {
            sum3+= num
        }
    })
    document.body.innerHTML+=`<p>Součet všch kladných čísel ze seznamu je ${sum3}</p>`
}
soucetkladnych(numbers)

