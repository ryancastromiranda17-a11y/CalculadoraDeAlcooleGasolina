


function calcular() {
    const distancia = Number(document.getElementById('distan').value);
    const consumo = Number(document.getElementById('consumo').value);
    const preco = Number(document.getElementById('preco').value);


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




