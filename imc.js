const imc = (peso,altura) => peso / (altura*altura);
const situacao = (valor_imc) => {
    if(valor_imc<18.5)
        return"Abaixo do peso";

    else if(valor_imc<25)
        return"Peso ideal (Parabéns)";

    else if(valor_imc<30)
        return"Levemente acima do peso";

    else if(valor_imc<35)
        return"Obsidade de grau 1";
    
    else if(valor_imc<40)
        return"Obsidade de grau 2 (Severa)";
    
    else 
        return"Obsidade de grau 3 (Mórbida)";
}   
