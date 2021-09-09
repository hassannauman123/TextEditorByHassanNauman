/**
 * Update the text in the "Formatted Text" section as a user types in the textarea
 * Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * Add an .underline class to "Formatted Text" when Underline button is clicked
 * Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */


function updateText(){
  // CODE GOES HERE
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}
 
/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function inside HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  elem.classList.toggle('active') //Activates the button
  document.getElementById("text-output").classList.toggle('bold')
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active')
  document.getElementById('text-output').classList.toggle('italic')
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE
    
    // document.getElementById('text-output').classList.toggle('underline')
    
    if(elem.classList.toggle("active"))
    document.getElementById('text-output').classList.add('underline')
    else
    document.getElementById('text-output').classList.remove('underline')
}

function changeFont(elem){
  elem.classList.toggle("active")
  document.getElementById('text-output').classList.toggle('font')
}


/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE

    let buttonsList = document.getElementsByClassName('align')
    document.getElementById("text-output").style.textAlign = alignType
      for(let i=0; i<buttonsList.length; i++){
       buttonsList[i].classList.remove("active") //REMOVE 2 Buttons being pressed at the same time
      }
     elem.classList.add('active')
      }

