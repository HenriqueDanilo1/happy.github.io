var homePage=document.getElementById("nav-left"),page1=document.getElementById("p1"),currentPage=homePage;function slidePageFrom(e,t){e.className="page "+t,e.className="page transition center",currentPage.className="page transition "+("left"===t?"right":"left"),currentPage=e}homePage=document.getElementById("div-test");var page2=document.getElementById("p2");currentPage=homePage;function slidePageFrom(e,t){e.className="page2 "+t,e.className="page transition center",currentPage.className="page transition "+("left"===t?"right":"left"),currentPage=e}function minepremium(){document.getElementById("value-total").innerHTML="R$39,90",document.getElementById("sacola").innerHTML="R$39,90",document.getElementById("title-edit").innerHTML="Minecraft Premium",document.getElementById("premium-price").innerHTML="R$39,90",document.getElementById("mp-payment").href="#open-modal",document.getElementById("code").value="E60E49A2343451FAA4C4CF96C69A9962",document.getElementById("hosted_button_id").value="RMQUQ7UUCCYTU",document.getElementById("carrinho-pagseguro").href="https://buy.stripe.com/aEUg0U1yA0uzemQ7su"}function minecraftshared(){document.getElementById("value-total").innerHTML="R$0,90",document.getElementById("sacola").innerHTML="R$0,90",document.getElementById("title-edit").innerHTML="Minecraft Shared",document.getElementById("premium-price").innerHTML="R$0,90",document.getElementById("mp-payment").href="#open-modal",document.getElementById("carrinho-pagseguro").href="https://buy.stripe.com/bIYeWQ5OQfpt3Ic9AD",document.getElementById("hosted_button_id").value="6BYFQCZACSJ7Y"}function minekey(){document.getElementById("value-total").innerHTML="R$79,90",document.getElementById("sacola").innerHTML="R$79,90",document.getElementById("premium-price").innerHTML="R$79,90",document.getElementById("title-edit").innerHTML="Minecraft Key",document.getElementById("mp-payment").href="#open-modal",document.getElementById("carrinho-pagseguro").href="https://buy.stripe.com/aEU8ys2CEcdhfqU9AE",document.getElementById("hosted_button_id").value="6BYFQCZACSJ7Y"}function openSearch(){document.getElementById("myOverlay").style.display="block"}function closeSearch(){document.getElementById("myOverlay").style.display="none"}function semestoque(){document.getElementById("prosseguir-compra-btn-compartilhado").innerHTML="Sem estoque :("}jQuery(document).ready((function(){jQuery("#ajax_form").submit((function(){var e=jQuery(this).serialize();return jQuery.ajax({type:"POST",url:"processa.php",data:e,success:function(e){$("#enviado").html("<span class='enviado'><b>E-mail Enviado</b></span>")}}),!1}))})),$(".faq-btn").click((function(){$("html,body").animate({scrollTop:$(".faq").offset().top},"slow")})),$(".botao-confira").click((function(){$("html,body").animate({scrollTop:$(".big-container").offset().top},"fast")})),$(document).ready((function(){$("#prosseguir-compra-btn-premium").click((function(){$("body").animate({marginLeft:"-=150px"})})),$("#backbody").click((function(){$("body").animate({marginLeft:"+=150px"},150)}))})),$(document).ready((function(){$("#btn-shared").click((function(){$("body").animate({marginLeft:"-=150px"})})),$("#backbody").click((function(){$("body").animate({marginLeft:"+=0px"},150)}))})),$(document).ready((function(){$("#sacola").click((function(){$("body").animate({marginLeft:"-=150px"},150)})),$("#backbody").click((function(){$("body").animate({marginLeft:"+=0px"},150)}))})),$((function(){$("#mercadopago").on("click",(function(){document.getElementById("payment-mercadopago").style.border="2px solid rgb(100, 21, 255)",document.getElementById("payment-pagseguro").style.border="2px solid transparent",$("#payment-pagseguro").css("background-color","#222222"),$("#payment-mercadopago").css("background-color","#000"),$("#carrinho-comprar").show(),$("#carrinho-pagseguro").hide()}))})),$((function(){$("#pagseguro").on("click",(function(){document.getElementById("payment-pagseguro").style.border="2px solid rgb(100, 21, 255)",document.getElementById("payment-mercadopago").style.border="2px solid transparent",$("#payment-mercadopago").css("background-color","#222222"),$("#payment-pagseguro").css("background-color","#000"),$("#carrinho-pagseguro").css("display","block"),$("#carrinho-pagseguro").show(),$("#carrinho-comprar").hide()}))})),$((function(){$("#payp").on("click",(function(){document.getElementById("mercadopago").style.border="2px solid #ff2084",document.getElementById("pagseguroo").style.border="2px solid #ff2084",$("#carrinho-pagseguro").hide(),$("#carrinho-mercadopago").hide()}))}));var app=document.getElementById("app");(typewriter=new Typewriter(app,{loop:!0,typeSpeed:80,deleteSpeed:80,typeColor:"red"})).typeString("PARA WINDOWS").pauseFor(2500).deleteAll().typeString("PARA OSX").pauseFor(2500).deleteChars(15).typeString("<strong>E UBUNTU LINUX</strong>").pauseFor(2500).start();var typewriter;app=document.getElementById("botao-confira");(typewriter=new Typewriter(app,{loop:!0,typeSpeed:80,deleteSpeed:80,typeColor:"red"})).typeString("PARA WINDOWS").pauseFor(2500).deleteAll().typeString("PARA OSX").pauseFor(2500).deleteChars(15).typeString("<strong>E UBUNTU LINUX</strong>").pauseFor(2500).start();