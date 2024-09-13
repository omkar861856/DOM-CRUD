// CRUD 

// Read operation

const a = document.querySelector('#demo');
// const a = document.getElementById('demo');

const b = document.getElementsByTagName('h1'); 
// const b = document.querySelectorAll('h1'); 

const c = document.querySelectorAll('.box');
// const c = document.getElementsByClassName('box');



// Update Operation

console.log(b);


a.innerHTML = `<a id="google_link" href="https://www.google.com">www.google.com</a>`
const d = document.getElementsByTagName("a")
d[0].setAttribute('target', '_blank');
const dAtt = d[0].getAttribute('id');
d[0].removeAttribute('id')
console.log(d[0]);



for(let i = 0; i<b.length; i++){
    b[i].textContent = "Changed through JS"
}


for(let i = 0; i<c.length; i++){
    c[i].classList.toggle('completed')
}


// Create operation

const e = document.createElement('h1');
e.innerText = "Heading tag and content throug js created"

document.body.replaceChild(e,b[1]);


const f = c[0].cloneNode(true);

document.body.appendChild(f)

// Delete

document.body.removeChild(f);



