let dropdownButton = document.getElementById("dropdown-tabel-button");

let dropdownButton2 = document.getElementById("dropdown-tabel-button2");

let buttonOpen = document.getElementById("dropdown-tabel-open");

buttonOpen.addEventListener("click", function () {
    let tabelContent = document.getElementById("tabel1");
    let tabelContent2 = document.getElementById("tabel2");

    tabelContent.hidden = !tabelContent.hidden;
    tabelContent2.hidden = !tabelContent2.hidden;

    let tabelContent3 = document.getElementById("tabel3");
    let tabelContent4 = document.getElementById("tabel4");

    tabelContent3.hidden = !tabelContent3.hidden;
    tabelContent4.hidden = !tabelContent4.hidden;
});

dropdownButton2.addEventListener("click", function () {
    let tabelContent3 = document.getElementById("tabel3");
    let tabelContent4 = document.getElementById("tabel4");

    tabelContent3.hidden = !tabelContent3.hidden;
    tabelContent4.hidden = !tabelContent4.hidden;
});
dropdownButton.addEventListener("click", function () {
    let tabelContent = document.getElementById("tabel1");
    let tabelContent2 = document.getElementById("tabel2");

    tabelContent.hidden = !tabelContent.hidden;
    tabelContent2.hidden = !tabelContent2.hidden;
});





