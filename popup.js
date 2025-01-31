document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("caminhos", function (data) {
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = ""; // Evita duplicação de elementos

    if (data.caminhos && data.caminhos.length > 0) {
      data.caminhos.forEach(opcao => {
        let div = document.createElement("div");
        div.style.marginBottom = "8px";

        let btnCaminho = document.createElement("button");
        btnCaminho.textContent = opcao.caminho;
        btnCaminho.onclick = function () {
          navigator.clipboard.writeText(opcao.caminho).then(() => {
            alert("Caminho copiado: " + opcao.caminho);
          });
        };

        let btnCaminhoManual = document.createElement("button");
        btnCaminhoManual.textContent = "📜 " + opcao.caminho;
        btnCaminhoManual.style.backgroundColor = "#f0f0f0";
        btnCaminhoManual.onclick = function () {
          let texto = `${opcao.caminho}\n\nManual dessa página: ${opcao.manual}`;
          navigator.clipboard.writeText(texto).then(() => {
            alert("Caminho + Manual copiados:\n" + texto);
          });
        };

        div.appendChild(btnCaminho);
        if (opcao.manual) {
          div.appendChild(btnCaminhoManual);
        }
        
        opcoesDiv.appendChild(div);
      });
    } else {
      opcoesDiv.innerHTML = "<p>Nenhum caminho encontrado.</p>";
    }
  });
});
