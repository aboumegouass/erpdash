import React, { ChangeEventHandler } from 'react'

type CompsProps = {
    value: string | number
    handleChange: ChangeEventHandler<HTMLInputElement>
    title: string
    name: string
    id?: number
    placeholder?: string
    spanText?: string
}
function InputForm(props: CompsProps) {
    const { value, handleChange, name, spanText, title, id, placeholder } = props
    return (
        <div className="sm:col-span-4">
            {title && <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {title}
            </label>}
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {spanText && <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{spanText}</span>}
                    <input
                        type="text"
                        name={name}
                        onChange={handleChange}
                        id={name}
                        value={value}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder={placeholder || title || ''}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputForm