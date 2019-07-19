//se agregan las configuraciones de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_kJkQ9LzVm9XJz-TA9jHMuH-yC367zIU",
  authDomain: "garnacha-love-rs.firebaseapp.com",
  databaseURL: "https://garnacha-love-rs.firebaseio.com",
  projectId: "garnacha-love-rs",
  storageBucket: "",
  messagingSenderId: "671471595388",
  appId: "1:671471595388:web:19cc42fa4d01f3a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function registrar(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log(email);
    console.log(password);
// toma el valor de email y password y al no autenticarlo imprime error 
 firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage) ;
        // ...
      });
     
}
let ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // 
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'index.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'index.html',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);