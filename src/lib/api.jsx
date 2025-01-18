
import axios from 'axios';

// Create an Axios instance with the base URL of your Django backend
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json'}
});
export default api;



export const addJobs = async (qry) => {
  const{ type, position, descript, salary, location, cname, cdescript, email, mobile } =qry;
    try {
      const response = await api.post('/jobs', { "id":"", "type":type, "position":position, "descript":descript, "salary":salary, "location":location, "cname":cname, "cdescript":cdescript, "email":email, "mobile":mobile});
      // const response = await api.post('/jobs', qry);
      return response.data;
    } catch (error) {
      console.log("Register error:", error.response.data);
      throw error.response.data;
    }
  };

export const updateJobs = async (qry, i) => {
  const{id, type, position, descript, salary, location, cname, cdescript, email, mobile } =qry;
    try {
      const response = await api.put(`/jobs/${i}`, { "id":i, "type":type, "position":position, "descript":descript, "salary":salary, "location":location, "cname":cname, "cdescript":cdescript, "email":email, "mobile":mobile});
      // const response = await api.post('/jobs', qry);
      return response.data;
    } catch (error) {
      console.log("Register error:", error.response.data);
      throw error.response.data;
    }
  };

export const deleteJobs = async (i) => {
    try {
      const response = await api.delete(`/jobs/${i}`);
      // const response = await api.post('/jobs', qry);
      return response.data;
    } catch (error) {
      console.log("Register error:", error.response.data);
      throw error.response.data;
    }
  };

export const register = async (qry) => {
  const{name,email,pass1,pass2}=qry;
    try {
      const response = await api.post('/users', {"id":"", "name":name, "email":email, "pass1":pass1, "pass2":pass2});
      return response.data;
    } catch (error) {
      console.log("Register error:", error.response.data);
      throw error.response.data;
    }
  };

export const login = async (qry) => {
  const {email, pass}=qry;

    try {
      const response = await api.get('/users',{params:{"email":email, "pass1":pass} });
      return response;   
    } catch (error) {
      console.log("Login error:", error.response.data);
      throw error.response.data;
    }
  };
 