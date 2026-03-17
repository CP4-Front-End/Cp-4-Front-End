const produtos = {

    1: {
        nome: "Camiseta D-Wall",
        preco: "R$100,00",
        imagem: "./src/imgs/tshirt-1.png",
        descricao: "Camiseta ecológica feita com materiais sustentáveis."
    },

    2: {
        nome: "Jaqueta D-Wall",
        preco: "R$229,00",
        imagem: "./src/imgs/hoddie-1.png",
        descricao: "Jaqueta sustentável confortável para dias frios."
    },

    3: {
        nome: "Moletom D-Wall",
        preco: "R$180,00",
        imagem: "./src/imgs/hoddie-2.png",
        descricao: "Moletom ecológico produzido com algodão reciclado."
    },

    4: {
        nome: "Chapéu D-Wall",
        preco: "R$59,00",
        imagem: "./src/imgs/hat-1.png",
        descricao: "Chapéu sustentável com design minimalista."
    },

    5: {
        nome: "Hidratante D-Wall",
        preco: "R$29,00",
        imagem: "./src/imgs/beauty-1.png",
        descricao: "Hidratante natural feito com ingredientes ecológicos."
    },

    6: {
        nome: "Óleo D-Wall",
        preco: "R$39,00",
        imagem: "./src/imgs/beauty-2.png",
        descricao: "Óleo corporal natural com fragrância suave."
    },

    7: {
        nome: "Perfume D-Wall",
        preco: "R$119,00",
        imagem: "./src/imgs/beauty-3.png",
        descricao: "Perfume sustentável com aroma marcante."
    },

    8: {
        nome: "Loção D-Wall",
        preco: "R$9,90",
        imagem: "./src/imgs/beauty-4.png",
        descricao: "Loção hidratante leve para uso diário."
    },

    9: {
        nome: "Lixeira D-Wall",
        preco: "Em breve",
        imagem: "./src/imgs/tech-1.png",
        descricao: "Lixeira inteligente feita com materiais recicláveis."
    },

    10: {
        nome: "Ecossistema D-Wall",
        preco: "Em breve",
        imagem: "./src/imgs/tech-2.png",
        descricao: "Aplicativo que conecta todos os produtos sustentáveis."
    },

    11: {
        nome: "Capinha D-Wall",
        preco: "R$39,00",
        imagem: "./src/imgs/tech-3.png",
        descricao: "Capinha ecológica para smartphone."
    },

    12: {
        nome: "Disquete D-Wall",
        preco: "R$9,90",
        imagem: "./src/imgs/tech-4.png",
        descricao: "Item nostálgico inspirado em tecnologia retrô."
    },

    13: {
        nome: "Caneca D-Wall",
        preco: "R$20,00",
        imagem: "./src/imgs/casa-1.png",
        descricao: "Caneca ecológica perfeita para café ou chá."
    },

    14: {
        nome: "Vela D-Wall",
        preco: "R$15,00",
        imagem: "./src/imgs/casa-2.png",
        descricao: "Vela aromática produzida com cera natural."
    },

    15: {
        nome: "Quadro D-Wall",
        preco: "R$29,00",
        imagem: "./src/imgs/casa-3.png",
        descricao: "Quadro decorativo sustentável para ambientes modernos."
    },

    16: {
        nome: "Vaso de Flor D-Wall",
        preco: "R$9,90",
        imagem: "./src/imgs/casa-4.png",
        descricao: "Vaso minimalista ideal para decoração ecológica."
    }

};
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const produto = produtos[Number(id)];

console.log("ID recebido:", id);

if(produto){
    document.getElementById("nomeProduto").innerText = produto.nome;
    document.getElementById("precoProduto").innerText = produto.preco;
    document.getElementById("imagemProduto").src = produto.imagem;
    document.getElementById("descricaoProduto").innerText = produto.descricao;
}else{
    console.log("Produto não encontrado");
}
