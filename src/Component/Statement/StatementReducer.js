const SAVE_DATA = "SAVEDATA",
  SET_VISIBLE_MODE = "SETVISIBLEMODE",
  SET_SUBMIT_MODE = "SETSUBMITMODE";

export const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        data: action.data,
        visible: false,
        submit: true,
      };
    }
    case SET_VISIBLE_MODE: {
      return {
        ...state,
        visible: action.visible,
      };
    }
    case SET_SUBMIT_MODE: {
      return {
        ...state,
        submit: action.submit,
      };
    }
    default: {
      return state;
    }
  }
};

/* Actions */

export const saveData = (data) => ({ type: SAVE_DATA, data });
export const setVisibleMode = (visible) => ({
  type: SET_VISIBLE_MODE,
  visible,
});
export const setSubmitMode = (submit) => ({ type: SET_SUBMIT_MODE, submit });
