import { PersonCard } from '@/types/user'
import React from 'react'
import UserRowCard from './UserRowCard'
type CompsProps = {
    persons: PersonCard[]
}
function UsersRowList(props: CompsProps) {
    const { persons } = props
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {persons.map((person: PersonCard) => (
                <UserRowCard key={person.id} person={person} />
            ))}
        </ul>
    )
}

export default UsersRowList