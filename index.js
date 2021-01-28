var slide = 2;
function myFunction() {
    if(slide == 2) {

        slide = 1;
        return document.getElementById("by").innerHTML = "Maria Ferreira";
    } else {

        slide = 2;
        return document.getElementById("by").innerHTML = "Weuslar Cunha";
    }
  }

  $('#sliderDivId').data('slider').getValue()