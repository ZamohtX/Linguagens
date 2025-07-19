function analisaPalindromo(f) {
  const frase = f.toUpperCase().trim();
  let fraseInvertida = '';
  for (let l = frase.length; l > 0; l--){
    fraseInvertida = fraseInvertida + frase[l-1]
  } 
  return frase === fraseInvertida;
}