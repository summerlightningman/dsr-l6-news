enum ApiEndpoint {
    LOGIN = 'auth/login',
    SIGN_UP = 'auth/signup',
    LOGOUT = 'auth/logout',

}

const BACKEND_URL = 'http://localhost:3000/';

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BACKEND_URL
}

export const signIn = async (login: string, password: string) => fetch(BACKEND_URL + ApiEndpoint.LOGIN, {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers: {
        ...corsHeaders
    }
}).then(response => response.json());

export const signOut = async (token: string) => fetch(BACKEND_URL + ApiEndpoint.LOGOUT, {
    method: 'POST',
    headers: {
        ...corsHeaders,
        token
    }
})