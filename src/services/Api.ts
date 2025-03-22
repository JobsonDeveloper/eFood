import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restautant from '../model/Restaurant'

const Api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (build) => ({
        getRestaurants: build.query<Restautant[], void>({
            query: () => 'restaurantes'
        }),
        purchase: build.mutation<any, ApiPurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = Api
export default Api