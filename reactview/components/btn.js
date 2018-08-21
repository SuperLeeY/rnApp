import React, {
    Component
} from 'react';

import {
    TouchableHighlight,
    Text
} from 'react-native';

import commonCss from '../css/common';

class Btn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight style={commonCss.btnView} onPress={this.onPress.bind(this)}>
                <Text style={commonCss.btnText}>{this.props.text || ''}</Text>
            </TouchableHighlight>
        );
    }

    onPress(){
        this.props.onPress && this.props.onPress();
    }
}

export default Btn;