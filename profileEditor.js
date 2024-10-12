document.addEventListener("DOMContentLoaded", function () {

    let isEditing = false;
    let userName = {
        firstname: "Jane",
        lastname: "Jacobs"
    }

    function handleSubmit(e) {
        e.preventDefault();
        isEditing = !isEditing;
        updateDOM();
    };

    function handleNameChanges(e) {
        // const nextUserName = {...userName,
        //     [e.target.name] : e.target.value
        // };
        // userName.firstname = nextUserName.firstname;
        // userName.lastname = nextUserName.lastname;

        userName[e.target.name] = e.target.value;

        updateDOM();
        console.log(userName)
    }

    
    function hide(elm) {
        elm.style.display = "none";
    };
    function show(elm) {
        elm.style.display = "";
    };

    function updateDOM() {
        if(isEditing) {
            submitBtn.textContent = "Save Profile";
            hide(firstName);
            hide(lastName);

            textInput.forEach((inputEl, ke) =>{
                show(inputEl);
            });
        } else {
            submitBtn.textContent = "Edit Profile";
            textInput.forEach((inputEl, ke) =>{
                    hide(inputEl)
            });

            show(firstName);
            show(lastName);

            firstName.textContent = `${userName.firstname}`;
            lastName.textContent = `${userName.lastname}`;
            nameTxt.textContent = `${userName.firstname} ${userName.lastname}`
        
            
        }
    };


    console.log(userName)
    const form  = document.getElementById("form");
    const firstNameLabel = document.getElementById("fnameLabel");
    const laststNameLabel = document.getElementById("lnameLabel");
    const submitBtn = document.getElementById("submitBtn");
    const firstName = document.getElementById("fname");
    const lastName  = document.getElementById("lname");
    const nameTxt = document.getElementById("nameText");
    const textInput = document.querySelectorAll(".nameInputs");
    textInput.forEach((inputEl) => {
        
        switch(inputEl.name) {
            case "firstname":
                inputEl.value = userName.firstname;
                
                break;
            case "lastname": 
                inputEl.value = userName.lastname;
                break;
        }
        inputEl.onchange = handleNameChanges
    });
    textInput.onchange = handleNameChanges;

    form.onsubmit = handleSubmit;

    
    
    updateDOM();


});

