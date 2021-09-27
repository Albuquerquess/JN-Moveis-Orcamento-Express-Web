export interface variations {
    percentage_by_color: number,
    percentage_by_laca: number,
    percentage_by_tamponade: number,
    variation_name: string,
    variation_value: number,
}

export interface furniture {
    furniture: string
    variations: variations[]
}

export interface room {
    furnitures: furniture[]
    room: string
}