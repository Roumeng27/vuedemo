var router = [
    {
        path: '/',
        name: 'Lgoin',
        component: resolve => require(['@/views/login.vue'], resolve)
    },
    {
        path: '/login',
        name: 'Lgoin',
        component: resolve => require(['@/views/login.vue'], resolve)
    },
    {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/home/index.vue'], resolve),
        children:[
            {
                path: 'home_page',
                component: resolve => require(['@/views/home_page/home_page.vue'], resolve),
                name: 'Home_page'
            }
        ],
        redirect:'/home/home_page'
    },
    {
        path: '/log',
        name: 'Log',
        component: resolve => require(['@/views/home/index.vue'], resolve),
        children:[
            {
                path: '808log',
                component: resolve => require(['@/views/sys_log/808log.vue'], resolve),
                name: '808log'
            },
            {
                path: 'nginxlog',
                component: resolve => require(['@/views/sys_log/nginxlog/nginxlog.vue'], resolve),
                name: 'Nginxlog'
            }
        ],
        // redirect:'/home/nginxlog'
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: resolve => require(['@/views/home/index.vue'], resolve),
        children:[
            {
                path: 'authority',
                component: resolve => require(['@/views/access_authority/index.vue'], resolve),
                name: 'Authority'
            },
            {
                path: 'account',
                component: resolve => require(['@/views/account/index.vue'], resolve),
                name: 'Account'
            }
        ]
    }
]
export default router