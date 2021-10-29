//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBHCNPyvvaAWjjp_m6qM5TUChVdo_v6qdo",
  authDomain: "kwitter-proj-d27ff.firebaseapp.com",
  projectId: "kwitter-proj-d27ff",
  storageBucket: "kwitter-proj-d27ff.appspot.com",
  messagingSenderId: "921434274366",
  appId: "1:921434274366:web:a07cb9d7a1d602ba00ef6f"
};
        
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
  
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
      function addRoom() {
        room_name = document.getElementById("room_name").value;
      
        firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
        });
      
        localStorage.setItem("room_name", room_name);
      
        window.location = "kwitter_page.html";
      }
      
      function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
          });
        });
      
      }
      
      getData();
      
      function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
      }
      
      function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      }