const createURLWithParams = (query) {
    let result = "";
    for(const [key, value] of Object.entries(query)){
        result += `${key}=${value}&`;
    }
};