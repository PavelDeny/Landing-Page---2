



//-------------- меню бургер и выпадающие меню ------------ 

//let  menuBody = document.querySelector('.menu');
//let  iconMenu = document.querySelector('.menu__icon');
//let  overLay = document.querySelector('.overlay');

   lockScroll = () => {
   document.body.classList.add('lock');
}

   unlockScroll = () => {
   document.body.classList.remove('lock');
}

//------------------------------------------------------------



function menuOpen() {
   let  menuBody = document.querySelector('.menu');
   let  iconMenu = document.querySelector('.menu__icon');
   let  overLay = document.querySelector('.overlay');

   lockScroll = () => {
      document.body.classList.add('lock');
   }
   

   iconMenu.addEventListener('click', function (e) {
   iconMenu.classList.add('active');
   menuBody.classList.add('active');
   overLay.classList.add('active');
   lockScroll();
   
})

};

menuOpen();




function closeOpen() {
let  menuBody = document.querySelector('.menu');
   let  iconMenu = document.querySelector('.menu__icon');
   let  overLay = document.querySelector('.overlay');

   unlockScroll = () => {
      document.body.classList.remove('lock');
   }
   

   overLay.addEventListener('click', function (e) {
   iconMenu.classList.remove('active');
   menuBody.classList.remove('active');
   overLay.classList.remove('active');
   unlockScroll();
   
})
};

closeOpen();

   


function subList(){
   let menuItem = document.querySelectorAll('.menu__item-drop');
   if(menuItem.length > 0) {
      for ( let index = 0; index < menuItem.length; index++) {
         menuItem[index].addEventListener('click', function(e) {
            if(e.target.classList.contains('menu__item')) {
               e.target.closest('.menu__item').querySelector('.menu__sub-list').classList.toggle('active');
            }
         });
      }
   }
};

subList();
   


//iconMenu.addEventListener('click', () =>{
//   iconMenu.classList.add('active');
//   menuBody.classList.add('active');
//   overLay.classList.add('active');
//   lockScroll();
//});

//overLay.addEventListener('click', () =>{
//   menuBody.classList.remove('active');
//   overLay.classList.remove('active');
//   iconMenu.classList.remove('active');
//   unlockScroll();
//});

//let menuItem = document.querySelectorAll('.menu__item-drop');
//if(menuItem.length > 0) {
//   for ( let i = 0; i < menuItem.length; i++) {
//      menuItem[i].addEventListener('click', (e)=> {
//         if(e.target.classList.contains('menu__item-drop')) {
//            e.target.closest('.menu__item').querySelector('.menu__sub-list').classList.toggle('active');
//         }
//       });
//   }
//}




   //-------------- POPUP ------------ 
   function popup() {

      let openPopup = document.querySelector('.open-popup');
   let closePopup = document.querySelector('.close-popup');
   let popup = document.querySelector('.popup');
   let popupBody = document.querySelector('.popup__body');

   openPopup.addEventListener('click', function(e){
      e.preventDefault();
      popup.classList.add('active');
      
   });

   closePopup.addEventListener('click', function() {
      popup.classList.remove('active');
      
   });

   popupBody.addEventListener('click', () =>{
      popup.classList.remove('active');
   });
      
   }
   popup();

   //-------------- СЧЕТЧИК ------------ 

   function count() {

      let time = 2, cc = 1;
   $(window).scroll(function(){
      $('.form-appointment__number').each(function(){
         let
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
         if (cPos < topWindow + 950) {
            if (cc < 2) {
         $('div').each(function(){
            let
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

   }
   count();

   //let time = 2, cc = 1;
   //$(window).scroll(function(){
   //   $('#counter').each(function(){
   //      let
   //      cPos = $(this).offset().top,
   //      topWindow = $(window).scrollTop();
   //      if (cPos < topWindow + 700) {
   //         if (cc < 2) {
   //      $('div').each(function(){
   //         let
   //         i=1,
   //         num = $(this).data('num'),
   //         step = 1000 * time/num,
   //         that = $(this),
   //         int = setInterval(function() {
   //            if (i <= num ) {
   //               that.html(i);
   //            }
   //            else {
   //               cc = cc + 2;
   //               clearInterval(int);
   //            }
   //            i++;
            
   //         }, step);
   //      });
   //   }
   //   }
   // });
   //});


   
   



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










