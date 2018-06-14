import { mount, createLocalVue } from '@vue/test-utils'
import IdInput from '../'

const localVue = createLocalVue()
localVue.use(IdInput)

describe('IdInput', () => {
  test('should render well', () => {
    const Wrapper = {
      name: 'wrap',
      template: `
        <id-input type="text" placeholder="Please input">
        </id-input>
      `
    }

    const wrapper = mount(Wrapper, {
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
