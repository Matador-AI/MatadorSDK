export default (err: any) =>  {
    if(!err?.isAxiosError) {
        return {
            errorType: "UNKNOWN",
            error: err
        };
    }
    else if(err?.isAxiosError && !err.response) {
        return {
            errorType: err.code,
            error: err
        };
    }
   
    else return {
        errorType: "HTTP",
        error: {
            status: err.response.status,
            statusText: err.response.statusText,
            config: err.response.config,
            data: err.response.data
        }
    };
};