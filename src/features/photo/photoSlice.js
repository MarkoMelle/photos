import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addPhoto: {
      reducer: (state, action) => {
        state.photos.push(action.payload);
      },
      prepare: (photo) => {
        return { payload: { ...photo, id: nanoid() } };
      },
    },
  },
});

export const { addPhoto } = photoSlice.actions;

export default photoSlice.reducer;
