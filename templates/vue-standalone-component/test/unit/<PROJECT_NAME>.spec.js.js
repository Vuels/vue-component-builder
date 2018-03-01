module.exports = (projectName, projectFolderName) => `
import { shallow } from '@vue/test-utils'
import test from 'tape'
import ${projectFolderName} from '../../${projectFolderName}.vue'

test('${projectFolderName}.vue', t => {
    t.plan(1)

    const wrapper = shallow(${projectFolderName}, {
        propsData: {}
    })

    t.ok(wrapper.exists(), 'Component Exists')
})
`