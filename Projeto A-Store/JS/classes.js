/* --------- Script contendo as classes de cada categoria de livro --------- */

// Classe mãe 
class Livro{

    // Informações para inicialização de alguma instância de livro
    constructor(nome, autor){
        this.nome = nome;
        this.autor = autor;
    }

    setar_valor(identificador){

        let book_name = document.querySelector(`.book_name.${identificador}`);
        let book_autor = document.querySelector(`.book_autor.${identificador}`);
        let book_price = document.querySelector(`.book_price.${identificador}`);

        book_name.innerHTML = this.nome;
        book_autor.innerHTML = this.autor;
        book_price.innerHTML = 'R$ ' + this.preco;

    }   
}

// Classes que herdaram atributos

class Sucessos extends Livro{

    constructor(name, autor){
        super(name, autor);
        this.preco = 25;
    }

}

class Ficcao extends Livro{

    constructor(name, autor){
        super(name, autor);
        this.preco = 50;
    }

}

class Lit_bras extends Livro{

    constructor(name, autor){
        super(name, autor);
        this.preco = 20;
    }
    
}

class Lit_crista extends Livro{
    constructor(name, autor){
        super(name, autor);
        this.preco = 50;
    }
}