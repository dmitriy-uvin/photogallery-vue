import Vue from 'vue';
import VueRouter from 'vue-router';

const UsersList = () => import("@/components/UsersList");
const User = () => import("@/components/User");
const AlbumsList = () => import("@/components/AlbumsList");
const Album = () => import("@/components/Album");
const Main = () => import("@/components/Main");

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/users',
            name: 'users',
            component: UsersList
        },
        {
            path: '/albums',
            name: 'albums',
            component: AlbumsList,
        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/album/:id',
            component: Album,
        },
    ]
});

export default router;