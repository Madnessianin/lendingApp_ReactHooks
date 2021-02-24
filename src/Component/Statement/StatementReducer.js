
const SAVE_DATA = 'SAVEDATA',
      SET_VISIBLE_MODE = 'SETVISIBLEMODE'


export const reducer = (state, action) => {
    switch (action.type) {
       
        case SAVE_DATA: {
            return {
                ...state,
                data: action.data,
                visible: false,
                submit: true
            }
        }
        case SET_VISIBLE_MODE: {
            return {
                ...state,
                visible: action.visible
            }
        }
        default: {
            return state
        }
    }
}

/* Actions */

export const saveData = (data) => ({type: SAVE_DATA, data})
export const setVisibleMode = (visible) => ({type: SET_VISIBLE_MODE, visible})