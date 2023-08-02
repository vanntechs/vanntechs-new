
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
                    const successDiv = document.querySelectorAll('.contactSuccess');
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


    window.addEventListener('scroll', function () {
        var header = document.querySelector(".header");
        if (window.scrollY > 40) {
            header.classList.add('fixedHeader');
        } else {
            header.classList.remove('fixedHeader');
        }
        Scroll();
    });

// Click event listener for links with class "scrolls"
    document.querySelectorAll('a.scrolls').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetElement = document.querySelector(this.hash);
            var headerHeight = 68;
            if (targetElement) {
                var targetTop = targetElement.offsetTop - headerHeight;
                window.scroll({
                    top: targetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

// Click event listener for links with class "scroll" inside elements with class "horizontalmenu"
    document.querySelectorAll('.horizontalmenu .mainMenu ul li.scroll > a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetElement = document.querySelector(this.hash);
            if (window.innerWidth < 768 && this.parentElement.classList.contains('has-child')) {
                this.parentElement.querySelector('ul').classList.toggle('active');
            }
            var headerHeight = 68;
            if (targetElement) {
                var targetTop = targetElement.offsetTop - headerHeight;
                window.scroll({
                    top: targetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

// Click event listener for links with class "scroll" inside elements with class "verticalMenu"
    document.querySelectorAll('.verticalMenu .mainMenu ul li.scroll > a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetElement = document.querySelector(this.hash);
            var headerHeight = document.querySelector(".header").offsetHeight;

            // Toggle the submenu (if applicable)
            if (this.parentElement.classList.contains('has-child')) {
                this.parentElement.querySelector('ul').classList.toggle('active');
            }

            if (targetElement) {
                var targetTop = targetElement.offsetTop - headerHeight;
                window.scroll({
                    top: targetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

// Function to handle active menu item on scroll
    function Scroll() {
        var contentTop = [];
        var winTop = window.scrollY;
        var rangeTop = 200; // Not currently used in this function
        var rangeBottom = 500; // Not currently used in this function
        var scrollLinks = document.querySelectorAll('.mainMenu .scroll > a');

        scrollLinks.forEach(function (link) {
            var atr = link.getAttribute('href');
            var targetElement = document.querySelector(atr);
            if (targetElement) {
                contentTop.push(targetElement.offsetTop);
            }
        });

        contentTop.forEach(function (top, i) {
            if (winTop > top - rangeTop) {
                document.querySelectorAll('.mainMenu li.scroll').forEach(function (item) {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.mainMenu li.scroll')[i].classList.add('active');
            }
        });
    }

    var tt = true;
    document.querySelector(".menuButtons a").addEventListener('click', function (e) {
        e.preventDefault();
        var menuButtons = document.querySelectorAll(".menuButtons a");
        if (tt) {
            this.classList.add('active');
            this.style.display = 'none';
            document.body.classList.add('menuOpened');
            tt = false;
        } else {
            this.classList.remove('active');
            this.style.display = 'block';
            document.body.classList.remove('menuOpened');
            tt = true;
        }
    });

    document.addEventListener('click', function (event) {
        var menuArea = document.querySelector(".menuButtons");
        // Check if the clicked element is not part of the menu area
        if (!menuArea.contains(event.target)) {
            document.querySelectorAll(".menuButtons a").forEach(function (link) {
                link.classList.remove('active');
                link.style.display = 'block';
            });
            document.body.classList.remove('menuOpened');
            tt = true;
        }
    });

    document.querySelector(".menuButtons2").addEventListener('click', function (e) {
        e.preventDefault();
        var headerHeight = document.querySelector(".header").offsetHeight;
        var windowHeight = window.innerHeight;
        var mainMenuUl = document.querySelector(".horizontalmenu .mainMenu > ul");
        mainMenuUl.style.height = (windowHeight - headerHeight) + 'px';
        mainMenuUl.classList.toggle('active');
        this.classList.toggle('active');
        document.body.classList.toggle('bodyoverflos');
    });

    document.querySelector(".closeBtn").addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll(".menuButtons a").forEach(function (link) {
            link.classList.remove('active');
            link.style.display = 'block';
        });
        document.body.classList.remove('menuOpened');
        tt = true;
    });

