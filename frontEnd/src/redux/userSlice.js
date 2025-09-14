import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { userData: null },
    reducers: {
        setUserData: (state, action) => {
            // console.log(JSON.parse(state), "sliceData")
            state.userData = action.payload
        }
    }
})

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;