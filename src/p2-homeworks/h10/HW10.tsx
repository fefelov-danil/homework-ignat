import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "./HW10.module.css";

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className={s.HW10}>
            <hr/>
            <h2>homeworks 10</h2>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
