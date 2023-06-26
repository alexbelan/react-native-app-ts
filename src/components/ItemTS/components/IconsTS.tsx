import React from "react";
import { TypeTS } from "../../../interfaces";
import { 
    CargoIcon,
    PassengerIcon,
    SpecialTransportIcon
} from "../../../ui/icons";

interface IconsProps {
    type: TypeTS
}

/** 
 * Возврашает иконку зависимо от пропса type
 * 
 * type: "passenger" | "cargo" | "special_transport"
*/
const IconsTS = ({
    type
}: IconsProps) => {
    switch (type) {
        case 'cargo':
            return <CargoIcon />
        case 'passenger':
            return <PassengerIcon />
        case 'special_transport':
            return <SpecialTransportIcon />
        default:
            return <></>
    }
}

export default IconsTS