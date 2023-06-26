import React from "react"
import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { StackNavigation, TypeTS } from "../../../interfaces"
import IconsTS from "./IconsTS"
import { useDispatch } from "react-redux"
import { setDriver } from "../../../store/reducers/appReducer"
import { useNavigation } from "@react-navigation/native"

interface ItemProps {
    id: number,
    type?: TypeTS | undefined,
    title: string,
    secondary?: string
}

/** 
 * Возврашает элемент списка ТС
 * 
 * id: number
 * type?: "passenger" | "cargo" | "special_transport" | undefined
 * title: string
 * secondary?: string
*/
const ItemTS = ({
    id,
    type,
    title,
    secondary
}: ItemProps) => {
    const navigation = useNavigation<StackNavigation>()
    const dispatch = useDispatch()

    const navigateDriverScreen = () => {
        dispatch(setDriver(id)),
        navigation.navigate('Driver')
    }

    return (
        <TouchableHighlight onPress={navigateDriverScreen} underlayColor='rgba(0,0,0, 0.17)'>
            <View style={styles.root}>
                {!!type && 
                    <View style={styles.icon}>
                        <IconsTS type={type} />
                    </View>
                }
                <View style={styles.content}>
                    <Text style={styles.text}>{title}</Text>
                    {!!secondary && 
                        <Text style={styles.secondary}>{secondary}</Text>
                    }
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ItemTS

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "nowrap",
        width: '100%',
        height: 'auto',
        padding: 15
    },
    icon: {
        'width': 44,
        'marginRight': 15
    },
    content: {
        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondary: {
        color: '#828282'
    }
})