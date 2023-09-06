
    const formulario = document.getElementById("formulario");
    const resultadoElemento = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
        
        event.preventDefault();
    
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
 
        if (!isNaN(num1) && !isNaN(num2)) {
           
            const resultado = num1 + num2;   
            resultadoElemento.textContent = "El resultado de la suma es: " + resultado;
        } else {
           
            resultadoElemento.textContent = "Por favor, ingrese números válidos.";
        }
    });

