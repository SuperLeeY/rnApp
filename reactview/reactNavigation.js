/**
 * 页面基类，android物理返回键处理，控制路由跳转
 */

import React, {
    Component,
} from 'react';

import {
    BackHandler,
    Platform,
    StatusBar,
    View
} from 'react-native';

import { connect } from 'react-redux';
import { toastRestore } from './actions';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

//css
import commonCss from './css/common';

//page
import Toast from 'react-native-easy-toast';
import Home from './containers/home';
import Content from './containers/content';

//react-navigation
import { createStackNavigator } from 'react-navigation';
const Navigation = createStackNavigator({
    home: { screen: Home},
    content: { screen: Content}
}, {
    initialRouteName: 'home',             // 默认显示界面
    navigationOptions: {
        header: null                      // 隐藏顶部导航
    },
    transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,   //设置界面跳转左右切换
    }),
});

const defaultGetStateForAction = Navigation.router.getStateForAction;
Navigation.router.getStateForAction = (action, state) => {
    if(state && action.type=='BackAndroid'){
        const routes = [...state.routes];

        if(routes.length > 1){
            routes.splice(routes.length-1, 1);

            return {
                ...state,
                routes,
                index: routes.length-1,
            };
        }

        if(routes.length == 1){
            BackHandler.exitApp();
        }
    }

    return defaultGetStateForAction(action, state);
};

class ReactNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={commonCss.wrap}>
                {/*状态栏*/}
                <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
                {/*主体内容*/}
                <Navigation ref={'navigation'} />
                {/*toast 提示*/}
                <Toast ref={'toast'} opacity={0.6} />
            </View>
        );
    }

    componentWillReceiveProps(props) {
        //toast
        const { toastText } = props;

        if(toastText){
            this.toastShow(toastText);
        }
    }

    componentDidMount() {
        //监听android返回事件
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    componentWillUnmount() {
        //remove监听android返回事件
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    //android 返回处理
    onBackAndroid() {
        let now = new Date().getTime();

        if(this.lastBackPressed && (now-this.lastBackPressed<2000)){
            return false;
        }

        this.lastBackPressed = now;
        this.refs.navigation.dispatch({ type: 'BackAndroid'});
        return true;
    }

    //toast
    toastShow(text){
        const { dispatch } = this.props;

        this.refs.toast.show(text);
        dispatch(toastRestore());
    }
}

const mapStateToProps = (state) => {
    return {
        toastText: state.toastText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactNavigation);