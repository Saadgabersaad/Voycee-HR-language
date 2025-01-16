import React from 'react'

export function useBoolean(initialValue = false) {
    const [value, setValue] = React.useState<boolean>(initialValue)

    const toggle = () => setValue((prev) => !prev)
    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)

    return [value, setTrue, setFalse, toggle] as const
}