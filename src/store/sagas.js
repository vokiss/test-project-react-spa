import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_COMMENTS_FETCH, GET_COMMENTS_SUCCESS, GET_POSTS_FETCH, GET_POSTS_SUCCESS, GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions'
import { createApi } from '../services/api'

const api = createApi()
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function postsFetch () {
  const { data } = await api.get('/posts')
  return data
}

async function commentsFetch () {
  const { data } = await api.get('/comments')
  return data
}

async function usersFetch () {
  const { data } = await api.get('/users')
  return data
}

function * workGetPostsFetch () {
  yield delay(1000)
  const posts = yield call(postsFetch)
  yield put({ type: GET_POSTS_SUCCESS, posts })
}

function * workGetCommentsFetch () {
  yield delay(1000)
  const comments = yield call(commentsFetch)
  yield put({ type: GET_COMMENTS_SUCCESS, comments })
}

function * workGetUsersFetch () {
  yield delay(1000)
  const users = yield call(usersFetch)
  yield put({ type: GET_USERS_SUCCESS, users })
}

function * mySaga () {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
  yield takeEvery(GET_COMMENTS_FETCH, workGetCommentsFetch)
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch)
}

export default mySaga;
