function sendMail() {
    var params = {
        name: document.getElementById("con_name").value,
        email: document.getElementById("con_email").value,
        phone: document.getElementById("con_phone").value,
        message: document.getElementById("con_message").value,
    };

    const serviceID = "service_9u06m4r";
    const templateID = "template_qc59slc";
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Your message sent successfully");
        })
        .catch(err => console.log(err));

    // Prevent form submission
    return false;
}