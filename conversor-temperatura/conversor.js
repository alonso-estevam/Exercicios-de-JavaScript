/* O primeiro passo será pegar alguns elementos html e definir eventos que chamarão determinadas funções */

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

/* Aqui temos a função para converter as temperaturas */
function tempConvert() {
    var fahrenheit = document.getElementById("fahrenheit").value; // aqui estamos armazenando o valor do input referente ao Fahrenheit nessa variável
    var celsius = document.getElementById("celsius").value; // a mesma coisa para o input de Celsius;

/* Esse bloco de código é para prevenir erros do usuário, caso ele digite algum valor que não seja número */
    if(isNaN(fahrenheit) || isNaN(celsius)) {
        alert("Digite um valor numérico!");
        return
    } else if (fahrenheit === "") {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if (celsius === "") {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    /* Usamos o parseFloat() para converter  o texto colocado no input em número decimal, e com o .toFixed(1) fixamos o valor em uma casa decimal */
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1) + "° F";
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1) + "° C";
    }

/* Essa é a função para resetar o conversor */
function clearForm() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}