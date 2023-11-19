// Import React module
import {configureStore} from "@reduxjs/toolkit";

// Import Components
import {mainRootReducer} from "./Main/mainReducer";
// import {landingRootReducer} from "./Landing/landingReducer";
// import {profileRootReducer} from "./Profile/profileReducer";

const rootReducer = {
    main: mainRootReducer,
    // landing: landingRootReducer,
    // profile: profileRootReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export { store };
