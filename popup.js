document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("caminhos", function (data) {
    const opcoesDiv = document.getElementById("opcoes");

    if (data.caminhos && data.caminhos.length > 0) {
      data.caminhos.forEach(opcao => {
        let btn = document.createElement("button");
        btn.textContent = opcao.caminho;
        btn.onclick = function () {
          navigator.clipboard.writeText(opcao.caminho).then(() => {
            alert("Caminho copiado: " + opcao.caminho);
          });
        };
        opcoesDiv.appendChild(btn);
      });
    } else {
      opcoesDiv.innerHTML = "<p>Nenhum caminho encontrado.</p>";
    }
  });
});
