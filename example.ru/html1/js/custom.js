//Ресайзим промозону 
function BannerResize(){
	$('#main_banner').css('height',$(window).height());
}

//Получаем якорь и прокручиваем страницу к заданому пункту
function GetAnchor(){
	var Anchor=window.location.hash.replace("#","");
	if (Anchor == ""){return true}
	if (Anchor == 'corporate_site') {Anchor="product";}
	if (Anchor == 'landing_page') {Anchor="product";}
	if (Anchor == 'contacts') {Anchor="questions_form";}  
	
	var test = $('#'+Anchor).offset().top+290;
	$('html,body').stop().animate({scrollTop: test});    
	return true; 
}


//Проверка валидности полей формы
function form_validate(OBJ,REG) { 
	var v=OBJ.val();
	var l=v.length;
	if(REG.test(v)){
		if (l>1){return true;}
	} return false;
}

$(document).ready(function(){ 
	
	GetAnchor();
	
	//Адаптация размера банера при загрузке страницы
	BannerResize();
	
	//Адаптация позиции блока с контактами
	
	//При изменении размера окна браузера
	
	
	//Подключаем и инициализируем Fancybox
	$(".modalbox").fancybox();
	$(".modal_close").click(function(){parent.$.fancybox.close();});
	
	
	//Обработка форм обратной связи
	$(".feedback_form input").focus(function(){$(this).removeClass("error");});
	$(".feedback_form").submit(
		function(){
			
			var trigger=true;
			if (!form_validate($(this).children('.name'), /^[а-яА-Я'][а-яА-Я-' ]+[а-яА-Я']?$/)){
				trigger=false;
				$(this).children('.name').addClass('error');
			}
			if (!form_validate($(this).children('.phone'), /^[0-9\s(+)]*$/)){
				trigger=false;
				$(this).children('.phone').addClass('error');
			}
			
			
			if (!trigger){return false;}
			
			$(this).addClass("form_disabled");
			var formdata; formdata=$(this).serialize();
			
			$.ajax({
				type: 'POST',
				url: '/html1/sendmessage.php',
				data: formdata,
				success: function(data) {
					if(data == "true") {
						$.fancybox.close();
						$.fancybox.open({href: '#success_win'});							
					}
				}
			});
			
			return false;
		}
	);
	
	
	//Обработка ссылок основного меню
	$('.sLink').on('click', function(e){
		$('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top-25}, 1000);
		e.preventDefault();
	});
	
	
	//Обработка плавающего меню
	$(window).scroll(function() {
    	var top = $(document).scrollTop();
        if (top>200 && !$('.header_container').hasClass('header_hover')){
			$('.header_container').addClass('header_hover');
			$('.header_container').css('top', 0-200+'px');
			$('.header_container').css('opacity', 0);
			$('.header_container').animate({top: 0+'px', opacity: 1}, 500 );
		}
		if (top<=200 && $('.header_container').hasClass('header_hover') && !$('.header_container').hasClass('hide_header_hover')){
			$('.header_container').addClass('hide_header_hover');
			$('.header_container').animate({top: -200+'px', opacity: 0}, 200, function(){
				$('.header_container').removeClass('header_hover');
				$('.header_container').removeClass('hide_header_hover');
				$('.header_container').css('opacity', 1);
				$('.header_container').css('top', 0);
					
			});
			
		}
	});
	
	
});