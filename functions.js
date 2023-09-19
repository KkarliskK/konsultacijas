let button = document.getElementById("submit");



button.addEventListener("click", function(){
    //console.log("Clicked"); konsole parada ka ir uzspiesta
    //alert("clicked"); //atver logu ar textu ka ir nospiesta
    function getData(){ // funkcija, kas saglabas ievadlauku datus
        let data = {
            "virsraksts": document.getElementById("virsraksts").value, // te tu iestati ievadlauka ievoditos datus masiivā
            "teksts": document.getElementById("teksts").value,
            "datums": document.getElementById("datums").value,
            "laiks": document.getElementById("laiks").value
        }
        return data; // neaizmirsti atgriezt, savadak nebus nekadu datu
    }
    console.log(getData()); // izvada masīvā saglabātos datus ko pats ievadiji ievadlaukos

    function showData(data){
        const outputBox = document.getElementById("output-box");
        const h1el = document.createElement("h1");
        h1el.innerHTML = data.virsraksts;
    
        const pel = document.createElement("p");
        pel.innerHTML = data.teksts;

        const pdatums = document.createElement("p");
        pdatums.innerHTML = data.datums;

        const plaiks = document.createElement("p");
        plaiks.innerHTML = data.laiks;
    
        outputBox.appendChild(h1el);
        outputBox.appendChild(pel);
        outputBox.appendChild(pdatums);
        outputBox.appendChild(plaiks);
    }
    showData(getData());
});