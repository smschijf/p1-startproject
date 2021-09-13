function naam() {
    let txt;
    let r = confirm("Wil je verder gaan?");
    if (r == true) {
        txt = "Je hebt op de knop geklikt :)";
        alert(txt);
    } else {
        txt = "Waarom klikte je niet op de knop :(";
        alert(txt);
    }
}