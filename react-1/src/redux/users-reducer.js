import avatar from './../Components/Users/Komisarenko_Avatar.png';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
        users: [
        ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true
    };

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW: {
                let stateCopy = {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
                }
                return stateCopy;
            }
            case UNFOLLOW: {
                let stateCopy = {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
                return stateCopy;
            }
            case SET_USERS: {
                return {...state, users: action.users}
            }
            case SET_CURRENT_PAGE: {
                return {...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount: action.count}
            }
            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
            default:
                return state;
        }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;