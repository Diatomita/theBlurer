// Funcao p operar dinamicamente com o mutation
function removeFX() {
    // Remove o paywall logado
    const divsLogado = document.getElementsByClassName('mv-content-limitation-fake-page short-preview-version short-preview-version-background');
    if (divsLogado.length > 0) {
        Array.from(divsLogado).forEach((div) => {
            div.parentNode.removeChild(div);
        });
        console.log("Elementos de paywall removidos");
    }

    const divsDeslogado = document.getElementsByClassName('BannerSelector_banner-container__lwUxw');
    if (divsDeslogado.length > 0) {
        Array.from(divsDeslogado).forEach((div) => {
            div.parentNode.removeChild(div);
        });
        console.log("Elementos de paywall removidos");
    }
/*
    // Muda pra 0px o blur de qqr coisa no body
    const elements = document.querySelectorAll('body *[style*="filter: blur(10px)"]');
    if (elements.length > 0) {
        elements.forEach((element) => {
            console.log("Elemento encontrado:", element);
            element.style.filter ='blur(0px)';
            console.log("Blur removido do elemento", element);
        });
    } else {
        console.log("Nenhum elemento encontrado para remocao de estilo");
    } */
}

/*
// Injeta nosso proprio js q n tem a chamada da funcao tryApplyBlur() que aplica o blur e o shuffle
var script = document.createElement('script');
script.src = chrome.extension.getURL('arquivo.js');
document.head.appendChild(script);
console.log("custom js aplicado");
*/

// Cria o mutation
const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            removeFX();
        }
    }
});

// Config do mutation
observer.observe(document.body, { childList: true, subtree: true, attributes: true });
