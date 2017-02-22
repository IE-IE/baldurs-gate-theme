$('.scrollable').mCustomScrollbar({
  scrollInertia: 0,
  alwaysShowScrollbar: 2,
  scrollButtons: { enable: true },
  theme: "bg-theme",
  autoDraggerLength: false,
  scrollbarPosition: "outside"
});

$('body').on('click', '.tabs__button', function () {
	const $this = $(this);
	const $tabsContainer = $this.closest('.tabs');
	const target = $this.parent().data('target');
	const $tabs = $tabsContainer.find('.tabs__tab');
	$tabs.removeClass('tabs__tab--active');
	$tabs.filter('[data-tab="' + target + '"]').addClass('tabs__tab--active')
	$tabsContainer.find('.tabs__button').removeClass('tabs__button--active');
	$this.addClass('tabs__button--active');
});
