const calculadoraIntereses = tiempo => {

  const array = tiempo.split(" ");

  if(array[1] === "año" || array[1] === "años"){
      const meses = parseInt(array[0]) * 12;
      const interes = ((4 / 100) * 100) * meses;
      const calc = (100 * meses) + interes;
      console.log(`Ahorraste ${calc} y tus intereses fueron de: ${interes}`);
  }else{
      const interes = ((4 / 100) * 100) * parseInt(array[0]);
      const calc = (100 * parseInt(array[0])) + interes;
      console.log(`Ahorraste ${calc} y tus intereses fueron de: ${interes}`);
  }

}

calculadoraIntereses("1 año");