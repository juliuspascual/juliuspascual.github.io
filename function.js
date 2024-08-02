//====================Function for Home buttons Section====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.querySelector('nav ul li:nth-child(1) a');
    const aboutButton = document.querySelector('nav ul li:nth-child(2) a');
    const servicesButton = document.querySelector('nav ul li:nth-child(3) a');
    const portfolioButton = document.querySelector('nav ul li:nth-child(4) a');
    const contactButton = document.querySelector('nav ul li:nth-child(5) a');

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('header');
    });

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('about');
    });

    servicesButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('services');
    });

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('portfolio');
    });

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contact');
    });
});

//====================Function for About Me Section====================
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }     
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//====================Function for Modal Section====================
function openFileModal(url, event) {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "block";
    fileIframe.src = url;
    event.preventDefault();
}

function closeModal() {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "none";
    fileIframe.src = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector(".close");
    const fileModal = document.getElementById("fileModal");

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == fileModal) {
            closeModal();
        }
    });
});

//====================Function for Contact Me Section====================
function submitForm(event) {
    event.preventDefault();
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    msg.innerHTML = "Sending message...";

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxj9GYBZWdt9LucmJL6MCj0Ai4_bAQ2ot1AXfhPzRPqUYjhhguEvwTD7AnpYW0LIIwe/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "";
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 3000);

            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "";
            console.error('Error!', error.message);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.forms['submit-to-google-sheet'];
    contactForm.addEventListener('submit', submitForm);
});
//====================Function for Home buttons Section====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.querySelector('nav ul li:nth-child(1) a');
    const aboutButton = document.querySelector('nav ul li:nth-child(2) a');
    const servicesButton = document.querySelector('nav ul li:nth-child(3) a');
    const portfolioButton = document.querySelector('nav ul li:nth-child(4) a');
    const contactButton = document.querySelector('nav ul li:nth-child(5) a');

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('header');
    });

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('about');
    });

    servicesButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('services');
    });

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('portfolio');
    });

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contact');
    });
});

//====================Function for About Me Section====================
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }     
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//====================Function for Modal Section====================
function openFileModal(url, event) {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "block";
    fileIframe.src = url;
    event.preventDefault();
}

function closeModal() {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "none";
    fileIframe.src = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector(".close");
    const fileModal = document.getElementById("fileModal");

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == fileModal) {
            closeModal();
        }
    });
});

//====================Function for Contact Me Section====================
function submitForm(event) {
    event.preventDefault();
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    msg.innerHTML = "Sending message...";

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxj9GYBZWdt9LucmJL6MCj0Ai4_bAQ2ot1AXfhPzRPqUYjhhguEvwTD7AnpYW0LIIwe/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "";
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 3000);

            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "";
            console.error('Error!', error.message);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.forms['submit-to-google-sheet'];
    contactForm.addEventListener('submit', submitForm);
});
//====================Function for Home buttons Section====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.querySelector('nav ul li:nth-child(1) a');
    const aboutButton = document.querySelector('nav ul li:nth-child(2) a');
    const servicesButton = document.querySelector('nav ul li:nth-child(3) a');
    const portfolioButton = document.querySelector('nav ul li:nth-child(4) a');
    const contactButton = document.querySelector('nav ul li:nth-child(5) a');

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('header');
    });

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('about');
    });

    servicesButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('services');
    });

    portfolioButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('portfolio');
    });

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contact');
    });
});

//====================Function for About Me Section====================
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }     
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//====================Function for Modal Section====================
function openFileModal(url, event) {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "block";
    fileIframe.src = url;
    event.preventDefault();
}

function closeModal() {
    const fileModal = document.getElementById("fileModal");
    const fileIframe = document.getElementById("fileIframe");
    fileModal.style.display = "none";
    fileIframe.src = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector(".close");
    const fileModal = document.getElementById("fileModal");

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == fileModal) {
            closeModal();
        }
    });
});

//====================Function for Contact Me Section====================
function submitForm(event) {
    event.preventDefault();
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    msg.innerHTML = "Sending message...";

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxj9GYBZWdt9LucmJL6MCj0Ai4_bAQ2ot1AXfhPzRPqUYjhhguEvwTD7AnpYW0LIIwe/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "";
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 3000);

            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "";
            console.error('Error!', error.message);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.forms['submit-to-google-sheet'];
    contactForm.addEventListener('submit', submitForm);
});







// Cursor Animation in Header-text

document.addEventListener("DOMContentLoaded", function() {
    const part1 = "Hi, I'm ";
    const part2 = "Julius";
    const part3 = "\nPascual"; // Insert newline character
    const typingSpeed = 200; // Speed of typing in milliseconds
    const cursor = document.getElementById('cursor');
    const container = document.getElementById('typing-container');
    let index = 0;

    function typeText() {
        if (index < part1.length) {
            container.innerHTML += '<span style="color: #fff;">' + part1.charAt(index) + '</span>';
        } else if (index < part1.length + part2.length) {
            const part2Index = index - part1.length;
            if (part2Index === 0) {
                container.innerHTML += '<span style="color: #ff004f;">';
            }
            container.innerHTML += part2.charAt(part2Index);
            if (part2Index === part2.length - 1) {
                container.innerHTML += '</span>';
            }
        } else if (index < part1.length + part2.length + part3.length) {
            if (part3.charAt(index - part1.length - part2.length) === '\n') {
                container.innerHTML += '<br>';
            } else {
                container.innerHTML += '<span style="color: #fff;">' + part3.charAt(index - part1.length - part2.length) + '</span>';
            }
        }

        index++;
        if (index < part1.length + part2.length + part3.length) {
            setTimeout(typeText, typingSpeed);
        }
    }

    function toggleCursor() {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }

    // Start cursor blinking animation
    setInterval(toggleCursor, 500); // Toggle cursor visibility every 500ms

    // Start typing animation
    typeText();
});
