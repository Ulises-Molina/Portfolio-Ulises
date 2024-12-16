import {Dispatch, SetStateAction } from "react";

export interface ComponentProps {
    lenguage: "EN" | "ES";
    setLenguage?: Dispatch<SetStateAction<"EN" | "ES">>;
    menu : boolean;
    setMenu?: Dispatch<SetStateAction<boolean>>
}