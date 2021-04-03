import {GitHub} from '../Models';

export const Issues = async (values, showModal, setSubmitting) => {
    return GitHub.Issues(values)
        .then((response) => {
            setSubmitting && setSubmitting(false);
            console.log('IssuesController:', response);
            if (response.IsSuccess) {
                return response.Data;
            } else {
                response.ErrorMessage && showModal && showModal(true, response.ErrorMessage);
                return false;
            }
        })
        .catch((error) => {
            console.log('IssuesController: ', error);
            return {IsSuccess: false, Error: error};
        });
};
