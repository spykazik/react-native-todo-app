import React from 'react'
import { Text, View, StyleSheet, Platform} from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar =  props => {
    return(
        <View style={{...style.navbar, ...Platform.select({
            ios: style.navbarIos,
            android: style.navbarAndroid
        })
        }}>
            <AppTextBold style={style.text}>Todo App! </AppTextBold>
        </View>
    )}

const style = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    navbarIos: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarAndroid: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 20,
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
        
    }
})