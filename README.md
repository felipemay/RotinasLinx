# Captura de Rotina de Navegação Linx (Microvix ERP) 🚀

## Visão Geral do Projeto

Este projeto é uma extensão para navegadores desenvolvida para auxiliar analistas de suporte que trabalham com o ERP Microvix da Linx. Dada a natureza de "Single Page Application" (SPA) do Microvix, que frequentemente não atualiza a URL na barra de endereços para refletir a rotina atual, dificultando a navegação e a comunicação de caminhos específicos, esta extensão resolve esse problema de forma inteligente. 🧠

A extensão captura as requisições de rede feitas pelo navegador e, com base em um mapeamento pré-definido de padrões de URL, identifica a rotina exata dentro do Microvix ERP. Uma vez identificada, ela apresenta ao usuário o "caminho" hierárquico dessa rotina (ex: "Faturamento \> Nota Fiscal \> Faturar Pedido") e, opcionalmente, o link para o manual do sistema correspondente, permitindo que o analista copie essas informações para a área de transferência com um único clique. 📋

## Problema Resolvido 🎯

Em ambientes de suporte, a comunicação precisa de caminhos dentro de um sistema é crucial. No Microvix ERP, devido à sua arquitetura SPA, a URL exibida no navegador muitas vezes permanece a mesma (`index.asp` ou similar), independentemente da tela que o usuário está visualizando. Isso torna inviável para um analista de suporte simplesmente copiar a URL e compartilhá-la, ou mesmo identificar rapidamente onde o usuário está no sistema. 🤷‍♀️

Esta extensão atua como uma ponte entre a requisição de rede subjacente (que contém informações da rotina) e a interface do usuário, fornecendo o caminho navegacional claro e o manual associado. 🔗

## Funcionalidades ✨

  * **Identificação Inteligente de Rotas:** Analisa as requisições de rede (`webRequest`) para inferir a rotina atual no Microvix ERP, mesmo em um ambiente SPA onde a URL não se altera.
  * **Mapeamento Abrangente de Rotinas:** Contém um extenso `urls.js` com centenas de mapeamentos de `caminho` (rota navegacional) para `urlPattern` (padrão de URL de requisição) e links para manuais (`manual`). 🗺️
  * **Interface de Usuário Intuitiva (Popup):** Apresenta os caminhos identificados em um popup acessível na barra de ferramentas do navegador. 🖥️
  * **Cópia Rápida para a Área de Transferência:** Permite copiar o caminho da rotina e, se disponível, o caminho + a frase personalizada + o link do manual com um clique. 📝
  * **Frase Personalizável para o Manual:** O usuário pode definir uma frase personalizada que será prefixada ao link do manual ao copiar (ex: "Manual dessa página: [link]"). Essa frase é salva localmente. ✍️
  * **Filtragem de URLs Ignoradas:** Evita o processamento de requisições irrelevantes de serviços de terceiros (Google Analytics, Facebook Pixel, etc.) para otimizar o desempenho. 🛡️
  * **Persistência de Dados:** Salva a última frase personalizada inserida pelo usuário utilizando a API `chrome.storage.local`. 💾

## Arquitetura e Tecnologias Utilizadas 🛠️

A extensão é construída utilizando as seguintes tecnologias e APIs do Chrome:

  * **HTML:** Para a estrutura do popup (`popup.html`) e a página de background (`background.html`). 📄
  * **CSS:** Para estilização da interface do usuário do popup (`popup.html`). 🎨
  * **JavaScript:** A lógica principal da extensão é implementada em JavaScript, utilizando: 💻
      * **`manifest.json` (Manifest V3):** Define as permissões, scripts de background, ícones e a configuração do popup da extensão.
      * **`background.js`:** Um Service Worker que atua como o cérebro da extensão. Ele monitora as requisições de rede usando a API `chrome.webRequest` e filtra as URLs relevantes. 🚦
      * **`urls.js`:** Um arquivo de configuração JavaScript que contém o mapeamento de todos os caminhos do Microvix ERP, seus padrões de URL correspondentes e, quando aplicável, links para os manuais. 🌐
      * **`popup.js`:** O script responsável pela interação com a interface do usuário do popup, carregando e exibindo os caminhos, gerenciando a cópia para a área de transferência e salvando a frase personalizada.
  * **`chrome.webRequest` API:** Essencial para interceptar e analisar as requisições de rede feitas pelo navegador. 🛰️
  * **`chrome.tabs` API:** Utilizada para interagir com as abas do navegador (embora de forma mais limitada neste projeto, poderia ser expandida para funcionalidades como abrir URLs diretamente).
  * **`chrome.clipboardWrite` API:** Permite que a extensão escreva informações na área de transferência do sistema. ✍️
  * **`chrome.storage.local` API:** Utilizada para armazenar dados localmente no navegador do usuário, como a frase personalizada para o manual. 🗄️

## Estrutura do Código 📂

```
.
├── background.js           # Service Worker: monitora requisições de rede e identifica URLs.
├── background.html         # Página de background (para compatibilidade/inicialização).
├── icon16.png              # Ícone da extensão (16x16)
├── icon48.png              # Ícone da extensão (48x48)
├── icon128.png             # Ícone da extensão (128x128)
├── manifest.json           # Arquivo de manifesto da extensão.
├── popup.html              # Interface de usuário do popup da extensão.
├── popup.js                # Lógica do frontend do popup (exibição e interação).
└── urls.js                 # Mapeamento de URLs do Microvix ERP para seus caminhos e manuais.
```

## Como Instalar e Usar (para portfólio) 🚀

Para demonstrar este projeto localmente:

1.  **Baixe ou clone este repositório.** 📥
2.  **Abra o Chrome (ou um navegador baseado em Chromium).** 🌐
3.  **Vá para `chrome://extensions`** na barra de endereços.
4.  **Ative o "Modo Desenvolvedor"** (geralmente um toggle no canto superior direito). 👨‍💻
5.  **Clique em "Carregar sem compactação" (Load unpacked).** ➕
6.  **Selecione a pasta onde você extraiu/clonou o projeto.** 📁
7.  A extensão será adicionada e um novo ícone aparecerá na sua barra de ferramentas. 🎉
8.  **Navegue para o ambiente do Microvix ERP.** 🧑‍💻
9.  **Interaja com o sistema (clique em menus, abra rotinas).** 👆
10. **Clique no ícone da extensão** na barra de ferramentas. 🧩
11. O popup mostrará os caminhos correspondentes à URL da rotina que você está acessando. 👇
12. **Clique no botão** com o ícone de pasta (`📂`) para copiar apenas o caminho. 📋
13. **Clique no botão** com o ícone de pergaminho (`📜`) para copiar o caminho, a frase personalizada e o link do manual (se disponível). 📄➕
14. Você pode **digitar uma frase no campo de texto** na parte inferior do popup para personalizar o prefixo do manual. Essa frase será salva automaticamente. 💬

## Contribuições 🤝

Este projeto foi desenvolvido para um propósito específico de suporte interno. No entanto, sugestões e melhorias são sempre bem-vindas. Sinta-se à vontade para abrir issues ou pull requests. 💡

## Licença 📝

Este projeto é de código aberto e está disponível sob a licença [MIT License](https://www.google.com/search?q=LICENSE).

-----
