import { Image, ImageSource } from "expo-image";
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes";


export interface NavLinks {
    name: string
    link?: string | null
    icon: string | number | string[] | ImageSource | ImageSource[] | null
}


export interface DrawerItemsprops {
    label: string
    onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined
    icon: string | number | string[] | ImageSource | ImageSource[] | null
}


export interface Ctx {
    [key: string]: any;
}

