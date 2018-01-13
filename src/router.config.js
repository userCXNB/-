import index from './components/index.vue';
import school from './components/school.vue';
import consultant from './components/consultant.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import record from './components/record.vue';
import apply from './components/apply.vue';
import introduce from './components/introduce.vue';
import header from './components/header.vue';
import enter from './components/enter.vue';
import history from './components/history.vue';

let routes = [
    {path:'/index',component:index},
    {path:'/',component:index},
    {path:'/school',component:school},
    {path:'/consultant',component:consultant},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {path:'/record',component:record},
    {path:'/apply',component:apply},
    {path:'/enter',component:enter},
    {path:'/history',component:history},
    {path:'/header',component:header},
    {path:'/introduce',component:introduce}
];

export default {
    routes:routes,
    mode:'history'
}


