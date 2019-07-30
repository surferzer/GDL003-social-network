const primeraPantalla=()=>{
    document.getElementById("one").style.display ='block';
    document.getElementById("wallHead").style.display ='none';
    document.getElementById("infoPerfil").style.display ='none';
    };
    const segundaPantalla=()=>{
    document.getElementById("wallHead").style.display ='block';
    document.getElementById("infoPerfil").style.display ='none';
    };
    const mostrarPerfil=()=> {
    document.getElementById("wallHead").style.display ='none';
    document.getElementById("infoPerfil").style.display ='block';
    };
   document.getElementById("profile").addEventListener("click", mostrarPerfil);
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("user.displayName");
      const obj={
         name: user.displayName,
         email: user.email,
         photo: user.photoURL
      }
      document.getElementById("Photouserprofile").innerHTML= `<img src=${obj.photo} width="50px" height="50px" >`
      document.getElementById("userprofile").innerHTML=obj.name;
      document.getElementById("useremailprofile").innerHTML=obj.email;
  
      // User is signed in.
    } else {
    }     // No user is signed in.
    });