
export const authService = {
    async login({ username, password }) {

        return await fetch(
            `http://localhost:4000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
            .then(async (serverResponse) => {
                if (!serverResponse.ok) throw new Error('Usuario ou Senha são invalidos!')
                const body = await serverResponse.json();

                console.log(body.data.access_token)
            })
    }
};