const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

submit.addEventListener('click', (e) => {
    const {textName, textEmail, opcao, textareaResposta, data, concordo1, concordo2} = trybetrip;
    
    if(textName.value === '' || textEmail.value === '' || opcao.value === '' || textareaResposta.value === '' || data.value === '' || !concordo1.checked || !concordo2.checked) {
        return;
    }

    e.preventDefault();

    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
});