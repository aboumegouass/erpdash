export type PersonCard = {
    id: number
    name: string
    email?: string
    role?: string
    imageUrl?: string
    lastSeen?: string | Date | null
    lastSeenDateTime?: string | Date | null
}