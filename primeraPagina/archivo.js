let colorBCaja;

function cambiarCaja(element) {

    colorBCaja = element.style.borderColor;

    element.style.background = 'linear-gradient(yellow, transparent)';
    element.style.borderColor = "blue";
}
function recuperarCaja(element) {
    element.style.background = 'linear-gradient(#88ff4d, transparent)';
    element.style.borderColor = colorBCaja;
}
window.onload = () => {
document.getElementById('formu').addEventListener('submit', function(e){
        let nombre = document.getElementById('txtNombre').Value;
        let mensaje = document.getElementById('txtMensaje').Value;
        alert(console.log("enviado"));
        addMensaje(nombre,mensaje);
        e.preventDefault();
})
}
function addMensaje(x,y) {
    const productList = document.getElementById('listM');
    const element = document.createElement('div');
    element.innerHTML = `
        <div>
            <>
                <strong>nombre</strong>: ${x} -
                <strong>mensaje</strong>: ${y}  
                
        </div>
    `;
    productList.appendChild(element);
}
