/**
 *  toast action
 */
'use strict';

function toast(text) {
    return {
    	type: 'TOAST_SHOW',
    	text: text,
    };
}

function toastRestore(){
	return {
		type: 'TOAST_RESTORE',
	};
}

module.exports = {
	toast,
	toastRestore,
};
