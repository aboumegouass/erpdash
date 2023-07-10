import React from 'react'
import PropTypes from 'prop-types'
import { RadioButton } from 'primereact/radiobutton';

function Radio({
    value,
    onChange,
    visibile = true,
    checked,
    icon,
    name,
    height,
    p = 'p-4',
    theme = 'dark',
    labelText,
    additionalClass,
    labelTitle,
    labelSubTitle
}: any) {
    const boxStyle = checked ? `shadow-2 surface-card ${p} border-2 border-transparent cursor-pointer border-blue-500 ${additionalClass}` : `shadow-2 surface-card ${p} border-2 border-transparent cursor-pointer ${additionalClass}`
    const inpChecked = checked ? `p-radiobutton p-component p-radiobutton-checked ml-auto` : `p-radiobutton p-component ml-auto`
    const PChecked = checked ? `p-radiobutton-box p-highlight` : `p-radiobutton-box`

    return (
        <label htmlFor={`${name}-${value}`} className={boxStyle} style={{ borderRadius: 10, display: 'block', height: height }}>
            <div className={`flex align-items-center ${labelText ? 'mb-4' : ''}`}>
                {icon && <div className="mr-3">
                    <span className="inline-flex justify-content-center align-items-center bg-indigo-100" style={{ borderRadius: 4, width: 45, height: 45 }}>
                        {icon}
                    </span>
                </div>}
                <div>
                    {labelTitle && <span className="text-900 text-xl mb-2 font-medium">{labelTitle}</span>}
                    {labelSubTitle && <p className="m-0 text-600 font-medium text-sm">{labelSubTitle}</p>}
                </div>
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
                    <div className={PChecked} style={{ visibility: visibile ? 'visible' : 'hidden' }}>
                        <div className="p-radiobutton-icon">
                        </div>
                    </div>
                </div>
            </div>
            {labelText && <p className="text-600 m-0 line-height-3">{labelText}</p>}
        </label>
    )
}

Radio.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    icon: PropTypes.node,
    height: PropTypes.number,
    name: PropTypes.string,
    theme: PropTypes.string,
    visibile: PropTypes.bool,
    labelText: PropTypes.string,
    p: PropTypes.string,
    labelTitle: PropTypes.string,
    labelSubTitle: PropTypes.string,
    additionalClass: PropTypes.string,
}

export default Radio
