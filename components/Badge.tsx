import React from 'react'
type CompsProps = {
    text: string
    theme?: 'default' | 'error' | 'warning' | 'success' | 'blue' | 'indigo' | 'purple' | 'pink'
}
function Badge(props: CompsProps) {
    const { text, theme } = props
    function switchTheme() {
        switch (theme) {
            case 'default':
                return 'bg-gray-50 text-gray-600 ring-gray-500/10'
            case 'error':
                return 'bg-red-50 text-red-700 ring-red-600/10'
            case 'warning':
                return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'
            case 'success':
                return 'bg-green-50 text-green-700 ring-green-600/20'
            case 'blue':
                return 'bg-blue-50 text-blue-700 ring-blue-700/10'
            case 'indigo':
                return 'bg-indigo-50 text-indigo-700 ring-indigo-700/10'
            case 'purple':
                return 'bg-purple-50 text-purple-700 ring-purple-700/10'
            case 'pink':
                return 'bg-pink-50 text-pink-700 ring-pink-700/10'

            default:
                return 'bg-gray-50 text-gray-600 ring-gray-500/10'
        }
    }
    const baseClass = 'inline-flex items-center rounded-md font-medium px-2 ring-1 ring-inset py-1 text-xs'
    const classText = `${baseClass} ${switchTheme()}`
    return (
        <span className={classText}>
            {text}
        </span>
    )
}

export default Badge