const pictureShowImgBasePath = './img/picture_show_slider/pictures/';
const pictureShowImgsSources =
    [
        'city-at-lake.jpg', 'Hallstatt-evening.jpg',
        'Hallstatt-spring.jpg', 'Hallstatt-winter.jpg', 'lake-at-mountains.jpg',
        'lake-at-mountains-2.jpg', 'lake-hut.jpg', 'lake-sail.jpg',
        'mountain-goat.jpg', 'mountain-hiking.jpg', 'mountains.jpg',
        'mountains-climb.jpg', 'mountains-grass.jpg', 'mountains-hiking.jpg',
        'mountain-snow-hiking.jpg', 'mountains-sitting.jpg', 'mountains-sky-range.jpg',
        'sit-at-lake.jpg', 'snowy-mountains.jpg', 'stones-at-mountain-range.jpg',
        'view-to-Hallstatt.jpg', 'view-to-lake.jpg'
    ];

function initiatePictureShow() {
    for (let i = 0; i < pictureShowImgsSources.length; i++) {
        let img = createPictureShowImg(i);
        document.getElementById('picture-show-add-pictures-here').insertAdjacentHTML("beforeend", img);
    }
}

function createPictureShowImg(i) {
    return '<img id="picture-show-' + i + '" class="picture-show-img-option" onclick="showInPictureShow(this)" src="'
        + pictureShowImgBasePath + pictureShowImgsSources[i] + '" >';
}

/**
 * check if displayed img does not exist yet
 * If doesn't exist create img
 * If dispalyed img already exist change picture to 
 * picture clicked by user
 * @param {*} obj Obj the user clicked on
 */
function showInPictureShow(obj) {
    let displayedImg = document.getElementById('picture-show-displayed-img');
    if (!displayedImg) {
        let img = '<img id="picture-show-displayed-img" class="picture-show-displayed-img" src="' + obj.src + '" >';
        document.getElementById('picture-show-display-here').insertAdjacentHTML("beforeend", img)
    } else {
        displayedImg.src = obj.src;
    }
}

/**
 * 
 */
function showPictureClosePicture() {
    let asdf = document.getElementById('picture-show-displayed-img');
    if (asdf) {
        asdf.remove();
    }
}