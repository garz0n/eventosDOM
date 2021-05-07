window.onload = function(){
    alert('Bienvenido a tu página de confianza')
}
window.onunload = function(){
    alert('Gracias por visitar mi página')
}

let btn2 = document.getElementById('btn2');
let btn1 = document.getElementById('btn1');

btn1.onclick=function(){
    document.getElementById('mostrar').innerHTML=`<div class="card" style="width: 18 rem;>
        <h2 class="card-title>Función onclick</h2>
        <div class="card-body>
            <h5 class="card-text>Aquí se muestra un evento onclick</h5>
        </div>
    </div>`
}

btn2.ondblclick = function(){
    document.getElementById('mostrar').innerHTML=`<div><iframe width="560" height="315" src="https://www.youtube.com/embed/Daxg1kf6juE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
}

window.addEventListener('mousemove', function(e){
    document.getElementById('cuadrado1').innerText=`Ubicación en X: ${e.x}, Ubicación en Y: ${e.y}`
});

let cuadrado1 = document.getElementById('cuadrado1');

cuadrado1.onclick= function(){
    let count = 0;
    count ++;
    document.getElementById('cuadrado1').innerText=`La cantidad de clicks dentro del cuadro ${count}`
}

window.addEventListener('keypress', function(e){
    document.getElementById('cuadrado2').innerText=`El código de la tecla es: ${e.keyCode} y la tecla es: ${e.key} `
    if(e == 42){
        addEventListener('keyup', function(){
            cuadrado2.style.backgroundColor = 'white';
        });
    }else{
        addEventListener('keypress', function(){
            cuadrado2.style.backgroundColor = 'red';
        });
    }
});
 