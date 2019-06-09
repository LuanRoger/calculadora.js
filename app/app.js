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
    console.log("     Bem-vindo a calculadora.js v0.4".blue.bold);
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
        operacoesBasicas();
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
        min = 0;
        console.log("Valor minimo definido para: 0".yellow);
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
        Continuar();
        //-------------------------------------
    }


    //Oerações basicas
    function operacoesBasicas() {

        //Variaveis2
        console.log("[ + ] Somar.     [ - ] Subtrair.\n[ * ] Multiplicar.     [ / ] Dividir.\n[ ! ] Potencia.     [ # ] Raiz quadrada.".cyan);
        var operation = readline.question("Qual operacao voce que fazer?".yellow);
        //-----------------------------------------------------------------------------------------------

        //Evitar erros (Variaveis2)
        if (operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "!" || operation == "#") {
            
        }
        else {
            console.log("Voce digitou um valor invalido.".red);
            operacoesBasicas();
        }
        //------------------------------------------------------------

        console.log("================================================================================".gray);
        
        //Variaveis1
        var nun1 = readline.questionInt("Digite um numero: ".yellow);
        var nun2 = readline.questionInt("Digite outro numero: ".yellow);
        var result;
        //-----------------------------------------------------------
        
        // Condições/Manipulações
        if (operation == "+") {
            result = nun1 + nun2;
        }
        else if (operation == "-") {
            result = nun1 - nun2;
        }
        else if (operation == "*") {
            result = nun1 * nun2;
        }
        else if (operation == "/") {
            result = nun1 / nun2;
        }
        else if (operation == "!") {
            result = Math.pow(nun1, nun2);
        }
        else if (operation == "#") {
            result = Math.sqrt(nun1);
        }
        else{
            console.log("Voce digitou um valor invalido.".red.bold);
            operacoesBasicas();
        }
        //-----------------------------------------------------------------
        
        //Apresentação do resultado final
        console.log("O resultado da operacao e: ".blue.bold + result);
        Continuar();
        //----------------------------------------------------------------

    }
    //Continuar
    function Continuar() {
        if(readline.keyInYN("Deseja fazer outra operacao?".yellow)) {
            //Caso Y
            Start();
        }
        else {
            process.exit()
        }
    }
    //-----------------------------------------------------------------------
    
}
Start();