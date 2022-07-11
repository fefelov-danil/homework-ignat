import React from 'react'
import s from './HW9.module.css'
import Clock from './Clock'

function HW9() {
    return (
        <div className={s.HW9}>
            <hr/>
            <h2>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9
