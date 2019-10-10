import axiosHttp from '../index.js'
const http_obj = {
    get_rolelist:(params)=>{
        return axiosHttp.get('/v1/role',{params})
    },
    creatRole:(params) =>{
        return axiosHttp.post('/v1/role',params)
    },
    del_role:(params) =>{
        return axiosHttp.delete('/v1/role',{data:params})
    },
    up_role:(params) =>{
        return axiosHttp.put('/v1/role',params)
    }
}
export default http_obj