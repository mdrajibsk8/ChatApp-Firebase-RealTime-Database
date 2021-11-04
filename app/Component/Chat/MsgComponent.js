// import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../Constant/Color';
import { FONTS } from '../Constant/Font';
import TimeDelivery from './TimeDelivery';

const MsgComponent = (props) => {
    const { sender, massage, item, sendTime } = props;
    return (
        <Pressable
            style={{ marginVertical: 0 }}
        >
            <View
                style={[styles.TriangleShapeCSS,
                sender ?
                    styles.right
                    :
                    [styles.left]
                ]}
            />
            <View
                style={[styles.masBox, {
                    alignSelf: sender ? 'flex-end' : 'flex-start',
                    // borderWidth:1,
                    backgroundColor: sender ? COLORS.theme : COLORS.white
                }]}
            >

                <Text style={{ paddingLeft: 5, color:  sender ? COLORS.white : COLORS.black,fontFamily:FONTS.Regular,fontSize:12.5 }}>
                    {item.massage}
                </Text>

                <TimeDelivery
                    sender={sender}
                    item={item}
                />

                

            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    masBox: {
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        minWidth: 80,
        maxWidth: '80%',
        paddingHorizontal: 10,
        marginVertical: 5,
        paddingTop: 5,
        borderRadius: 8
    },
    timeText: {
        fontFamily: 'AveriaSerifLibre-Light',
        fontSize: 10
    },
    dayview: {
        alignSelf: 'center',
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.white,
        borderRadius: 30,
        marginTop: 10
    },
    iconView: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.themecolor,
    },
    TriangleShapeCSS: {
        position: 'absolute',
        // top: -3,
        width: 0,
        height: 0,
        // borderBottomLeftRadius:5,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 5,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        // borderBottomColor: '#757474'
    },
    left: {
        borderBottomColor: COLORS.white,
        left: 2,
        bottom: 10,
        transform: [{ rotate: '0deg' }]
    },
    right: {
        borderBottomColor: COLORS.theme,
        right: 2,
        // top:0,
        bottom: 5,
        transform: [{ rotate: '103deg' }]
    },
});

export default MsgComponent;