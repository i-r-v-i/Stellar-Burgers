export type TMethods = 'POST'|'GET'|'DELETE'|'PATCH';
export type TOptions = {
  method: TMethods,
        headers: {
            "Content-Type"?: string,
            "authorization": string | undefined,
        },
        body?: string,
}