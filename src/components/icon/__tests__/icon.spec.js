import { mount, createLocalVue } from '@vue/test-utils'
import IdIcon from '../'

const localVue = createLocalVue()
localVue.use(IdIcon)

describe('IdIcon', () => {
  test('should render well', () => {
    const Wrapper = {
      name: 'wrap',
      template: `
        <id-icon icon="rss"></id-icon>
      `
    }

    const wrapper = mount(Wrapper, {
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
