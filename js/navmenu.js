window.addEventListener('load', insertNavMenu)

let navLinks = [
    "index.html", 
    "about.html", 
    "demo.html", 
    "pricing.html", 
    "gallery.html",
    "contact.html"
]

let navText = [
    "Home", 
    "About", 
    "Demo", 
    "Pricing", 
    "Gallery",
    "Contact"
]
let n = 0;

function insertNavMenu() {
    let navMenu = document.createElement('div');
    navMenu.style = "display:flex; align-items:center; justify-content:center;";
    navLinks.forEach(element => {
        // save link text to a variable 
        let linkText = navText[n];

        // create link element
        let link = document.createElement("a");

        // add attributes to link element
        link.href = element.toLowerCase();
        link.innerText = linkText;
        link.style = "padding: 0.5em;"

        // append link to navMenu div
        navMenu.appendChild(link);
        n++;
    });

    // append navMenu div to nav element in document
    document.querySelector("nav").appendChild(navMenu);
}