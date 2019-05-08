window.addEventListener('load', function(){
  const gliderContainer1 = document.querySelector('.glider-contain1');
  const gliderContainer2 = document.querySelector('.glider-contain2');
  gliderContainer1.style.display = 'block';
  gliderContainer2.style.display = 'block';
  const glider1 = document.querySelector('.glider1');
  const glider2 = document.querySelector('.glider2');
  new Glider(glider1, {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev-1',
      next: '.glider-next-1'
    }
  });
  new Glider(glider2, {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev-2',
      next: '.glider-next-2'
    }
  });
});

/*

sbinvest.pro
1ab3d9ac-d1c6-4f7b-a1f7-a7e39bdc5131

 */
