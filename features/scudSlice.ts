
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";


const scudSlice = (set: any) => ({
    DrawerProps: null as DrawerContentComponentProps | null,
    setDrawerProps: (by: DrawerContentComponentProps) => {
        set(({ DrawerProps: by }))
    },
})

export default scudSlice