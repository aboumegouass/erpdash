import React from 'react'
import PropTypes from 'prop-types'
import { RadioButton } from 'primereact/radiobutton';

function Radio2({
    value,
    onChange,
    checked,
    icon,
    name,
    theme = 'dark',
    labelText,
}: any) {
    const boxStyle = checked ? `shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer border-blue-500` : `shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer`
    const inpChecked = checked ? `p-radiobutton p-component p-radiobutton-checked ml-auto` : `p-radiobutton p-component ml-auto`
    const PChecked = checked ? `p-radiobutton-box p-highlight` : `p-radiobutton-box`

    return (
        <label htmlFor={`${name}-${value}`} className={boxStyle} style={{ borderRadius: 10, display: 'block' }}>
            <div className={`flex align-items-center ${labelText ? 'mb-4' : ''}`}>

                <div className={inpChecked}>
                    <div className="p-hidden-accessible">
                        <RadioButton
                            inputId={`${name}-${value}`}
                            name={name}
                            value={value}
                            onChange={onChange}
                            checked={checked}
                        />
                    </div>
                    <div className={PChecked}>
                        <div className="p-radiobutton-icon">
                        </div>
                    </div>
                </div>
            </div>
            {labelText && <p className="text-600 m-0 line-height-3">{labelText}</p>}
        </label>
    )
}

Radio2.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    icon: PropTypes.node,
    name: PropTypes.string,
    theme: PropTypes.string,
    labelText: PropTypes.string,
}

export default Radio2
