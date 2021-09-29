window.onload = () =>{
    let hambtn=document.querySelector("#hambtn");
    let sidebar=document.querySelector(".sidebar");
    hambtn.addEventListener("click",function(){
        sidebar.classList.toggle("active");
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

    let productJson = '{"product":[' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 1","price":699.00,"sold_out":0},' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 2","price":1199.00,"sold_out":1},' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 3","price":750.00,"sold_out":1 },' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 4","price":699.00,"sold_out":0 },' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 5","price":1999.00,"sold_out":1 },' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 6","price":799.00,"sold_out":0 },' +
            '{"imgSrc":"./img/beauty1.png","name":"Product 7","price":1599.00,"sold_out":0 } ]}';
    
        const obj = JSON.parse(productJson);

    document.querySelectorAll(".item-image").forEach((item_img,index) =>{
        let url=obj.product[index].imgSrc;
        //console.log('url(\''+url+'\')');
        item_img.style.backgroundImage='url(\''+url+'\')';

        if(obj.product[index].sold_out==1){
            item_img.innerHTML="<span class='sold-out'>Sold Out</span>";
        }
        else{
            item_img.innerHTML="<form action='#'><input id='btn"+index+"' type='submit' value='Quick Shop'></form>";
            item_img.addEventListener("mouseover",function(){
                   document.getElementById("btn"+index).style.opacity=1;
            });
    
            item_img.addEventListener("mouseout",function(){
                    document.getElementById("btn"+index).style.opacity=0;
            });
        }//if item not sold out
    });

    document.querySelectorAll(".item-desc").forEach((item_desc,index) => {
        let name=obj.product[index].name;
        let price=obj.product[index].price;
        item_desc.innerHTML="<h1>"+name+"</h1>"+"<span>Rs. "+price+"</span>";
    });

    let modal=document.querySelector(".modal");
    document.getElementById("li5").addEventListener("click",function(){
        modal.style.display="block";
    });

    document.querySelector(".closeBtn").addEventListener("click",function(){
        modal.style.display="none";
    });

}//onload