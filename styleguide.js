/*
styleguide.js

Dependencies :
- jQuery
- Bootstrap.js (collapse, tabs)

Inspiration : https://marvelapp.com/styleguide/overview/
*/

export function styleguide() {

// Cache
var $sgBody = $('body'),
	$sgCollapseBlock = $('.sg-aside__subnav.collapse'),
	$sgCollapseTrigger = $('.sg-aside [data-toggle="collapse"]'),
	$sgMenuTrigger = $('.js-sg-menu-trigger'),
	$sgTabTrigger = $('.sg-aside__tab-trigger'),
	url = document.location.toString();

// Javascript to enable link to tab
if (url.match('styleguide#')) {
	$sgCollapseTrigger.removeClass('open').siblings('.collapse').removeClass('in');
	$sgTabTrigger.parent('li').removeClass('active');
	$('.sg-aside__tab-trigger[href="#' + url.split('#')[1] + '"]').tab('show').parent('li').addClass('active').parent('.collapse').addClass('in').siblings('[data-toggle="collapse"]').addClass('open');
}

// Manage the menu on mobile view
$sgMenuTrigger.on('click', function() {
	$sgBody.toggleClass('sg-menu-is-open');
});

$sgCollapseTrigger.on('click', function(event) {
	var $target = $(event.target);
// Manage to inform the view when collapse open
if ($target.hasClass('open')) {
	$sgCollapseTrigger.removeClass('open');
	$sgCollapseBlock.collapse('hide');
}
else {
	$sgCollapseTrigger.removeClass('open');
	$sgCollapseBlock.collapse('hide');
	$target.addClass('open');
}
});

  //Manage issue with active tab trigger
  $sgTabTrigger.on('show.bs.tab', function(event) {
  	var $target = $(event.target);
  	$sgTabTrigger.parent('li').removeClass('active');
  	$target.parent('li').addClass('active');
  	$sgBody.removeClass('sg-menu-is-open');
  });
  //change hash
  $sgTabTrigger.on('shown.bs.tab', function(e) {
  	window.location.hash = e.target.hash;
  });

}
