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
    });
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

