//controlling css and attributes from JS

// document.getElementById("some-id").style; //accesses the css rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpeg" //changes an image

// document.getElementById("some-link").href = "www.newwebsite.com"; //change the hyperlink destination

//Changing an Image vs adding a new Image
//to add an image where there wasn't one before, you need a container for the image in the html code
//containers are empty <p>, <h1>, <div>, ect elements
//e.g. in HTML <div id="img-container"></div>
//e.g. document.getElementById("img-container").innerhtml = "<img scr=`images/pic.jpg`>";

//Apple vs android
document.getElementById("android").addEventListener("click", chgandroid);

function chgandroid() {
  document.getElementById("AvsA").src = "images/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("explore").href = "https://www.android.com";
  document.getElementById("explore").style.background = "#a4c93b";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("body").style.fontFamily = " 'Roboto', sans-serif";
  document.getElementById("android").classList.add(`active`);
  document.getElementById("apple").classList.remove(`active`);
}

document.getElementById("apple").addEventListener("click", chgapple);

function chgapple() {
  document.getElementById("AvsA").src = "images/Apple-Logo.jpg";
  document.getElementById("explore").innerHTML = "Apple Home";
  document.getElementById("explore").href = "https://www.apple.com";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("html").style.background = "#b6bcca";
  document.getElementById("body").style.fontFamily = " 'Brygada 1918', serif";
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
}
