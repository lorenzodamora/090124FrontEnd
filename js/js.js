let item = []
let count = 0

function crea_elementi() {
    //1 controllo dell'input
    //2 creo n elementi
    //3 attribiusco la classe corretta per allinearli come richiesto
    //4 creo un colore di sfondo casuale
    //5 imposto colore di sfondo
    //6 imposto colore del testo più scuro dello sfondo
    //7 se l'utente si posiziona sull'elemento creato il successivo elemento si schiarisce, ritorna come prima quando l'utente esce dall'area del componente

    //compreso tra 0 e 100
    let val = input.numero.value;
    if (val < 1 || val > 100) {
        alert("hai inserito valori non validi");
        return;
    }

    let rnd = parseInt(Math.random() * 256);

    const cnt = document.getElementById("contenitore");


    for (i = count; i < val + count; i++) {
        item[i] = document.createElement("h1");
        item[i].innerText = "*";
        item[i].style.color = "red"; //#FF0000 //red
        item[i].classList.add("alert");
        //elemento.classList.add("alert-success");
        cnt.appendChild(item[i]);
    }
}
