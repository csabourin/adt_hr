export const state = () => ({
  // score: {}
  score: JSON.parse(window.localStorage.getItem("HRExam1Score")) || {},
  tabIndex: 0,
  AlertIsDismissed: JSON.parse(window.localStorage.getItem("HRExam1NoteDismissed")) || false,
  quizLocked: JSON.parse(window.localStorage.getItem("HRExam1quizLocked")) || false,
  allDone: window.localStorage.getItem("HRExam1AllDone") || undefined
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
    window.localStorage.setItem("HRExam1AllDone", btoa(score))
  },
  lockQuiz(state) {
    state.quizLocked = true
    window.localStorage.setItem("HRExam1quizLocked", true)
  },
  resetQuiz(state) {
    state.quizLocked = false
    window.localStorage.setItem("HRExam1quizLocked", false)
    state.score = {}
    state.tabIndex = 0
    window.localStorage.setItem("HRExam1AllDone", '')
    state.allDone = undefined
    window.localStorage.setItem("HRExam1Score", '{}')
  },
  setScore(state, qId) {
    let thatThing = new Object
    thatThing[qId[0]] = [qId[1], qId[2]]
    state.score = Object.assign({}, state.score, thatThing)
    let toStore = JSON.stringify(Object.assign({}, state.score, thatThing))
    window.localStorage.setItem("HRExam1Score", toStore)
  },
  setCurrentTab(state, currentTab) {
    state.tabIndex = currentTab
  },
  dismissAlert(state) {
    state.AlertIsDismissed = true
    window.localStorage.setItem("HRExam1NoteDismissed", true)
  },
  undismissAlert(state) {
    state.AlertIsDismissed = false
    window.localStorage.setItem("HRExam1NoteDismissed", false)
  }
}