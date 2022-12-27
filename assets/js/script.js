const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-menu a');



const darkModeBtn = document.getElementById("dark-mode-btn");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    });
});





// darkModeBtn.addEventListener("click", function() {
//   // Verifica se o modo escuro já está ativado
//   if (document.body.classList.contains("dark-mode")) {
//     // Se sim, desativa o modo escuro e atualiza o texto do botão
//     document.body.classList.remove("dark-mode");
//     darkModeBtn.textContent = "Luz";
//   } else {
//     // Se não, ativa o modo escuro e atualiza o texto do botão
//     document.body.classList.add("dark-mode");
//     darkModeBtn.textContent = "Dark";
//   }
// });


darkModeBtn.addEventListener("click", function() {
  // Verifica se o modo escuro já está ativado
  if (document.body.classList.contains("dark-mode")) {
    // Se sim, desativa o modo escuro e atualiza o texto do botão
    document.body.classList.remove("dark-mode");
    darkModeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>';
  } else {
    // Se não, ativa o modo escuro e atualiza o texto do botão
    document.body.classList.add("dark-mode");
    darkModeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>';
  }
});



// hamburguer.addEventListener("click", () => {
//     document.body.classList.toggle("active");
//     document.body.classList.toggle("active");
// }); 


// links.forEach(links => links.addEventListener ("click", () =>{
//     document.body.classList.remove("active");
//     document.body.classList.remove("active");
// }))