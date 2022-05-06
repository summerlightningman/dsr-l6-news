enum ApiEndpoint {
    LOGIN = 'auth/login',
    SIGN_UP = 'auth/signup',
    LOGOUT = 'auth/logout'
}

const BACKEND_URL = 'http://localhost:3000/';

export const signIn = async (login: string, password: string) => fetch(BACKEND_URL + ApiEndpoint.LOGIN, {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BACKEND_URL
    }
}).then(response => response.json());