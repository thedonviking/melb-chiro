document.querySelector("#form").addEventListener("submit",
    function(event){
        event.preventDefault();
        alert("Thank you for your submission")
    })

var contactform=document.querySelector("#form")
    console.log(contactform.style.display)
contactform.style.display="none"

var contactbtn=document.querySelector("#contactbtn")
    contactbtn.addEventListener("click",
        function(event){
            contactform.style.display="block"
        }
    )