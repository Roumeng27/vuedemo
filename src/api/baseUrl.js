var env = process.env.NODE_ENV
var baseUrl = ''
// env == 'development' ? baseUrl = 'http://172.16.0.42' : baseUrl = 'http://172.16.0.42' // 测试版
env == 'development' ? baseUrl = 'http://172.16.0.36' : baseUrl = 'http://172.16.0.42' // 测试版
export default baseUrl

