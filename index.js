/*
Dəyişən tipləri 2 cür olur:
Primitive və Referans

Primitiv tiplər: string "" '' `` (backtick),
boolean (true, false)
undefined null
number 0, -123

Referans tipler (ünvanı istinad edir)
[], {}

const: Sabit demekdir. Yeni eyni adlı  dəyişən yaratmağa və ya qiymətini (dəyər) dəyişməyə icazə vermir.

let: Yeni eyni adlı dəyişən yaratmağa icazə vermir, lakin qiymətini (dəyəri) dəyişməyə icazə verir.

var: 2009-cu il standartı. Yeni eyni adlı dəyişən yaratmağa icazə verir, lakin bu zaman mövcud dəyişəni silir. Həmçinin dəyəri də
dəyişməyə icazə verir.

*/

deyishen = 10
adi = 3

document.querySelector("p").innerText = deyishen - adi


// const telebeAdi = "Meherrem"
// var telebeSoyadi = "Dadashov"

// telebeAdi = "Tahir"
// telebeAdi = "Fidan"

// const telebeAdi = "Meherrem"
// const telebeSoyadi = "Dadashov"
// const telebeTevelludu = 2004
// let isStudent = true

const telebeler = [

{
    ad: "Meherrem",
    soyad: "Dadasov",
    tevellud: 2004,
    isStudent: true,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    ad: "Murad",
    soyad: "Ismayilov",
    tevellud: 2008,
    isStudent: false,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
},

{
    ad: "Gunay",
    soyad: "Mahmudova",
    tevellud: 2000,
    isStudent: true,
    telebeninYashiniHesabla: function() {
        return new Date().getFullYear() - this.tevellud
    }
}
]
// console.log(telebeler[0].ad, telebeler[0].soyad, telebeler[0].tevellud, telebeler[0].telebeninYashiniHesabla())

// const tbodyTeqi = document.querySelector("tbody")

for(let i=0; i< telebeler.length; i++) {
    console.log(telebeler[i].ad, telebeler[i].soyad, telebeler[i].tevellud, telebeler[i].isStudent, telebeler[i].telebeninYashiniHesabla())
}

{/* <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr> */}