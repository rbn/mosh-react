import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'ba0cb2f35c3a49e38c2c853de8b7c34a'
  }
})