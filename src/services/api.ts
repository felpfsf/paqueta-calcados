import axios from "axios";

const api = axios.create({
  baseURL:"https://api.brchallenges.com/api/paqueta"
})

export default api