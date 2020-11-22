import http from './Http';

const productApi = (config)=> {
    
    return http.get("/products", config);

}
export default productApi;