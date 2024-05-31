import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

if(!API_URL) {
	throw Error('API_URL not provided')
}


export const apiInstance = axios.create({
	baseURL: API_URL
})

apiInstance.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem('token')
	return config

})

export const apiMethods = {
	auth: {
		login: (data) => apiInstance.post('/auth/login', data),
		signUp: (data) => apiInstance.post('/auth', data),
		me: () => apiInstance.get('/auth/me')
	}
}