const pantalla = document.querySelector(".pantalla");
const btns = document.querySelectorAll(".btn");

btns.forEach(boton => {
        boton.addEventListener("click", () =>{
            const botonPulsado = boton.textContent;

             if(boton.id === "C"){
                pantalla.textContent = "0";
                return;
             }

             if(boton.id === "borrar"){
                    if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                        pantalla.textContent = "0";
                    }else{
                        pantalla.textContent = pantalla.textContent.slice(0, -1);
                    }
                return;
             }

             if(boton.id === "igual"){
                try{
                    pantalla.textContent = eval(pantalla.textContent);

                }catch{
                    pantalla.textContent  = "Error!";
                }
                return;
             }


             if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
                pantalla.textContent = botonPulsado;
             }else{
                pantalla.textContent += botonPulsado;
             }


        });
});

