function sendMail(token) {
    const params = {
        name: document.getElementById("con_name").value,
        email: document.getElementById("con_email").value,
        phone: document.getElementById("con_phone").value,
        message: document.getElementById("con_message").value,
    };
    if (params.name.length > 0 && params.email.length > 0 && params.phone.length > 0 && params.message.length > 0) {
        // valid form
        const serviceID = "service_9u06m4r";
        const templateID = "template_qc59slc";
        emailjs.send(serviceID, templateID, params)
            .then(() => {
                document.getElementById("con_name").value = "";
                document.getElementById("con_email").value = "";
                document.getElementById("con_phone").value = "";
                document.getElementById("con_message").value = "";

                setTimeout(function() {
                    const successDiv = document.getElementById("showContactSuccess");
                    successDiv.style.display ="block";
                }, 3000)
            })
            .catch(err => console.log(err));
    }
}



//Cursor

const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
    updatePosition();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
