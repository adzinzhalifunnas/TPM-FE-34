// var, let, const
// function a(){
//     if(true) {
//         let x = 10
//     }
//     console.log(x)
// }
// a()
// let x = 10
// x = 20
// console.log(x)

// const y = 25;
// console.log(y)

// String, number, boolean,
// var s = "Hello World!";
// var s2 = 'Hello World! ' + s + '\n';
// var s3 = `Hello World! ${s2}\n`

// console.log(s,s2,s3)

// const i = 5;
// const f = 5.9;

// const numberString = i + f + s
// const numberString2 = s + i + f
// console.log(numberString)
// console.log(numberString2)

// let isTrue = true
// isTrue = !isTrue
// console.log(isTrue)

// + * / - Arithmethic
// == >= <= === !=
// let sum = 5 + 10;
// sum += 10

// const a = "2";
// const b = 2;
// const c = 3;
// const d = 10;

// If Else
// if(a === b) console.log("A Equals B")
// else console.log("A is not equal B")

// if(c >= d) console.log("C greater than D")
// else if(c <= d) console.log("C less than D")

// if(a == b){
//     console.log("a equals b")
// }else{
//     console.log("false")
// }

// Switch Case
// const switchVar = 1;
// switch(switchVar){
//     case 1:
//         console.log("Hello!");
//         break;
//     case 2:
//         console.log("Hello World!");
//         break;
//     default:
//         console.log("Value not found!");
//         break;
// }

// Ternary
// console.log((a == b) ? "a equals b" : "a not equals b")

// Looping
// for(let i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// let i = 1;
// while(i <= 100){
//     if(i % 2 != 0){
//         console.log(i)
//     }
//     i++
// }

// let i = 1
// do{
//     if(i % 2 != 0){
//         console.log(i)
//     }
//     i++
// }while(i <= 100)

// console.log(sumTwoNumber(10,22))
// console.log(multiplyTwoNumber(2,5)) Reference Error

// function sumTwoNumber(x, y){
//     return x + y
// }

// const multiplyTwoNumber = function(x, y){
//     return x * y
// }

// console.log(sumTwoNumber(3,8))
// console.log(multiplyTwoNumber(2,5))

const navbar = document.getElementById("navbar");
let prevYpos = 0;
window.onscroll = function(){
    const currentYpos = window.scrollY;
    (currentYpos > prevYpos) ? navbar.style.top = navbar.offsetHeight * -1 + "px" : navbar.style.top = "0px";
    prevYpos = currentYpos;
}

const hamburgerButton = document.getElementById('hamburger-btn');
const closeButton = document.getElementById('close-btn');

hamburgerButton.addEventListener('click',toggleNav);
closeButton.addEventListener('click',toggleNav)

function toggleNav(){
    document.getElementsByClassName('nav-menu')[0].classList.toggle('active');
}

const rules = {
    firstName:{
        required: true
    },
    lastName:{
        required: true
    },
    email:{
        required: true,
        email: true
    },
    phoneNumber:{
        required: true,
        number: true,
        minlength: 10,
        maxlength: 13
    },
    gender:{
        required: true
    },
    message:{
        required: true,
        minlength: 5,
        maxlength: 255
    }
}

const messages = {
    firstName:{
        required: "First Name harus diisi"
    },
    lastName:{
        required: "Last Name harus diisi"
    },
    email:{
        required: "Email harus diisi",
        email: "Email tidak valid"
    },
    phoneNumber:{
        required: "Phone Number harus diisi",
        number: "Phone Number harus berupa angka",
        minlength: "Phone Number minimal 10 digit",
        maxlength: "Phone Number maksimal 13 digit"
    },
    gender:{
        required: "Pilih satu gender"
    },
    message:{
        required: "Message harus diisi",
        minlength: "Message minimal 5 karakter",
        maxlength: "Message maksimal berupa 255 karakter"
    }
}

$(document).ready(function(){
    $('#form').validate({
        rules: rules,
        messages: messages
    })
})