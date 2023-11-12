const navList = document.getElementById("navigation-list"),
    navBtn = document.getElementById("navigation-menu");

// Get and manipulate all the navigation links
let navLinks = document.getElementsByClassName("navigation-list-item");  // Get all links
navLinksArray = Array.from(navLinks);   // Convert link html collection to Array
navLinksArray.forEach(function(button){     // Loop over and Array
    button.addEventListener('click', closeNav)
})


navBtn.addEventListener('click', displayNav)

function displayNav(){
    navList.style.cssText = "display: flex; animation: nav-fade-in .5s forwards;";
}

function closeNav(){
    navList.style.cssText = "display: none; ";
}






