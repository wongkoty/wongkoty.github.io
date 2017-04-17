// Get the modal
var inkneadModal = document.getElementById('inknead-modal');



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
document.getElementById("inknead-btn").onclick = function() {
  inkneadModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  inkneadModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == inkneadModal) {
        inkneadModal.style.display = "none";
    }
}
