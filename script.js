function salvar() {
    let texto = document.getElementById("texto").value;
    localStorage.setItem("emocao", texto);
    alert("Salvo com sucesso!");
}