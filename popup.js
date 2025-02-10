document.addEventListener("DOMContentLoaded", function () {
  const fraseManualInput = document.getElementById("fraseManual");

  // Carregar a última frase salva
  chrome.storage.local.get("fraseManual", function (data) {
    if (data.fraseManual) {
      fraseManualInput.value = data.fraseManual;
    }
  });

  // Salvar a frase ao digitar
  fraseManualInput.addEventListener("input", function () {
    chrome.storage.local.set({ fraseManual: fraseManualInput.value });
  });

  chrome.storage.local.get("caminhos", function (data) {
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = ""; // Evita duplicação de elementos

    if (data.caminhos && data.caminhos.length > 0) {
      data.caminhos.forEach(opcao => {
        let div = document.createElement("div");

        let btnCaminho = document.createElement("button");
        btnCaminho.className = "btn";
        btnCaminho.innerHTML = `<span class="btn-icon">📂</span> ${opcao.caminho}`;
        btnCaminho.onclick = function () {
          navigator.clipboard.writeText(opcao.caminho).then(() => {
            alert("Caminho copiado: " + opcao.caminho);
          });
        };

        div.appendChild(btnCaminho);

        if (opcao.manual) {
          let btnCaminhoManual = document.createElement("button");
          btnCaminhoManual.className = "btn btn-secondary";
          btnCaminhoManual.innerHTML = `<span class="btn-icon">📜</span> ${opcao.caminho}`;
          btnCaminhoManual.onclick = function () {
            // Recuperar frase personalizada ou usar padrão
            chrome.storage.local.get("fraseManual", function (data) {
              let fraseManual = data.fraseManual || "Manual dessa página:";
              let texto = `${opcao.caminho}\n\n${fraseManual} ${opcao.manual}`;
              navigator.clipboard.writeText(texto).then(() => {
                alert("Caminho + Manual copiados:\n" + texto);
              });
            });
          };
          div.appendChild(btnCaminhoManual);
        }
        
        opcoesDiv.appendChild(div);
      });
    } else {
      opcoesDiv.innerHTML = "<p>Nenhum caminho encontrado.</p>";
    }
  });
});
