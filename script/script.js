function naam() {
    let txt;
    let name = prompt("Wat is je naam?");
    while (name == "") {
        alert("Please type your name in the textfield")
    let name = prompt("Wat is je naam?");
    }
    alert("Hallo " + name);
    alert(name + " krijgt een cookie!");
}