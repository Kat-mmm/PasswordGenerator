const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const noSymbolsNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let pass1 = document.getElementById("pass-el")
let pass2 = document.getElementById("pass2-el")
const lengthPass =  document.getElementById("length-el")
const numbersEl = document.getElementById("digits-el")
const symbolsEl = document.getElementById("symbols-el")

const noNumbers = characters.filter(x => isNaN(x))

function GeneratePassword(arr){
    let randomPass1 = ''
    let randomPass2 = ''

    for (let i=0; i < lengthPass.value; i++){
        randomPass1 += arr[Math.floor(Math.random() * arr.length)]
    }
    for (let i=0; i < lengthPass.value; i++){
        randomPass2 += arr[Math.floor(Math.random() * arr.length)]
    }
    pass1.textContent = randomPass1
    pass2.textContent = randomPass2
}

document.getElementById("btn").addEventListener("click", () => {

    if(numbersEl.checked && symbolsEl.checked && lengthPass.value < 21 && lengthPass.value > 7){
        GeneratePassword(noSymbolsNoNumbers)
    }
    else if(numbersEl.checked && lengthPass.value <= 20 && lengthPass.value > 7){
       GeneratePassword(noNumbers)
    }
    else if(symbolsEl.checked && lengthPass.value < 21 && lengthPass.value > 7){
        GeneratePassword(noSymbols)
    }
    else if(lengthPass.value <= 20 && lengthPass.value > 7){
        GeneratePassword(characters)
    }
    else{
        window.alert("Please specify the length of the password between 8 - 20")
    }
    
}) 






