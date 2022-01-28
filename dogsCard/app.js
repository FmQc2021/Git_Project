// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random



document.querySelector('button').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        myImage.src = myContent['message'];
      });

      let dog_id = Math.floor((Math.random() * 1000) + 10);
      let dog_age = Math.floor((Math.random() * 14) + 2);
      let dog_Reg = Math.floor((Math.random() * 3000) + 10);
      let age = `${dog_age} years`

      document.getElementById("dogId").innerHTML = dog_id
     
      document.getElementById("dogAge").innerHTML = age
     
      document.getElementById("dogRegistry").innerHTML = dog_Reg 

  }, false);
  
 