import React from "react"
import { ScrollView } from "react-native"
import { ItemTS } from "../../../components/ItemTS"
import { Transport } from "../../../interfaces"
import { useLang } from "../../../context/LanguageProvider"

interface PropsList {
    transports: Transport[]
}

const List = ({transports}: PropsList) => {
    const {translate} = useLang()

    return (
        <ScrollView>
            {transports.map((item, index) => {
                return (
                    <ItemTS 
                        key={index}
                        id={item.id}
                        type={item.type === 'passenger' || item.type === 'cargo' || item.type === 'special_transport' ? item.type : 'passenger'} 
                        title={`#${index + 1} ${item.driver}`}
                        secondary={translate[item.type]}
                    />
                )
            })}
        </ScrollView>
    )
}

export default List