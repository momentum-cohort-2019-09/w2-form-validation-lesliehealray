document.getElementById('parking-form').addEventListener('submit',function(evt){
    evt.preventDefault();   

    let formInputs = document.getElementsByTagName('input');
    let i;
    for (i = 0; i < formInputs.length; i++) {
        let field = formInputs[i];
        console.log(field);
        if (field.value === ""){
            let error = "<div class='input-field'>" + field.id + "  is required</div>" 
            field.insertAdjacentHTML('afterend', error)
        }
    }
})


// added event listener to the form which listens for a submit at which time executes a function 
// let i holds the values as you loop through 
//formInput is a collection of input elements and we check the value of each item in the collection
// in the for loop
//we have to iterate through the collection and access them by their index. 

//https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
//The insertAdjacentHTML() method of the Element interface parses the specified text as 
//HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

//Step 2 <field>.id is required. formInputs[i] will be accessed so set it to the variable field.
//add logic- upon submission, if field.value == "" and error exists, do not add another error msg. 
//if field.value is not "" and error exists, remove error. 




