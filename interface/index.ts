import { Image, ImageSource } from "expo-image";
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { StyleProp } from "../node_modules/react-native/Libraries/StyleSheet/StyleSheet";
import {
  TextStyle,
  ViewStyle,
} from "../node_modules/react-native/Libraries/StyleSheet/StyleSheetTypes";
import { Control, FieldErrors } from "react-hook-form";

export interface NavLinks {
  name: string;
  link?: string | null;
  icon: string | number | string[] | ImageSource | ImageSource[] | null;
}

export interface DrawerItemsprops {
  label: string;
  onPress:
  | (((event: GestureResponderEvent) => void) & (() => void))
  | undefined;
  icon: string | number | string[] | ImageSource | ImageSource[] | null;
}

export interface Ctx {
  [key: string]: any;
}

export interface TextProps {
  style?: StyleProp<TextStyle> | undefined;
  children?: string | string[];
  className?: string;
  EnableCStyle?: boolean;
  Dark?: boolean;
  Light?: boolean;
  DarkColor?: string;
  LightColor?: string;
  onPress?:
  | (((event: GestureResponderEvent) => void) & (() => void))
  | undefined;
}
export interface ViewProps {
  style?: StyleProp<ViewStyle> | undefined;
  children?: React.ReactNode;
  className?: string;
  EnableCStyle?: boolean;
  Dark?: boolean;
  Light?: boolean;
  DarkColor?: string;
  LightColor?: string;
}

export interface ButtonProps {
  style?: StyleProp<ViewStyle> | undefined;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onPress:
  | (((event: GestureResponderEvent) => void) & (() => void))
  | undefined;
}

export interface AuthContextType {
  user: unknown;
  signIn: (a: any) => any | undefined;
  signOut: () => void;
}

export enum modes {
  dark = "dark",
  light = "light",
}

export interface OnBoardingItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

export type BottomsheetType = {
  children: React.JSX.Element;
  open: boolean;
  onClose: () => void;
};


export interface useFormProps {
  control?: Control<{ phoneNumber: string; }, any>, error?: FieldErrors<{
    phoneNumber: string;
  }>
}
