let group1Button = document.querySelectorAll('.group1 button');
let group2Button = document.querySelectorAll('.group2  button');
let text = document.querySelector('.text');
let body = document.querySelector('body');
let Buttons = document.querySelectorAll('button');
let input1=document.querySelector('.input1');
let input2=document.querySelector('.input2');
let leftText=document.querySelector(".leftWorkspace")
let rightText=document.querySelector(".rightWorkspace")


let convert=(option1,option2)=>{
    let group1=document.querySelector('.group1 .valyutaCurrency');
    let group2=document.querySelector('.group2 .valyutaCurrency');
     let value1;
     let value2;
     fetch(' https://v6.exchangerate-api.com/v6/7dd6a856c3292c691e07ee35/latest/USD')
    .then((response)=>response.json())
   .then(data=>{
   value1=data.conversion_rates[group1.textContent]
  value2=data.conversion_rates[group2.textContent]
  
  if(option1===1){
    input2.value= Math.round(((option2 * value2) / value1)* 1000) / 1000 }
    else{
        leftText.textContent=`1${group1.textContent} = ${Math.round(((option2 * value2) / value1) * 1000) / 1000} ${group2.textContent} `
        rightText.textContent=`1${group2.textContent} = ${Math.round(((option2 * value1) / value2) * 1000) / 1000} ${group1.textContent} `
     }

})
}
 
input1.value = "1";
convert(0, 1);
group1Button.forEach((e) => {
e.addEventListener('click', ()=> {
        const selectButton1 = document.querySelector('.group1 .valyutaCurrency')
        //const selectButton2 = document.querySelector('.group2 .valyutaCurrency')
        selectButton1.classList.remove('valyutaCurrency')
        e.classList.add('valyutaCurrency')
        convert(2,1)
    })

});
group2Button.forEach((e) => {
    e.addEventListener('click', ()=> {
        const selectButton2 = document.querySelector('.group2 .valyutaCurrency')
        selectButton2.classList.remove('valyutaCurrency')
        e.classList.add('valyutaCurrency')
        convert(2,1)
    })
});

input1.addEventListener('change', () => {

      convert(1,Number(input1.value));
})
Buttons.forEach((e) => {
    e.addEventListener('click', () => {
        convert(1,Number(input1.value));
    })
})