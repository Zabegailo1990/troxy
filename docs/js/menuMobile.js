$(document).ready(function(){$(".c-header__button").on("click",function(){$(".body__menu-mobile").addClass("body__menu-mobile--active"),$("html, body").attr("style","overflow: hidden")}),$(".c-menu-mobile").on("click",".c-menu-mobile__close",function(){$(".body__menu-mobile").removeClass("body__menu-mobile--active"),$("html, body").removeAttr("style")})});