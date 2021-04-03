import React from 'react';

//A custom hook for form validations
export default function useFormValidation(initState, validate, afterValidation, callback) {
    const [values, setValues] = React.useState(initState);
    const [errors, setErrors] = React.useState([]);
    const [isSubmitting, setSubmitting] = React.useState(false);
    const [currentValues, setCurrentValues] = React.useState({
        submit: false,
        values: [],
    });

    const [modalValues, setModalValue] = React.useState({show: false, text: '', hasAction: false, action: null});
    function showModal(show, text) {
        setModalValue({
            show: show,
            text: text,
        });
    }

    React.useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                afterValidation &&
                    afterValidation(values, showModal, setSubmitting).then((response) => {
                        callback && callback(response);
                    });
            } else {
                setSubmitting(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    React.useEffect(() => {
        if (validate) {
            let validationErrors = !currentValues.submit
                ? {...validate(currentValues.values)}
                : {
                      ...validate({...currentValues.values, ...values}),
                  };
            setErrors(validationErrors);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValues.values]);

    function handleChange(name, value) {
        setValues({
            ...values,
            [name]: value,
        });
        setCurrentValues({
            ...currentValues,
            values: {...currentValues.values, [name]: value},
        });
    }

    function handleSubmit() {
        setSubmitting(true);
        setCurrentValues({...currentValues, submit: true});
        if (validate) {
            const validationErrors = validate({...currentValues.values, ...values});
            setErrors(validationErrors);
        }
    }

    return {
        handleChange,
        handleSubmit,
        setSubmitting,
        isSubmitting,
        errors,
        values,
        showModal,
        modalValues,
    };
}
