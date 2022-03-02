export const state = () => ({
  // score: {},
  showCC: window.localStorage.getItem("showCC") || false,
  volume: window.localStorage.getItem("volume") || 100,
  homepage: parseInt(window.localStorage.getItem("homepage"),10) || 0,
  kmPlan: parseInt(window.localStorage.getItem("kmFoundation"),10) || 0,
  kmSpend: parseInt(window.localStorage.getItem("kmFunction"),10) || 0,
  kmReport: parseInt(window.localStorage.getItem("kmValues"),10) || 0,
  buildWP: parseInt(window.localStorage.getItem("foundationPart1"),10) || 0,
  createBudget: parseInt(window.localStorage.getItem("foundationPart2"),10) || 0,
  spendPart1: parseInt(window.localStorage.getItem("functionPart1"),10) || 0,
  spendPart2: parseInt(window.localStorage.getItem("functionPart2"),10) || 0,
  spendPart3: parseInt(window.localStorage.getItem("functionPart3"),10) || 0,
  reportPart1: parseInt(window.localStorage.getItem("valuesPart1"),10) || 0,
  reportPart2: parseInt(window.localStorage.getItem("valuesPart2"),10) || 0,
  valuesPart3: parseInt(window.localStorage.getItem("valuesPart3"),10) || 0,
  valuesPart4: parseInt(window.localStorage.getItem("valuesPart4"),10) || 0,
  buildWP_player: parseInt(window.localStorage.getItem("foundationPart1_player"),10) || 0,
  createBudget_player: parseInt(window.localStorage.getItem("foundationPart2_player"),10) || 0,
  spendPart1_player: parseInt(window.localStorage.getItem("functionPart1_player"),10) || 0,
  spendPart2_player: parseInt(window.localStorage.getItem("functionPart2_player"),10) || 0,
  spendPart3_player: parseInt(window.localStorage.getItem("functionPart3_player"),10) || 0,
  reportPart1_player: parseInt(window.localStorage.getItem("valuesPart1_player"),10) || 0,
  reportPart2_player: parseInt(window.localStorage.getItem("valuesPart2_player"),10) || 0,
  valuesPart3_player: parseInt(window.localStorage.getItem("valuesPart3_player"),10) || 0,
  valuesPart4_player: parseInt(window.localStorage.getItem("valuesPart4_player"),10) || 0,
  currentModule: window.localStorage.getItem("currentModule") || "",
  chosenScenario: window.localStorage.getItem("chosenScenario") || "takeCourse",
  menuShowing: window.localStorage.getItem("menuShowing") === "true" ? true : false || false
})

export const mutations = {
  setShowCC(state, showCC) {
    window.localStorage.setItem("showCC", showCC)
    state.showCC = showCC
  },
  setVolume(state, volume) {
    window.localStorage.setItem("volume", volume)
    state.volume = volume
  },
  setHomepage(state, playing) {
    window.localStorage.setItem("homepage", playing)
    state.homepage = playing
  },
  setKmPlan(state, playing) {
    window.localStorage.setItem("kmFoundation", playing)
    state.kmPlan = playing
  },
  setKmSpend(state, playing) {
    window.localStorage.setItem("kmFunction", playing)
    state.kmSpend = playing
  },
  setKmReport(state, playing) {
    window.localStorage.setItem("kmValues", playing)
    state.kmReport = playing
  },
  setBuildWP(state, playing) {
    window.localStorage.setItem("foundationPart1", playing)
    state.buildWP = playing
  },
  setCreateBudget(state, playing) {
    window.localStorage.setItem("foundationPart2", playing)
    state.createBudget = playing
  },
  setSpendPart1(state, playing) {
    window.localStorage.setItem("functionPart1", playing)
    state.spendPart1 = playing
  },
  setSpendPart2(state, playing) {
    window.localStorage.setItem("functionPart2", playing)
    state.spendPart2 = playing
  },
  setSpendPart3(state, playing) {
    window.localStorage.setItem("functionPart3", playing)
    state.spendPart3 = playing
  },
  setReportPart1(state, playing) {
    window.localStorage.setItem("valuesPart1", playing)
    state.reportPart1 = playing
  },
  setReportPart2(state, playing) {
    window.localStorage.setItem("valuesPart2", playing)
    state.reportPart2 = playing
  },
  setValuesPart3(state, playing) {
    window.localStorage.setItem("valuesPart3", playing)
    state.reportPart3 = playing
  },
  setValuesPart4(state, playing) {
    window.localStorage.setItem("valuesPart4", playing)
    state.reportPart4 = playing
  },
  setBuildWP_player(state, playing) {
    window.localStorage.setItem("foundationPart1_player", playing)
    state.buildWP_player = playing
  },
  setCreateBudget_player(state, playing) {
    window.localStorage.setItem("foundationPart2_player", playing)
    state.createBudget_player = playing
  },
  setSpendPart1_player(state, playing) {
    window.localStorage.setItem("functionPart1_player", playing)
    state.spendPart1_player = playing
  },
  setSpendPart2_player(state, playing) {
    window.localStorage.setItem("functionPart2_player", playing)
    state.spendPart2_player = playing
  },
  setSpendPart3_player(state, playing) {
    window.localStorage.setItem("functionPart3_player", playing)
    state.spendPart3_player = playing
  },
  setReportPart1_player(state, playing) {
    window.localStorage.setItem("valuesPart1_player", playing)
    state.reportPart1_player = playing
  },
  setReportPart2_player(state, playing) {
    window.localStorage.setItem("valuesPart2_player", playing)
    state.reportPart2_player = playing
  },
  setValuesPart3_player(state, playing) {
    window.localStorage.setItem("valuesPart3_player", playing)
    state.valuesPart3_player = playing
  },
  setValuesPart4_player(state, playing) {
    window.localStorage.setItem("valuesPart4_player", playing)
    state.valuesPart4_player = playing
  },
  setCurrentModule(state, module) {
    window.localStorage.setItem("currentModule", module)
    state.currentModule = module
  },
  setChosenScenario(state, scenario) {
    window.localStorage.setItem("chosenScenario", scenario)
    state.chosenScenario = scenario
  },
  setMenuShowing(state, menuShowing) {
    window.localStorage.setItem("menuShowing", menuShowing)
    state.menuShowing = menuShowing
  }
}