'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    connect
} from 'react-redux';

import {
    toast
} from '../actions';

//css
import commonCss from '../css/common';

//component
import Btn from '../components/common/btn';

class Home extends Component {
    render() {
        return (
            <View style={commonCss.wrap}>
                <Btn
                    text={'toast提示'}
                    onPress={this.toastShow.bind(this)} />
                <Btn
                    text={'跳转页面'}
                    onPress={this.nextPage.bind(this)} />
            </View>
        );
    }

    toastShow(){
        const { dispatch } = this.props;
        dispatch(toast('toast'));
    }

    nextPage(){
        this.props.navigation && this.props.navigation.navigate('content');
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);