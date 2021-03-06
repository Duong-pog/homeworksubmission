const init = () => {

  // khai báo cài đặt của firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCQFLzqBkzSTyCfuBM9a2AmWmTj55IgNbM",
    authDomain: "project-f70df.firebaseapp.com",
    projectId: "project-f70df",
    storageBucket: "project-f70df.appspot.com",
    messagingSenderId: "1052659562887",
    appId: "1:1052659562887:web:8848a0b8a3b12198767b22"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // để xem mình đã nhúng được firebase chưa 
  console.log(firebase.app().name); // in ra đc chữ default là nhúng xong firebase


  console.log("window loaded");


  ///// nâng cao: Hàm kiểm tra xem User đã đăng nhập hay chưa

  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (user && user.emailVerified) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };
      view.setActiveScreen('chatScreen');
      // User is signed in.
    } else {
      view.setActiveScreen('loginScreen');
      // alert("Please check your email"); check cc
    }


  });

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });
  //   firebase.analytics();
  // view.setAtiveScreen('registerScreen;')

};

window.onload = init;
