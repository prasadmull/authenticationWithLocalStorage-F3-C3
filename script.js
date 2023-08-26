const nam = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confPass = document.getElementById('conf-pass');
const signUp = document.getElementById('sign-up');
const message = document.querySelector('.message');
const signUpBtn = document.getElementById('signup');
const profileBtn = document.getElementById('profile');
const dark = document.getElementById('dark');

let user = {};

const div = document.createElement('div');
div.className = 'error';

function randTokenGen(size){
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let res = '';
    for (let i = 0; i < size; i++) {
        res += str.charAt(Math.floor(Math.random()*str.length));
    }
    return res;
}

signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    let namVal = nam.value;
    let emVal = email.value;
    let passVal = pass.value;
    let confPassVal = confPass.value;
    if(namVal === '' || emVal === '' || passVal === '' || confPassVal === ''){
        //show error
        let error = `Error: All the fields are mandatory. Fill all the fields and try again.`
        div.innerText = error;
        div.style.color = 'red';
        message.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000);
        return;
    }else if (passVal !== confPassVal){
        let error = `Error: Both your passwords should match...`;
        //show error
        div.innerText = error;
        div.style.color = 'red';
        message.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000);
        return;
    }else if(passVal.length < 8){
        let error = `Error: Minimum password length is 8 charecters...`;
        //show error
        div.innerText = error;
        message.appendChild(div);
        div.style.color = 'red';
        setTimeout(()=>{
            div.remove();
        },2000);
        return;
    }else if(emVal.includes('@') && emVal.includes('.com')){
        user.fullName = namVal;
        user.email = emVal;
        user.pass = passVal;
        user.accessToken = randTokenGen(16);
       
        localStorage.setItem('User',JSON.stringify(user));

        const data = localStorage.getItem('User');
        if(data){
            div.className = 'success';
            div.style.color = 'lightgreen'
            // Simulate a mouse click:
            let success = `Successfully Signed Up! You will be redirected with in 2 secs...`;
            div.innerText = success;
            message.append(div);
            setTimeout(()=>{
                div.remove();
                window.location.href = "profile.html";
            },2000);
        }
    }else{
        let error = `Error: Enter a valid email address...`;
        //show error
        div.innerText = error;
        message.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000);
        return;
    }
    
    
    // Simulate an HTTP redirect:
    // window.location.replace("http://www.w3schools.com");
})

profileBtn.addEventListener('click',()=>{
    div.innerText = 'Please fill details to sign up...'
    div.style.color = 'rgb(255, 188, 5)';
    message.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },1500);
})
signUpBtn.addEventListener('click',()=>{
    div.innerText = 'You are already on sign up page...'
    div.style.color = 'rgb(255, 188, 5)';
    message.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },1500);
})

const items = document.querySelectorAll(".items");
const nav = document.getElementById('nav');
dark.addEventListener('click',()=>{
    if(document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        items.forEach((e)=>{
            e.style.borderBottom = '2px solid black'
        })
        nav.style.backgroundColor = '#b3f0ff';
        signUp.style.backgroundColor = '#b3f0ff';
    }else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        items.forEach((e)=>{
            e.style.borderBottom = '2px solid white'
        })
        nav.style.backgroundColor = '#013b6a';
        signUp.style.backgroundColor = '#013b6a';
    }

})