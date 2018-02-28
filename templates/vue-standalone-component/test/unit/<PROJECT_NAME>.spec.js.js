module.exports = projectName => `
import { shallow } from '@vue/test-utils'
import test from 'tape'
import ${projectName} from '../../${projectName}.vue'

test('${projectName}.vue', t => {
    t.plan(1)

    const wrapper = shallow(${projectName}, {
        propsData: {}
    })

    t.ok(wrapper.exists(), 'Component Exists')
})
`