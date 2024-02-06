//parte de levi































//parte del chino(david)




//parte de luis
const focus1 = document.getElementById("input1");
const focus2 = document.getElementById("input2");
const focus3 = document.getElementById("input3");

const label1 = document.getElementById("FocusText1"); 
const label2 = document.getElementById("FocusText2")

const focusDiv = document.getElementById("FocusDiv");
const focusColor = focusDiv.style.backgroundColor;

focus1.addEventListener("focus", ()=> {
   label1.textContent = "adentro"

  });
  
focus1.addEventListener("blur", ()=> {
    label1.textContent = "afuera"

  });

focus2.addEventListener("focus", ()=> {
    var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    focusDiv.style.backgroundColor = colorAleatorio;
   });
   
focus2.addEventListener("blur", ()=> {
    focusDiv.style.backgroundColor = focusColor;
   });

focus3.addEventListener("focus", ()=> {
    label2.textContent = "vacie el input para continuar";
   });
   
focus3.addEventListener("blur", ()=> {
    if(focus3.value === ""){
        label2.textContent = "";
    }
    else{
    focus3.focus();
    }
   });