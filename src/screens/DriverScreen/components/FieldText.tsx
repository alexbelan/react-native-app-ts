import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface PropsField {
    title: string,
    value: string
}

const FieldText = ({
    title,
    value
}: PropsField) => {
    return (
        <View style={styles.root}>
            <Text style={styles.textTitle}>{title} </Text>
            <Text style={styles.text}>{value} </Text>
        </View>
           
    )
}

export default FieldText

const styles = StyleSheet.create({
    root: {
        marginVertical: 5
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '700',
    },
    text: {
        fontSize: 20,
    }
})