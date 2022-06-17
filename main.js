console.log('form is working..');

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.log( name, email, phone);

name.addEventListener('blur', ()=>{
    // console.log('this name validation');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex , str);

    if(regex.test(str)){
        console.log('it matched');
        name.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        name.classList.add('is-invalid');
    }
})

email.addEventListener('blur', ()=>{
    // console.log('this email validation');
    let regex = /^([_/.-\A-Za-z]+)@([_/.-\A-Za-z]+)\.([a-zA-Z]){2,9}$/;
    let str = email.value;
    console.log(regex , str);

    if(regex.test(str)){
        console.log('it matched');
        email.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur', ()=>{
    // console.log('this email validation');
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex , str);

    if(regex.test(str)){
        console.log('it matched');
        phone.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        phone.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('your form as been submitted');

    let success = document.getElementById('success');
    success.classList.add('show');
})