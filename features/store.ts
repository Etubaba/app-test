import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { onBoardingSlice, scudSlice, themeSlice, userSlice } from './scudSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useScudStore = create(devtools(scudSlice))
// export const useUserStore = create(persist(devtools(userSlice), { name: 'user_details', storage: createJSONStorage(() => AsyncStorage) }))
export const useUserStore = create(devtools(userSlice))
export const useThemeStore = create(persist(devtools(themeSlice), { name: 'theme', storage: createJSONStorage(() => AsyncStorage) }))
// export const useOnBoardingStore = create(persist(devtools(onBoardingSlice), { name: 'IsFirstTimeLoad', storage: createJSONStorage(() => AsyncStorage) }))

export const useOnBoardingStore = create(devtools(onBoardingSlice))