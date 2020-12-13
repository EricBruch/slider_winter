// Icons
const iconsBasePath = 'img/img_slider/icons/';
const emptyCircleIcon = 'empty_circle.png';
const fullCircleIcon = 'full_circle.png';
// Images with Array for pictures
const imgBasePath = 'img/img_slider/pictures/';
const sliderImgsSources = ['slider_img_0.jpg', 'slider_img_1.jpg', 'slider_img_2.jpg'];
// slider state
let currentDisplayImg;
let updateSliderInterval;



/**
 * This method initiates the slider when the page is loaded by
 * creating the img & icons and displaying the first
 */
function initiateSlider() {
    createSliderImgs();
    createSliderIcons();
    currentDisplayImg = 0;
    sliderAdjustDisplayedObjects(currentDisplayImg);
    startSliderInterval();    
}

/**
 * This method creates all slider Img based on the Array with the Img sources
 */
function createSliderImgs() {
    for (let i = 0; i < sliderImgsSources.length; i++) {
        let img = createSliderImg(i);
        document.getElementById('slider-img-add-here').insertAdjacentHTML('beforeend', img);
    }
}

/**
 * This method creates a slider img for the slider
 *  */
function createSliderImg(i){
    return '<img src="'+ imgBasePath + sliderImgsSources[i] +'" id="slider-img-' + i + '" class="slider-img">';
}

/**
 * This function creates all slider Icons based on the Array with the Img sources
 *  */ 
function createSliderIcons(){
    for (let i = 0; i < sliderImgsSources.length; i++) {
        let icon = createSliderIcon(i);
        document.getElementById('slider-icons-add-here').insertAdjacentHTML('beforeend', icon);
    }
}

/**
 * This methdo create a Slider icon for the slider
 *  */ 
function createSliderIcon(i){
    return '<div id="slider-icon-' + i + '" onclick="showImg(' + i + ')"' + 'class="slider-icon-emptyCircle"></div>';
}

/**
 * This method is called to change the displayed img & icon
 * in the slider to the next
 *  */ 
function sliderChangeToNext() {
    increaseDisplayImg();
    sliderAdjustDisplayedObjects(currentDisplayImg);
}

/**
 * This method increases to the next displayed img / Icon
 * depending on the maximum amount of img
 * starts back at the beginning after last element
 *  */ 
function increaseDisplayImg() {
    if (currentDisplayImg + 1 < sliderImgsSources.length){
        ++currentDisplayImg;
    } else {
        currentDisplayImg = 0;
    }
}

/**
 * This method can be called by the Icon Buttons and is used to
 * change the displayed img in the slider 
 */
function showImg(x) {
    clearInterval(updateSliderInterval);
    currentDisplayImg = x;
    sliderAdjustDisplayedObjects(x);
    startSliderInterval();
}

/**
 * This function changes the displayed Img & Icons based on the index put into the function
 *  */ 
function sliderAdjustDisplayedObjects(x) {
    adjustDisplayedImg(x);
    adjustDisplayIcon(x);
}

/**
 * This method changed the displayed Img
 *  */
function adjustDisplayedImg(x) {
    let sliderImgs = document.querySelectorAll("img[id*='slider-img-']");
    for (let i = 0; i < sliderImgsSources.length; i++) {
        if (i == x) {
            sliderImgs[i].classList.remove('slider-img-relocate');
            sliderImgs[i].classList.add('slider-img-display');
        } else {
            sliderImgs[i].classList.remove('slider-img-display');
            sliderImgs[i].classList.add('slider-img-relocate');
        }
    }
}

/**
 * This method changes the displayed Icon
 *  */
function adjustDisplayIcon(x) {
    let sliderButtons = document.querySelectorAll("*[id*='slider-icon-']");
    for (let i = 0; i < sliderImgsSources.length; i++) {
        if (i == x) {
            sliderButtons[i].classList.add('slider-icon-fullCircle');
        } else {
            sliderButtons[i].classList.remove('slider-icon-fullCircle');
        }      
    }
}

/**
 * This method starts the interval that changes regularly to the next Img & Icon
 *  */
function startSliderInterval() {
    updateSliderInterval = setInterval(sliderChangeToNext, 5000);
}