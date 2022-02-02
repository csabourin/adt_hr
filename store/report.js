export const state = () => ({
  // score: {}
  score: JSON.parse(window.localStorage.getItem("HRExam3Score")) || {},
  tabIndex: 0,
  AlertIsDismissed: JSON.parse(window.localStorage.getItem("HRExam3NoteDismissed")) || false,
  quizLocked: JSON.parse(window.localStorage.getItem("HRExam3quizLocked")) || false,
  allDone: window.localStorage.getItem("HRExam3AllDone") || undefined
})

export const getters = {
  getScore: (state) => {
    try{
      atob(state.allDone)
    return atob(state.allDone)
  }
  catch(e){
    return undefined
  }

  }
}

export const mutations = {
  setComplete(state, score) {
    state.allDone = btoa(score)
    window.localStorage.setItem("HRExam3AllDone", btoa(score))
  },
  lockQuiz(state) {
    state.quizLocked = true
    window.localStorage.setItem("HRExam3quizLocked", true)
  },
  resetQuiz(state) {
    state.quizLocked = false
    window.localStorage.setItem("HRExam3quizLocked", false)
    state.score = {}
    state.tabIndex = 0
    window.localStorage.setItem("HRExam3AllDone", '')
    state.allDone = undefined
    window.localStorage.setItem("HRExam3Score", '{}')
  },
  setScore(state, qId) {
    let thatThing = new Object
    thatThing[qId[0]] = [qId[1], qId[2]]
    state.score = Object.assign({}, state.score, thatThing)
    let toStore = JSON.stringify(Object.assign({}, state.score, thatThing))
    window.localStorage.setItem("HRExam3Score", toStore)
  },
  setCurrentTab(state, currentTab) {
    state.tabIndex = currentTab
  },
  dismissAlert(state) {
    state.AlertIsDismissed = true
    window.localStorage.setItem("HRExam3NoteDismissed", true)
  },
  undismissAlert(state) {
    state.AlertIsDismissed = false
    window.localStorage.setItem("HRExam3NoteDismissed", false)
  }
}