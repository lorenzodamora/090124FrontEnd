function crea_elementi() {
    //1 controllo dell'input
    //2 creo n elementi
    //3 attribiusco la classe corretta per allinearli come richiesto
    //4 creo un colore di sfondo casuale
    //5 imposto colore di sfondo
    //6 imposto colore del testo più scuro dello sfondo
    //7 se l'utente si posiziona sull'elemento creato il successivo elemento si schiarisce, ritorna come prima quando l'utente esce dall'area del componente

    //compreso tra 0 e 100
    let val = input.n_per_riga.value;
    if(val < 1 || val > 100)
    {
        alert("hai inserito valori non validi");
        return;
    }

    let rnd = parseInt(Math.random() * 256);

    const contenitore = document.getElementById("contenitore");
    /*innerHTML richiede subito il rendering della pagina*/
    //contenitore. innerHTML+="<h1 style='color:red'>ciao</h1>";
    for (i = 0; i < 1000; i++) {
        let elemento = document.createElement("h1");
        elemento.innerText = "*";
        elemento.style.color = "rgb(255,0,0)";//#FF0000 //red
        elemento.classList.add("alert");
        //elemento.classList.add("alert-success");
        contenitore.appendChild(elemento);
    }
}
