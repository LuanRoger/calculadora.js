/* Cores(Para situar-se)
*  - Azul e Bold: Maquina
*  - Amarelo: Inputs
*  - Vermelho e Bold: Erros
*  - Ciano: Escolhas
*  - Cinza: Separadores*/

// Requires
const readline = require('readline-sync');
const color = require('colors');
//-------------------------------------------------------

//Escolha de idioma
function Start() {
    console.log("[ pt ] Portugues(Brasil)     [ en ] Ingle".cyan);
    const idioma = readline.question("Selecione o idioma: ".yellow);
    
    if (idioma == "pt") {
        pt_br();
    }
    else if (idioma == "en") {
        en_us();
    }
    else {
        console.log("Voce digitou um valor invalido.").red;
        Start();
    }
}
//----------------------------------------------------------------------

function pt_br() {

    // Boas-Vindas
    console.log("===========================================".cyan)
    console.log("") //Separador
    console.log("     Bem-vindo a calculadora.js v0.2".blue.bold);
    console.log("") //Sepadador
    console.log("===========================================".cyan)
    //---------------------------------------------------------

    //Variaveis1
    var nun1 = readline.questionInt("Digite um numero: ".yellow);
    var nun2 = readline.questionInt("Digite outro numero: ".yellow);
    var result;
    //-----------------------------------------------------------

    console.log("================================================================================".gray)

    //Variaveis2
    console.log("[ + ] Somar.     [ - ] Subtrair.\n[ * ] Multiplicar.     [ / ] Dividir.".cyan);
    var operration = readline.question("Qual operacao voce que fazer?".yellow);
    //-----------------------------------------------------------------------------------------------

    // Condições/Manupulações
    if (operration == "+") {
        result = nun1 + nun2;
    }
    else if (operration == "-") {
        result = nun1 - nun2;
    }
    else if (operration == "*") {
        result = nun1 * nun2;
    }
    else if (operration == "/") {
        result = nun1 / nun2;
    }
    else {
        console.log("Voce digitou um valor invalido.").red;
        Start();
    }
    //-----------------------------------------------------------------

    //Apresentação do resultado final
    console.log("O resultado da operacao e: ".blue.bold + result);
    //----------------------------------------------------------------

    //Continuar
    if(readline.keyInYN("Deseja fazer outra operacao?".yellow)) {
        //Caso Y
        pt_br();
    }
    else {
        process.exit("Encerrado . . .")
    }
    //--------------------------------------------------------------------
}

function en_us() {

    // Boas-Vindas
    console.log("===========================================".cyan)
    console.log("") //Separador
    console.log("     Welcome to calculator.js".blue.bold);
    console.log("") //Sepadador
    console.log("===========================================".cyan)
    //---------------------------------------------------------

    //Variaveis1
    var nun1 = readline.questionInt("Enter a number: ".yellow);
    var nun2 = readline.questionInt("Enter another number: ".yellow);
    var result;
    //-----------------------------------------------------------

    console.log("================================================================================".gray)

    //Variaveis2
    console.log("[ + ] Add.     [ - ] Subtract.\n[ * ] Multiply.     [ / ] Divide.".cyan);
    var operration = readline.question("What operation do you have to do?".yellow);
    //-----------------------------------------------------------------------------------------------

    // Condições/Manupulações
    if (operration == "+") {
        result = nun1 + nun2;
    }
    else if (operration == "-") {
        result = nun1 - nun2;
    }
    else if (operration == "*") {
        result = nun1 * nun2;
    }
    else if (operration == "/") {
        result = nun1 / nun2;
    }
    else {
        console.log("You have entered an invalid value.").red;
        Start();
    }
    //-----------------------------------------------------------------

    //Apresentação do resultado final
    console.log("The result of the operation is: ".blue.bold + result);
    //----------------------------------------------------------------

    //Continuar
    if(readline.keyInYN("Do you want to do another operation?".yellow)) {
        //Caso Y
        pt_br();
    }
    else {
        process.exit("Closed. . .")
    }
    //--------------------------------------------------------------------
}
Start();