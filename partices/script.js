// Creating HtmL Element

var heading3 = document.createElement("h1");

var text = document.createTextNode("this is Heading 3");
heading3.appendChild(text);


var mydiv = document.getElementById("my-div");
mydiv.appendChild(heading3);
