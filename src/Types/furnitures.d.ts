export interface variations {
   id: 6,
   variation_name: string,
   variation_description: string,
   variation_price_index: number,
   registered_at: string,
   furniture_tag: string
}

export interface furnitures {
    id: number,
    furniture_name: string,
    furniture_tag:string,
    room_tag: string,
    variations: variations[]
}

interface room {
    room_tag: string,
    room_name: string
}

export interface furnituresByRoom {
    furnitures: furniture[]
    room: room
}

export interface removeFurnitureOnLocalStorageT {
    roomTag: string,
    furniture_tag: string,
}

export interface FurnitureOnLocalStorageT {
    room_tag: string,
    furniture_tag: string,
    variation_id: string,
    length: number
}

export interface getFurnitureT {
    room_tag: string,
    furniture_tag: string
}

export interface RoomTagT {
    room_tag: string
}

export interface allRoomsT {
    room_tag: string,
    room_name: string,
    id: number,
}

export interface variationsOnBackendT {
    id: number,
    furniture_tag_ref: string,
    percentage_by_color: number,
    percentage_by_laca: number,
    percentage_by_tamponade: number,
    variation_value: number
}