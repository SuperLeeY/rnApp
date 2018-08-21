/**
 *  公共样式
 */
'use strict';

import {
	Dimensions,
    Platform,
    StyleSheet,
} from 'react-native';

const common = StyleSheet.create({
	//common
    wrap: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    //navBar
	navBar: {
        height: 64,
        paddingTop: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8'
    },
    navBarView: {
        flex: 1,
        flexDirection: 'row',
    },
    navBarBtnView: {
        position: 'absolute',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLeft: {
    	left: 0
    },
    btnRight: {
    	right: 0
    },
    navBarImage: {
        height: 20,
        width: 20,
    },
    navBarTitleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarTitleText: {
        fontSize: 18,
        color: '#333',
    },
    //btn
    btnView: {
    	height: 50,
    	justifyContent: 'center',
    	alignItems: 'center',
    	marginTop: 50,
    	marginLeft: 20,
    	marginRight: 20,
   		backgroundColor: 'green',
   		borderRadius: 5
    },
    btnText: {
    	fontSize: 18,
    	color: '#fff'
    }
});

export default common;