import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {

  IProfile,
} from '../types/types';
import { BASE_URL, ReqRoutes } from '../const/const';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<IProfile, void>({
      query: () => ReqRoutes.PROFILE
    })
  })
});

export { userApi };

export const {
  useGetProfileQuery
} = userApi;
