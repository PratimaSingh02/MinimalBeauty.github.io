class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

var inter;

window.onload = () =>{
     startInterval();

    let hambtn=document.querySelector("#hambtn");
    let sidebar=document.querySelector(".sidebar");
    hambtn.addEventListener("click",function(){
        sidebar.classList.toggle("active");
      });

      document.querySelectorAll(".manual-btn").forEach((btn)=>{
        btn.addEventListener("click",function(){
            clearInterval(inter);
            document.querySelectorAll(".manual-btn").forEach((btns)=>{
                btns.style.background="transparent";
                //set all btn bg to transparent
            });
            btn.style.background="#fff";
            //set clicked btn bg to black
            startInterval();
        });
      });

      document.querySelector(".footer-email input[type=text]").addEventListener("click",function(){
        let form=document.querySelector(".footer-email form");
        form.style.border='2px solid #fff';
        this.placeholder="";
        let emailText=document.querySelector(".emailText");
        emailText.style.opacity=1;
    });

    document.querySelector(".footer-email input[type=text]").addEventListener("blur",function(){
        let form=document.querySelector(".footer-email form");
        form.style.border='1px solid rebeccapurple';
        this.placeholder="Email address";
        let emailText=document.querySelector(".emailText");
        emailText.style.opacity=0;
    });

    document.querySelectorAll(".field input").forEach((textBox)=>{
        textBox.addEventListener("click",function(){
            clearInterval(inter);
            document.querySelectorAll(".manual-btn").forEach((btns,index)=>{
                if(index!=0)
                btns.style.background="transparent";
                //set all btn bg to transparent
                else
                btns.style.background="#fff";
            });
        });
    });

    document.querySelector(".field input[type=text]").addEventListener("click",function(){
        if(this.value==""){
            let checkEmail=getCookie("email");
            if(checkEmail!=""){
                this.value=checkEmail;
            }
        }
    });

    document.querySelector(".field input[type=password]").addEventListener("click",function(){
        if(this.value==""){
            let checkPass=getCookie("pass");
            if(checkPass!=""){
                this.value=checkPass;
            }
        }
    });

    document.querySelector(".submitbtn input").addEventListener("click",function(){
        let email=document.querySelector(".field input[type=text]");
        let pass=document.querySelector(".field input[type=password]");
        if(pass.value.length<8){
            try{
                generateError();
            }
            catch(error){
                alert(error.message);
                pass.value="";
            }
         }
         else{
            if(email!="" && pass!=""){
                if(document.cookie!=""){
                    console.log("Cookie already set!");
                }
                else{
                    const d = new Date();
                    d.setTime(d.getTime() + (1*24*60*60*1000));//expires after a day
                    let expires = "expires="+ d.toUTCString();
                    document.cookie="email="+email.value;
                    document.cookie="pass="+pass.value;
                    document.cookie="expires="+expires;
                }     
                email.value="";
                pass.value="";
            }
         }//else password is proper
    });

    document.querySelectorAll(".nav_list li").forEach((link)=>{
        link.addEventListener("click",function(){
            // console.log(link.id.charAt(link.id.length-1));
            var check=link.id.charAt(link.id.length-1);
            clearInterval(inter);
            if(document.getElementById("radio"+check)!=null){
                document.getElementById("radio"+check).checked=true;
                document.querySelectorAll(".manual-btn").forEach((btns)=>{
                    btns.style.background="transparent";
                    //set all btn bg to transparent
                });
                document.getElementById("manual-btn"+check).style.background="#fff";
                startInterval();
            }
        });
    });

    let modal=document.querySelector(".modal");
    document.getElementById("li5").addEventListener("click",function(){
        modal.style.display="block";
    });

    document.querySelector(".closeBtn").addEventListener("click",function(){
        modal.style.display="none";
        startInterval();
    });

}//onload

function generateError(){
    throw new ValidationError("Password must contain more than 7 characters");
}

function startInterval(){
  inter= setInterval(btnToggle,5000);//callback
}

const btnToggle=()=>{
  let counter;
  if(document.getElementById('radio1').checked){
      counter=1;    
  }else{
      document.getElementById('manual-btn1').style.background="transparent";
  }
  if(document.getElementById('radio2').checked){
      counter=2;
  }else{
      document.getElementById('manual-btn2').style.background="transparent";
  }
  if(document.getElementById('radio3').checked){
      counter=3;
  }else{
      document.getElementById('manual-btn3').style.background="transparent";
  }
  if(document.getElementById('radio4').checked){
      counter=4;
  }else{
      document.getElementById('manual-btn4').style.background="transparent";
  }
  counter++;
  if(counter>4){
      counter=1;
  }
  document.getElementById("radio"+counter).checked=true;
  if(counter==1){
      document.getElementById('manual-btn4').style.background="transparent";
  }
  else{
      document.getElementById('manual-btn'+(counter-1)).style.background="transparent";        
  }
  document.getElementById('manual-btn'+counter).style.background="#fff";
}//btntoggle()

function getCookie(name){
    var cookies=document.cookie.split(";");

    for(var i=0;i<cookies.length;i++){
        var cookiePair=cookies[i].split("=");
        if(name == cookiePair[0].trim()){//[0] is key
            return decodeURIComponent(cookiePair[1]);//[1] is value
        }
    }

    return null;
}