export function getFormStatus(state) {
  return state.statusData.status.data;
}

export function getFormEdit(state) {
  return state.statusData.edit.data;
}

export function getHasChanged(state) {
  return state.statusData.edit.changed;
}