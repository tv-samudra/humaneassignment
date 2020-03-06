let stored = localStorage.getItem("token");
let store = {
    authenticated: stored ? true : false,
    token: stored
}

export default store;