import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restautante from '../model/Restaurante'

const Api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (build) => ({
        getRestaurantes: build.query<Restautante[], void>({
            query: () => 'restaurantes'
        })
    })
})

export const { useGetRestaurantesQuery } = Api
export default Api