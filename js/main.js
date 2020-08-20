// メインヴィジュアルスライダー
// $(function(){
//   let imgTarget = $('.slide-img'); 
//   let imgNum = imgTarget.length;
//   let index = imgTarget.index();
//   const slider = function(){
//     if(index == (imgNum - 1)){
//       imgTarget.eq(index).removeClass('show');
//       index = 0;
//       imgTarget.eq(index).addClass('show');
//     }else{
//       imgTarget.eq(index).removeClass('show');
//       index++;
//       imgTarget.eq(index).addClass('show');
//     }
//   }
//   setInterval(slider,11000);
// });
$(function(){
  const target = $('.slide-img img');
  let wrapper =$('.slide-inner');
  const targetCount = target.length;
  
  let slider = setInterval ( function() {
      
      let targetWidth = target.height();
      let innerWidth =wrapper.height();
      let firstTarget = $('.slide-img img:first');
      let firstTargetW = firstTarget.height();
      let firstClone = $(".slide-img img:first").clone(true);
      
      wrapper.animate( { 'margin-top' :  -firstTargetW * 2} , 
                          { duration : 2000 , 
                            complete : function(){
                              firstTarget.remove(),
                              firstClone.clone(true).insertAfter( $(".slide-img img:last")); 
                        }
                      });
    }, 10000 );
});

// アコーディオン
$(function(){
 const abClickTarget = $('.about__heading-container ,a[href^="#about"]');
 const woClickTarget = $('.works__heading-container,a[href^="#works"]');
 const coClickTarget = $('.contact__heading-container,a[href^="#contact"]');
 const abOpenTarget = $('.about__wrapper');
 const woOpenTarget = $('.works__wrapper');
 const coOpenTarget = $('.contact__wrapper');
 
  abClickTarget.on('click',function(){

    if(abOpenTarget.hasClass('open')){
      abOpenTarget.removeClass('open');
    }else if(woOpenTarget.hasClass('open')){
      woOpenTarget.removeClass('open');
      abOpenTarget.addClass('open');
    }else{
      abOpenTarget.addClass('open');
    }

    if(abOpenTarget.hasClass('open')){
      $('.main').css('background-color','#708090');
    }else if(abOpenTarget.not('open')){
      $('.main').css('background-color','#111111');
    }
  });

  woClickTarget.on('click',function(){
    if(woOpenTarget.hasClass('open')){
      woOpenTarget.removeClass('open');
    }else if(abOpenTarget.hasClass('open')){
      abOpenTarget.removeClass('open');
      woOpenTarget.addClass('open');
    }else{
      woOpenTarget.addClass('open');
    }

    if(woOpenTarget.hasClass('open')){
      $('.main').css('background-color','#A9A9A9');
    }else if(woOpenTarget.not('open')){
      $('.main').css('background-color','#111111');
    }
  });

  coClickTarget.on('click',function(){
    if(coOpenTarget.hasClass('open')){
      coOpenTarget.removeClass('open');
    }else if(abOpenTarget.hasClass('open')){
      abOpenTarget.removeClass('open');
      coOpenTarget.addClass('open');
    }else{
      coOpenTarget.addClass('open');
    }

    // if(coOpenTarget.hasClass('open')){
    //   $('.main').css('background-color','#A9A9A9');
    // }else if(coOpenTarget.not('open')){
    //   $('.main').css('background-color','#111111');
    // }
  });


});

// タブ
$(function(){
  const tab = $('.works__tab li');
  const appearParts = $('.works__tab-contents');
  tab.on('click',function(){
    let tabIndex = $(this).index();
    tab.removeClass('open');
    tab.eq(tabIndex).addClass('open');
    appearParts.removeClass('show');
    appearParts.eq(tabIndex).addClass('show');
  })
});

// モーダルウィンド
$(function(){
  const clickOpen = $('.tab-contents-box');
  const close = $('.close-icon');
  clickOpen.each(function(){
    $(this).on('click',function(){
      let target = $(this).data('target');
      let modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    })
    close.on('click',function(){
      $('.works__modal').fadeOut();
    });
  });
});

// スクロールカラー変更
$(function(){
  const changeText = $('.gnavi_child a');

  $(window).on('scroll',function(){

    if($(window).scrollTop() > 300){
      changeText.css({
        color:'#dddde0',
        'box-shadow':'#757575 2px 2px 10px'
      });
    }else{
      changeText.css({
        color:'#111111',
        'box-shadow': 'none'
      });
    }
  });

});

// spメニュー
$(function(){
  const clickParts = $('.header__sp-icon');
  const spMenu = $('.header__sp-navi');

  clickParts.on('click',function(){
    if(spMenu.hasClass('show')){
      spMenu.removeClass('show');
      clickParts.removeClass('open');
    }else{
      spMenu.addClass('show');
      clickParts.addClass('open');
    }
  });
});

// ページ内リンクアニメーション
$(function(){
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
   });
  });

// スクロールフェードイン
$(function(){
  const target = $('.about__heading-container,.works__heading-container');

  $(window).scroll(function(){
    const wHeight = $(window).height();
    const wTop = $(window).scrollTop();
    target.each(function(){
      const position = $(this).offset().top;
      if(wTop > position - wHeight + 100){
        target.addClass('active');
      }
    });
  });
});
