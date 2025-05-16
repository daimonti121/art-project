import modals from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accirduin";
import burger from "./modules/burger";

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    calc('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(modalState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger')
})

