import axios from 'axios'

export default{
  register(details){
    return new Promise((resolve,reject)=>{axios.post('/registrations',details).then((data)=>resolve(data)).catch(error){
      reject(error)
    }})
  }
}