export type NavigationItem = {
    label: string
    href: string
    icon?: JSX.Element
    subItems?: NavigationItem[]
}