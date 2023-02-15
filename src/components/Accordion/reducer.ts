export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const stateAccordion: StateType = {
    collapsed: false
}
export const reducer = (state= stateAccordion, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state, collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad Action Type')
    }
    return state
}