const hamburger = document.querySelector(".hamburger");//the class "hamburger" in the HTML document and assigns it to the constant variable hamburger.
const navMenu = document.querySelector(".nav-menu");// the class "nav-menu" in the HTML document and assigns it to the constant variable navMenu.

hamburger.addEventListener("click", () => {//click event listener on the hamburger element. When the element is clicked, the code inside the arrow function will be executed.
    hamburger.classList.toggle("active");//the class "active" on the hamburger element. If the element already has the class "active", it will be removed; otherwise, it will be added.
    navMenu.classList.toggle("active");//the class "active" on the navMenu element. Similar to the previous line, if the class is already present, it will be removed, and if it's not present, it will be added.
});

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {// selects all elements with the class "nav-link" in the HTML document and sets up a click event listener on each of them. When any of these elements are clicked, the code inside the arrow function will be executed.
    hamburger.classList.remove("active");//removes the "active" class from the hamburger element when any element with the class "nav-link" is clicked. This ensures that clicking on a navigation link will close the navigation menu (if it's open) by removing the "active" class from the hamburger icon.
    navMenu.classList.remove("active");//This line removes the "active" class from the navMenu element when any element with the class "nav-link" is clicked. Similarly, this ensures that clicking on a navigation link will also close the navigation menu (if it's open) by removing the "active" class from the menu itself.
}));