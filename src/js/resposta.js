document.getElementById("advice-update").addEventListener('click', pegarResposta);

const elementoConselho = document.getElementById("advice-id");

const descricaoConselho = document.getElementById("advice-description");



async function pegarResposta() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        if(!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const data = await resposta.json();

        elementoConselho.innerText = data.slip.advice;
        descricaoConselho.innerText = `ID: ${data.slip.id}`;

        return data.slip.advice;
    }catch (error) {
        console.error('Erro ao obter conselho:', error);
        return 'Não foi possível obter um conselho. Tente novamente mais tarde.';
    }
}

pegarResposta();