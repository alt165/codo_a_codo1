let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); 
} 

function valida_envia() { 
  //valido el nombre 
  if (document.formulario.fname.value.length == 0) { 
    alert("Ingrese su nombre") 
    document.formulario.fname.focus() 
    return 0; 
  } 
 
  if (document.formulario.lname.value.length == 0) { 
    alert("Ingrese su nombre") 
    document.formulario.lname.focus() 
    return 0; 
  } 
  if (document.formulario.email.value.length == 0) { 
    alert("Ingrese su nombre") 
    document.formulario.email.focus() 
    return 0; 
  } 
  alert("Muchas gracias por enviar el formulario"); 
  document.formulario.submit(); 
}