import React, {useState} from 'react'
import s from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler = (value: number) => {
        setValue1(value)
    }

    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={s.HW11}>
            <hr/>
            <h2>homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div>
                <span className={s.valueRange}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRangeHandler}
                    value={value1}
                />
            </div>

            <div>
                <span className={s.valueRange}>{value1}</span>
                <SuperDoubleRange
                    onChangeDoubleRange={onChangeDoubleRange}
                    doubleValue={[value1, value2]}
                />
                <span className={s.valueRange}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
