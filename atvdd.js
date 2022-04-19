deixar resultado = 0;
deixe encrementoselect = 0;
deixe encrementotextarea = 0;
deixe encrementocheckbox = 0;
deixe encrementoradio = 0;
deixe encrementovorf = 0;
deixar por cento = 0;
deixar por cento1 = 0;
deixar percent2 = 0;
deixar percent3 = 0;
deixar percent4 = 0;
deixar por cento5 = 0;

função corrigir(){

    ("---------------- RETIRADA DA OCULTAÇÃO(display de nenhum bloco). -------------------")
    documento. consultaSelector (".hide"). estilo. display = "bloco";
    documento. consultaSelector ("#corr"). estilo. display = "bloco";
    documento. consultaSelector ("#resp"). estilo. display = "bloco";
    ("---------------- RETIRADA DA OCULTAÇÃO(display de nenhum bloco). -------------------")

    ("------------------- NOME ---------------- VALIDO")
    deixe nome = documento. getElementById("texto"). valor;
    ("------------------- NOME ---------------- VALIDO")

    ("---------------- ------------------- DE CAMPO VÁLIDO")
    deixe selecionar = documento. getElementById("Q01"). valor;
    deixar res = documento. getElementById("Q01"). valor;
    documento. getElementById("sel"). innerHTML = "1ª Questão: "
    documento. getElementById("sel1"). innerHTML = "1ª Questão: Informática"
    se (res == "Administração"){
        encrementoselect = 0;
        percent1 = 0;
        documento. getElementById("sel"). innerHTML = "1ª Questão: " + selecione;
        
    }mais se (res == "Informática"){
        encrementoselect = 1;
        percent1 = 20;
        
        documento. getElementById("sel"). innerHTML = "1ª Questão: " + selecione;
    }mais se (res == "Enfermagem"){
        encrementoselect = 0;
        percent1 = 0;
        
        documento. getElementById("sel"). innerHTML = "1ª Questão: " + selecione;
    }
    ("---------------- ------------------- DE CAMPO VÁLIDO")

    ("---------------- ------------------- DE TEXTO CAMPO VÁLIDOS))
    deixe TextArea = documento. getElementById ("Q02"). valor;
    documento. getElementById ("área"). innerHTML = "2ª Questão: " + TextArea;
    documento. getElementById ("area1"). innerHTML = "2ª Questão: Administração, Enfermagem e Informática"

    
    resultado de let  = TextArea. inclui("Informática");
    deixar resultado1 = TextArea. inclui("Administração");
    deixar resultado2 = TextArea. inclui("Enfermagem");
    
    se (resultado && resultado1 && resultado2 ){
        encrementotextarea = 1;
        percent2 = 20;
        
    }mais{
        encrementotextarea = 0;
        por cento = 0;
        
    }
    ("---------------- ------------------- DE TEXTO CAMPO VÁLIDOS))

    ("---------------- ------------------- DE CAIXA DE SELEÇÃO CAMPO VÁLIDA")
    deixe Octal = documento. getElementById ("check1");
    deixe Binario = documento. getElementById ("check2");
    deixe Decimal = documento. getElementById ("check3");
    deixe Hexadecimal = documento. getElementById ("check4");
    documento. getElementById ("cBox"). innerHTML = "3ª Questão:";
    documento. getElementById ("cBox1"). innerHTML = "3ª Questão: Binário e Hexadecimal";
    se (Binario. verificado && Hexadecimal. Verificado){
        encrementocheckbox = 1;
        percent3 = 20;
        
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Binário e Hexadecimal";
    }mais{
        encrementocheckbox = 0;
        percent3 = 0;
    }se (Octal. Verificado){
        encrementocheckbox = 0;
        percent3 = 0;       
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal";
    }se (Decimal. Verificado){
        encrementocheckbox = 0;
        percent3 = 0       
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Decimal";
    }  se (Binario. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Binário";       
    }  se (Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Hexadecimal";
    }     se (Octal. verificado && Decimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal e Decimal";
    }     se (Octal. verificado && Binario. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal e Binário";
    }     se (Octal. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal e Hexadecimal";
    }     se (Binario. verificado && Decimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Binário e Decimal";
    }     se (Binario. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Binário e Hexadecimal";
    }     se (Decimal. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Decimal e Hexadecimal";     
    }           se (Octal. verificado && Decimal. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal, Decimal e Hexadecimal";
    }           se (Octal. verificado && Binario. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal, Binário e Hexadecimal";
    }           se (Octal. verificado && Binario. verificado && Decimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal, Binário e Decimal";
    }           se (Binario. verificado && Decimal. verificado && Hexadecimal. Verificado){
        documento. getElementById ("cBox"). innerHTML = "3ª Questão: Binário, Decimal e Hexadecimal";   
    }                  se (Octal. verificado && Binario. verificado && Decimal. verificado && Hexadecimal. Verificado){
                    documento. getElementById ("cBox"). innerHTML = "3ª Questão: Octal, Binário, Decimal e Hexadecimal";
    }

    ("---------------- ------------------- DE CAIXA DE SELEÇÃO CAMPO VÁLIDA")

    ("---------------- ------------------- DE RÁDIO CAMPO VÁLIDA")
    documento. getElementById ("rádio"). innerHTML = "4ª Questão:";
    documento. getElementById("radio1"). innerHTML = "4ª Questão: Limpa Contato";

    se (iso. verificado){
        encrementoradio = 0;
        percent4 = 0;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Álcool Isopropílico";
    }else if (con.checked){
        encrementoradio = 1;
        percent4 = 20;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Limpa Contato";
    }else if(alc.checked){
        encrementoradio = 0;
        percent4 = 0;
        
        document.getElementById("radio").innerHTML = "4ª Questão: Álcool 70%";
    }else if(agu.checked){
        encrementoradio = 0;
        percent4 = 0;
       
        document.getElementById("radio").innerHTML = "4ª Questão: Água";
    }
    // ("---------------- VALID CAMPO RADIO -------------------")

    // ("---------------- VALID CAMPO V or F -------------------")
    document.getElementById("vf").innerHTML = "5ª Questão: ";
    document.getElementById("vf1").innerHTML = "5ª Questão: Verdadeira";

    se (ver. verificado){
        encrementovorf = 1;
        percent5 = 20;
        
        documento. getElementById("vf"). innerHTML = "5ª Questão: Verdadeira";
    }mais se (fal. verificado){
        encrementovorf = 0;
        percent5 = 0;
        
        documento. getElementById("vf"). innerHTML = "5ª Questão: Falsa";
    }
    ("---------------- CAMPO V ou F ------------------- VÁLIDOs))

    ("---------------- CÁLCULO PERCENTUAL -------------------))
    por cento = percent1 + percent2 + percent3 + percent4 + percent5;
    
    switch (por cento){
        caso 0: percentn = 100;
        quebrar;
        caso 20: percentn = 80;
        quebrar;
        caso 40: percentn = 60;
        quebrar;
        caso 60: percentn = 40;
        quebrar;
        caso 80: percentn = 20;
        quebrar;
        caso 100: percentn = 0;
        quebrar;
        padrão: console. log ("teste");
    }
    ("---------------- CÁLCULO PERCENTUAL -------------------))

    ("---------------- MOSTRANDO OS RESULTADOS -------------------)) 
    resultado = encrementoselect + encrementotextarea + encrementocheckbox + encrementoradio + encrementovorf;
    documento. getElementById("nome"). innerHTML = "Nome: " + nome;
    documento. getElementById ("corretas"). innerHTML = "Corretas: " + resultado ;
    documento. getElementById("percentual"). innerHTML = "Percentual: Acertos " + por cento +"% " +" Erros "+ percentn +"%" ;
    ("---------------- MOSTRANDO OS RESULTADOS -------------------))
}