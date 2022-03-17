// import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
// import {userSlice} from "./UserSliceReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = async (dispatch:AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response =  await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }catch (err){
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(err.message))
//     }
// }
export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue("sorry ** :-( ** error ** -_-")
        }

    }
)

