import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react"

interface ReturnHooks {
    item: string | null,
    setItem: (data: string) => void,
}

type useLocalStorageType = (name: string, data?: string) => ReturnHooks

/** 
 * Хук для работы с localStorage
 * 
 * Принимает:
 * name: string
 * data?: string
 * 
 * Возврашает:
 * item: string | null,
 * setItem: (data: string) => void,
*/
const useLocalStorage: useLocalStorageType = (name, data): ReturnHooks => {
    const [value, setValue] = useState<string | null>(null)

    useEffect(() => {
        if(data) {
            AsyncStorage.setItem(name, data)
            setValue(data)
        } else if(data === undefined) (
            AsyncStorage.getItem(name).then(res => {
                if(res !== '' && !!res) {
                    setValue(res)
                } else {
                    setValue('')
                }
            })
        )
    }, [])

    const setItem = (data: string) => {
        AsyncStorage.setItem(name, data)
        setValue(data)
    }

    return {
        item: value,
        setItem
    }
}

export default useLocalStorage