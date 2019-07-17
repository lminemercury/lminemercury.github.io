function minhafunção() {
    document.getElementById("demo").
    innerHTML = "paragrafo mudado";
  
  //window.alert("Este é um alerta!");
  console.log("so apareço com f12");
}

function minhafunção2() {
  if (document.getElementById("demo1").innerText.length === 0){ 
    document.getElementById("demo1")
    .innerHTML = "olá dollinho!";

    document.getElementById("demo2")
    .innerHTML = "O melhor do Brasil. o melhor!!";
    document.querySelector("#divcentral").style.border = "2px solid grey";
  }
   else{
     document.getElementById("demo1").innerHTML = "";

     document.getElementById("demo2").innerHTML = "";
     document.querySelector("#divcentral").style.border = "none";
   }
  }