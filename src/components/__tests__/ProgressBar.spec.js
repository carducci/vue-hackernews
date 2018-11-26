/*specification for progressbar
The progressbar should be visible when "start" is called
The Progressbar should set the bar to 100% when "finish" is called
The Progressbar should hide the bar when "hide" is called
 */

import {shallowMount} from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe ('ProgressBar.Vue', ()=> [
    test('display progress bar when start is called', ()=>{
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.element.style.opacity).toBe("0")
        wrapper.vm.start()
        expect(wrapper.element.style.opacity).toBe("1")
    }),
    test('Set progressbar width to 100% when finish is called', ()=>{
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        wrapper.vm.finish()
        expect(wrapper.element.style.width).toBe("100%")
    }),
    test('progress bar hidden when hide() is called', ()=>{
        jest.useFakeTimers()
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        wrapper.vm.finish()
        wrapper.vm.hide()
        jest.runTimersToTime(500)
        expect(wrapper.element.style.opacity).toBe("0")
    })
])