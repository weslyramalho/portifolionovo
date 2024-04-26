

function validaForm(){
    let nome = document.querySelector( "#nome" ).value;  
    let email = document.querySelector("#email").value; 
    let assunto = document.querySelector( "#assunto" ).value;
    let  mensagem = document.querySelector("#mensagem").value;

    if(nome != "" && email != "" && assunto != "" &&  mensagem != "") {
        alert(nome+ " em breve retornaremos sua mensagem!");
        nome.innerHTML = "";
        email.innerHTML = "";
        assunto.innerHTML = "";
        mensagem.innerHTML = "";
    } else{
        alert("Preencha todos os campos");
    }

   
}