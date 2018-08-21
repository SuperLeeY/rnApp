/**
 *  reducers 的 入口索引文件
 */

'use strict';

import {
	combineReducers
} from 'redux';

import toast from './toast';

export default combineReducers({
	...toast
});