import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_INPUT_UPDATE':
            const { input, value, isValid } = action;
            return {
                ...state,
                inputValues: { ...state.inputValues, [input]: value },
                inputValidities: { ...state.inputValidities, [input]: isValid },
                formIsValid: Object.values({
                    ...state.inputValidities,
                    [input]: isValid,
                }).every(Boolean),
            };
        default:
            return state;
    }
};

export const useForm = (initialState) => {

    const [formState, dispatchFormState] = useReducer(formReducer, initialState);

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: 'FORM_INPUT_UPDATE',
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        });
    }, []);

    return { formState, inputChangeHandler };
}