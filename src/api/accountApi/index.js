import axios from '../index.js'
function http(params) { 
    return axios.get(params).then(res =>{
    })
 }
const accountHttp = {
    getList: (params)=>{
        http(params)
    }
}
export default accountHttp