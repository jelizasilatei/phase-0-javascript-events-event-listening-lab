function addingEventListener() {
    let input = document.querySelector('input#button');

    function clicked(){
        console.log("I was clicked!");
    }

    input.addEventListener('click', clicked)
}
 addingEventListener();

