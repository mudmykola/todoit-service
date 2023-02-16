const dropBtn = document.getElementsByClassName("navigation-dropdown__btn");
const dropLang = document.getElementsByClassName("navigation-lang__dropdown--btn");
let i;
for (i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let cont = this.nextElementSibling;
        if (cont.style.display === "flex") {
            cont.style.display = "none";
        } else {
            cont.style.display = "flex";
        }
    });
}
;

for (i = 0; i < dropLang.length; i++) {
    dropLang[i].addEventListener("click", function () {
        this.classList.toggle("show");
        let cont = this.nextElementSibling;
        if (cont.style.display === "flex") {
            cont.style.display = "none";
        } else {
            cont.style.display = "flex";
        }
    });
}
;