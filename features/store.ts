import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import scudSlice from './scudSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useScudStore = create(persist(devtools(scudSlice), { name: 'user_id', storage: createJSONStorage(() => AsyncStorage) }))
