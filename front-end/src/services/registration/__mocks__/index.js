export default {
  register (detail) {
    return new Promise((resolve, reject) => {
      detail.emailAddress === 'datamining7830@gmail.com'
        ? resolve({result: 'success'}) : reject(new Error('User already exist'))
    })
  }
}
