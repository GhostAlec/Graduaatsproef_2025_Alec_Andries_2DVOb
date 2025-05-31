let dropdownButtonUI = document.getElementById("dropdown-button1");

let dropdownButtonUI2 = document.getElementById("dropdown-button2");

let buttonOpen = document.getElementById("dropdown-tabel-all-open");

buttonOpen.addEventListener("click", function () {
    let tabelContentBulma3 = document.getElementById("tabel3");
    let tabelContentBulma4 = document.getElementById("tabel4");

    tabelContentBulma3.hidden= !tabelContentBulma3.hidden;
    tabelContentBulma4.hidden = !tabelContentBulma4.hidden;

    let tabelContentBulma = document.getElementById("tabel1");
    let tabelContentBulma2 = document.getElementById("tabel2");

    tabelContentBulma.hidden = !tabelContentBulma.hidden;
    tabelContentBulma2.hidden = !tabelContentBulma2.hidden;
});

dropdownButtonUI2.addEventListener("click", function () {
    let tabelContentBulma3 = document.getElementById("tabel3");
    let tabelContentBulma4 = document.getElementById("tabel4");

    tabelContentBulma3.hidden= !tabelContentBulma3.hidden;
    tabelContentBulma4.hidden = !tabelContentBulma4.hidden;
});
dropdownButtonUI.addEventListener("click", function () {
    let tabelContentBulma = document.getElementById("tabel1");
    let tabelContentBulma2 = document.getElementById("tabel2");

    tabelContentBulma.hidden = !tabelContentBulma.hidden;
    tabelContentBulma2.hidden = !tabelContentBulma2.hidden;
});