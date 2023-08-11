import { View, Text } from 'react-native'
import React from 'react'
import { Image as IconImage } from "expo-image";
import { NavLinks } from '../../interface';
import DocumentIcon from "../../assets/icons/Vector1.svg"
import TripsIcon from "../../assets/icons/Vector2.svg"
import VehiclesIcons from "../../assets/icons/bx_car.svg"
import EarningIcons from "../../assets/icons/Group_l2904.svg"
import PromotionIcons from "../../assets/icons/Vector3.svg"
import UnpaidIcons from "../../assets/icons/Vector4.svg"
import IncentiveIcons from "../../assets/icons/Group_M904.svg"
import PaymentIcons from "../../assets/icons/Group_TO4.svg"
import ReferralIcons from "../../assets/icons/Group_Ref2904.svg"
import OfficerIcons from "../../assets/icons/GroupAB2904.svg"



const NavLink = () => {

    const links: NavLinks[] = [{
        name: "Documents", link: "", icon: DocumentIcon
    }, {
        name: "My trips", link: "", icon: TripsIcon
    }, {
        name: "Vehicles", link: "", icon: VehiclesIcons
    }, {
        name: "Earnings", link: "", icon: EarningIcons
    }, {
        name: "Promotion", link: "", icon: PromotionIcons
    }, {
        name: "Unpaid", link: "", icon: UnpaidIcons
    }, {
        name: "Incentives", link: "", icon: IncentiveIcons
    }, {
        name: "Payments", link: "", icon: PaymentIcons
    }, {
        name: "Referral", link: "", icon: ReferralIcons
    }, {
        name: "Account Officer", link: "", icon: OfficerIcons
    }]
    return links
}

export default NavLink