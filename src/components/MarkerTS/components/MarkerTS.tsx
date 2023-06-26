import React from "react"
import { StyleSheet, View } from "react-native"
import { TypeTS } from "../../../interfaces"
import { CargoIcon, PassengerIcon, SpecialTransportIcon } from "../../../ui/icons"

interface PropsMarkerTS {
    type: TypeTS
}

interface Colors {
    [key: string]: string
}

const colors: Colors = {
    cargo: '#0F2FFF',
    passenger: '#2AD100',
    special_transport: '#D10000'
}

/** 
 * Возврашает марке ТС для карт
 * 
 * type: "passenger" | "cargo" | "special_transport"
*/
const MarkerTS = ({
    type
}: PropsMarkerTS) => {
    return (
        <View 
            style={{...styles.root, borderColor: colors[type]}}>
            {type === 'cargo' && 
                <CargoIcon color={colors[type]} width='28' height='28' />
            }
            {type === 'passenger' && 
                <PassengerIcon color={colors[type]} width='28' height='28' />
            }
            {type === 'special_transport' && 
                <SpecialTransportIcon color={colors[type]} width='28' height='28' />
            }
        </View>
    )
}

export default MarkerTS

const styles = StyleSheet.create({
    root: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    }
})