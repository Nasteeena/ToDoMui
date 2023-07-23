export function toUpper(value: string) {
    if(value) {
        return value[0].toUpperCase() + value.slice(1)
    }
    return value
}

