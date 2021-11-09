export interface colorAndTamponadeOnCookies {
    color?: string,
    tamponade?: string
}

interface colorOnBackend {
    id: number
    color_name: string
    color_porcentage: number
}

interface tamponadeOnBackend {
    id: number
    tamponade_name: string
    tamponade_porcentage: number
}

export interface colorAndTamponadeOnBackend {
    colors: colorOnBackend[]
    tamponades: tamponadeOnBackend[]
}