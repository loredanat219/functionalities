document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page reload
    
    // Retrieve form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let paragraf = name + "<br>" + email + "<br>" + message;
    document.getElementById("demo").innerHTML = paragraf;

    
    // Display form data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    // You can perform further actions with the form data, such as sending it to a server
});

