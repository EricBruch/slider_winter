const activitiesTexts =
    [
        'Relax in thermal bath',
        'Hiking in the mountains',
        'Climbing in the mountains',
        'Sail on the river',
        'Enjoy local cuisin',
        'Sleep in historical inns'
    ];
const idAddActivities = 'activities-add-choose-from-here';
const idAddChoosenActivities = 'activities-add-choosen-here';


function initiateActivities() {
    createActivities();
}

/**
 * This method creates all activities based on activitiesTexts Array
 * and adds these activities to chooseable activities
 */
function createActivities() {
    for (let i = 0; i < activitiesTexts.length; i++) {
        let activitiyHtml = createActivity(i);
        addActivityAt(idAddActivities, activitiyHtml);
    }
}

/**
 * This function creates an activity and returns it 
 * @param {*} i 
 */
function createActivity(i) {
    let html =
        '<li'
        + ' id="activity-list-obj-' + i + '"'
        + ' class="activity-list-obj">'
        + '<p class="activity-text-container">'
        + activitiesTexts[i]
        + '</p>'
        + '<button onclick="addActivityToChoosen(' + i + ')"'
        + ' class="btn_activity">choose</button>'
        + '</li>';
    return html;
}

/**
 * This method adds an activity specified by id to Choosen Activities
 * and deletes the activity at chooseable activities 
 * @param {*} i 
 */
function addActivityToChoosen(i) {
    document.getElementById('activity-list-obj-' + i).remove();
    let activitiyHtml = createActivityForChoosen(i);
    addActivityAt(idAddChoosenActivities, activitiyHtml);
}

/**
 * This function creates a chosen activitiy
 * @param {*} i 
 */
function createActivityForChoosen(i) {
    let html =
        '<li'
        + ' id="activity-list-choosen-obj-' + i + '"'
        + ' class="activity-list-choosen-obj">'
        + '<p class="activity-text-container">'
        + activitiesTexts[i]
        + '</p>'
        + '<button onclick="removeChoosenActivity(' + i + ')"'
        + ' class="btn_activity">remove</button>'
        + '</li>';
    return html;
}

/**
 * Removes with id specified Activity and puts it back to chooseable activities 
 * @param {*} i 
 */
function removeChoosenActivity(i) {
    document.getElementById('activity-list-choosen-obj-' + i).remove();
    let activitiyHtml = createActivity(i);
    addActivityAt(idAddActivities, activitiyHtml);
}

/**
 * Add HTML-ELement at specified location with id
 * @param {*} id 
 * @param {*} html 
 */
function addActivityAt(id, html) {
    document.getElementById(id).insertAdjacentHTML('beforeend', html);
}