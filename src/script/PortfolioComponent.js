export default class PortfolioComponent{

    constructor(){
        const btn = document.getElementById("btnMode"); 
        btn.onclick = () => {
            if(btn.value === "lightMode"){
                btn.value = "darkMode"; 
                document.getElementById("all").className = "dark"; 
                btn.innerText = "Light Mode";
                document.getElementById("phone").src = "/assets/images/telephonew.png"; 
                document.getElementById("mail").src = "/assets/images/emailw.png"; 

            } else {
                btn.value = "lightMode"; 
                document.getElementById("all").className = ""; 
                btn.innerText = "Dark Mode";
                document.getElementById("phone").src = "/assets/images/telephone.png"; 
                document.getElementById("mail").src = "/assets/images/email.png"; 
            }
        }
    }
}