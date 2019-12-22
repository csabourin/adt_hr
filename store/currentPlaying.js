export const state = () => ({
  // score: {},
  buildWP: window.localStorage.getItem("buildWP") || 0,
  createBudget: window.localStorage.getItem("createBudget") || 0,
  spendPart1: window.localStorage.getItem("spendPart1") || 0,
  spendPart2: window.localStorage.getItem("spendPart2") || 0,
  spendPart3: window.localStorage.getItem("spendPart3") || 0,
  reportPart1: window.localStorage.getItem("reportPart1") || 0,
  reportPart2: window.localStorage.getItem("reportPart2") || 0
})

export const mutations = {
  setBuildWP(state, playing) {
    window.localStorage.setItem("buildWP", playing)
    state.buildWP = playing
  },
  setCreateBudget(state, playing) {
    window.localStorage.setItem("createBudget", playing)
    state.createBudget = playing
  },
  setSpendPart1(state, playing) {
    window.localStorage.setItem("spendPart1", playing)
    state.spendPart1 = playing
  },
  setSpendPart2(state, playing) {
    window.localStorage.setItem("spendPart2", playing)
    state.spendPart2 = playing
  },
  setSpendPart3(state, playing) {
    window.localStorage.setItem("spendPart3", playing)
    state.spendPart3 = playing
  },
  setReportPart1(state, playing) {
    window.localStorage.setItem("reportPart1", playing)
    state.reportPart1 = playing
  },
  setReportPart2(state, playing) {
    window.localStorage.setItem("reportPart2", playing)
    state.reportPart2 = playing
  }
}