function pulsarindiaboton() {
    var x = document.getElementById("india");
    if (x.checked==false) {
        x.checked = false;
        document.getElementById("india1").style.backgroundColor = "white";

    } else {
        x.checked = true;
        document.getElementById("india1").style.backgroundColor = "#f8e0b9";
    }
}
function pulsarindia() {
    var x = document.getElementById("india");
    if (x.checked==true) {
        x.checked = false;
        document.getElementById("india1").style.backgroundColor = "white";

    } else {
        x.checked = true;
        document.getElementById("india1").style.backgroundColor = "#f8e0b9";
    }
}
