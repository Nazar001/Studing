function clik(){
    if(document.getElementById("login").value=="admin"){
        document.getElementById("error").style.display="block";
    } else document.getElementById("error").style.display="none";
}