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
   
    else {
        const response =  err.response.data;

        delete response.code;
        delete response.status;

        return {
            errorType: "HTTP",
            status: err.response.status,
            response
        };
    }
        
};