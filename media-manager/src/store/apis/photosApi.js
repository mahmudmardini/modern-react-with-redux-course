import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { faker } from "@faker-js/faker/locale/en";

const photosApi = createApi({
   reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    fetchFn: async (...args) => {
       // TODO: REMOVE FOR PRODUCTION
       await pause(1000);
       return fetch(...args);
    },
    endpoints(builder) {
      return {
          fetchPhotos: builder.query({
              providesTags: (result, error, album) => {
                  const tags = result.map(photo => {
                      return { type: 'Photo', id: photo.id };
                  });

                  tags.push({type: 'AlbumPhotos', id: album.id});

                  return tags;
              },
              query: (album) => {
                  return {
                      url: 'photos',
                      params : {
                          albumId: album.id,
                      },
                      method: 'GET',
                  };
              },
          }),

          addPhoto: builder.mutation({
              invalidatesTags: (result, error, album) => [{type: 'AlbumPhotos', id: album.id}],
              query: (album) => {
                  return {
                      url: 'photos',
                      method: 'POST',
                      body: {
                          url: faker.image.url(150, 150, true),
                          albumId: album.id
                      },
                  };
              },
          }),

          removePhoto: builder.mutation({
              invalidatesTags: (result, error, photo) => [{type: 'Photo', id: photo.id}],
              query: (photo) => {
                  return {
                      url: `photos/${photo.id}`,
                      method: 'DELETE',
                  };
              },
          }),
      };
    },
});


// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };