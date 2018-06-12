import { mount, createLocalVue } from '@vue/test-utils'
import IdButton from '../'

const localVue = createLocalVue()
localVue.use(IdButton)

describe('Button', () => {
  test('should render well', () => {
    const Wrapper = {
      name: 'wrap',
      template: `
        <id-button>Click Me!</id-button>
      `
    }

    const wrapper = mount(Wrapper, {
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
