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

//css
import commonCss from '../css/common';

//component
import NavBar from '../components/common/navBar';

class Content extends Component {
    render() {
        return (
            <View style={commonCss.wrap}>
                <NavBar
                    {...this.props}
                    title={'正文'}
                    back={true}
                    share={true} />
            </View>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);