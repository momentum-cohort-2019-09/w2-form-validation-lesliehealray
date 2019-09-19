document.getElementById('parking-form').addEventListener('submit',function(evt){
    evt.preventDefault();   

    let formInputs = document.getElementsByTagName('input');
    let i;
    for (i = 0; i < htmlTags.length; i++) {
        if (formInputs[i].value === ""){
        formInputs[i].insertAdjacentHTML('afterend', '<span class="error">Required Field</span>')
        }
    }
})


// added event listener to the form which listens for a submit at which time a function occurs
// let i holds the values as you loop through 
//formInput is a collection of input elements and we check the value of each item in the collection in the for loop
//we have to iterate through the collection and access them by their index. 
//https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp


