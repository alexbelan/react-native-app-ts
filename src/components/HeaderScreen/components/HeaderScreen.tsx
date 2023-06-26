import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { ButtonIcon } from "../../../ui/button";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../../ui/icons";

interface PropsHeaderScreen {
    title: string,
    onBack?: () => void
}

/** 
 * Header для дополнительных экранов
 * 
 * title: string
 * onBack: () => void
*/
const HeaderScreen = ({title, onBack}: PropsHeaderScreen) => {
    const navigate = useNavigation()

    return (
        <View style={styles.root}>
            <ButtonIcon
                radius={60}
                onPress={() => onBack ? onBack() : navigate.goBack()}
                >
                <BackIcon height='35' width='35' />
            </ButtonIcon>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HeaderScreen

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 10
    }
})