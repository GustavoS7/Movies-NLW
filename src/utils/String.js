
export function getParams(url) {
    const baseUrl = url.split('?')
    const params = baseUrl[1].split("&")


    const obj = {}

    for (const param of params) {
        const partes = param.split("&")

        for (const parte of partes) {
            const el = parte.split("=");
            obj[el[0]] = el[1];
        }
        // console.log()
    }

    console.log(obj)

    return obj
}