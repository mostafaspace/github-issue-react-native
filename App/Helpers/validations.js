import {has} from '../Helpers/functions';

export default function validations(values) {
    let errors = {};

    //Organization
    if (has(values, 'Organization')) {
        if (values.Organization === '') {
            if (!values.Organization) {
                errors.Organization = 'Organization is Required';
            }
        }
    }

    //Repo
    if (has(values, 'Repo')) {
        if (values.Repo === '') {
            if (!values.Repo) {
                errors.Repo = 'Repository is Required';
            }
        }
    }

    return errors;
}
