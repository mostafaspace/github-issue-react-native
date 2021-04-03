import {POPULATE_LIST, APPEND_TO_LIST, LOAD_MORE, LAST_PAGE} from '../Actions/IssuesActions';
const initState = {
    IssuesList: [],
    IsLoading: true,
    IsLoadingMore: false,
    LastPage: false,
    Page: 1,
    Organization: '',
    Repo: '',
};

export default function IssuesReducer(state = initState, action) {
    switch (action.type) {
        case POPULATE_LIST:
            return {...state, IssuesList: action.payload.response, ...action.payload.values, IsLoading: false, Page: 2};
        case APPEND_TO_LIST:
            return {...state, IssuesList: [...state.IssuesList, ...action.payload], IsLoadingMore: false};
        case LOAD_MORE:
            return !state.LastPage ? {...state, IsLoadingMore: true, Page: state.Page + 1} : state;
        case LAST_PAGE:
            return {...state, LastPage: true, IsLoadingMore: false};
        default:
            return state;
    }
}
