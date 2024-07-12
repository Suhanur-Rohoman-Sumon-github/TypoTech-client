import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseapi'
import cardSlice from './fetures/cards/cardSlice'
import cupons from './fetures/cupons/cupons'
import paymentsSlice from './fetures/payments/paymentsSlice'
import productsSlice from './fetures/products/products.slice'
// ...

export const store = configureStore({
  reducer: {
    cards: cardSlice,
    cupon:cupons ,
    products:productsSlice,
    payment:paymentsSlice ,
    [baseApi.reducerPath]: baseApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch