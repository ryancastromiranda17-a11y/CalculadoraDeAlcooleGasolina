


function calcular() {
    const distancia = Number(document.getElementById('distan').value);
    const consumo = Number(document.getElementById('consumo').value);



    let precoBruto = document.getElementById('preco').value;
    let preco = Number(precoBruto.replace(/\D/g, "")) / 100;

    if (!distancia || !consumo || !preco) {
        document.getElementById("resultado").innerText = "Preencher todos os campos !";
        return;
    }



    const litros = distancia / consumo;
    const custo = litros * preco;

    document.getElementById("resultado").innerText =
        `A quantidade e litros que vai ser utilizado e: ${litros.toFixed(2)} L
E o valor gasto na viagem será de R$ ${custo.toFixed(2)}`;

}


function selecionar(nome) {
    document.getElementById('combustivel').innerText = nome;

}



function formatar() {
    let campo = document.getElementById("preco");

    // Remove tudo que não seja dígito (ex.: espaços, letras, símbolos)
    let valor = campo.value.replace(/\D/g, "");

    // Se não houver nenhum dígito, limpa o campo e retorna
    if (!valor) {
        campo.value = "";
        return;
    }

    // Converte a string de centavos para número com casas decimais:
    // ex: "550" -> Number("550") / 100 -> 5.5
    // Depois formata no padrão pt-BR como moeda "R$ 5,50"
    valor = (Number(valor) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Substitui o valor do input pelo texto formatado
    campo.value = valor;
}