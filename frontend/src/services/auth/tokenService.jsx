const ACCESS_TOKEN_KEY = 'ACESS_TOKEN_KEY';

export const tokenService = {
    save(accessToken) {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(accessToken))
    },
    get() {
        return sessionStorage.getItem(ACCESS_TOKEN_KEY)
    },
    delete() {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    },
    clear() {
        sessionStorage.clear();
    }
}