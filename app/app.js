/* Cores(Para situar-se)
*  - Azul e Bold: Maquina
*  - Amarelo: Inputs
*  - Vermelho e Bold: Erros
*  - Ciano: Escolhas
*  - Cinza: Separadores
*/

// Requires
const readline = require('readline-sync');
const color = require('colors');
//-------------------------------------------------------

//Inicio
function Start() {

    // Boas-Vindas
    console.log("===========================================".gray);
    console.log("") //Separador
    console.log("     Bem-vindo a calculadora.js v0.3".blue.bold);
    console.log("") //Sepadador
    console.log("===========================================".gray);
    //---------------------------------------------------------

    //Menu
    console.log("          =====MENU=====".blue.black);
    console.log("[ 1 ] Operacaoes basicas.     [ 2 ] Gerar numeros aleatorios.".cyan);
    var menuSelect = readline.questionInt("Escolha uma opcao: ".yellow);
    //--------------------------------------------------------------------------
    //Condições menu
    if (menuSelect == 1) {
        opetacoesBasicas();
    }
    else if (menuSelect == 2) {
        randomGerate();
    }
    else {
        console.log("Voce digitou um valor invalido.".red);
        Start();
    }
    //----------------------------------------------------------------

    function randomGerate(min, max, randomResult) {
        //Aviso
        console.log("ATENCAO: essa funcao esta em fase de teste\nPode haver alguns bugs.".red.bold);
        //-----------------------------------------------------------
        //Variaveis
        min = readline.questionInt("Digite o valor minimo: ".yellow);
        max = readline.questionInt("Digite o valor maximo: ".yellow);
        randomResult = Math.floor(Math.random() * (max - min + 1) - min);
        //-------------------------------------------------------
        
        //Analizador
        if(min > max) {
            console.log("Voce digitou um valor invalido.".red);
            randomGerate();
        }
        //--------------------------------------------------------

        console.log("================================================================================".gray)

        //Apresentar valor
        console.log("O valor gerado é: ".blue.bold + randomResult);
        //-------------------------------------
    }

    //Oerações basicas
    function opetacoesBasicas() {
            //Variaveis1
        var nun1 = readline.questionInt("Digite um numero: ".yellow);
        var nun2 = readline.questionInt("Digite outro numero: ".yellow);
        var result;
        //-----------------------------------------------------------

        console.log("================================================================================".gray);

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
            console.log("Voce digitou um valor invalido.".red.bold);
            Start();
        }
        //-----------------------------------------------------------------

        //Apresentação do resultado final
        console.log("O resultado da operacao e: ".blue.bold + result);
        //----------------------------------------------------------------

    }
    //Continuar
    if(readline.keyInYN("Deseja fazer outra operacao?".yellow)) {
        //Caso Y
        Start();
    }
    else {
        process.exit()
    }
    //-----------------------------------------------------------------------
    
}
Start();