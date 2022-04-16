import { Httpclient } from "../../infra/Httpclient/Httpclient";
import { tokenService } from "./tokenService";

export const authService = {
    async login({ username, password }) {

        return Httpclient(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body: { username, password, }
        })
            .then(async (serverResponse) => {
                if (!serverResponse.ok) throw new Error('Usuario ou Senha são invalidos!')
                const body = serverResponse.body;

                tokenService.save(body.data.access_token)
            })
    }
};