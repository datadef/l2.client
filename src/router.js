import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";

import store from "./store";

Vue.use(Router);

// eslint-disable-next-line no-unused-vars
const ACCESS_ALL = "ALL";
const ACCESS_USER_ONLY = "LOGGED";
const ACCESS_ANON_ONLY = "ANONYMOUS";

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                access: ACCESS_ALL
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    let checkAccess = access =>
        to.matched.some(record => record.meta.access == access);

    if (checkAccess(ACCESS_ANON_ONLY) && store.state.logged_in) {
        next({
            name: "portfolio"
        });
    } else if (checkAccess(ACCESS_USER_ONLY) && !store.state.logged_in) {
        next({
            name: "login"
        });
    } else {
        next();
    }
});


export default router;