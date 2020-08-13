//Theme initialize
if (!localStorage.getItem('theme'))
  localStorage.setItem('theme', "light");
themer();


function checkTheme(){
  var currentTheme = localStorage.getItem('theme')
  console.log(currentTheme())
  localStorage.getItem('theme')
  if(currentTheme == "light") {
    darkSvg.style.display = 'none';
  }
  else {
    lightSvg.style.display = 'none';
    }
  }

function toggle() {
  var lightSvg = document.getElementsByClassName("icon-theme-light")[0];
  var darkSvg = document.getElementsByClassName("icon-theme-dark")[0];
  if(localStorage.getItem('theme') == "light") {
    lightSvg.style.display = 'none';
    darkSvg.style.display = 'initial';
    localStorage.setItem('theme', "dark");
  } else if(localStorage.getItem('theme') == "dark") {
    lightSvg.style.display = 'initial';
    darkSvg.style.display = 'none';
    localStorage.setItem('theme', "light");
  }
  themer();
}


// Theme set
function themer() {
  var tone = localStorage.getItem('theme');
  var light = document.getElementById("light");

  if(tone == "dark"){
    dark.disabled = false;
  }
  else{
    dark.disabled = true;
  }
}
;
