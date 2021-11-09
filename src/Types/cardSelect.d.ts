interface cardOptions {
    value: string;
    label: React.HTMLDivElement;
}
export interface selectCardProps {
    options: cardOptions[],
    defaultValue?: cardOptions | null | undefined,
    setValue: Dispatch<SetStateAction<string>>,
    isDisabled?: boolean
}