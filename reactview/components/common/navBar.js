/**
 * 顶部导航组件
 */
import React, {
    Component
} from 'react';

import {
    StatusBar,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import commonCss from '../../css/common';

class NavBar extends Component {
    render() {
        return (
            <View style={commonCss.navBar}>
                <StatusBar
                    barStyle={'light-content','dark-content'}
                    translucent={true}
                    backgroundColor={'transparent'}
                    hidden={false} />
                <View style={commonCss.navBarView}>
                    {/*title*/}
                    <View style={commonCss.navBarTitleView}>
                        <Text style={commonCss.navBarTitleText} numberOfLines={1}>{this.props.title || ''}</Text>
                    </View>
                    {/*back*/}
                    {this.props.back && <TouchableOpacity
                        style={[commonCss.navBarBtnView, commonCss.btnLeft]}
                        activeOpacity={1}
                        onPress={this.onBack.bind(this)}>
                        <Image style={commonCss.navBarImage} source={require('../../images/navBar/back.png')}/>
                    </TouchableOpacity>}
                    {/*share*/}
                    {this.props.share && <TouchableOpacity
                        style={[commonCss.navBarBtnView, commonCss.btnRight]}
                        activeOpacity={1}
                        onPress={this.onShare.bind(this)}>
                        <Image style={commonCss.navBarImage} source={require('../../images/navBar/share.png')} />
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }

    onBack(){
        if(this.props.back){
            const { navigation } = this.props;
            navigation && navigation.goBack();
        }
    }

    onShare(){
        if(this.props.share){
            this.props.onShare && this.props.onShare();
        }
    }
}

export default NavBar;