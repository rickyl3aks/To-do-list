//close button

var closeButton = document.getElementsByClassName('close');



//creating todo function

function createNewElement() {
  var li = document.createElement("li");
  var theInputValue = document.getElementById("the-input").nodeValue;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);

  if (theInputValue === "") {
    alert("This cannot be empty");
  } else {
    document.getElementById("the-ul").appendChild(li);
  }

  document.getElementById("the-input").value = "";
  var thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);

  //removing items when click on SPAN CLOSE BUTTON

  for(i = 0, i < closeButton.length, i++){
      closeButton[i].onclick = function(){
          var theDiv = this.parentElement;
          theDiv.style.display = 'none';
      }
  }
}


