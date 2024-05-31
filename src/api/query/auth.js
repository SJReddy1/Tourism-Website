import { useQuery } from '@tanstack/react-query'
import { apiMethods } from '../api-instance'

export const useCurrentUserQuery = () => useQuery({
	queryKey: ['auth', 'me'],
	queryFn: () => apiMethods.auth.me(),
	retry: false
})