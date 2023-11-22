// Import React module
import {combineReducers} from "redux";

// Import Components
// import {
//     SET_MAIN_USER,
//     MAIN_DATA_LOADED,
//     RESET_MAIN_USERS_POSTS
// } from "./mainAction";
// import {navbarReducer} from "./Components/Navbar/navbarReducer";
// import {sidebarReducer} from "./Components/Sidebar/sidebarReducer";
// import {newPostReducer} from "./Components/NewPost/newPostReducer";
// import {postsReducer} from "./Components/Posts/postsReducer";
// import {userInfoReducer} from "./Components/UserInfo/userInfoReducer";

const initialState = {
    // user: [],
    // dataIsLoaded: false,
};

function mainReducer( state = initialState, action) {
    switch (action.type) {
        // case SET_MAIN_USER:
        //     return {
        //         ...state,
        //         user: action.user,
        //     };
        // case MAIN_DATA_LOADED:
        //     return {
        //         ...state,
        //         dataIsLoaded: action.boolean,
        //     };
        // case RESET_MAIN_USERS_POSTS:
        //     return {
        //         ...initialState,
        //     };
        default:
            return state;
    }
}

export const mainRootReducer = combineReducers({
    main: mainReducer,
    // navbar: navbarReducer,
    // sidebar: sidebarReducer,
    // newPost: newPostReducer,
    // posts: postsReducer,
    // userInfo: userInfoReducer,
})