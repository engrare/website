<!-- Copyright 2023 Kaya Sertel. All Rights Reserved.  -->
<!DOCTYPE html>
<html  lang="tr" dir="ltr" data-cast-api-enabled="true">
<head>
<title>Engrare</title>
<link rel="icon" href="./files/photos/title_icon.png" type="image/gif" sizes="16x16">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=0, minimum-scale=1">
<meta property="og:type" content="website">
<meta property="og:image" content="https://raw.githubusercontent.com/engrare/website/main/files/photos/title_icon.png" />
<meta property="og:image:width" content="100" />
<meta property="og:image:height" content="100" />
<meta property="twitter:image" content="https://raw.githubusercontent.com/engrare/website/main/files/photos/title_icon.png"  />
<meta property="og:title" content="Team Engrare WebSitesi">
<meta property="og:url" content="https://engrare.github.io/website/">
<meta property="og:description" content="engrare takımının websitesine hoş geldiniz.">
<meta content="egrare takımının websitesine hoş geldiniz." name="description">
<noscript>
<style>
.main_noscript_div {
	height:	300px;
	width: 450px;
	position: fixed;
	z-index: 20;
	top: 50%;
	left: 50%;
	margin-left: -227px;
	margin-top: -152px;
	background-color: grey;
	color: white;
	font-family: Atkinson Hyperlegible, sans-serif;
	border-radius: 10px;
	border: solid 4px white;
}
.noscript_text {
	font-size: 25px;
	text-align: center;
	margin: 30px 40px;
}
.noscript_header {
	text-align: center;
	margin: 20px;
}
.noscript_button {
	font-size: 20px;
	position: fixed;
	width: 150px;
	height: 80px;
	text-align: center;
	margin-left: 50%;
	left: -75px;
	font-family: Atkinson Hyperlegible, sans-serif;
	box-shadow: 4px 4px black;
	cursor: pointer;
	border: solid 2px black;
}
.noscript_button:hover {
	box-shadow: 2px 2px black;
	background-color: blue;
	color: white;
}
.cover_page {
	background-color: black;
	opacity: 0.9;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 19;
}
 </style>
<div class="main_noscript_div">
<h1 class="noscript_header">JavaScript Error</h1>
<h3 class="noscript_text">It looks like JavaScript closed or not supported in your browser</h3>
<form target="_blank" action="https://support.google.com/adsense/answer/12654?hl=en"><button class="noscript_button">click for help!</button></form>
</div>
<div class="cover_page"></div>
</noscript>
<link href='https://fonts.googleapis.com/css?family=Atkinson Hyperlegible|Bebas Neue|Montserrat' rel='stylesheet'>
<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
<!-- Add the Swiper library -->
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

<!-- Add the Swiper styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css">

<script src="files/myScript.js"></script>
<link rel="stylesheet" href="files/myStyle1.css">


</head>

<body>

<!--<div class="fixed_menu_top"></div>-->
<div class="menu_closer" onclick="openLeftMenu()"></div>

<div class="fixed_menu_top noselect">
	<div class="fixed_menu_cont">
		<div class="fixed_menu_left_cont">
			<div class="fixed_menu_button bar_button" onclick="openLeftMenu()">
				<i class="fa fa-bars menu_opener"></i>
			</div>
			<div class="fixed_menu_all_buttons_cont">
				<div class="fixed_menu_button fixed_menu_buttons_left fixed_menu_button_selected" id="fixed_menu_but_0">
					<p>Engrare</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_1">
					<p>Biz Kimiz?</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_2">
					<p>Vizyonumuz</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_3">
					<p>Misyonumuz</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_4">
					<p>Üye Alımı</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_5">
					<p>Sponsorluk</p>
				</div>
				<div class="fixed_menu_button fixed_menu_buttons_left" id="fixed_menu_but_6">
					<p>İletişim</p>
				</div>
			</div>
			
		</div>
		<div class="fixed_menu_logo_part">
			<img src="./files/photos/engrare_logo.png" height="80%">
			<div class="fixed_menu_logo_text_part">
				<p class="fixed_menu_logo_text">Engrare</p>
				<hr class="fixed_menu_logo_hr" />
				<p class="fixed_menu_logo_text">Teknofest Team</p>
			</div>
		</div>
		<div class="fixed_menu_right_cont">
			<div class="fixed_menu_button fixed_menu_button_3">
			<!--<div class="notification_num">3</div>
				<i class="fa fa-bell notification_bell"></i>-->
				<div class="notification_num"><i class="fa-solid fa-gear settings_button_top"></i></div>
			<i class="fa-solid fa-gear settings_button_top"></i> 
			</div>
		</div>
			
	</div>
</div>
<!--<div class="fixed_menu_top noselect"  id="navbar">
	<div class="fixed_menu_top_backgorund">
	</div>
	<div class="fixed_menu_container">
		<div class="category">

			<a href="#ikinci" style="position: relative;" class="microphone_button_top_a">
				<div class="icon_top_div">
					<i class="fa-regular fa-microphone mini_logo_top" style="position: relative; top: 2px;" ></i>
				</div>
			</a>
		</div>

		<div class="top_part_logo">
			<p style="margin-block-start: 0px; margin-block-end: 0px;position: relative;">ÖRNEK ŞİRKET İSMİ / LOGO</p>
		</div>
		<div class="contect">

		<a class="notification_bell"><div class="icon_top_div"><i class="fa-regular fa-bell"></i><div class="notification_number">5</div></div></a>
			<a class="top_button_2">
				<div class="icon_top_div">
					<i class="fa-regular fa-cart-shopping top_button_2"></i>
				</div>
			</a>
			<a class="search_part_a">
				<div class="icon_top_div">
					<i class="fa-regular fa-magnifying-glass mini_logo_top"></i>
				</div>
			</a>
<a class="user_photo_click" href="./login/login.html" style=" padding-bottom: 4px;"><img src="./Files/pp.jpg" class="user_photo"><i class="fa fa-sign-in sign_in"><p style="display: inline; margin: 0px; font-family: Bebas Neue;"> User</p></i>
</a>
		</div>
	</div>
</div>-->

<div class="main_div">

<div class="fixed_menu_space"></div>

<div class="main_container_2" style="height: calc(100% - 50px)">
<div class="swiper-container-wrapper">
	<div class="swiper-container swiper_cont">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="go_furniture_detail_outer"></div>
				<div class="go_furniture_detail noselect">
					<div class="go_furniture_detail_cont_1">
						<div class="img_slogan_cont">
							<h1 class="img_slogan_txt">Engrare Takımı</h1>
						</div>
						<a class="go_furniture_detail_a" onclick="ScrollPart(1)">
							<div class="go_furniture_detail_cont_2">
								<p class="go_furniture_detail_txt">Detayını Gör</p>
							</div>
						</a>
					</div>
				</div>
				<img src="files/photos/slayt1.jpg" class="swiper_slide_img" />
				
			</div>
			<div class="swiper-slide">
				<div class="go_furniture_detail_outer"></div>
				<div class="go_furniture_detail noselect">
					<div class="go_furniture_detail_cont_1">
						<div class="img_slogan_cont">
							<h1 class="img_slogan_txt">Engrare'a Destek ol!</h1>
						</div>
						<a class="go_furniture_detail_a" onclick="ScrollPart(5)">
							<div class="go_furniture_detail_cont_2">
								<p class="go_furniture_detail_txt">Sponsorluk Başvurusu Yap</p>
							</div>
						</a>
					</div>
				</div>
				<img src="files/photos/money_bg.jpg" class="swiper_slide_img" />
			</div>
			<div class="swiper-slide">
				<div class="go_furniture_detail_outer"></div>
				<div class="go_furniture_detail noselect">
					<div class="go_furniture_detail_cont_1">
						<div class="img_slogan_cont">
							<h1 class="img_slogan_txt">Hazırlıklarımız</h1>
						</div>
						<a class="go_furniture_detail_a" onclick="ScrollPart(2)">
							<div class="go_furniture_detail_cont_2">
								<p class="go_furniture_detail_txt">Detayını gör</p>
							</div>
						</a>
					</div>
				</div>
				<img src="files/photos/odulfoto.jpg" class="swiper_slide_img" />
			</div>
			<div class="swiper-slide">
				<div class="go_furniture_detail_outer"></div>
				<div class="go_furniture_detail noselect">
					<div class="go_furniture_detail_cont_1">
						<div class="img_slogan_cont">
							<h1 class="img_slogan_txt">Engrarelı Ol!</h1>
						</div>
						<a class="go_furniture_detail_a" onclick="ScrollPart(4)">
							<div class="go_furniture_detail_cont_2">
								<p class="go_furniture_detail_txt">Başvuru için Tıkla</p>
							</div>
						</a>
					</div>
				</div>
				<img src="files/photos/jointeambg.jpg" class="swiper_slide_img" />
			</div>
		</div>
	</div>

	<!-- Add the navigation buttons -->
	<div class="swiper-button-prev left_right_buttons_swipper"></div>
	<div class="swiper-button-next left_right_buttons_swipper"></div>
	<div class="transition_sign">
		<div class="transition_sign_cont">

			<div class="trans_click trans_active" id="transClick_0"></div>
			<div class="trans_click" id="transClick_1"></div>
			<div class="trans_click" id="transClick_2"></div>
			<div class="trans_click" id="transClick_3"></div>


		</div>
	</div>
  
</div>
</div>

<div class="main_container_2">
	<div class="main_container_2_bg_photo_part">
		<img src="files/photos/furniture_photo_example_4.jpg" class="main_container_2_bg_photo" id="sliding_photo_1"/>
	</div>
	<div class="main_container_2_text_part">
		<h1>Biz Kimiz?</h1>
	  <h3>örnek yazı 2 bu bir yazıdır<br /> istediğiniz kadar uzatabilirsiniz.</h3>

	</div>
</div>


<div class="main_container_2">
	<div class="main_container_2_bg_photo_part">
		<img src="files/photos/furniture_photo_example_4.jpg" class="main_container_2_bg_photo" id="sliding_photo_2"/>
	</div>
	<div class="main_container_2_text_part">
		<h1>Vizyonumuz</h1>
	  <h3>örnek yazı 2 bu bir yazıdır<br /> istediğiniz kadar uzatabilirsiniz.</h3>
		<!--<a href="https://www.google.com/" class="go_furniture_detail_a">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Detayını gör</p>
			</div>
		</a>-->
	</div>
</div>
	
<div class="main_container_2">
	<div class="main_container_2_bg_photo_part">
		<img src="files/photos/furniture_photo_example_4.jpg" class="main_container_2_bg_photo" id="sliding_photo_3"/>
	</div>
	<div class="main_container_2_text_part">
		<h1>Misyonumuz</h1>
	  <h3>örnek yazı 2 bu bir yazıdır<br /> istediğiniz kadar uzatabilirsiniz.</h3>
		<!--<a href="https://www.google.com/" class="go_furniture_detail_a">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Detayını gör</p>
			</div>
		</a>-->
	</div>
</div>
	
	

<div class="main_container_2" id="membership_cont_outer">
	<div class="main_container_2_bg_photo_part">
		<img src="files/photos/furniture_photo_example_4.jpg" class="main_container_2_bg_photo" id="sliding_photo_4"/>
	</div>
	<div class="main_container_2_text_part">
		<div class="membership_form_iframe_outer">
		<a class="go_furniture_detail_a" onclick="OpenCloseForm(1)">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Üye Alım Formunu Kapat</p>
			</div>
		</a>
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvTn5McU7fDOC9uBnRjqX2M4Z-cpuMG-oI1-1qSebOcoMgJQ/viewform?embedded=true" width="100%" height="3210" frameborder="0" marginheight="0" marginwidth="0"class="membership_form_iframe">Loading…</iframe>
		</div>
		<div class="text_part_inner_cont" id="membership_cont">
		<h1>Üye Alımı</h1>
	  <h3>örnek yazı 2 bu bir yazıdır<br /> istediğiniz kadar uzatabilirsiniz.</h3>
		<a class="go_furniture_detail_a" onclick="OpenCloseForm(1)">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Form için tıkla</p>
			</div>
		</a>
		<!--<a href="https://www.google.com/" class="go_furniture_detail_a">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Detayını gör</p>
			</div>
		</a>-->
	</div>
	</div>
</div>
	

<div class="main_container_2" id="sponsorship_cont_outer">
	<div class="main_container_2_bg_photo_part">
		<img src="files/photos/furniture_photo_example_4.jpg" class="main_container_2_bg_photo" id="sliding_photo_5"/>
	</div>
	<div class="main_container_2_text_part">
		<div class="sponsorship_form_iframe_outer">
		<a class="go_furniture_detail_a" onclick="OpenCloseForm(2)">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Sponsorluk Formunu Kapat</p>
			</div>
		</a>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnS6v8xfdv8wYeqp5fnFl70ZXsQyZGB7irnU-t_jNkXx7yMg/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0" class="sponsorship_form_iframe">Yükleniyor…</iframe>
		</div>
		<div class="text_part_inner_cont" id="sponsorship_cont">
		<h1>Sponsorluk İsteği</h1>
	  <h3>örnek yazı 2 bu bir yazıdır<br /> istediğiniz kadar uzatabilirsiniz.</h3>
		<a class="go_furniture_detail_a" onclick="OpenCloseForm(2)">
			<div class="go_furniture_detail_cont_2">
				<p class="go_furniture_detail_txt">Bizi desteklemek için tıklayınız.</p>
			</div>
		</a>
			
		
	</div>
	</div>
</div>


<div class="contect_part main_container_2">
	<div class="contect_part_cont">
		<div class="contect_part_cont_2">

			<div class="social_media">
				<div class="social_and_text_part">
					<h1 class="contect_social_header">İletişim ve Destekçilerimiz</h1>
						<div class="wrapper social_media_part" style="margin: 0px;">
							<div class="social_grup_cont">
								<a href="https://wa.me/905412989803" target="_blank"><div class="icon whatsapp">
									<div class="tooltip">WhatsApp</div>
										<span><i class="fa-brands fa-whatsapp"></i></span>
									</div>
								</a>
								<div class="icon linkedin">
									<div class="tooltip">LinkedIn</div>
									<span><i class="fa-brands fa-linkedin"></i></span>
								</div>
							</div>
							<div class="social_grup_cont">
  <div class="icon xtwitter">
    <div class="tooltip">X</div>
    <span><i class="fa-brands fa-x-twitter"></i></span>
  </div>
  <a href="https://www.instagram.com/engrare.co/" target="_blank"><div class="icon instagram">
    <div class="tooltip">Instagram</div>
    <span><i class="fa-brands fa-instagram"></i></span>
  </div>
	  </a>
 <!-- <div class="icon telegram">
    <div class="tooltip">Telegram</div>
    <span><i class="fa-brands fa-telegram"></i></span>
  </div>
  <div class="icon youtube">
    <div class="tooltip">YouTube</div>
    <span><i class="fa-brands fa-youtube"></i></span>
  </div>
  <div class="icon map UK">
    <div class="tooltip">UK</div>
    <span><i class="fa fa-map"></i></span>
  </div>-->
  </div>
<div class="social_grup_cont">
  <a href="https://maps.app.goo.gl/B9vYVUaMijcD9bns8" target="_blank"><div class="icon map TURKEY">
    <div class="tooltip">Adresi gör</div>
    <span><i class="fa fa-map"></i></span>
  </div></a>
      <form action="mailto:engrare.co@gmail.com" method="post" enctype="text/plain">
		  <button class="mail_button">
         <div class="icon mail" type="submit">
    <div class="tooltip">Mail</div>
    <span><i class="fa-regular fa-envelope"></i></span>
  </div></button>
      </form>
	</div>

</div>
					
</div>
<div class="maps">
	<div class="maps_cont">
		<div class="mapouter"><div class="gmap_canvas"><iframe id="map1" width="600" height="400" title="Google Maps" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1506.5817246596514!2d29.131488877676745!3d40.9559980557768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac77debfec47d%3A0x7a7592ba572b48b9!2sM5%20(Makine%20ve%20End%C3%BCstri%20M%C3%BChendisli%C4%9Fi)!5e0!3m2!1str!2str!4v1696669891312!5m2!1str!2str"></iframe>
			
			

			
			
			
			</div><style></style></div>
		<!--<div class="mapouter"><div class="gmap_canvas"><iframe id="map2" width="600" height="400" title="Google Maps" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pinaldi&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div><style></style></div>-->
	</div>
</div>
<!--<iframe title="" class="YouTube_video noselect" width="480" height="270" src="https://www.youtube.com/embed/oo3SvcydIJ0?start=1000controls=1"frameborder="0" 
allowfullscreen>
</iframe>
advertisement 
consaltincy
website
-->
</div>
</div>
</div>
<div class="copywrite_part">
<p class="copywrite_text">Bu websitesinin tüm hakları Kaya Sertel ve <b>Engrare©®™</b> ekibine aittir. 3. kişilerin kullanımına kapalıdır.</p>
</div>
</div>


</body>

</html>
