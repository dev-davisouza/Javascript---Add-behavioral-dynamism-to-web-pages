/* Conxtext: This script is accessing the DOM of index.html 
    and searches for the button and audio IDs in order to automate 
    the process of assigning a function to play the respective audio 
    to each button ID.
*/

// Play the sound
function PlaySound (id) {
    const sound = document.querySelector(id);

    // Catch the exception
    try {
        sound.play()
        
    } catch (error) {
        console.log("Pass a valid ID of an audio tag")
        return null
    }
}   

// Get the List
const KeyList = document.querySelectorAll('.tecla');

// Get the List length
const KeyListLength = KeyList.length;

// Init the counter
let count = 0;

// Iterate the KeyList using while 
for (count; count < KeyListLength; count++) {

    let classElement = KeyList[count].classList[1];

    // Assigning the function by passing its respective ID.
    KeyList[count].onclick = function() {
        PlaySound(`#som_${classElement}`);
    };
    
    // Print the current value
    console.log(count);

    // Get the key 
    let key = KeyList[count];

    // Track if the key was pressed
    key.onkeydown = function (event) {

        //console.log(event.code == 'Space')

        // Check the event code are expected;
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }
    }

    // Track if the key was released
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}