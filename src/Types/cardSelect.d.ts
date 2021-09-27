interface cardOptions {
    value: string;
    label: React.HTMLDivElement;
}
export interface selectCardProps {
    options: cardOptions[]
    setValue: Dispatch<SetStateAction<string>>
}