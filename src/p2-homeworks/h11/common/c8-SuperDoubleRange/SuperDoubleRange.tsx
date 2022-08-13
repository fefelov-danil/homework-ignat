import {Box, Slider} from '@mui/material'
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeDoubleRange?: (value: [number, number]) => void
    doubleValue: [number, number]
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange,
        onChangeDoubleRange,
        doubleValue,
        ...restProps
        // min, max, step, disable, ...
    }
) => {

    const firstOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeDoubleRange && onChangeDoubleRange([+e.currentTarget.value, doubleValue[1]])
    }


    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeDoubleRange && onChangeDoubleRange(newValue as [number, number])
    };

    return (
        <div className={s.doubleRange}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={doubleValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </div>
    )
}

export default SuperDoubleRange
