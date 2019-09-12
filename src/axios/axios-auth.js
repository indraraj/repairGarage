import axios from 'axios';

const axiosAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwfiuUXhSWqgN69x19VGB0ICy6XDklTKY'
});

export default axiosAuth;