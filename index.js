'use strickt';

let mensaje = document.querySelector('.mensaje');
let resultado = document.querySelector('.resultado');
let btnEncryptar = document.querySelector('.btnEncrypt');
let btnDesencryptar = document.querySelector('.btnDesencrypt');

btnEncryptar.addEventListener('click', (e) => {
  e.preventDefault();
  resultado.textContent = encryptar_mensaje(mensaje.value);
});

btnDesencryptar.addEventListener('click', (e) => {
  e.preventDefault();
  resultado.textContent = desencyptar_mesnaje(mensaje.value);
});

resultado.addEventListener('click', (e) => {
  e.preventDefault();

  copiar_portapapeles();
});

const encryptar_mensaje = (msj) => {
  return msj
    .toLowerCase()
    .replace('i', 'imes')
    .replace('e', 'enter')
    .replace('a', 'ai')
    .replace('o', 'ober')
    .replace('u', 'ufat');
};

const desencyptar_mesnaje = (msj) => {
  return msj
    .toLowerCase()
    .replace('imes', 'i')
    .replace('enter', 'e')
    .replace('ai', 'a')
    .replace('ober', 'o')
    .replace('ufat', 'u');
};

const copiar_portapapeles = () => {
  navigator.clipboard
    .writeText(resultado.textContent)
    .then(() => {
      alert('Texto copiado al portapapeles');
    })
    .catch((err) => {
      console.error('Error al copiar al portapapeles:', err);
    });
};
