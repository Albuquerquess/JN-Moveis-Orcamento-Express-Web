export interface buttonProps {
    label?: string
    to?: string
    type?: "button" | "submit" | "reset" | undefined
    handleClick?: () => void
}