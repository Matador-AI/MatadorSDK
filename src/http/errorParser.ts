export default (err: any) =>  {
    // console.log("MatadorClient HTTP request failed, code: ", err.response.statusText+ ", response: ", err.response.data)
    return {
        status: err.response.status,
        statusText: err.response.statusText,
        config: err.response.config,
        data: err.response.data
    };
}