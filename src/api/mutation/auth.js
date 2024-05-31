import { useMutation } from '@tanstack/react-query'
import { apiMethods } from '../api-instance'
import { queryClient } from '../query-client'

export const useLoginMutation = () => useMutation({
	mutationKey: ['auth', 'login'],
	mutationFn: (data) => apiMethods.auth.login(data)
})

export const useSignUpMutation = () => useMutation({
	mutationFn: (data) => apiMethods.auth.signUp(data),
	mutationKey: ['auth', 'signup']
})

export const useLogoutMutation = () => useMutation({
	mutationFn: () => {
		localStorage.removeItem('token')
		queryClient.invalidateQueries({
			queryKey: ['auth', 'me']
		})
	}
})