    /*
    aqui dizemos que enquanto a variavel "i" for menor que 10 haverá
    um incremento de +1, enquanto i for menor que 10 ele mostrará algo,
    quando i for igual a 10 ele termina o bloco. Em outras palavras, quando
    i chegar a 9 ele receberá o incremento e seu valor será 10, ele executará 
    o bloco porém não o repetirá.
    */
for (var i=0; i < 10; i++){

    console.log(i);

}

    console.log('i='+i);


    /*
    Observação importante, caso "i" esteja definido como VAR, igual no exemplo acima,
    ela poderá ser lida fora do bloco. Caso esteja usando LET ela não será visível fora 
    do bloco.
    */

    /*
    for (let iDois=0; i < 10; i++){

        console.log(iDois);

    }

    console.log('iDois='+iDois);
    */

    // Lembrentes de estudos anteriores
    let idade = 13;
    
    console.log('idade=', ++idade); // incrementa. caso queira incrementar um valor na variável, colocar o ++ antes da variável
    console.log('idade2=', idade++); // não incrementa



    