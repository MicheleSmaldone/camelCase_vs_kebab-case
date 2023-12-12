import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import HomePage from "@/components/HomePage.vue";
import Playground from "@/components/PlaygroundPage.vue";
import {createRouter,createWebHashHistory} from 'vue-router';
import { createStore } from 'vuex'

loadFonts()



// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

const routes = [
    { path: '/', component: HomePage },
    { path: '/playground', component: Playground },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mount('#app')
