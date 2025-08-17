const input=document.getElementById('entry');
const mean1=document.getElementById('mean');

const example1=document.getElementById('example');
const body1=    document.querySelector("body");
const pronunciation1=document.getElementById('pronunciation');


function getword(){
    const URL="https://api.dictionaryapi.dev/api/v2/entries/en/"+input.value;
fetch(URL)
.then(res=>{
if(!res.ok){
    console.log('problem');
    return;
}
return res.json();
})
    .then(data => {
            mean1.textContent = "Meaning : " + data[0].meanings[0].definitions[0].definition;


            example1.textContent = "Example : " + 
                (data[0].meanings[0].definitions[0].example || "Not available");

            if (data[0].phonetics && data[0].phonetics[0]?.audio) {
                pronunciation1.innerHTML = `<audio src="${data[0].phonetics[0].audio}" controls></audio>`;
            } else {
                pronunciation1.textContent = "No pronunciation available";
            }
        })
.catch(res=>{
    alert('error');
});
}
const enterBtn=document.getElementById('enter');
enterBtn.addEventListener("click",()=>{
    getword();
})

const toggleBtn=document.getElementById('toggle')
        let currmode="light";

toggleBtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
body1.style.background="linear-gradient(5deg,#568F87,#064232)";
    }
    else{
        currmode="light";
            body1.style.background="linear-gradient(5deg,skyblue,hotpink)";}}
)