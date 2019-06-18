
import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
  } from './constants';

  // const requestRobots = () => dispatch => {
  //   dispatch({ type: REQUEST_ROBOTS_PENDING });
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
  //     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
  // }

  function* requestRobots(action){
    try{
        yield put(REQUEST_ROBOTS_PENDING);
        let data = yield call([axios, axios.get], 'https://jsonplaceholder.typicode.com/users')
        // console.log(data);
        data = data.json();
        yield put({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    }
    catch (e) {
        yield put({ type: REQUEST_ROBOTS_FAILED, message: e.message });
     }
  }

  export function* setSearchField() {
      yield takeEvery(CHANGE_SEARCH_FIELD, requestRobots);
  }

  export function* rootSaga(){
      yield all([
        setSearchField()
      ]);
  }