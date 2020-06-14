let company = document.querySelector('.footer-blocks-nav-company-title-mob');

let companyA = document.querySelector('.footer-blocks-nav-company-about-mob');
let companyB = document.querySelector('.footer-blocks-nav-company-catalog-mob');
let companyC = document.querySelector('.footer-blocks-nav-company-blog-mob');
let companyD = document.querySelector('.footer-blocks-nav-company-contacts-mob');

companyA.style.display = 'none';
companyB.style.display = 'none';
companyC.style.display = 'none';
companyD.style.display = 'none';

company.onclick = function() {
    if (companyA.style.display == 'none' &&
        companyB.style.display == 'none' &&
        companyC.style.display == 'none' &&
        companyD.style.display =='none') {
            companyA.style.display = 'block';
            companyB.style.display = 'block';
            companyC.style.display = 'block';
            companyD.style.display = 'block';
        } else {
            companyA.style.display = 'none';
            companyB.style.display = 'none';
            companyC.style.display = 'none';
            companyD.style.display = 'none';
    }
}
//todo==================================================

let howBuy = document.querySelector('.footer-blocks-nav-how_buy-title-mob');

let howBuyA = document.querySelector('.footer-blocks-nav-how_buy-pay-mob');
let howBuyB = document.querySelector('.footer-blocks-nav-how_buy-guaranty-mob');
let howBuyC = document.querySelector('.footer-blocks-nav-how_buy-delivery-mob');

howBuyA.style.display = 'none';
howBuyB.style.display = 'none';
howBuyC.style.display = 'none';

howBuy.onclick = function() {
    if (howBuyA.style.display == 'none' &&
        howBuyB.style.display == 'none' &&
        howBuyC.style.display == 'none'
       ) {
        howBuyA.style.display = 'block';
        howBuyB.style.display = 'block';
        howBuyC.style.display = 'block';

    } else {
        howBuyA.style.display = 'none';
        howBuyB.style.display = 'none';
        howBuyC.style.display = 'none';

    }
}

//todo==================================================

let services = document.querySelector('.footer-blocks-nav-services-title-mob');

let servicesA = document.querySelector('.footer-blocks-nav-services-ransom-mob');
let servicesB = document.querySelector('.footer-blocks-nav-services-restovration-mob');
let servicesC = document.querySelector('.footer-blocks-nav-services-grading-mob');

servicesA.style.display = 'none';
servicesB.style.display = 'none';
servicesC.style.display = 'none';

services.onclick = function() {
    if (servicesA.style.display == 'none' &&
        servicesB.style.display == 'none' &&
        servicesC.style.display == 'none'
    ) {
        servicesA.style.display = 'block';
        servicesB.style.display = 'block';
        servicesC.style.display = 'block';

    } else {
        servicesA.style.display = 'none';
        servicesB.style.display = 'none';
        servicesC.style.display = 'none';

    }
}