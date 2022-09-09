const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("pass-el")
let pass2 = document.getElementById("pass2-el")
const lengthPass =  document.getElementById("length-el")
const numbersEl = document.getElementById("digits-el")
const noNumbers = characters.filter(x => isNaN(x))


document.getElementById("btn").addEventListener("click", () => {
    let randomPass1 = ''
    let randomPass2 = ''
    if(numbersEl.checked){
        for (let i=0; i < lengthPass.value; i++){
            randomPass1 += noNumbers[Math.floor(Math.random() * noNumbers.length)]
        }
        for (let i=0; i < lengthPass.value; i++){
            randomPass2 += noNumbers[Math.floor(Math.random() * noNumbers.length)]
        }
        pass1.textContent = randomPass1
        pass2.textContent = randomPass2
    }
    else if(lengthPass){
        for (let i=0; i < lengthPass.value; i++){
            randomPass1 += characters[Math.floor(Math.random() * characters.length)]
        }
        for (let i=0; i < lengthPass.value; i++){
            randomPass2 += characters[Math.floor(Math.random() * characters.length)]
        }
        pass1.textContent = randomPass1
        pass2.textContent = randomPass2
    }
    else{
        window.alert("Please specify the length of the password")
    }
    
}) 






