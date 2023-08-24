import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  houseName: '',
  description: '',
  bedrooms: '',
  bathrooms: '',
  rent: '',
  securityDeposit: '',
  city: '',
  contactPhoneNumber: '',
  icon: null,
};

const houseFormSlice = createSlice({
  name: 'houseForm',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    },
    updateImage: (state, action) => ({
      ...state,
      icon: action.payload,
    }),
    clearForm: () => initialState,
  },
});

export const { updateField, updateImage, clearForm } = houseFormSlice.actions;

export default houseFormSlice.reducer;
