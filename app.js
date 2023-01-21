// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDM4HnBtbt2_20cPDuQQp5MxYJImvI-iPA",
//   authDomain: "todo-app-2c468.firebaseapp.com",
//   projectId: "todo-app-2c468",
//   storageBucket: "todo-app-2c468.appspot.com",
//   messagingSenderId: "542385121912",
//   appId: "1:542385121912:web:08da94d172741cf4201b8d",
//   measurementId: "G-GZRWWRQL4P"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);














var main = document.getElementById("main");
var inp = document.getElementById("inp");

function add() {
    // console.log(inp.value)

    if (inp.value == "") {
        alert("Please Enter Todo");
    }
    else {
        // Creating List
        var li = document.createElement("li");
        var liText = document.createTextNode(inp.value);
        li.appendChild(liText);
        li.setAttribute("class", "list")
        // List End

        // Creating Edit Button
        var editBtn = document.createElement("BUTTON");
        var editBtnText = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnText);
        editBtn.setAttribute("onclick", "edittodo(this)");
        editBtn.setAttribute("class", "btn my-4 text-white edi")
        li.appendChild(editBtn);
        // Edit Button End 


        // Creating Delete Button
        var delBtn = document.createElement("BUTTON");
        var delBtnText = document.createTextNode("Delete");
        delBtn.appendChild(delBtnText);
        delBtn.setAttribute("onclick", "deltodo(this)");
        delBtn.setAttribute("class", "btn my-4 text-white remo")
        li.appendChild(delBtn);
        main.appendChild(li);
        inp.value = "";

    }
}

function edittodo(element) {
    var newvalue = prompt("Enter Updated Value", element.parentNode.firstChild.nodeValue);
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newvalue;
}

function deltodo(element) {
    element.parentNode.remove();
    console.log();

}
function deltAll() {
    main.innerHTML = "";
}