/**
 *  入口文件
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// 引入decucers
import reducers from './reducers';

// 引入 logger、thunk(asynchronous dispatch) 中间件
import logger from './middleware/logger';
import thunk from 'redux-thunk';

// 应用中间件
const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);

// 创建全局Store需要将引入的reducers传递给createStroe
const store = createStoreWithMW(reducers);

// 导入reactNavigation
import ReactNavigation from './reactNavigation';

// app主Component构造
class rnApp extends Component {
    componentDidMount () {
        // 打印bundle版本
        // console.log("[bundle index version]:"+ version);
    }

    render () {
        // react-redux提供初始化形式
        return (
            <Provider store={store}>
                <ReactNavigation />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('rnApp', () => rnApp);