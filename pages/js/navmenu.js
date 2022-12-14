window.addEventListener('load', insertNavMenu)

let navLinks = [
    "/pages/Home.html", 
    "/pages/About.html", 
    "/pages/Demo.html", 
    "/pages/Pricing.html", 
    "/pages/Gallery.html",
    "/pages/Contact.html"
]

function insertNavMenu() {
    let navMenu = document.createElement('div');
    navMenu.style = "display:flex; align-items:center; justify-content:center;";
    navLinks.forEach(element => {

        // save link inner text to a variable 
        let linkText = element.substring(7, element.length - 1);
        linkText = linkText.split('.')[0];

        // create link element
        let link = document.createElement("a");

        // add attributes to link element
        link.href = element.toLowerCase();
        link.innerText = linkText;
        link.style = "padding: 0.5em;"

        // append link to navMenu div
        navMenu.appendChild(link);
    });

    // append navMenu div to nav element in document
    document.querySelector("nav").appendChild(navMenu);
}