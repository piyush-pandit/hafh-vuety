import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import Rv from "../views/Rv.vue";
import RvAdd from "../views/RvAdd.vue";
import RvEdit from "../views/RvEdit.vue";
import Room from "../views/Room.vue";
import RoomAdd from "../views/RoomAdd.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import PostAdd from "../views/PostAdd.vue";
import RoomEdit from "../views/RoomEdit.vue";
import PostEdit from "../views/PostEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/rv",
    name: "Rv",
    component: Rv,
  },
  {
    path: "/rvAdd",
    name: "RvAdd",
    component: RvAdd,
  },
  {
    path: "/rvEdit/:rvId",
    name: "RvEdit",
    component: RvEdit,
  },
  {
    path: "/room/:rvId",
    name: "Room",
    component: Room,
  },
  {
    path: "/roomAdd/:rvId",
    name: "RoomAdd",
    component: RoomAdd,
  },

  {
    path: "/roomEdit/:roomId/:rvId",
    name: "RoomEdit",
    component: RoomEdit,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/postAdd",
    name: "PostAdd",
    component: PostAdd,
  },
  {
    path: "/post/:roomId",
    name: "Post",
    component: Post,
  },
  {
    path: "/postEdit",
    name: "PostEdit",
    component: PostEdit,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
