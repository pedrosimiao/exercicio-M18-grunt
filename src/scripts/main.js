function dec2bin(numero) {
    let dec = parseInt(numero);
    let bin = dec.toString(2);

    document.getElementById("binario").innerText = bin;
}