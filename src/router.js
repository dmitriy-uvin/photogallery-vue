import Vue from 'vue';
import VueRouter from 'vue-router';

const UsersList = () => import("@/components/User/UsersList");
const User = () => import("@/components/User/User");
const UserEdit = () => import("@/components/User/UserEdit");
const UserAdd = () => import("@/components/User/UserAdd");
const AlbumsList = () => import("@/components/Album/AlbumsList");
const Album = () => import("@/components/Album/Album");
const AlbumAdd = () => import("@/components/Album/AlbumAdd");
const AlbumEdit = () => import("@/components/Album/AlbumEdit");
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
            path: '/user/add',
            name: 'user-page-add',
            component: UserAdd
        },
        {
            path: '/users/:id',
            name: 'user-page',
            component: User
        },
        {
            path: '/users/:id/edit',
            name: 'user-page-edit',
            component: UserEdit
        },
        {
            path: '/albums',
            name: 'albums',
            component: AlbumsList,
        },
        {
            path: '/album/add',
            name: 'album-add',
            component: AlbumAdd,
        },
        {
            path: '/albums/:id/edit',
            name: 'album-page-edit',
            component: AlbumEdit,
        },
        {
            path: '/album/:id',
            name: 'album-page',
            component: Album,
        },
    ],
    scrollBehavior: () => ({ x: 0, y: 0 }),
});

export default router;