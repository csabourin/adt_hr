export const state = () => ({
  authoritiesHeadDeputy: JSON.parse(window.localStorage.getItem("authoritiesHeadDeputy")) || false,
  authoritiesPSC: JSON.parse(window.localStorage.getItem("authoritiesPSC")) || false,
  psOrganizations: JSON.parse(window.localStorage.getItem("psOrganizations")) || false,
  ourRoles: JSON.parse(window.localStorage.getItem("newBudget")) || false,
})

export const mutations = {
  setOpenFile(state, name) {
    switch(name){
      case "authoritiesHeadDeputy":
        state.threeSixty = true;
        window.localStorage.setItem("authoritiesHeadDeputy", true);
        break;
      case "authoritiesPSC":
        state.WorkPlanTemplate = true;
        window.localStorage.setItem("authoritiesPSC", true);
        break;
      case "psOrganizations":
        state.buildWPProcessMap = true;
        window.localStorage.setItem("psOrganizations", true);
        break;
      case "ourRoles":
        state.newBudget = true;
        window.localStorage.setItem("ourRoles", true);
        break;
    }
  },
}