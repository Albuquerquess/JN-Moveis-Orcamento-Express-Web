import React, { Dispatch, SetStateAction } from "react";

interface selectVariations {
    value: string; 
    label: React.HTMLDivElement;
}

export interface cardProps {
    orientation?: 'vertical' | 'horizontal' | undefined;
    variations?: selectVariations[];
    withButton?: boolean;
    withLenghInput?: boolean;
    title?: string;
    description?: string;
    setCurrentValue: Dispatch<SetStateAction<string>>

}

export interface styleCardProps {
    orientation?: 'vertical' | 'horizontal' | undefined;
    backgroundImage: string;
    clicked?: boolean
}

export interface colorsAndTamponadeIdsSchema {
    colorId: string;
    tamponadeId: string;
}