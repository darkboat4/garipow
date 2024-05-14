// var game = document.querySelector(".game");
// var player = document.querySelector(".persona");
// var item_lixo = document.querySelector(".itemLixo");
// var chao = document.querySelector(".chao")
// var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
// var playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
// var classChao = parseInt(window.getComputedStyle(chao).getPropertyValue("bottom"));

// playerBottom = 40;
// player.style.bottom = playerBottom + 'px';

// function placar(){
//     var score = document.getElementById('score');
//     var pontos = 10;
//     pontos += 1;
// }

// function movePlayerLeft(){
//     if(playerLeft > 0){
//         playerLeft -= 15;
//         player.style.left = playerLeft + 'px';
//     }
// }
// function movePlayerRight(){
//     if(playerLeft < 745){
//         playerLeft += 15;
//         player.style.left = playerLeft + 'px';
//     }
// }

// function control(e){
//     if(e.key == "ArrowLeft"){
//         movePlayerLeft();
//     }
//     if (e.key == "ArrowRight"){
//         movePlayerRight();
//     }
// }

// function gerarLixo(){
//     var lixoBottom = -4;
//     var lixoLeft = Math.floor(Math.random() * 770); 
//     var lixo = document.createElement('div');
//     lixo.setAttribute("class", "lixo");
//     item_lixo.appendChild(lixo);
    
//     function cairLixo(){
//         if(lixoBottom < -381){
//             // clearTimeout(quantidade)
//             // location.reload();
//             item_lixo.removeChild(lixo);
//             }
        
//         // && lixoBottom < -381
//         var playerRight = playerLeft + 50; // Calcula a posição direita do jogador
//         var lixoRight = lixoLeft + 30; // Calcula a posição direita do lixo
//         if (playerLeft < lixoRight && playerRight > lixoLeft && lixoBottom < -301){
//         item_lixo.removeChild(lixo); // Atualiza o score no HTML
//         placar();
//     }
    
//         lixoBottom -= 1;
//         lixo.style.bottom = lixoBottom + 'px';
//         lixo.style.left = lixoLeft + 'px';
//     }   
//     var velo_lixo = 20 //quanto menor o numero, mais rapido o lixo cai, valor inicial 20
//     var quantd_lixo = 2000 //quanto menor o numero , mais lixo cai, valor inicial 1800
//     var velocidade = setInterval(cairLixo, velo_lixo) // intervalo que cai cada lixo
//     var quantidade = setTimeout(gerarLixo, quantd_lixo) //tempo que ele leva para gerar outro lixo
    
//     score.textContent = pontos;
//     console.log(pontos)
// }
// gerarLixo();
// // score.textContent = pontos

// // setInterval(() =>{
    
// // },10);

// document.addEventListener("keydown",control)

