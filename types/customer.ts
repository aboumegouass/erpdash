export type Customer = {
    id: number
    name: string
    country: {
        name: string
        code: string
    },
    company: string
    date: string
    status: string
    verified: boolean
    activity: number
    representative: {
        name: string
        image: string
    },
    balance: number
}