export async function Httpclient(fetchUrl, fetchOptions) {

    const options = {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    }

    return fetch(fetchUrl, options)
        .then(async (resultServer) => {
            return {
                ok: resultServer.ok,
                body: await resultServer.json(),
            }
        });
}