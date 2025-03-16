import axios from 'axios';

const apiUrl = "http://localhost:5150"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/get`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const newItem = { Name: name, IsComplete: false };
    const result = await axios.post(`${apiUrl}/`,newItem)    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`${apiUrl}/${id}/${isComplete}`)    
    return result.data; 
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`${apiUrl}/${id}`)    
    return result.data;
  },
  register: async (email, password, name) => {
    console.log('register', { email, password, name });
    try {
        const result = await axios.post(`${apiUrl}/register`, { email, password, name });
        return result.data; 
    } catch (error) {
        console.error("Registration failed:", error.response?.data || error.message);
        throw error;
    }
},

};

