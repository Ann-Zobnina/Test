$(document).ready(function() {
    var uncheck = document.getElementsByTagName('input');
    for(var i = 0; i < uncheck.length; i++) {
        if(uncheck[i].type == 'checkbox') {
          uncheck[i].checked = false;
        }
    }


    var last_checkbox, pre_last_checkbox = '';
    $('.faq__item__input').change(function() {
        

        var pdi = $(this).parent('.faq__item').index();
        if(pre_last_checkbox === ''){
          last_checkbox = pre_last_checkbox = pdi;
        }
        else{
          pre_last_checkbox = last_checkbox;
          last_checkbox = pdi;
        }
        if($('.faq__item__input:checked').length > 1){
          $('.faq__item').eq(pre_last_checkbox).find('.faq__item__input').prop('checked', false);
        }


        // if($(this).prop('checked') == true) {
        //   $(this).parent().siblings('.faq__item__text').css('max-height', '500px');

        //   $(this).siblings('.faq__item__icon').css('background', 'linear-gradient(180deg, #E41579 0%, #FF3F84 100%)');
        //   $(this).siblings('.faq__item__icon').children('.faq__item__icon__symbol').css('background-color', '#fff');

        //   $(this).siblings('.faq__item__icon').children('.faq__item__icon__symbol').css('transform', 'rotate(45deg) translate3d(-200%, -50%, 0)');
        // }
       
          // $(this).parent().siblings('.faq__item__text').css('max-height', '500px');

          // $(this).siblings('.faq__item__icon').css('background', 'linear-gradient(180deg, #E41579 0%, #FF3F84 100%)');
          // $(this).siblings('.faq__item__icon').children('.faq__item__icon__symbol').css('background-color', '#fff');

          // $(this).siblings('.faq__item__icon').children('.faq__item__icon__symbol').css('transform', 'rotate(45deg) translate3d(-200%, -50%, 0)');
    });

    // $('.faq__item__input').change(function() {
    //     $(this).parent().siblings('.faq__item__text').css('max-height', '500px');
    //   }
    // );
});  


// $(document).ready(function() {
//     $('.faq__item__input').change(function() {
//         const parent = $(this).closest('.faq__item')[0];
//         const textDiv = parent.querySelector('.faq__item__text');
//         // console.log( textDiv );
//         console.log(this)
//         // $(textDiv).show(1000);
//         if(this.checked == true) {
//             console.log('checked');
//             $(textDiv).slideDown(400, 'linear');
//         }

//         // else {
//         //     $(textDiv).slideToggle(400, 'linear');
//         // }
//     });
// });

