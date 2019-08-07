
    const mostrarPerfil= () => {
    document.getElementById("wallHead").style.display ='none';
    document.getElementById("botones").style.display = 'block';
    document.querySelector(".inSession").style.display = 'block';
    document.getElementById("botonesFinales").style.display = "none";
    document.getElementById("pensando").style.display= "none";
    console.log("perfil");
    };

   document.getElementById("profile").addEventListener("click", mostrarPerfil);
  
 

const muro=()=>{
    document.getElementById("wallHead").style.display ='block';
    document.getElementById("botones").style.display = 'block';
    document.querySelector(".inSession").style.display = 'block';
    document.getElementById("botonesFinales").style.display = "block";
    document.getElementById("pensando").style.display = "block";
}
document.getElementById("wall").addEventListener("click", muro);




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
      document.querySelector('.name').innerHTML=`<h1>${dataPerfil.name}</h1>`;
      document.querySelector('.email').innerHTML=`<h1>${dataPerfil.email}</h1>`;
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
const docReference= firestore.doc('usuarioLogeado/suSeccion'); 

const outputH1= document.querySelector('#outputH1');
const inputText=document.querySelector('#latest');
const buttonSave=document.querySelector('#saveButton');
const buttonLoad=document.querySelector('#loadButton');
//const user=firebase.auth().currentUser;
//const uid=user.uid;



buttonSave.addEventListener('click',function(){
    const textToSave=inputText.value;
    console.log('Im going to save '+textToSave+' to Firestore');

    
    var newPostKey= firebase.database().ref().child('post').push().key;
    const docReference1=firestore.doc('/post/' + newPostKey);  

    //var updates={};
    //updates['/post/' + newPostKey]= dataPerfil;  
        
    docReference1.set({    
        texto: textToSave,
        autorid: firebase.auth().currentUser.uid   

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