import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_INPUT_UPDATE':
            const { input, value } = action;
            //Validation processes
            let isValid = true;
            let errorText = "";

            if (!value.trim()) {
                isValid = false;
                errorText = "This field is required.";
            }
            else {
                switch (input) {
                    case "email":
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(value)) {
                            isValid = false;
                            errorText = "Please enter a valid email address.";
                        }
                        break;
                    case "password":
                        if (value.length < 5) {
                            isValid = false;
                            errorText = "Password must be at least 5 characters long.";
                        }
                        break;
                    case "passwordAgain":
                        if (value !== state.inputValues.password) {
                            isValid = false;
                            errorText = "Passwords do not match.";
                        }
                        break;
                    default:
                        break;
                }
            }
            return {
                ...state,
                inputValues: { ...state.inputValues, [input]: value },
                inputValidities: { ...state.inputValidities, [input]: isValid },
                inputErrors: { ...state.inputErrors, [input]: errorText },
                formIsValid: Object.values({
                    ...state.inputValidities,
                    [input]: isValid,
                }).every(Boolean)
            };
        default:
            return state;
    }
};

export const useForm = (initialState) => {

    const [formState, dispatchFormState] = useReducer(formReducer, {
        ...initialState,
        inputErrors: {}
    });

    const inputChangeHandler = useCallback((inputIdentifier, inputValue) => {
        dispatchFormState({
            type: 'FORM_INPUT_UPDATE',
            value: inputValue,
            input: inputIdentifier,
        });
    }, []);

    return { formState, inputChangeHandler };
}