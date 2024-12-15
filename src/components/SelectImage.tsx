import React, { FC } from 'react'

interface Props {
    label:string,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}

const SelectImage:FC<Props> = ({label, onChange}) => {
    return (
        <div className="flex justify-between align-items-center "style={{
            padding:'5px'
        }}>
            <label htmlFor="">
                {label}
            </label>
            <input  type="file" accept=".png, .jpg" title=""
                onChange={onChange} />


        </div>
    )
}

export default SelectImage