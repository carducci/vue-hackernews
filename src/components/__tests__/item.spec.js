import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'
import VueRouter from 'vue-router'

describe ('Item.Vue', ()=> [
    Vue.filter('timeAgo', (time)=> {
        return "time"
    }),
    Vue.filter('host', ()=> {
        return ""
    }),
    Vue.use(VueRouter),
    test('sanity test', ()=>{
        console.log(Item)
    }),
    test('render "item"', ()=>{
            const wrapper = shallowMount(Item,  {
                propsData: {
                    "item": {
                        "score": 1,
                        "type": "story",
                        "url": "https://example.com",
                        "title": "Mock item headline",
                        "by": "Carducci",
                        "descendants": 0,
                        "time": "12:00:00Z"
                    }
                }
            })
        expect(wrapper.text()).toContain('Mock item headline')
        }
    )
])
