/* ------------------ Script do Carrinho ------------------ */

// Variável que será utilizada para remover o botão "Remover" de cada produto
let btn_remove;
let cart_area;


/* Apresentação dos itens inseridos no localStorage */

/* Itens de O Pequeno Príncipe */
let img_book = document.querySelector('.cart_left').innerHTML = localStorage.getItem('Foto 1');
let name_book = document.querySelector('.cart_book').innerHTML = localStorage.getItem('Nome 1');
let categoria = document.querySelector('.cart_category').innerHTML = localStorage.getItem('Autor 1');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 1')) != 0){
    let price = document.querySelector('.cart_price').innerHTML = localStorage.getItem('Preço 1');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 1')) == 25){
    btn_remove = document.querySelector('.cart_icon.principe');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.principe');
    btn_remove.style.display = 'none';
}

/* Itens de O Diário de Anne Frank */
let img_book_anne = document.querySelector('.cart_left.anne').innerHTML = localStorage.getItem('Foto 2');
let name_book_anne = document.querySelector('.cart_book.anne').innerHTML = localStorage.getItem('Nome 2');
let categoria_anne = document.querySelector('.cart_category.anne').innerHTML = localStorage.getItem('Autor 2');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 2')) != 0){
    let price = document.querySelector('.cart_price.anne').innerHTML = localStorage.getItem('Preço 2');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 2')) == 25){
    btn_remove = document.querySelector('.cart_icon.anne');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.anne');
    btn_remove.style.display = 'none';
}

/* Itens de O Código Da Vinci */
let img_book_davinci = document.querySelector('.cart_left.davinci').innerHTML = localStorage.getItem('Foto 3');
let name_book_davinci = document.querySelector('.cart_book.davinci').innerHTML = localStorage.getItem('Nome 3');
let categoria_davinci = document.querySelector('.cart_category.davinci').innerHTML = localStorage.getItem('Autor 3');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 3')) != 0){
    let price = document.querySelector('.cart_price.davinci').innerHTML = localStorage.getItem('Preço 3');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 3')) == 25){
    btn_remove = document.querySelector('.cart_icon.davinci');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.davinci');
    btn_remove.style.display = 'none';
}
/* Itens de Dom Quixote */
let img_book_quixote = document.querySelector('.cart_left.quixote').innerHTML = localStorage.getItem('Foto 4');
let name_book_quixote = document.querySelector('.cart_book.quixote').innerHTML = localStorage.getItem('Nome 4');
let categoria_quixote = document.querySelector('.cart_category.quixote').innerHTML = localStorage.getItem('Autor 4');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 4')) != 0){
    let price = document.querySelector('.cart_price.quixote').innerHTML = localStorage.getItem('Preço 4');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 4')) == 25){
    btn_remove = document.querySelector('.cart_icon.quixote');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.quixote');
    btn_remove.style.display = 'none';
}

/* Itens de O Apanhador no Campo de Centeio */
let img_book_apanhador = document.querySelector('.cart_left.apanhador').innerHTML = localStorage.getItem('Foto 5');
let name_book_apanhador = document.querySelector('.cart_book.apanhador').innerHTML = localStorage.getItem('Nome 5');
let categoria_apanhador = document.querySelector('.cart_category.apanhador').innerHTML = localStorage.getItem('Autor 5');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 5')) != 0){
    let price = document.querySelector('.cart_price.apanhador').innerHTML = localStorage.getItem('Preço 5');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 5')) == 25){
    btn_remove = document.querySelector('.cart_icon.apanhador');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.apanhador');
    btn_remove.style.display = 'none';
}

/* Itens de Box - Harry Potter */
let img_book_box_harry = document.querySelector('.cart_left.harry_box').innerHTML = localStorage.getItem('Foto 6');
let name_book_box_harry = document.querySelector('.cart_book.harry_box').innerHTML = localStorage.getItem('Nome 6');
let categoria_box_harry = document.querySelector('.cart_category.harry_box').innerHTML = localStorage.getItem('Autor 6');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 6')) != 0){
    let price = document.querySelector('.cart_price.harry_box').innerHTML = localStorage.getItem('Preço 6');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 6')) == 50){
    btn_remove = document.querySelector('.cart_icon.harry_box');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.harry_box');
    btn_remove.style.display = 'none';
}

/* Itens de O Hobbit */
let img_book_o_hobbit = document.querySelector('.cart_left.hobbit').innerHTML = localStorage.getItem('Foto 7');
let name_book_o_hobbit = document.querySelector('.cart_book.hobbit').innerHTML = localStorage.getItem('Nome 7');
let categoria_o_hobbit = document.querySelector('.cart_category.hobbit').innerHTML = localStorage.getItem('Autor 7');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 7')) != 0){
    let price = document.querySelector('.cart_price.hobbit').innerHTML = localStorage.getItem('Preço 7');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 7')) == 50){
    btn_remove = document.querySelector('.cart_icon.hobbit');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.hobbit');
    btn_remove.style.display = 'none';
}

/* Itens de Box - O Senhor dos Anéis */
let img_book_box_aneis = document.querySelector('.cart_left.aneis').innerHTML = localStorage.getItem('Foto 8');
let name_book_box_aneis = document.querySelector('.cart_book.aneis').innerHTML = localStorage.getItem('Nome 8');
let categoria_box_aneis = document.querySelector('.cart_category.aneis').innerHTML = localStorage.getItem('Autor 8');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 8')) != 0){
    let price = document.querySelector('.cart_price.aneis').innerHTML = localStorage.getItem('Preço 8');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 8')) == 50){
    btn_remove = document.querySelector('.cart_icon.aneis');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.aneis');
    btn_remove.style.display = 'none';
}

let img_book_pedra_filosofal = document.querySelector('.cart_left.harry_pedra').innerHTML = localStorage.getItem('Foto 9');
let name_book_pedra_filosofal = document.querySelector('.cart_book.harry_pedra').innerHTML = localStorage.getItem('Nome 9');
let categoria_pedra_filosofal = document.querySelector('.cart_category.harry_pedra').innerHTML = localStorage.getItem('Autor 9');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 9')) != 0){
    let price = document.querySelector('.cart_price.harry_pedra').innerHTML = localStorage.getItem('Preço 9');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 9')) == 50){
    btn_remove = document.querySelector('.cart_icon.harry_pedra');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.harry_pedra');
    btn_remove.style.display = 'none';
}

let img_book_eu_robo = document.querySelector('.cart_left.robo').innerHTML = localStorage.getItem('Foto 10');
let name_book_eu_robo = document.querySelector('.cart_book.robo').innerHTML = localStorage.getItem('Nome 10');
let categoria_eu_robo = document.querySelector('.cart_category.robo').innerHTML = localStorage.getItem('Autor 10');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 10')) != 0){
    let price = document.querySelector('.cart_price.robo').innerHTML = localStorage.getItem('Preço 10');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 10')) == 50){
    btn_remove = document.querySelector('.cart_icon.robo');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.robo');
    btn_remove.style.display = 'none';
}

let img_book_bras_cubas = document.querySelector('.cart_left.cubas').innerHTML = localStorage.getItem('Foto 11');
let name_book_bras_cubas = document.querySelector('.cart_book.cubas').innerHTML = localStorage.getItem('Nome 11');
let categoria_bras_cubas = document.querySelector('.cart_category.cubas').innerHTML = localStorage.getItem('Autor 11');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 11')) != 0){
    let price = document.querySelector('.cart_price.cubas').innerHTML = localStorage.getItem('Preço 11');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 11')) == 20){
    btn_remove = document.querySelector('.cart_icon.cubas');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.cubas');
    btn_remove.style.display = 'none';
}

let img_book_senhora = document.querySelector('.cart_left.senhora').innerHTML = localStorage.getItem('Foto 12');
let name_book_senhora = document.querySelector('.cart_book.senhora').innerHTML = localStorage.getItem('Nome 12');
let categoria_senhora = document.querySelector('.cart_category.senhora').innerHTML = localStorage.getItem('Autor 12');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 12')) != 0){
    let price = document.querySelector('.cart_price.senhora').innerHTML = localStorage.getItem('Preço 12');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 12')) == 20){
    btn_remove = document.querySelector('.cart_icon.senhora');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.senhora');
    btn_remove.style.display = 'none';
}

let img_book_o_guarani = document.querySelector('.cart_left.guarani').innerHTML = localStorage.getItem('Foto 13');
let name_book_o_guarani = document.querySelector('.cart_book.guarani').innerHTML = localStorage.getItem('Nome 13');
let categoria_o_guarani = document.querySelector('.cart_category.guarani').innerHTML = localStorage.getItem('Autor 13');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 13')) != 0){
    let price = document.querySelector('.cart_price.guarani').innerHTML = localStorage.getItem('Preço 13');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 13')) == 20){
    btn_remove = document.querySelector('.cart_icon.guarani');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.guarani');
    btn_remove.style.display = 'none';
}

let img_book_iracema = document.querySelector('.cart_left.iracema').innerHTML = localStorage.getItem('Foto 14');
let name_book_iracema = document.querySelector('.cart_book.iracema').innerHTML = localStorage.getItem('Nome 14');
let categoria_iracema = document.querySelector('.cart_category.iracema').innerHTML = localStorage.getItem('Autor 14');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 14')) != 0){
    let price = document.querySelector('.cart_price.iracema').innerHTML = localStorage.getItem('Preço 14');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 14')) == 20){
    btn_remove = document.querySelector('.cart_icon.iracema');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.iracema');
    btn_remove.style.display = 'none';
}

let img_book_o_cortico = document.querySelector('.cart_left.cortico').innerHTML = localStorage.getItem('Foto 15');
let name_book_o_cortico = document.querySelector('.cart_book.cortico').innerHTML = localStorage.getItem('Nome 15');
let categoria_o_cortico = document.querySelector('.cart_category.cortico').innerHTML = localStorage.getItem('Autor 15');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 15')) != 0){
    let price = document.querySelector('.cart_price.cortico').innerHTML = localStorage.getItem('Preço 15');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 15')) == 20){
    btn_remove = document.querySelector('.cart_icon.cortico');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.cortico');
    btn_remove.style.display = 'none';
}

let img_book_o_peregrino = document.querySelector('.cart_left.peregrino').innerHTML = localStorage.getItem('Foto 16');
let name_book_o_peregrino = document.querySelector('.cart_book.peregrino').innerHTML = localStorage.getItem('Nome 16');
let categoria_o_peregrino = document.querySelector('.cart_category.peregrino').innerHTML = localStorage.getItem('Autor 16');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 16')) != 0){
    let price = document.querySelector('.cart_price.peregrino').innerHTML = localStorage.getItem('Preço 16');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 16')) == 50){
    btn_remove = document.querySelector('.cart_icon.peregrino');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.peregrino');
    btn_remove.style.display = 'none';
}

let img_book_narnia_1 = document.querySelector('.cart_left.narnia1').innerHTML = localStorage.getItem('Foto 17');
let name_book_narnia_1 = document.querySelector('.cart_book.narnia1').innerHTML = localStorage.getItem('Nome 17');
let categoria_narnia_1 = document.querySelector('.cart_category.narnia1').innerHTML = localStorage.getItem('Autor 17');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 17')) != 0){
    let price = document.querySelector('.cart_price.narnia1').innerHTML = localStorage.getItem('Preço 17');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 17')) == 50){
    btn_remove = document.querySelector('.cart_icon.narnia1');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.narnia1');
    btn_remove.style.display = 'none';
}

let img_book_narnia_7 = document.querySelector('.cart_left.narnia7').innerHTML = localStorage.getItem('Foto 18');
let name_book_narnia_7 = document.querySelector('.cart_book.narnia7').innerHTML = localStorage.getItem('Nome 18');
let categoria_narnia_7 = document.querySelector('.cart_category.narnia7').innerHTML = localStorage.getItem('Autor 18');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 18')) != 0){
    let price = document.querySelector('.cart_price.narnia7').innerHTML = localStorage.getItem('Preço 18');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 18')) == 50){
    btn_remove = document.querySelector('.cart_icon.narnia7');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.narnia7');
    btn_remove.style.display = 'none';
}

let img_book_puro_e_simples = document.querySelector('.cart_left.cristianismo').innerHTML = localStorage.getItem('Foto 19');
let name_book_puro_e_simples = document.querySelector('.cart_book.cristianismo').innerHTML = localStorage.getItem('Nome 19');
let categoria_puro_e_simples = document.querySelector('.cart_category.cristianismo').innerHTML = localStorage.getItem('Autor 19');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 19')) != 0){
    let price = document.querySelector('.cart_price.cristianismo').innerHTML = localStorage.getItem('Preço 19');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 19')) == 50){
    btn_remove = document.querySelector('.cart_icon.cristianismo');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.cristianismo');
    btn_remove.style.display = 'none';
}

let img_book_cafe_com_deus_pai = document.querySelector('.cart_left.cafe').innerHTML = localStorage.getItem('Foto 20');
let name_book_cafe_com_deus_pai = document.querySelector('.cart_book.cafe').innerHTML = localStorage.getItem('Nome 20');
let categoria_cafe_com_deus_pai = document.querySelector('.cart_category.cafe').innerHTML = localStorage.getItem('Autor 20');
// Se o valor do armazenamento for diferente de 0 ele exibirá, pois só assim saberemos que o produto está no carrinho
if(parseInt(localStorage.getItem('Preço 20')) != 0){
    let price = document.querySelector('.cart_price.cafe').innerHTML = localStorage.getItem('Preço 20');
}
// Caso o produto tenha sido adicionado no carrinho, o botão de remover aparecerá. Caso contrário, não aparecerá
if(parseInt(localStorage.getItem('Preço 20')) == 50){
    btn_remove = document.querySelector('.cart_icon.cafe');
    btn_remove.style.display = 'flex';
}else{
    btn_remove = document.querySelector('.cart_icon.cafe');
    btn_remove.style.display = 'none';
}

/* Somando todos os produtos do carrinho */
let total = parseInt(localStorage.getItem('Preço 1')) + parseInt(localStorage.getItem('Preço 2')) + parseInt(localStorage.getItem('Preço 3')) + parseInt(localStorage.getItem('Preço 4')) + parseInt(localStorage.getItem('Preço 5')) + parseInt(localStorage.getItem('Preço 6')) + parseInt(localStorage.getItem('Preço 7')) + parseInt(localStorage.getItem('Preço 8')) + parseInt(localStorage.getItem('Preço 9')) + parseInt(localStorage.getItem('Preço 10')) + parseInt(localStorage.getItem('Preço 11')) + parseInt(localStorage.getItem('Preço 12')) + parseInt(localStorage.getItem('Preço 13')) + parseInt(localStorage.getItem('Preço 14')) + parseInt(localStorage.getItem('Preço 15')) + parseInt(localStorage.getItem('Preço 16')) + parseInt(localStorage.getItem('Preço 17')) + parseInt(localStorage.getItem('Preço 18')) + parseInt(localStorage.getItem('Preço 19')) + parseInt(localStorage.getItem('Preço 20'));

/* Exibindo o total do carrinho */
if(total == 0){
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    document.querySelector('.mensage').innerHTML = "Não há nenhum produto no carrinho"
} else{
    document.querySelector('.total_price').innerHTML = "R$ " + total;
}

/* Funções para cada item que, ao clicar no botão "Remover", escluirá o item do carrinho e fará deleção dos dados do LocalStorage: */

// Sucessos
let cart_icon_principe = document.querySelector('.cart_icon.principe').addEventListener('click', () => {
    localStorage.removeItem('Foto 1');
    localStorage.removeItem('Nome 1');
    localStorage.removeItem('Autor 1');
    total = total - parseInt(localStorage.getItem('Preço 1'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 1');
    btn_remove = document.querySelector('.cart_icon.principe');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.principe');
    cart_area.style.display = 'none';
});

let cart_icon_anne = document.querySelector('.cart_icon.anne').addEventListener('click', () => {
    localStorage.removeItem('Foto 2');
    localStorage.removeItem('Nome 2');
    localStorage.removeItem('Autor 2');
    total = total - parseInt(localStorage.getItem('Preço 2'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 2');
    btn_remove = document.querySelector('.cart_icon.anne');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.anne');
    cart_area.style.display = 'none';
});

let cart_icon_davinci = document.querySelector('.cart_icon.davinci').addEventListener('click', () => {
    localStorage.removeItem('Foto 3');
    localStorage.removeItem('Nome 3');
    localStorage.removeItem('Autor 3');
    total = total - parseInt(localStorage.getItem('Preço 3'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 3');
    btn_remove = document.querySelector('.cart_icon.davinci');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.davinci');
    cart_area.style.display = 'none';
});

let cart_icon_quixote = document.querySelector('.cart_icon.quixote').addEventListener('click', () => {
    localStorage.removeItem('Foto 4');
    localStorage.removeItem('Nome 4');
    localStorage.removeItem('Autor 4');
    total = total - parseInt(localStorage.getItem('Preço 4'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 4');
    btn_remove = document.querySelector('.cart_icon.quixote');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.quixote');
    cart_area.style.display = 'none';
});

let cart_icon_apanhador = document.querySelector('.cart_icon.apanhador').addEventListener('click', () => {
    localStorage.removeItem('Foto 5');
    localStorage.removeItem('Nome 5');
    localStorage.removeItem('Autor 5');
    total = total - parseInt(localStorage.getItem('Preço 5'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 5');
    btn_remove = document.querySelector('.cart_icon.apanhador');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.apanhador');
    cart_area.style.display = 'none';
});

// Ficção
let cart_icon_box_harry = document.querySelector('.cart_icon.harry_box').addEventListener('click', () => {
    localStorage.removeItem('Foto 6');
    localStorage.removeItem('Nome 6');
    localStorage.removeItem('Autor 6');
    total = total - parseInt(localStorage.getItem('Preço 6'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 6');
    btn_remove = document.querySelector('.cart_icon.harry_box');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.harry_box');
    cart_area.style.display = 'none';
});

let cart_icon_o_hobbit = document.querySelector('.cart_icon.hobbit').addEventListener('click', () => {
    localStorage.removeItem('Foto 7');
    localStorage.removeItem('Nome 7');
    localStorage.removeItem('Autor 7');
    total = total - parseInt(localStorage.getItem('Preço 7'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 7');
    btn_remove = document.querySelector('.cart_icon.hobbit');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.hobbit');
    cart_area.style.display = 'none';
});

let cart_icon_box_aneis = document.querySelector('.cart_icon.aneis').addEventListener('click', () => {
    localStorage.removeItem('Foto 8');
    localStorage.removeItem('Nome 8');
    localStorage.removeItem('Autor 8');
    total = total - parseInt(localStorage.getItem('Preço 8'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 8');
    btn_remove = document.querySelector('.cart_icon.aneis');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.aneis');
    cart_area.style.display = 'none';
});

let cart_icon_pedra_filosofal = document.querySelector('.cart_icon.harry_pedra').addEventListener('click', () => {
    localStorage.removeItem('Foto 9');
    localStorage.removeItem('Nome 9');
    localStorage.removeItem('Autor 9');
    total = total - parseInt(localStorage.getItem('Preço 9'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 9');
    btn_remove = document.querySelector('.cart_icon.harry_pedra');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.harry_pedra');
    cart_area.style.display = 'none';
});

let cart_icon_eu_robo = document.querySelector('.cart_icon.robo').addEventListener('click', () => {
    localStorage.removeItem('Foto 10');
    localStorage.removeItem('Nome 10');
    localStorage.removeItem('Autor 10');
    total = total - parseInt(localStorage.getItem('Preço 10'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 10');
    btn_remove = document.querySelector('.cart_icon.robo');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.robo');
    cart_area.style.display = 'none';
});

// Literatura Brasileira
let cart_icon_bras_cubas = document.querySelector('.cart_icon.cubas').addEventListener('click', () => {
    localStorage.removeItem('Foto 11');
    localStorage.removeItem('Nome 11');
    localStorage.removeItem('Autor 11');
    total = total - parseInt(localStorage.getItem('Preço 11'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 11');
    btn_remove = document.querySelector('.cart_icon.cubas');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.cubas');
    cart_area.style.display = 'none';
});

let cart_icon_senhora = document.querySelector('.cart_icon.senhora').addEventListener('click', () => {
    localStorage.removeItem('Foto 12');
    localStorage.removeItem('Nome 12');
    localStorage.removeItem('Autor 12');
    total = total - parseInt(localStorage.getItem('Preço 12'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 12');
    btn_remove = document.querySelector('.cart_icon.senhora');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.senhora');
    cart_area.style.display = 'none';
});

let cart_icon_o_guarani = document.querySelector('.cart_icon.guarani').addEventListener('click', () => {
    localStorage.removeItem('Foto 13');
    localStorage.removeItem('Nome 13');
    localStorage.removeItem('Autor 13');
    total = total - parseInt(localStorage.getItem('Preço 13'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 13');
    btn_remove = document.querySelector('.cart_icon.guarani');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.guarani');
    cart_area.style.display = 'none';
});

let cart_icon_iracema = document.querySelector('.cart_icon.iracema').addEventListener('click', () => {
    localStorage.removeItem('Foto 14');
    localStorage.removeItem('Nome 14');
    localStorage.removeItem('Autor 14');
    total = total - parseInt(localStorage.getItem('Preço 14'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 14');
    btn_remove = document.querySelector('.cart_icon.iracema');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.iracema');
    cart_area.style.display = 'none';
});

let cart_icon_o_cortico = document.querySelector('.cart_icon.cortico').addEventListener('click', () => {
    localStorage.removeItem('Foto 15');
    localStorage.removeItem('Nome 15');
    localStorage.removeItem('Autor 15');
    total = total - parseInt(localStorage.getItem('Preço 15'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 15');
    btn_remove = document.querySelector('.cart_icon.cortico');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.cortico');
    cart_area.style.display = 'none';
});

// Literatura Cristã:
let cart_icon_o_peregrino = document.querySelector('.cart_icon.peregrino').addEventListener('click', () => {
    localStorage.removeItem('Foto 16');
    localStorage.removeItem('Nome 16');
    localStorage.removeItem('Autor 16');
    total = total - parseInt(localStorage.getItem('Preço 16'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 16');
    btn_remove = document.querySelector('.cart_icon.peregrino');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.peregrino');
    cart_area.style.display = 'none';
});

let cart_icon_narnia_1 = document.querySelector('.cart_icon.narnia1').addEventListener('click', () => {
    localStorage.removeItem('Foto 17');
    localStorage.removeItem('Nome 17');
    localStorage.removeItem('Autor 17');
    total = total - parseInt(localStorage.getItem('Preço 17'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 17');
    btn_remove = document.querySelector('.cart_icon.narnia1');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.narnia1');
    cart_area.style.display = 'none';
});

let cart_icon_narnia_7 = document.querySelector('.cart_icon.narnia7').addEventListener('click', () => {
    localStorage.removeItem('Foto 18');
    localStorage.removeItem('Nome 18');
    localStorage.removeItem('Autor 18');
    total = total - parseInt(localStorage.getItem('Preço 18'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 18');
    btn_remove = document.querySelector('.cart_icon.narnia7');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.narnia7');
    cart_area.style.display = 'none';
});

let cart_icon_puro_e_simples = document.querySelector('.cart_icon.cristianismo').addEventListener('click', () => {
    localStorage.removeItem('Foto 19');
    localStorage.removeItem('Nome 19');
    localStorage.removeItem('Autor 19');
    total = total - parseInt(localStorage.getItem('Preço 19'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 19');
    btn_remove = document.querySelector('.cart_icon.cristianismo');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.cristianismo');
    cart_area.style.display = 'none';
});

let cart_icon_cafe_com_deus_pai = document.querySelector('.cart_icon.cafe').addEventListener('click', () => {
    localStorage.removeItem('Foto 20');
    localStorage.removeItem('Nome 20');
    localStorage.removeItem('Autor 20');
    total = total - parseInt(localStorage.getItem('Preço 20'));
    document.querySelector('.total_price').innerHTML = "R$ " + total;
    localStorage.removeItem('Preço 20');
    btn_remove = document.querySelector('.cart_icon.cafe');
    btn_remove.style.display = 'none';
    cart_area = document.querySelector('.cart_area.cafe');
    cart_area.style.display = 'none';
});


/* Função que executará a compra dos produtos do carrinho, caso haja produtos nele: */
let efetuar_compra = document.querySelector('.total_button').addEventListener('click', () => {
    if(total == 0){
        alert("Não há nada no carrinho")
    } else if(total > 0){

        // Mensagem de que a compra foi efetuada
        alert("Compra de R$ " + total + " efetuada com sucesso");
        total = 0;
        document.querySelector('.total_price').innerHTML = "R$ " + total;

        // Removendo itens por card de livro
        btn_remove = document.querySelector('.cart_icon.principe');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.principe');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.anne');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.anne');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.davinci');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.davinci');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.quixote');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.quixote');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.apanhador');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.apanhador');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.harry_box');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.harry_box');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.hobbit');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.hobbit');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.aneis');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.aneis');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.harry_pedra');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.harry_pedra');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.robo');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.robo');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.cubas');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.cubas');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.senhora');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.senhora');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.guarani');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.guarani');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.iracema');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.iracema');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.cortico');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.cortico');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.peregrino');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.peregrino');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.narnia1');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.narnia1');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.narnia7');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.narnia7');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.cristianismo');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.cristianismo');
        cart_area.style.display = 'none';

        btn_remove = document.querySelector('.cart_icon.cafe');
        btn_remove.style.display = 'none';
        cart_area = document.querySelector('.cart_area.cafe');
        cart_area.style.display = 'none';

        //Limpando o localStorage e zerando novamente os preços
        localStorage.clear();
        localStorage.setItem('Preço 1', 0);
        localStorage.setItem('Preço 2', 0);
        localStorage.setItem('Preço 3', 0);
        localStorage.setItem('Preço 4', 0);
        localStorage.setItem('Preço 5', 0);
        localStorage.setItem('Preço 6', 0);
        localStorage.setItem('Preço 7', 0);
        localStorage.setItem('Preço 8', 0);
        localStorage.setItem('Preço 9', 0);
        localStorage.setItem('Preço 10', 0);
        localStorage.setItem('Preço 11', 0);
        localStorage.setItem('Preço 12', 0);
        localStorage.setItem('Preço 13', 0);
        localStorage.setItem('Preço 14', 0);
        localStorage.setItem('Preço 15', 0);
        localStorage.setItem('Preço 16', 0);
        localStorage.setItem('Preço 17', 0);
        localStorage.setItem('Preço 18', 0);
        localStorage.setItem('Preço 19', 0);
        localStorage.setItem('Preço 20', 0);
                
        document.querySelector('.mensage').innerHTML = "Não há nenhum produto no carrinho";
    }
})

