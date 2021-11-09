export interface pricePreviewProps {
    clicked: boolean
    // display: boolean
}

export interface furnitureTagsAndVariationId {
    variation_id?: array,
    furniture_tag?: array
}

export interface variationValuesDataResponse {
    percentage_by_color: number,
    percentage_by_laca: number,
    percentage_by_tamponade: number,
    variation_value: number,
}