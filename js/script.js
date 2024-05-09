class fotodeperfil extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});

        miShadow.innerHTML=`
        <img style="width:10em" src="${userInfo.picture.large}"/>
        `
    }
}
class hi extends HTMLElement{
    constructor(){
        super();
        this.textContent = '¡Haz click aquí!';
        this.addEventListener('click',()=> alert('¡Hiciste click! Sos Inteligente'));
    }

}



class iconoUser extends HTMLElement{
    constructor(){
        super();
        this.append = `
            <svg onmouseenter="showName()" class="logos" fill="#4dc436" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5347,16.5117 L15.0777,14.9407 C16.2477,14.0257 16.9997,12.6007 16.9997,10.9997 C16.9997,8.2387 14.7617,5.9997 11.9997,5.9997 C9.2387,5.9997 6.9997,8.2387 6.9997,10.9997 C6.9997,12.6007 7.7517,14.0257 8.9227,14.9407 L5.4657,16.5117 C5.1367,16.6617 4.8477,16.8787 4.6157,17.1457 C3.5967,15.6867 2.9997,13.9127 2.9997,11.9997 C2.9997,7.0297 7.0297,2.9997 11.9997,2.9997 C16.9707,2.9997 20.9997,7.0297 20.9997,11.9997 C20.9997,13.9127 20.4027,15.6867 19.3847,17.1457 C19.1527,16.8787 18.8637,16.6617 18.5347,16.5117 M7.9997,10.9997 C7.9997,8.7907 9.7907,6.9997 11.9997,6.9997 C14.2087,6.9997 15.9997,8.7907 15.9997,10.9997 C15.9997,13.2087 14.2087,14.9997 11.9997,14.9997 C9.7907,14.9997 7.9997,13.2087 7.9997,10.9997 M11.9997,20.9997 C9.3127,20.9997 6.9017,19.8227 5.2517,17.9557 C5.4057,17.7247 5.6217,17.5387 5.8797,17.4227 L9.9617,15.5667 C10.5837,15.8447 11.2737,15.9997 11.9997,15.9997 C12.7257,15.9997 13.4157,15.8447 14.0387,15.5667 L18.1207,17.4227 C18.3777,17.5387 18.5937,17.7247 18.7477,17.9557 C17.0987,19.8227 14.6867,20.9997 11.9997,20.9997 M11.9997,1.9997 C6.4767,1.9997 1.9997,6.4767 1.9997,11.9997 C1.9997,17.5227 6.4767,21.9997 11.9997,21.9997 C17.5227,21.9997 21.9997,17.5227 21.9997,11.9997 C21.9997,6.4767 17.5227,1.9997 11.9997,1.9997"></path> </g></svg>                
            <p onmouseenter="showName()"></p>
            <svg onmouseenter="showName()" class="logos" fill="#4dc436" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5347,16.5117 L15.0777,14.9407 C16.2477,14.0257 16.9997,12.6007 16.9997,10.9997 C16.9997,8.2387 14.7617,5.9997 11.9997,5.9997 C9.2387,5.9997 6.9997,8.2387 6.9997,10.9997 C6.9997,12.6007 7.7517,14.0257 8.9227,14.9407 L5.4657,16.5117 C5.1367,16.6617 4.8477,16.8787 4.6157,17.1457 C3.5967,15.6867 2.9997,13.9127 2.9997,11.9997 C2.9997,7.0297 7.0297,2.9997 11.9997,2.9997 C16.9707,2.9997 20.9997,7.0297 20.9997,11.9997 C20.9997,13.9127 20.4027,15.6867 19.3847,17.1457 C19.1527,16.8787 18.8637,16.6617 18.5347,16.5117 M7.9997,10.9997 C7.9997,8.7907 9.7907,6.9997 11.9997,6.9997 C14.2087,6.9997 15.9997,8.7907 15.9997,10.9997 C15.9997,13.2087 14.2087,14.9997 11.9997,14.9997 C9.7907,14.9997 7.9997,13.2087 7.9997,10.9997 M11.9997,20.9997 C9.3127,20.9997 6.9017,19.8227 5.2517,17.9557 C5.4057,17.7247 5.6217,17.5387 5.8797,17.4227 L9.9617,15.5667 C10.5837,15.8447 11.2737,15.9997 11.9997,15.9997 C12.7257,15.9997 13.4157,15.8447 14.0387,15.5667 L18.1207,17.4227 C18.3777,17.5387 18.5937,17.7247 18.7477,17.9557 C17.0987,19.8227 14.6867,20.9997 11.9997,20.9997 M11.9997,1.9997 C6.4767,1.9997 1.9997,6.4767 1.9997,11.9997 C1.9997,17.5227 6.4767,21.9997 11.9997,21.9997 C17.5227,21.9997 21.9997,17.5227 21.9997,11.9997 C21.9997,6.4767 17.5227,1.9997 11.9997,1.9997"></path> </g></svg>                
        `;
    }
}
customElements.define('show-name',iconoUser)

let userInfo=0
let url = "https://randomuser.me/api/"
let xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onreadystatechange = function(){
    
    if (this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText)
            console.log(response)
            userInfo=response.results[0]
            console.log(userInfo)
            customElements.define('profile-pic',fotodeperfil)

        }else if(this.readyState === 4){
        console.log("Error :(",this.statusText)
    }
}
xhr.send();

function showName(){  
   let newinfo = document.getElementById("info")
   newinfo.innerHTML = `
   <p>Hi, My name is</p>
   <span>${userInfo.name.first} ${userInfo.name.last}</span>`
   
}
function showEAddr(){  
   let newinfo2 = document.getElementById("info")
   newinfo2.innerHTML = `
   <p>My email address is</p>
   <span>${userInfo.email}</span>`
   
}
function showBday(){  
    let newinfo2 = document.getElementById("info")
    let bday = userInfo.dob.date
    let newbday=bday.slice(0,10).replaceAll("-","/")

    newinfo2.innerHTML = `
    <p>My birthday is</p>
    <span>${newbday}</span>`
}
function showAddr(){  
   let newinfo2 = document.getElementById("info")
   newinfo2.innerHTML = `
   <p>My address is</p>
   <span>${userInfo.location.street.number} ${userInfo.location.street.name}</span>`
}
function showPhone(){  
    let newinfo2 = document.getElementById("info")
    newinfo2.innerHTML = `
    <p>My phone number is</p>
    <span>${userInfo.phone}</span>`
}
function showPass(){  
    let newinfo2 = document.getElementById("info")
    newinfo2.innerHTML = `
    <p>My password is</p>
    <span>${userInfo.login.password}</span>`
}