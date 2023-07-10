
export type PostItemCategory = {
    id: number
    title: string
    href: string
}
export type PostItemAuthor = {
    id: number
    name: string
    role: string
    href: string
    imageUrl: string
}
export type PostItem = {
    id: number
    title: string
    href: string
    description: string
    date: Date | null | string
    datetime: Date | null | string
    category: PostItemCategory
    author: PostItemAuthor
}