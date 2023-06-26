import React, { ReactNode } from "react"
import { StyleSheet, Text, ViewStyle, TouchableHighlight, View } from "react-native"

interface PropsButton {
    children: ReactNode,
    color?: string,
    textColor?: string,
    width?: 'auto' | '100%' | number
    style?: ViewStyle,
    onPress?: () => void
}

const Button = ({
    children,
    color = '#05BCFF',
    textColor = '#FFFFFF',
    width = 'auto',
    style = {},
    onPress
}: PropsButton) => {
    return (
        <TouchableHighlight 
            // underlayColor='rgba(0,0,0, 0.17)'
            style={{...styles.root, ...style, width: width}}
            onPress={onPress}>
                <View style={{...styles.btnView, ...style, backgroundColor: color, width: width}}>
                    <Text style={{...styles.text, color: textColor}}>{children}</Text>
                </View>
            
        </TouchableHighlight>
    )
}

export default Button

const styles = StyleSheet.create({
    root: {
        borderRadius: 10,
        height: 'auto',
        width: '100%',
    },
    btnView: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 'auto',
        width: '100%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
})