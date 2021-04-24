const background = ()=>{
    const color1 = document.querySelector('#color1');
    const color2 = document.querySelector('#color2');
    const back = document.querySelector('.container');
    const val = document.querySelector('#valeur');
    const fun = ()=>{
        back.style.backgroundImage='linear-gradient(to right ,'+color1.value+','+color2.value+')';
        val.value='background-image: linear-gradient( to right ,'+color1.value+','+color2.value+')'; 
    }
    color1.addEventListener('input',()=>{
      fun();
    });
    color2.addEventListener('input',()=>{
       fun();
    })

      
}
background();