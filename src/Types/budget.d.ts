import { FurnitureOnLocalStorageT } from "./furnitures";

export interface IMakeBudgetProps {
    furnitures: FurnitureOnLocalStorageT[],
    clientName: string,
    color: string,
    tamponade: string,
    date: string
}

export interface IResponseGetFurnitureInfosgetFurnitureInfos {
    furnitureName: string;
    furnitureTag: string;
    variationName: string
}