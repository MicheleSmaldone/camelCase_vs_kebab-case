import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import HomePage from "@/components/HomePage.vue";
import PlaygroundPage from "@/components/PlaygroundPage.vue";
import {createRouter,createWebHashHistory} from 'vue-router';
import { createStore } from 'vuex'
import ExperimentPage from "@/components/ExperimentPage.vue";

loadFonts()



// Create a new store instance.
const store = createStore({
    state () {
        return {
            experimentObject: {
                id: 0,
                form: {},
                results: []
                }

        }
    },
    mutations: {
        add_form(state, formData){
            state.experimentObject.id++;
            state.experimentObject.form = formData;
        },
        add_result(state, resultData){
            state.experimentObject.results.push(resultData);
        }
    },
    actions: {
        submitForm({commit}, form) {
            commit('add_form', {
                formData: {
                    age: form.age,
                    gender: form.gender,
                    hasGlasses: form.hasGlasses,
                    hasITSkills: form.hasITSkills
                }
            })
        },
        submitResult({commit}, result) {
            commit('add_result', {
                resultData: result,
            })
        },
        async submitExperimentObject({ commit, state }) {
            try {
                console.log("state: ",state)

                const response = await fetch('http://localhost:8000/submit_experiment_object', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(state.experimentObject),
                });

                const data = await response.json();
                console.log(data); // Log the response from the backend

                // Handle the response as needed

                // Reset completion flags after successful submission
                commit('reset_completion_flags');
            } catch (error) {
                console.error('Error submitting experimentObject:', error);
            }
        },
    }
})

const routes = [
    { path: '/', component: HomePage },
    { path: '/playground', component: PlaygroundPage },
    { path: '/experiment', component: ExperimentPage}
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
