import {
  SHOW_GALLERY,
  HIDE_GALLERY,
  RECEIVE_GALLERY_STREETS,
  DELETE_GALLERY_STREET,
  SET_GALLERY_STATE } from '../actions'

export function showGallery () {
  return { type: SHOW_GALLERY }
}

export function hideGallery () {
  return { type: HIDE_GALLERY }
}

export function receiveGalleryStreets (streets) {
  return {
    type: RECEIVE_GALLERY_STREETS,
    streets
  }
}

export function deleteGalleryStreet (streetId) {
  return {
    type: DELETE_GALLERY_STREET,
    id: streetId
  }
}

export function setGalleryState (state) {
  return {
    ...state,
    type: SET_GALLERY_STATE
  }
}

export function setGalleryMode (mode, state) {
  return {
    ...state,
    mode,
    type: SET_GALLERY_STATE
  }
}
