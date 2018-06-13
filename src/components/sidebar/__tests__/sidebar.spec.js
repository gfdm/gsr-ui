import { mount, createLocalVue } from '@vue/test-utils'
import IdSidebar from '../'

const localVue = createLocalVue()
localVue.use(IdSidebar)

describe('Sidebar', () => {
  test('should render well', () => {
    const Wrapper = {
      name: 'wrap',
      template: `
        <id-sidebar>
          <id-sidebar-group title="Title">
            <id-sidebar-item>A</id-sidebar-item>
            <id-sidebar-item>B</id-sidebar-item>
          </id-sidebar-group>
          <id-sidebar-item>C</id-sidebar-item>
        </id-sidebar>
      `
    }

    const wrapper = mount(Wrapper, {
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
