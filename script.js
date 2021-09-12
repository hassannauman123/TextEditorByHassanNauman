function updateText(){
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}

function makeBold(elem){
  elem.classList.toggle('active') //Activate button
  document.getElementById("text-output").classList.toggle('bold')
}
function makeItalic(elem){
  elem.classList.toggle('active')
  document.getElementById('text-output').classList.toggle('italic')
}

function makeUnderline(elem){    
    if(elem.classList.toggle("active"))
    document.getElementById('text-output').classList.add('underline')
    else
    document.getElementById('text-output').classList.remove('underline')
}

function changeFont(elem){
  elem.classList.toggle("active")
  document.getElementById('text-output').classList.toggle('font')
}


function alignText(elem, alignType){
    let buttonsList = document.getElementsByClassName('align')
    document.getElementById("text-output").style.textAlign = alignType
      for(let i=0; i<buttonsList.length; i++){
       buttonsList[i].classList.remove("active") //REMOVE 2 Buttons being pressed at the same time
      }
     elem.classList.add('active')
      }

