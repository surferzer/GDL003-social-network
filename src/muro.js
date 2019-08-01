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
      document.getElementById("Photouserprofile").innerHTML= `<img src=${obj.photo} width="5%" height="5%" >`
      document.getElementById("userprofile").innerHTML=obj.name;
      document.getElementById("useremailprofile").innerHTML=obj.email;
  
      // User is signed in.
    } else {
    }     // No user is signed in.
    });

    //En pagina logIn crea la foto, mail y el id
firebase.auth().onAuthStateChanged(function(user){
  if (user){
      // already signed in
      const dataPerfil= {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
          id: user.uid

      }
      console.log('El usuario activo es: '+dataPerfil.name+ dataPerfil.email+dataPerfil.img+dataPerfil.id);
      document.querySelector('.photo').innerHTML=`<img class="photoProfile" src="${dataPerfil.img}" alt="photo">`;
      document.querySelector('.name   ').innerHTML=`<h2>${dataPerfil.name}</h2>`;
      const setUidUsuario=firebase.firestore().collection('usuarios').doc (dataPerfil.id);
      setUidUsuario.set({
          wallUsuario: "",
          media:"",
          name:user.displayName,
          email: user.email

      });
  }
});




//AQUI INICIA DATABASE- FIRESTORE
let firestore= firebase.firestore();


//Siempre se va alternar entre colecciones y documentos const docReference= firestore.collection('samples').doc('laMeraData');
const docReference= firestore.doc('usuarioLogueado/suSeccion'); 
  
const outputH1= document.querySelector('#outputH1');
const inputText=document.querySelector('#latest');
const buttonSave=document.querySelector('#saveButton');
const buttonLoad=document.querySelector('#loadButton');


buttonSave.addEventListener('click',function(){
    const textToSave=inputText.value;
    console.log('Im going to save '+textToSave+' to Firestore');
    docReference.set({    
        losPosts: textToSave,
     

    })    .then(function(){
        console.log('Post Guardado!!');
    }).catch(function(error){
        console.log('Existe un error', error);
    })
});

function obtenerDatosEnTiempoReal(){
    docReference.onSnapshot(function(doc){
      if(doc && doc.exists){
          const myData= doc.data();
          console.log('Verificando la data que estoy recibiendo: ',doc);
          outputH1.innerHTML='Mi post es: '+myData.losPosts;
      };

    })
}

obtenerDatosEnTiempoReal();

//--------------------------------------------------------------------------


//para boton logOut devuelva a index.html
document.getElementById('loguedOut').addEventListener('click',function(){
  firebase.auth().signOut();
  location.href='http://localhost:5000/src/';
});
document.getElementById('prueba').innerHTML='YA NO HAGAN CAMBIOS POR FAVOR';