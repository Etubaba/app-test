
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { modes } from "../interface";


export const scudSlice = (set: any) => ({
    DrawerProps: null as DrawerContentComponentProps | null,
    setDrawerProps: (by: DrawerContentComponentProps) => {
        set(({ DrawerProps: by }))
    },
})

export const userSlice = (set: any) => ({
    isLoggedIn: false as Boolean,
    userDetails: null as any | null,
    setUserDetails: (by: any) => {
        set(({ userDetails: by }))
    },
    setIsLoggedIn: (by: boolean) => {
        set(({ isLoggedIn: by }))
    },

})



export const themeSlice = (set: any) => ({
    theme: modes.light as string,
    setTheme: (by: string) => {
        set(({ theme: by }))
    },


})