let dropdownButtonBulma = document.getElementById("dropdown-tabel1");

let dropdownButtonBulma2 = document.getElementById("dropdown-tabel2");

let buttonOpenBulma = document.getElementById("button-open");

buttonOpenBulma.addEventListener("click", function () {
    let tabelContentBulma = document.getElementById("tabelbulma1");
    let tabelContentBulma2 = document.getElementById("tabelbulma2");

    tabelContentBulma.hidden = !tabelContentBulma.hidden;
    tabelContentBulma2.hidden = !tabelContentBulma2.hidden;

    let tabelContentBulma3 = document.getElementById("tabelbulma3");
    let tabelContentBulma4 = document.getElementById("tabelbulma4");

    tabelContentBulma3.body.style.hidden= !tabelContentBulma3.hidden;
    tabelContentBulma4.body.style.hidden = !tabelContentBulma4.hidden;
});

dropdownButtonBulma2.addEventListener("click", function () {
    let tabelContentBulma3 = document.getElementById("tabelbulma3");
    let tabelContentBulma4 = document.getElementById("tabelbulma4");

    tabelContentBulma3.hidden= !tabelContentBulma3.hidden;
    tabelContentBulma4.hidden = !tabelContentBulma4.hidden;
});
dropdownButtonBulma.addEventListener("click", function () {
    let tabelContentBulma = document.getElementById("tabelbulma1");
    let tabelContentBulma2 = document.getElementById("tabelbulma2");

    tabelContentBulma.hidden = !tabelContentBulma.hidden;
    tabelContentBulma2.hidden = !tabelContentBulma2.hidden;
});
