import Vue from 'vue'
import {mount} from '@vue/test-utils'
// 테스트 코드 작성
// npm install @vue/test-utils --save-dev
import RegisterPage from '@/views/RegisterPage.vue'

describe('RegisterPage.vue', () => {
  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit

  beforeEach(() => {
    let wrapper = mount(RegisterPage)
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[form button[type="submit"]')
  })
})
