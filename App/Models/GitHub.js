import client from './client';

export class GitHub {
    //issues API data
    static async Issues(values) {
        try {
            const result = await client().get(`/repos/${values.Organization}/${values.Repo}/issues`, {
                params: {
                    page: values.Page,
                    per_page: 10,
                },
            });

            return {IsSuccess: true, Data: result.data};
        } catch (error) {
            console.log('Error', error.response);
            if (error.response) {
                if (error.response.data && error.response.data.message) {
                    return {
                        IsSuccess: false,
                        ErrorMessage: error.response.data.message,
                    };
                } else {
                    return {IsSuccess: false, ErrorMessage: error.message};
                }
            } else {
                return {IsSuccess: false, ErrorMessage: error.message};
            }
        }
    }
}
