import Vue from 'vue'
import {mount, createLocalVue} from '@vue/test-utils'
import VueRouter from 'vue-router'
// 테스트 코드 작성
// npm install @vue/test-utils --save-dev
import RegisterPage from '@/views/RegisterPage.vue'
const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)
// mock dependency
jest.mock('@/services/registration')

describe('RegisterPage.vue', () => {
  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit
  beforeEach(() => {
    let wrapper = mount(RegisterPage, {localVue, router})
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[form button[type="submit"]')
  })

  // jest.mock('@/services/registration')  @/services/registration 의 index.js 대신 __MOCK__ 폴더 index.js실행
  // 폼에서 입력을 submitForm() 함수가 실행되었을떄 services/registration 의 registration 함수 실행
  // mock index.js 에서는 datamining7830@gmail.com 아이디가 입력 되엇는지 확인하고 {result:'success'} 값 반환
  // jest.fn()으로 스파이 함수를 만들고 스파이 함수를 $router.push(리다이렉션 되는부분) 되는지 확인
  it('should register when it is a new user', () => {
    const stub = jest.fn()
    wrapper.vm.$router.push = stub`
    wrapper.vm.from.username = 'kyungsik'
    wrapper.vm.form.emailAddress = 'datamining7830@gmail.com'
    wrapper.vm.form.password = 'test'
    wrapper.vm.submitForm()
    wrapper.vm.$nextTick(() => {
      expect(stub).toHaveBeenCalledWith({name: 'LoginPage'})
    })
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })
})
