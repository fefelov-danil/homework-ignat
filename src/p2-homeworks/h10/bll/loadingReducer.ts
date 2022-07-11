export type initStateType = typeof initState

const initState = {
    isLoading: false
}

export type loadingAT = ReturnType<typeof loadingAC>

export const loadingReducer = (state: initStateType = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): any => {
    return {type: "LOADING", isLoading} as const
} // fix any