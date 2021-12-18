const homeRoute = require('./homeRoute');
const userRoute = require('./userRoute');
const caseRoute = require('./caseRoute');
const blogRoute = require('./blogRoute');

const routes = [
    {
        handler: homeRoute,
        path: '/'
    },
    {
        handler: userRoute,
        path: '/users'
    },
    {
        handler: caseRoute,
        path: '/cases'
    },
    {
        handler: blogRoute,
        path: '/blogs'
    }
]

const useRoutes = (app) => {
    routes.map(route => {
        if (route.path === '/') {
            app.get(route.path, route.handler)
        } else {
            app.use(route.path, route.handler)
        }
    })
}

module.exports = useRoutes;