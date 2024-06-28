document.addEventListener("DOMContentLoaded", function() {
    const contadorVisitas = document.getElementById("contadorVisitas");
    const btnReestablecer = document.getElementById("btnReestablecer");

    
    let visitas = localStorage.getItem("contadorVisitas");

   
    if (!visitas) {
        visitas = 0;
    }

    
    visitas = parseInt(visitas) + 1;

    
    contadorVisitas.textContent = visitas;

   
    localStorage.setItem("contadorVisitas", visitas);

    
    btnReestablecer.addEventListener("click", function() {
        
        localStorage.setItem("contadorVisitas", 0);
        
        contadorVisitas.textContent = 0;
    });
}); 