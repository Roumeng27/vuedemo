import axiosHttp from '../index.js'
const login = {
    login:(params)=>{
        return axiosHttp.post('/v1/session',params)
    },
    outLogin:(params) =>{
        return axiosHttp.delete('/v1/session',params)
    }
}
export default login