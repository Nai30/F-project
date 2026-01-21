const button = document.getElementById("click me");
const message = document.getElementById("message");

if (button){
  button.addEventListener("click" , ()=>{
    message.textContent = "Javascript is working!";
  });
}
