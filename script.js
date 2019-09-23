document.getElementById('parking-form').addEventListener('submit',function(evt){
    evt.preventDefault();   
    //remove error messages and remove input-invalid class from the parent node. 

    document.querySelectorAll('.error-msg').forEach(function(element){
        element.remove()
        })
    document.querySelectorAll('.input-invalid').forEach(function(element){
        element.classList.remove("input-invalid")
    })

    let formInputs = document.getElementsByTagName('input');
    let now = new Date();
    
    function futureDate(date) {
        let now = new Date()
        now.setUTCHours(0, 0, 0, 0)
        return date >= now
    }

    function addInvalidClass(parent){
        parent.classList.add("input-invalid")
    }

    function addErrorMsg(field){
        let error = "<div class='error-msg'>" + field.id + "  is not valid</div>" 
        field.insertAdjacentHTML('afterend', error)
    }

    function validateCarYear(field, fieldValue){
        let now = new Date();
        if (fieldValue > 1900 && fieldValue <= now.getFullYear()){
            console.log("hi");
        } else { 
            parent = field.closest(".input-field")
            addErrorMsg(field)
            addInvalidClass(parent)
        }
    }        

    function validateStartDate(field, fieldValue){
        if (!futureDate(fieldValue)){
            parent = field.closest(".input-field")
            addErrorMsg(field)
            addInvalidClass(parent)
        }
    }

    function validateDays(field, fieldValue){
        if (isNaN(fieldValue) || (fieldValue <1 || fieldValue > 30)){
            parent = field.closest(".input-field")
            addErrorMsg(field)
            addInvalidClass(parent)
        }
    }

    function validateCVV(field, fieldValue){
        if (isNaN(fieldValue) || (fieldValue < 100 || fieldValue > 999)){
            parent = field.closest(".input-field")
            addErrorMsg(field)
            addInvalidClass(parent)
        }
    }

    function validateCardNumber(field, fieldValue) {
        let isValid = true;
        var regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(fieldValue))
            isValid = false;
        isValid = luhnCheck(fieldValue);
        console.log(isValid);
        if (!isValid){
            parent = field.closest(".input-field")
            addErrorMsg(field)
            addInvalidClass(parent)
        }
    }
    

    function luhnCheck(val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }      


    let i;
    for (i = 0; i < formInputs.length; i++) {
        let field = formInputs[i];
        let fieldValue = field.value
        let parent = field.closest(".input-field")

        if (fieldValue === ""){
                let error = "<div class='error-msg'>" + field.id + "  is required</div>" 
                field.insertAdjacentHTML('afterend', error)
                addInvalidClass(parent)
                
        }else if (field.id === "car-year") {
            validateCarYear(field, fieldValue)
        }else if (field.id === "start-date") {
            validateStartDate(field, fieldValue)
        }else if (field.id === "days") {
            validateDays(field, fieldValue)
        }else if (field.id === "cvv"){
            validateCVV(field, fieldValue)
        }else if (field.id === "credit-card"){
            validateCardNumber(field, fieldValue)
        }
    }
})