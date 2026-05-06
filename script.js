function salvar() {
    let texto = document.getElementById("texto").value;
    localStorage.setItem("emocao", texto);
    alert("Salvo com sucesso!");
}
function salvarDesabafo() {
    const texto = document.getElementById("textoDesabafo").value;
    
    ```
    if (texto.trim() === "") {
        alert("Escreva algo antes de salvar!");
        return;
    }
    
    let desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    desabafos.push(texto);
    localStorage.setItem("desabafos", JSON.stringify(desabafos));
    
    document.getElementById("textoDesabafo").value = "";
    carregarDesabafos();
    ```
    
    }
    
    function carregarDesabafos() {
    const lista = document.getElementById("listaDesabafos");
    lista.innerHTML = "";
    
    ```
    let desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    
    desabafos.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
    ```
    
    }
    
    window.onload = carregarDesabafos;
    