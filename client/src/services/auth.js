export const isAuthenticated = () => {
    const _id = sessionStorage.getItem('_id');
    const username = sessionStorage.getItem('username');
    if (_id && username) return true
    else return false
};