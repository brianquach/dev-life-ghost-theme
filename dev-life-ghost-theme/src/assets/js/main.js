/**
 * Contains all javascript logic for Dev Life theme
 */

class SiteFunctionality {
  constructor() {
    const $toggleMobileMenuElements =  $('.mobile-menu-btn, .overlay, .site-nav .close');
    const $menuWrapper = $('.menu-wrapper');
    const toggleMenu = () => {
      $menuWrapper.toggleClass('mobile');
    };

    console.log($toggleMobileMenuElements);
    $toggleMobileMenuElements.on('click', (event) => {
      toggleMenu();
    });
  }
}

 const siteFunctionality = new SiteFunctionality();
