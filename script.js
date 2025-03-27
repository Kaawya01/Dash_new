let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let back = document.querySelector('.back');
let Dash = document.querySelector('.Dash');


toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
};

back.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

Dash.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));



const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.innerHTML = `
          
            <circle cx="12" cy="12" r="5" stroke="lightgray" stroke-width="2" fill="none"></circle>
            <line x1="12" y1="1" x2="12" y2="3" stroke="lightgray" stroke-width="2"></line>
            <line x1="12" y1="21" x2="12" y2="23" stroke="lightgray" stroke-width="2"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="lightgray" stroke-width="2"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="lightgray" stroke-width="2"></line>
            <line x1="1" y1="12" x2="3" y2="12" stroke="lightgray" stroke-width="2"></line>
            <line x1="21" y1="12" x2="23" y2="12" stroke="lightgray" stroke-width="2"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="lightgray" stroke-width="2"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="lightgray" stroke-width="2"></line>
        
        `;
    } else {
        themeIcon.innerHTML = `
            
        
            <circle cx="12" cy="12" r="5" stroke="rgb(34, 34, 34)" stroke-width="2" fill="none"></circle>
            <path d="M16 12a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z" fill="rgb(34, 34, 34)"></path>
        
            `;

    }
});
document.getElementById("customers").addEventListener("click", function() {
    window.location.href = "cus.html";
});