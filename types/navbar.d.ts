export type PageProps = {
    name: string
    href: string
}
export type CateSectionItem = {
    name: string
    href: string
}
export type CateSection = {
    id: number | string
    name: string
    items: CateSectionItem[]
}
export type CateFeatured = {
    name: string
    href?: string
    imageSrc: string
    imageAlt?: string
}
export type CateProps = {
    id: number
    name: string,
    featured: CateFeatured[]
    sections: CateSection[]
}
export type NavProps = {
    categories: CateProps[]
    pages: PageProps[]
}
export type SolutionType = {
    name: string
    description?: string
    href: string
    icon: any
}
