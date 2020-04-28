export default{
  register (detail) {
    return new Promise((resolve, reject) => {
      detail.emailAddress === 'kyungsik@local'
        ? resolve({result: 'success'}) : reject(new Error('사용자가 이미 존재합니다'))
    })
  }
}
