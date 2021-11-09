import React, { Dispatch, SetStateAction } from "react";

import { variations } from './furnitures'

export interface selectVariations {
    value: string; 
    label: React.HTMLDivElement;
}

export interface cardProps {
    variations?: selectVariations[];    
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
    color_id: string;
    tamponade_id: string;
}

// Furniture Card

export interface furnitureCardProps {
    orientation?: 'vertical' | 'horizontal' | undefined;
    variations: variations[];
    withButton?: boolean;
    withLengthInput?: boolean;
    title?: string;
    description?: string;
    roomTag: string;
    furniture_tag: string
    
}