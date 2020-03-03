alert("Bem vindo ao Jogo do Milhão!")
let name = prompt("Insira seu nome para começar a jogar:");
let nameUser=document.getElementById("jogador");
nameUser.innerHTML="Olá, " + name + "!";

if(confirm("Deseja jogar?")) {

    let question1 = prompt ("PERGUNTA 1\nDe quem é a famosa frase Penso, logo existo? \na. Platão \nb. Galileu Galilei \nc. Descartes")

    if (question1 ==="c"){

        let questionCorrect1 = document.getElementById("correta1");
        questionCorrect1.innerHTML="Resposta 1";
    } else{
        let questionIncorrect1 = document.getElementById("incorreta1");
        questionIncorrect1.innerHTML="Resposta 1";

    }

    let question2 = prompt ("PERGUNTA 2\nQuem pintou Guernica?\na. Paul Cézanne \nb. Pablo Picasso \nc. Diego Rivera")

    if (question2 ==="b"){
        let questionCorrect2 = document.getElementById("correta2");
        questionCorrect2.innerHTML="Resposta 2";
    } else{
        let questionIncorrect2 = document.getElementById("incorreta2");
        questionIncorrect2.innerHTML="Resposta 2";
    }

    let question3 = prompt ("PERGUNTA 3\nQual o livro mais vendido no mundo a seguir à Bíblia?\na. O Senhor dos Anéis\nb. Dom Quixote\nc. O Pequeno Príncipe")

    if (question3 ==="b"){
        let questionCorrect3 = document.getElementById("correta3");
        questionCorrect3.innerHTML="Resposta 3"
    } else{
        let questionIncorrect3 = document.getElementById("incorreta3");
        questionIncorrect3.innerHTML="Resposta 3"
        
    }


}else {
    alert("Que pena...Obrigada!")
}

