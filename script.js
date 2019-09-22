document.getElementById('parking-form').addEventListener('submit',function(evt){
    evt.preventDefault();   

    let formInputs = document.getElementsByTagName('input');

    function addInvalidClass(field){
        field.closest(".input-field").classList.add("input-invalid")

    }

    function carValid(field, fieldValue){
        let now = new Date();
        if (field.id === "car-year" && fieldValue > 1900 && fieldValue <= now.getFullYear()){
            return true;
        } else {
            let error = "<div>" + field.id + "  is not valid</div>" 
            field.insertAdjacentHTML('afterend', error)
            addInvalidClass(field)
            return false;
        }
    }        

    let i;
    for (i = 0; i < formInputs.length; i++) {
        let field = formInputs[i];
        let fieldValue = field.value

        if (fieldValue === ""){
            let error = "<div>" + field.id + "  is required</div>" 
            field.insertAdjacentHTML('afterend', error)
            addInvalidClass(field)
        }else if (field.id === "car-year") {
            carValid(field, fieldValue)
        }
    }
})



// function checkform()
// {
// 	if (value of first field is or isn't something)
// 	{
// 		// something is wrong
// 		alert('There is a problem with the first field');
// 		return false;
// 	}
// 	else if (value of next field is or isn't something)
// 	{
// 		// something else is wrong
// 		alert('There is a problem with...');
// 		return false;
// 	}
// 	// If the script gets this far through all of your fields
// 	// without problems, it's ok and you can submit the form

// 	return true;
// }




  

// function query (selector) {
//     return document.querySelector(selector)
//   }
  
//   function markValid (field) {
//     const fieldContainer = field.parentNode
//     clearErrorMsgs(fieldContainer)
//     fieldContainer.classList.remove('input-invalid')
//     fieldContainer.classList.add('input-valid')
//   }
  
//   function markInvalid (field, errorMsg) {
//     const fieldContainer = field.parentNode
//     clearErrorMsgs(fieldContainer)
//     fieldContainer.classList.remove('input-valid')
//     fieldContainer.classList.add('input-invalid')
  
//     // errorMsg is a string or undefined, but is being evaluated in a boolean context
//     if (errorMsg) {
//       const errorPara = document.createElement('p')
//       errorPara.classList.add('input-hint', 'text-danger', 'error-message')
//       errorPara.innerText = errorMsg
//       fieldContainer.appendChild(errorPara)
//     }
//   }
  
//   function clearErrorMsgs (fieldContainer) {
//     for (let msg of fieldContainer.querySelectorAll('.error-message')) {
//       msg.remove()
//     }
//   }
  
//   function createTodoHTML (text, dueDate) {
//     return `
//     <div class="row">
//       <div class="col-9">${text}</div>
//       <div class="col-3">${dueDate || ''}</div>
//     </div>
//   `
//   }
  
//   function addTodo (text, dueDate) {
//     let todoListItem = document.createElement('li')
//     let todoHtml = createTodoHTML(text, dueDate)
//     todoListItem.innerHTML = todoHtml
//     query('#todo-list').appendChild(todoListItem)
//   }
  
//   function isDateTodayOrLater (date) {
//     let now = new Date()
//     now.setUTCHours(0, 0, 0, 0)
//     return date >= now
//   }
  
//   function validateTodoText (text) {
//     return text !== ''
//   }
  
//   function validateTodoDate (date) {
//     // How does this work?
//     // If my date is null, this will be false.
//     // If my date is not null, check to see if it's today or later.
//     // If so, return true.
//     // Else return false.
//     return (!date || isDateTodayOrLater(date))
//   }
  
//   function getDateFromText (dateText) {
//     if (dateText === '') {
//       return null
//     } else {
//       return new Date(dateText)
//     }
//   }
  
//   function main () {
//     query('#todo-form').addEventListener('submit', function (event) {
//       event.preventDefault()
  
//       let todoTextField = query('#todo-text')
//       let todoText = todoTextField.value.trim()
//       let textValid = validateTodoText(todoText)
//       if (textValid) {
//         markValid(todoTextField)
//       } else {
//         markInvalid(todoTextField, 'Todo is required.')
//       }
  
//       let dueField = query('#todo-due')
//       let dueDateText = dueField.value
//       let dueDate = getDateFromText(dueDateText)
//       let dueDateValid = validateTodoDate(dueDate)
//       if (dueDateValid) {
//         markValid(dueField)
//       } else {
//         markInvalid(dueField, 'Due date must be today or later.')
//       }
  
//       if (textValid && dueDateValid) {
//         addTodo(todoText, dueDateText)
//       }
//     })
//   }
  
//   main()


















// * Car year must be a number.
// * Car year must be after 1900.
// * Car year 
// * Date parking must be in the future.
// * Number of days must be a number.
// * Number of days must be between 1 and 30.
// * CVV must be a three-digit number.







// added event listener to the form which listens for a submit at which time executes a function 
// let i, tracks the loop you are on. it is set to 0, loop through as long as i is less than the length of formInputs, add 1 to i so that the loop progresses.
//formInput is a collection of input elements and we check the value of each item in the collection
// in the for loop
//we have to iterate through the collection and access them by their index. 
//formInputs[i] similar topython print(list(enumerate(formInputs))))

//https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
//The insertAdjacentHTML() method of the Element interface parses the specified text as 
//HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

//Step 2 <field>.id is required. formInputs[i] will be accessed so set it to the variable field.
//add logic- upon submission, if field.value == "" and error exists, do not add another error msg. 
//if field.value is not "" and error exists, remove error. 




