const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("campo__titulo");
    const titulo__val = document.createTextNode(titulo.value);

    const descricao = document.getElementById("campo__descricao");
    const descricao__val = document.createTextNode(descricao.value);

    const img = document.getElementById("campo__imagem");
    const img__val = document.createTextNode(img.value);


    const post = document.getElementById("postagem");
    const section = document.createElement("section");
    section.classList.add("box__externo__post");

    const campo__imagem = document.createElement("img");
    campo__imagem.classList.add("img__post");
    campo__imagem.setAttribute('src', img.value);
    campo__imagem.appendChild(img__val);

    const campo__titulo = document.createElement("p");
    campo__titulo.classList.add("p__titulo");
    campo__titulo.appendChild(titulo__val);

    const campo__descricao = document.createElement("p");
    campo__descricao.classList.add("p__texto");
    campo__descricao.appendChild(descricao__val);

    section.appendChild(campo__imagem);
    section.appendChild(campo__titulo);
    section.appendChild(campo__descricao);
    post.appendChild(section);
});