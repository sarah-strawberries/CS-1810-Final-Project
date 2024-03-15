window.addEventListener('load', insertHeaderAndFooter)

function insertHeaderAndFooter() {
    insertHeader();
}

function insertHeader() {

    // Prepare header logo
    let headerLogo = document.createElement('img');
    headerLogo.src = "3-12-2024-logo-circle.png";
    headerLogo.alt="HomeVisualize Logo"; 
    headerLogo.className="logo inline-block";

    // Prepare header text
    let headerText = document.createElement('h1');
    headerText.className = "inline-block";
    headerText.innerHTML = "<span class=\"blue-text\">Home</span>Visualize</h1>";

    document.querySelector("header").append(headerLogo);
    document.querySelector("header").append(headerText);

}

function insertFooter() {

}