import React
// ,{useEffect}
    from 'react';
import './App.css';
import PostContainer from "./components/PostContainer";
// import {useAppDispatch, useAppSelector} from "./hooks/redux";
// import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    // const dispatch = useAppDispatch()
    // const {users, isLoading, error} = useAppSelector(state => state.UserSliceReducer)
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])
    return (
        <div className="App">
            <PostContainer/>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{users.length ? JSON.stringify(users, null, 2) : null}*/}
        </div>
    );
}

export default App;
