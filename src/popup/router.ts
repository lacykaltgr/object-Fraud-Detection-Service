import Vue from 'vue';
import VueRouter from 'vue-router';
import Recommend from "~/popup/pages/Recommend.vue";
import Timeline from "~/popup/pages/Timeline.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/', component: Recommend },
        { path: '/about', component: Timeline }
    ]
});