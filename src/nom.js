document.getElementById("jaladito");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user.displayName)
       
        const obj = {
            name: user.displayName,
            email: user.email,
            photo : user.photoURL
        }
         function jalado() {
             
         };
        document.getElementById("jaladito").innerHTML=obj.name+'<br>'+obj.email+'<br>'+`<img src=${obj.photo}>`;
    } else {
      // No user is signed in.
    }
  });
