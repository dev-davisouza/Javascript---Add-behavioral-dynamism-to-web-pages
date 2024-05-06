/* Conxtext: This script is accessing the DOM of index.html 
    and searches for the button and audio IDs in order to automate 
    the process of assigning a function to play the respective audio 
    to each button ID.
*/

// Play the sound
function PlaySound (id) {
    document.querySelector(id).play();
}

// Get the List
const KeyList = document.querySelectorAll('.tecla');


// Get the List length
const KeyListLength = KeyList.length;

// Init the counter
let count = 0;

// Iterate the KeyList using while 
for (count; count < KeyListLength; count++) {

    let classElement = KeyList[count].classList[1]

    // Assigning the function by passing its respective ID.
    KeyList[count].onclick = function() {
        PlaySound(`#som_${classElement}`);
    };
    
    console.log(count)
}