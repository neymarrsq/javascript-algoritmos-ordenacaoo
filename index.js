const precoslivros = [25, 15, 30, 50, 45, 20];

let atual = 0; 
let maisBarato = 0;

for (let atual = 0; atual < precoslivros.length; atual++) {
 if (precoslivros[atual] < precoslivros[maisBarato]) {
    maisBarato = atual;
 }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o tíulo é ${livros[maisBarato].titulo}`);