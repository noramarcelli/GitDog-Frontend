import MyStore from './store/index.js'

import HomePage from './pages/HomePage.js'
import ChatPage from './pages/ChatPage.js'
import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'
import DogAppPage from './pages/DogAppPage.js'
import AdminPage from './pages/AdminPage.js'

const myRoutes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/chat',
        component: ChatPage,
        beforeEnter: userOnlyRoute
        
    },
    {
        path: '/dog',
        component: DogAppPage,
        beforeEnter: userOnlyRoute
        
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/admin',
        component: AdminPage,
        beforeEnter: adminOnlyRoute
    }
];


Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})

// Navigation Guards
function userOnlyRoute(to, from, next) {
    const user = MyStore.getters.loggedinUser;
    console.log('Navigation Guard!', user);
    next(user != null);
}
function adminOnlyRoute(to, from, next) {
    var user = MyStore.getters.loggedinUser;
    if (!user) return next(false);
    var res = (user !== null && user.isAdmin === true)
    console.log('Navigation Guard!',  user, res);
    next(res);
}

export default myRouter;
