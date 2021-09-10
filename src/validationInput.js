import {useEffect, useState} from "react";

const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validForm, setIsValidForm] = useState(false);


    useEffect(() => {

        for (let validation in validations) {
            switch (validation) {
                case 'minLength':
                    value?.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value?.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break
                case 'isEmail':
                    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                    emailRegex.test(value.toLowerCase()) ? setIsEmail(false) : setIsEmail(true)
                    break;

                case 'isPassword':
                    const passwordRegex = /(?=.*[a-zA-Z0-9])(?=.{6,})/;
                    passwordRegex.test(value) ? setIsPassword(false) : setIsPassword(true);
                    break;
                case 'isPhone':
                    const phoneRegex = /^((\+?[-()]?\d[-()]?){11})$/;
                    phoneRegex.test(value) ? setIsPhone(false) : setIsPhone(true);
                    break;
                case 'validName':
                    const validNameRegex = /^([А-ЯЁа-яё-]+|[A-za-z-]+)(\s|-)?([А-ЯЁа-яё-]+|[A-za-z-]+)?$/;
                    validNameRegex.test(value) ? setValidName(false) : setValidName(true);
                    break;
                case 'isChecked':
                    value ? setIsChecked(false) : setIsChecked(true);
                    break;
                default:

            }

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLengthError || isEmail || isPassword || maxLengthError || isPhone || isChecked || validName) {
            setIsValidForm(false)
        }else{
            setIsValidForm(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEmpty, minLengthError, isEmail, isPassword, maxLengthError,isPhone,isChecked,validName]);

    return {
        isEmpty,
        minLengthError,
        isEmail,
        isPassword,
        maxLengthError,
        isPhone,
        isChecked,
        validForm,
        validName
    }

};

export const useInput = (initialValue, validations) => {

    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);
    const clearState = () => {
        setValue('');
        setDirty(false);
    };
    const onChange = (e) => {
        if (e.target.type === "checkbox"){
            setValue(e.target.checked)
        }else {
            setValue(e.target.value)
        }

    };
    const onBlur = (e) => {
        setDirty(true)

    };
    return {
        value,
        onChange,
        onBlur,
        setValue,
        clearState,
        isDirty,
        ...valid
    }
};
