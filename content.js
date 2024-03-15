// Remove o paywall e o blur
function removeDivs() {
    const divs = document.getElementsByClassName('mv-content-limitation-fake-page short-preview-version short-preview-version-background');
    if (divs.length > 0) {
        Array.from(divs).forEach((div) => {
            div.parentNode.removeChild(div);
        });
        console.log("Elementos removidos");
    } else {
        console.log("Nenhum elemento encontrado para remoção");
    }

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
    }
}

// Cria o mutation
const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            removeDivs();
        }
    }
});

// Config do mutation
observer.observe(document.body, { childList: true, subtree: true, attributes: true });

removeDivs();
