function add()
{
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    var edbtn = document.createElement("button");
    
   // btn.className = "btnclass";
    var btnText = document.createTextNode(" Delete ");
   // btn.style.color = "red";
    btn.appendChild(btnText);
    
    // edbtn.className ="btnclass";
    var editText = document.createTextNode(" Edit ");
//    editText.style.color = "yellow";
    edbtn.appendChild(editText);

    var text = document.createTextNode(val.value);

    li.appendChild(text);    
    li.appendChild(btn);
    li.appendChild(edbtn);
    list.appendChild(li); //
    val.value = "";

        btn.onclick = function () {
            var l= this.parentNode;
            var ul = l.parentNode;
            ul.removeChild(l);
            }

        edbtn.onclick = function (){
            var l= this.parentNode;
            l.innerHTML= " ";
            var t = prompt("Enter Edited Value ");
           l.appendChild(btn);   //
           l.appendChild(edbtn);
            l.innerHTML = t;
            l.appendChild(btn);   //
           l.appendChild(edbtn);
             //
        }
}

function deleteall()
{
 alert('Are you SURE');
 document.getElementById("list").innerHTML="";
}

function f1() { document.getElementById("val").style.backgroundColor= "yellow"; }
function f2() { document.getElementById("val").style.backgroundColor= "lightgreen";  }