function showSlides() {
  let i;
  let slideIndex = 0;
  let slides = document.getElementsByClassName('mySlides');
  if (slides.length > 0) {
    for(i = 0; i < slides.length; i++ ){
      slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,10000) //  Changes every 2 seconds
  }
}

export default showSlides