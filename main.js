const clickBtn = document.querySelector("#clickBtn");
const textH1 = document.querySelector("#text");

clickBtn.addEventListener(
    "click",

    function () {
        textH1.innerHTML = "Goodbye World";
    },
    false
); 