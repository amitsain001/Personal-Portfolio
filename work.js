// Tab Links Functioning 

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");       // when click on active links then lighted underline comes 
    document.getElementById(tabname).classList.add("active-tab");       // On clicking the Tab link shows the data related to it 
}

// JS Code For Side Menu Responsiveness



var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = 0;
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzAQ9R4Fq6nxoVxajvhMbsss36bqeQ40bQLVusDQWtn_60Z7ZznPao4kJzC9NFMsTULkA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg2")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    msg2.innerHTML = "Message Sent Successfully"
    setTimeout(function() {
        msg2.innerHTML = ""
    },3000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})



document.addEventListener("DOMContentLoaded", function() {
var typed = new Typed('#text', {
    strings: [
        "Web Developer",
        "MERN Stack Developer",
        "Problem Solver"
    ],
    typeSpeed: 100,       // Speed of typing
    backSpeed: 50,        // Speed of deleting
    backDelay: 1000,      // Delay before starting to delete
    startDelay: 500,      // Initial delay before typing starts
    loop: true,           // Loop the typing
    showCursor: true,     // Show blinking cursor
    cursorChar: '|',      // Customize cursor character
    smartBackspace: true  // Only erase what's necessary
});
});
