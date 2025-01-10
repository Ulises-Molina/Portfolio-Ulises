import {Dispatch, SetStateAction } from "react";

export interface ComponentProps {
    lenguaje: "EN" | "ES";
    setLenguaje?: Dispatch<SetStateAction<"EN" | "ES">>;
    menu : boolean;
    setMenu?: Dispatch<SetStateAction<boolean>>
}