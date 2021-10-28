//-------------- выпадающие меню ------------ 

let menuArrows = document.querySelectorAll('.menu__arrow');
if(menuArrows.length>0) {
   for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function(e){
         menuArrow.parentElement.classList.toggle('active');
         menuArrow.classList.toggle('active');
         
      });
   }
   }






//-------------- menu burger ------------ 


const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu');
   iconMenu.addEventListener('click',function(e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   })
}







   //-------------- POPUP ------------ 


   var openPopup = document.querySelector('.open-popup');
   var closePopup = document.querySelector('.close-popup');
   var popup = document.querySelector('.popup');
   var popupBody = document.querySelector('.popup__body');

   openPopup.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.add('active');
      
   });

   closePopup.addEventListener('click', function() {
      popup.classList.remove('active');
      
   });

   //-------------- СЧЕТЧИК ------------ 

   var time = 2, cc = 1;
   $(window).scroll(function(){
      $('#counter').each(function(){
         var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
         if (cPos < topWindow + 700) {
            if (cc < 2) {
         $('div').each(function(){
            var
            i=1,
            num = $(this).data('num'),
            step = 1000 * time/num,
            that = $(this),
            int = setInterval(function() {
               if (i <= num ) {
                  that.html(i);
               }
               else {
                  cc = cc + 2;
                  clearInterval(int);
               }
               i++;
            
            }, step);
         });
      }
      }
    });
   });


   
   



   //-------------- ТАБЫ ------------ 


   document.querySelectorAll('.tabs__item').forEach((item)=>
   item.addEventListener('click', function(e){
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');

      document.querySelectorAll('.tabs__item').forEach(
         (child) => child.classList.remove('active')
      );
      document.querySelectorAll('.tabs__block').forEach(
         (child) => child.classList.remove('active')
      );

      item.classList.add('active');
      document.getElementById(id).classList.add('active')
   })

   
);

document.querySelector('.tabs__item').click();










