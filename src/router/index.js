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
    path: "/rvEdit",
    name: "/RvEdit",
    component: RvEdit,
  },
  {
    path: "/room",
    name: "Room",
    component: Room,
  },
  {
    path: "/roomAdd",
    name: "RoomAdd",
    component: RoomAdd,
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
    path: "/post",
    name: "Post",
    component: Post,
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
