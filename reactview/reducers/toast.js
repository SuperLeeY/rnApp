/**
 *  toast reducer
 */

'use strict';

const toastText = '';
const toastReducer = (state=toastText, action) => {
    switch(action.type) {
        case 'TOAST_SHOW':
            return action.text;
        case 'TOAST_RESTORE':
            return '';
        default:
            return state;
    }
};

module.exports = {
    toastText: toastReducer,
};