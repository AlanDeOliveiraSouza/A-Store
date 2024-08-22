/* ------------------ Script Da Página Inicial ------------------ */

/* 
    ÍNDICE:

    2.1 Utilização de ""snake_case"
    3.1 Aritméticos: Arquivo - "carrinho.js linha: 335"
    3.2 String: Declarações de strings
                Soma de strings dentro dos laços a partir da linha:305
    3.3 Atribuição: Exemplo de variáveis atribuidas:
                    i, variáveis de instanciação, variáveis de função
    3.4 Comparação: Dentro dos "if" e "else" em todo o código.
    3.5 Incremento e Decremento: Ex: linhas: 94, 334, 347
    3.6 Lógico: linha: 438
    3.7 Ternário: linha: 428
    4.1 Array: linhas: 307, 308, 309, 310, 433
    5.1 For: linha: 317
    5.2 ForEach: linha: 359
    5.3 While/DoWhile: linhas: 98, 331, 346
    6.1 If/Else: linhas: 102, em todos os laços
    6.2 Switch: linhas: 376, 405
    6.3 Ternário: linha: 15
    7.1 Classes: Arquivo - "classes.js"
    7.2 Herança: Arquivo - "classes.js"
    7.3 Instanciação de objetos: linha: 33
    8.1 Funções: linhas: 95, 145
    9.1 localStorage ou SessionStorage: localStorage nos arquivos: "script.js e carrinho.js"
    9.2 Leitura e Apresentação: Arquivo - "carrinho.js linha: 8"
    9.3 Atualização: linha:148, Arquivo - "carrinho.js linha: 348 em cada item, na função da linha 616 (da linha 726 em diante)"
    9.4 Deleção: Arquivo - "carrinho.js em cada item a partir da linha 348, linha 725"
    9.5 Inserção: linha 108, em cada função da linha 150
*/

/*  
    Instanciação da cada livro:
*/

/* ----------------------- INICIO DA INSTANCIAÇÃO --------------------------- */

// SUCESSOS
let pequeno_principe = criar_instancia(Sucessos, 'O Pequeno Príncipe', 'Antoine De Saint-Exupéry');
let anne_frank = criar_instancia(Sucessos, "O Diário de Anne Frank", "Anne Frank");
let da_vinci = criar_instancia(Sucessos, "O Código Da Vinci", "Dan Brown");
let dom_quixote = criar_instancia(Sucessos, "Dom Quixote", "Miguel de Cervantes");
let o_apanhador = criar_instancia(Sucessos, "O Apanhador no Campo de Centeio", "J. D. Salinger");

// FICÇÃO
let box_harry_potter = criar_instancia(Ficcao, "Box - Harry Potter", "J. K. Rowling");
let o_hobbit = criar_instancia(Ficcao, "O Hobbit", "J. R. R. Tolkien");
let box_aneis = criar_instancia(Ficcao, "Box - O Senhor dos Anéis", "J. R. R. Tolkien");
let pedra_filosofal = criar_instancia(Ficcao, "Harry Potter - E a Pedra Filosofal", "J. K. Rowling");
let eu_robo = criar_instancia(Ficcao, "Eu, Robô", "Isaac Asimov");

// LITERATURA BRASILEIRA
let bras_cubas = criar_instancia(Lit_bras, "Memórias Póstumas de Brás Cubas", "Machado de Assis");
let senhora = criar_instancia(Lit_bras, "Senhora", "José de Alencar");
let o_guarani = criar_instancia(Lit_bras, "O Guarani", "José de Alencar");
let iracema = criar_instancia(Lit_bras, "Iracema", "José de Alencar");
let o_cortico = criar_instancia(Lit_bras, "O Cortiço", "Aluísio Azevedo");

// LITERATURA CRISTÃ
let o_peregrino = criar_instancia(Lit_crista, "O Peregrino", "John Bunyan");
let narnia_1 = criar_instancia(Lit_crista, "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "C. S. Lewis");
let narnia_7 = criar_instancia(Lit_crista, "As Crônicas de Nárnia: A Última Batalha", "C. S. Lewis");
let puro_e_simples = criar_instancia(Lit_crista, "Cristianismo Puro e Simples", "C. S. Lewis");
let cafe_com_deus_pai = criar_instancia(Lit_crista, "Café com Deus Pai", "Junior Rostirola");

/* --------------------------- FIM DA INSTANCIAÇÃO --------------------------- */

// Setando valores de SUCESSOS
pequeno_principe.setar_valor('principe');
anne_frank.setar_valor('anne');
da_vinci.setar_valor('davinci');
dom_quixote.setar_valor('quixote');
o_apanhador.setar_valor('apanhador');

// Setando valores de FICCÃO
box_harry_potter.setar_valor('harry');
o_hobbit.setar_valor('hobbit');
box_aneis.setar_valor('aneis');
pedra_filosofal.setar_valor('pedra');
eu_robo.setar_valor('robo');

// Setando valores de LITERATURA BRASILEIRA
bras_cubas.setar_valor('cubas');
senhora.setar_valor('senhora');
o_guarani.setar_valor('guarani');
iracema.setar_valor('iracema');
o_cortico.setar_valor('cortico');

// Setando valores de LITERATURA CRISTÃ
o_peregrino.setar_valor('peregrino');
narnia_1.setar_valor('narnia1');
narnia_7.setar_valor('narnia7');
puro_e_simples.setar_valor('cristianismo');
cafe_com_deus_pai.setar_valor('cafe');


function criar_instancia(classe, nome_livro, autor){

    // Instânciando cada produto
    let nome = new classe(nome_livro, autor);

    return nome;
}

/* Adicionando ao localStorage valores nulos para caso o produto não tenha sido adicionado ao carrinho não haja inconsistências no total  */
var i = 0;
do{
    i++;

    if(parseInt(localStorage.getItem('Preço ' + i)) == 25){
        localStorage.setItem('Preço ' + i, parseInt(localStorage.getItem('Preço ' + i)));
    }else{
        localStorage.setItem('Preço ' + i, 0);
    }
} while(i < 5)

do{
    i++;

    if(parseInt(localStorage.getItem('Preço ' + i)) == 50){
        localStorage.setItem('Preço ' + i, parseInt(localStorage.getItem('Preço ' + i)));
    }else{
        localStorage.setItem('Preço ' + i, 0);
    }
} while(i < 10)

do{
    i++;

    if(parseInt(localStorage.getItem('Preço ' + i)) == 20){
        localStorage.setItem('Preço ' + i, parseInt(localStorage.getItem('Preço ' + i)));
    }else{
        localStorage.setItem('Preço ' + i, 0);
    }
} while(i < 15) 

do{
    i++;

    if(parseInt(localStorage.getItem('Preço ' + i)) == 50){
        localStorage.setItem('Preço ' + i, parseInt(localStorage.getItem('Preço ' + i)));
    }else{
        localStorage.setItem('Preço ' + i, 0);
    }
} while(i < 20)

/* 
    Funções que farão com que ao clicar nos botões dos livros, 
    serão guardados seus atributos no LocalStorage, ou atualizados (no caso dos preços) e irá direcioná-los ao carrinho.
*/

// Sucessos:
let botao_pequeno = document.querySelector('.book_buy').addEventListener('click', () => {
    localStorage.setItem('Foto 1', '<img class="img_book" src="IMG/pequeno.jpg" alt="o-pequeno-principe"/>');
    localStorage.setItem('Nome 1', pequeno_principe.nome);
    localStorage.setItem('Autor 1', pequeno_principe.autor);
    localStorage.setItem('Preço 1', pequeno_principe.preco);
    alert(pequeno_principe.nome + " foi adicionado ao carrinho.")
});

let botao_anne = document.querySelector('.book_buy.anne').addEventListener('click', () => {
    localStorage.setItem('Foto 2', '<img class="img_book" src="IMG/o-diario-da-anne-frank.webp" alt="o-diario-da-anne-frank"/>');
    localStorage.setItem('Nome 2', anne_frank.nome);
    localStorage.setItem('Autor 2', anne_frank.autor);
    localStorage.setItem('Preço 2', anne_frank.preco);
    alert(anne_frank.nome + " foi adicionado ao carrinho.");
});

let botao_davinci = document.querySelector('.book_buy.davinci').addEventListener('click', () => {
    localStorage.setItem('Foto 3', '<img class="img_book" src="IMG/o-codigo-da-vinci.jpg" alt="o-codigo-da-vinci"/>');
    localStorage.setItem('Nome 3', da_vinci.nome);
    localStorage.setItem('Autor 3', da_vinci.autor);
    localStorage.setItem('Preço 3', da_vinci.preco);
    alert(da_vinci.nome + " foi adicionado ao carrinho.");
});

let botao_quixote = document.querySelector('.book_buy.quixote').addEventListener('click', () => {
    localStorage.setItem('Foto 4', '<img class="img_book" src="IMG/dom-quixote.webp" alt="dom-quixote"/>');
    localStorage.setItem('Nome 4', dom_quixote.nome);
    localStorage.setItem('Autor 4', dom_quixote.autor);
    localStorage.setItem('Preço 4', dom_quixote.preco);
    alert(dom_quixote.nome + " foi adicionado ao carrinho.");
});

let botao_apanhador = document.querySelector('.book_buy.apanhador').addEventListener('click', () => {
    localStorage.setItem('Foto 5', '<img class="img_book" src="IMG/o-apanhador-no-campo-de-centeio.jpg" alt="o-apanhador-no-campo-de-centeio"/>');
    localStorage.setItem('Nome 5', o_apanhador.nome);
    localStorage.setItem('Autor 5', o_apanhador.autor);
    localStorage.setItem('Preço 5', o_apanhador.preco);
    alert(o_apanhador.nome + " foi adicionado ao carrinho.");
});

// Ficção:
let botao_box_harry = document.querySelector('.book_buy.harry').addEventListener('click', () => {
    localStorage.setItem('Foto 6', '<img class="img_book" src="IMG/box-harry-potter.jpg" alt="box-harry-potter"/>');
    localStorage.setItem('Nome 6', box_harry_potter.nome);
    localStorage.setItem('Autor 6', box_harry_potter.autor);
    localStorage.setItem('Preço 6', box_harry_potter.preco);
    alert(box_harry_potter.nome + " foi adicionado ao carrinho.");
});

let botao_o_hobbit = document.querySelector('.book_buy.hobbit').addEventListener('click', () => {
    localStorage.setItem('Foto 7', '<img class="img_book" src="IMG/o-hobbit.webp" alt="o-hobbit"/>');
    localStorage.setItem('Nome 7', o_hobbit.nome);
    localStorage.setItem('Autor 7', o_hobbit.autor);
    localStorage.setItem('Preço 7', o_hobbit.preco);
    alert(o_hobbit.nome + " foi adicionado ao carrinho.");
});

let botao_box_aneis = document.querySelector('.book_buy.aneis').addEventListener('click', () => {
    localStorage.setItem('Foto 8', '<img class="img_book" src="IMG/box-o-senhor-dos-aneis.jpg" alt="box-o-senhor-dos-aneis"/>');
    localStorage.setItem('Nome 8', box_aneis.nome);
    localStorage.setItem('Autor 8', box_aneis.autor);
    localStorage.setItem('Preço 8', box_aneis.preco);
    alert(box_aneis.nome + " foi adicionado ao carrinho.");
});

let botao_pedra_filosofal = document.querySelector('.book_buy.pedra').addEventListener('click', () => {
    localStorage.setItem('Foto 9', '<img class="img_book" src="IMG/harry-potter-1.jpg" alt="harry-potter-1"/>');
    localStorage.setItem('Nome 9', pedra_filosofal.nome);
    localStorage.setItem('Autor 9', pedra_filosofal.autor);
    localStorage.setItem('Preço 9', pedra_filosofal.preco);
    alert(pedra_filosofal.nome + " foi adicionado ao carrinho.");
});

let botao_eu_robo = document.querySelector('.book_buy.robo').addEventListener('click', () => {
    localStorage.setItem('Foto 10', '<img class="img_book" src="IMG/eu-robo.jpg" alt="eu-robo"/>');
    localStorage.setItem('Nome 10', eu_robo.nome);
    localStorage.setItem('Autor 10', eu_robo.autor);
    localStorage.setItem('Preço 10', eu_robo.preco);
    alert(eu_robo.nome + " foi adicionado ao carrinho.");
});

// Literatura Brasileira:
let botao_bras_cubas = document.querySelector('.book_buy.cubas').addEventListener('click', () => {
    localStorage.setItem('Foto 11', '<img class="img_book" src="IMG/m-p-bras-cubas.jpg" alt="memorias-postumas-de-bras-cubas"/>');
    localStorage.setItem('Nome 11', bras_cubas.nome);
    localStorage.setItem('Autor 11', bras_cubas.autor);
    localStorage.setItem('Preço 11', bras_cubas.preco);
    alert(bras_cubas.nome + " foi adicionado ao carrinho.");
});

let botao_senhora = document.querySelector('.book_buy.senhora').addEventListener('click', () => {
    localStorage.setItem('Foto 12', '<img class="img_book" src="IMG/senhora.jpg" alt="senhora"/>');
    localStorage.setItem('Nome 12', senhora.nome);
    localStorage.setItem('Autor 12', senhora.autor);
    localStorage.setItem('Preço 12', senhora.preco);
    alert(senhora.nome + " foi adicionado ao carrinho.");
});

let botao_o_guarani = document.querySelector('.book_buy.guarani').addEventListener('click', () => {
    localStorage.setItem('Foto 13', '<img class="img_book" src="IMG/o-guarani.jpg" alt="o-guarani"/>');
    localStorage.setItem('Nome 13', o_guarani.nome);
    localStorage.setItem('Autor 13', o_guarani.autor);
    localStorage.setItem('Preço 13', o_guarani.preco);
    alert(o_guarani.nome + " foi adicionado ao carrinho.");
});

let botao_iracema = document.querySelector('.book_buy.iracema').addEventListener('click', () => {
    localStorage.setItem('Foto 14', '<img class="img_book" src="IMG/iracema.jpg" alt="iracema"/>');
    localStorage.setItem('Nome 14', iracema.nome);
    localStorage.setItem('Autor 14', iracema.autor);
    localStorage.setItem('Preço 14', iracema.preco);
    alert(iracema.nome + " foi adicionado ao carrinho.");
});

let botao_o_cortico = document.querySelector('.book_buy.cortico').addEventListener('click', () => {
    localStorage.setItem('Foto 15', '<img class="img_book" src="IMG/o-cortico.jpg" alt="o-cortico"/>');
    localStorage.setItem('Nome 15', o_cortico.nome);
    localStorage.setItem('Autor 15', o_cortico.autor);
    localStorage.setItem('Preço 15', o_cortico.preco);
    alert(o_cortico.nome + " foi adicionado ao carrinho.");
});

// Literatura Cristã:
let botao_o_peregrino = document.querySelector('.book_buy.peregrino').addEventListener('click', () => {
    localStorage.setItem('Foto 16', '<img class="img_book" src="IMG/o-peregrino.png" alt="o-peregrino"/>');
    localStorage.setItem('Nome 16', o_peregrino.nome);
    localStorage.setItem('Autor 16', o_peregrino.autor);
    localStorage.setItem('Preço 16', o_peregrino.preco);
    alert(o_peregrino.nome + " foi adicionado ao carrinho.");
});

let botao_narnia_1 = document.querySelector('.book_buy.narnia1').addEventListener('click', () => {
    localStorage.setItem('Foto 17', '<img class="img_book" src="IMG/narnia-1.jpg" alt="narnia-1"/>');
    localStorage.setItem('Nome 17', narnia_1.nome);
    localStorage.setItem('Autor 17', narnia_1.autor);
    localStorage.setItem('Preço 17', narnia_1.preco);
    alert(narnia_1.nome + " foi adicionado ao carrinho.");
});

let botao_narnia_7 = document.querySelector('.book_buy.narnia7').addEventListener('click', () => {
    localStorage.setItem('Foto 18', '<img class="img_book" src="IMG/narnia-7.jpg" alt="narnia-7"/>');
    localStorage.setItem('Nome 18', narnia_7.nome);
    localStorage.setItem('Autor 18', narnia_7.autor);
    localStorage.setItem('Preço 18', narnia_7.preco);
    alert(narnia_7.nome + " foi adicionado ao carrinho.");
});

let botao_puro_e_simples = document.querySelector('.book_buy.cristianismo').addEventListener('click', () => {
    localStorage.setItem('Foto 19', '<img class="img_book" src="IMG/cristianismo-puro-e-simples.jpg" alt="cristianismo-puro-e-simples"/>');
    localStorage.setItem('Nome 19', puro_e_simples.nome);
    localStorage.setItem('Autor 19', puro_e_simples.autor);
    localStorage.setItem('Preço 19', puro_e_simples.preco);
    alert(puro_e_simples.nome + " foi adicionado ao carrinho.");
});

let botao_cafe_com_deus_pai = document.querySelector('.book_buy.cafe').addEventListener('click', () => {
    localStorage.setItem('Foto 20', '<img class="img_book" src="IMG/cafe-com-deus-pai.jpg" alt="cafe-com-deus-pai"/>');
    localStorage.setItem('Nome 20', cafe_com_deus_pai.nome);
    localStorage.setItem('Autor 20', cafe_com_deus_pai.autor);
    localStorage.setItem('Preço 20', cafe_com_deus_pai.preco);
    alert(cafe_com_deus_pai.nome + " foi adicionado ao carrinho.");
});

/* --------------------------------- */

// Declarando um Array por categoria de livro
let array_sucessos = ["O Pequeno Príncipe", "O Diário de Anne Frank", "O Código Da Vinci", "Dom Quixote", "O Apanhador no Campo de Centeio"];
let array_ficcao = ["Box - Harry Potter", "O Hobbit", "Box - O Senhor dos Anéis", "Harry Potter: E a Pedra Filosofal", "Eu, Robô"];
let array_lit_bras = ["Memórias Póstumas de Brás Cubas", "Senhora", "O Guarani", "Iracema", "O Cortiço"];
let array_lit_crista = ["O Peregrino", "As Crônicas de Narnia: O Leão, A Feiticeira e o Guarda-Roupa", "As Crônicas de Nárnia: A Última Batalha", "Cristianismo Puro e Simples", "Café com Deus Pai"];

// Laço (For) que dirá qual dos livros é meu favorito na categoria Sucessos
console.log(" ");
console.log("Livros da categoria Sucessos:");
for(i = 0; i < array_sucessos.length; i++){
    if(array_sucessos[i] == "O Pequeno Príncipe"){
        console.log(array_sucessos[i] + " é o meu livro favorito desta categoria!");
    } else{
        console.log(array_sucessos[i] + " é um dos livros que eu também gosto.");
    }
}

// Laço (While) que dirá qual dos livros é meu favorito na categoria Ficção
console.log(" ");
console.log("Livros da categoria Ficção:");
i = 0;
while(i < array_ficcao.length){
    if(array_ficcao[i] == "Box - Harry Potter"){
        console.log(array_ficcao[i] + " é a minha série de livros favorita desta categoria!");
    } else if(array_ficcao[i] == "Harry Potter: E a Pedra Filosofal"){
        console.log(array_ficcao[i] + " faz parte da minha coleção de livros favorita desta categoria!");
    } else{
        console.log(array_ficcao[i] + " é um dos livros que eu também gosto.");
    }
    i++;
}

// Laço (Do While) que dirá qual dos livros é meu favorito na categoria Literatura Brasileira
console.log(" ");
console.log("Livros da categoria Literatura Brasileira:");
i = array_lit_bras.length - 1;
do{
    if(array_lit_bras[i] == "Memórias Póstumas de Brás Cubas"){
        console.log(array_lit_bras[i] + " é o meu livro favorito desta categoria!");
    } else{
        console.log(array_lit_bras[i] + " é um dos livros que eu também gosto.");
    }
    i--;
} while(i >= 0)

// Laço (ForEach) que dirá a quantidade de caracteres do livro com maior nome na categoria Literatura Cristã
console.log(" ");
console.log("Livro com maior nome, e quantidade de caracteres na categoria Literatura Cristã:");
let big_book;
let menor = 0;
array_lit_crista.forEach((cristaFunction) => {
    if(cristaFunction.length > menor){
        menor = cristaFunction.length
        big_book = cristaFunction;
    }
});
console.log(big_book + ": " + menor);
console.log(" ");

// Utilizando o Switch para apresentar no console o nome pré-definido de um livro, caso esteja no Array
console.log("Apresentando o nome pré-definido de um livro, caso esteja no Array Literatura Brasileira")
let the_book = "O Peregrino";
i = 4;

switch(the_book){
    case array_lit_bras[i]:
        console.log(array_lit_bras[i] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_bras[i-1]:
        console.log(array_lit_bras[i-1] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_bras[i-2]:
        console.log(array_lit_bras[i-2] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_bras[i-3]:
        console.log(array_lit_bras[i-3] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_bras[i-4]:
        console.log(array_lit_bras[i-4] + " é o livro escolhido.");
        console.log(" ");
    break;
    default:
        console.log("Nenhuma das alternativas é o livro escolhido.");
        console.log(" ");
    break;
}

console.log("Apresentando o nome pré-definido de um livro, caso esteja no Array Literatura Cristã")

switch(the_book){
    case array_lit_crista[i]:
        console.log(array_lit_crista[i] + " é o livro escolhido.");
        console.log(" ");
    case array_lit_crista[i-1]:
        console.log(array_lit_crista[i-1] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_crista[i-2]:
        console.log(array_lit_crista[i-2] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_crista[i-3]:
        console.log(array_lit_crista[i-3] + " é o livro escolhido.");
        console.log(" ");
    break;
    case array_lit_crista[i-4]:
        console.log(array_lit_crista[i-4] + " é o livro escolhido.");
        console.log(" ");
    break;
    default:
        console.log("Nenhuma das alternativas é o livro escolhido.");
        console.log(" ");
    break;
}

// Operador ternário que analisará se certo livro está incluido na variável

console.log(the_book);
var ternario_book = the_book == "O Peregrino" ? "É este livro" : "Não é este livro";
console.log(ternario_book);

// Array que contém o nome dos autores dos livros da categoria Literatura Cristã
let autor_lit_crista = ["John Bunyan", "C. S. Lewis", "C. S. Lewis", "C. S. Lewis", "Junior Rostirola"]


// Utilizando operador lógico && (e) para imprimir no console caso mais de um livro tenha um mesmo autor
let k = 0;
for(i = 0; i < array_lit_crista.length; i++){
    for(j = 0; j < autor_lit_crista.length; j++){
        if(array_lit_crista[i] != array_lit_crista[j] && autor_lit_crista[i] == autor_lit_crista[j] && array_lit_crista[i] != array_lit_crista[i-k]){
            if(array_lit_crista[i])
            array_lit_crista[i]
            console.log(array_lit_crista[i] + " e " + array_lit_crista[j] + " foram escritos pelo mesmo autor: " + autor_lit_crista[i] + ".")
            k++;

        } else {
            k++;
        }
    }
}