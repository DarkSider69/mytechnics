function myFunction() {
    document.getElementById("myDIV").style.display = "block";
}

function myFunctn() {
    document.getElementById("myDIV").style.display = "none";
} 


// pcs menus

// function myComp() {
//     document.getElementById("idComp").style.display = "block";
// }

// function compIc() {
//     document.getElementById("idComp").style.display = "none";
// } 


function myComp() {
    var x = document.getElementById("idComp");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myCompparts() {
    var x = document.getElementById("idCompparts");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }