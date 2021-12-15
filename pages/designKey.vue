<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessP.svg" alt="" role="presentation" height="275"></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Human Resources Delegation</h3>
            <ul>
              <li>Deputy Heads receive certain HR-related authorities primarily from the <i>Financial Administration Act</i> and the <i>Public Service Employment Act</i>.</li>
              <li>An individual may exercise delegated authorities once they:  
                <ul>
                  <li>occupy the position to which authorities have been associated,</li>
                  <li>have completed the necessary training, and</li>
                  <li>received their delegation from the deputy head.</li>
                </ul>
              </li>
              <li>Each organization has its own tools to delegate authorities appropriately through managerial levels.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Délégation en matière de ressources humaines</h3>
            <ul>
              <li>La <i>Loi sur la gestion des finances publiques</i> et la <i>Loi sur l’emploi dans la fonction publique</i> confèrent aux administrateurs généraux certains pouvoirs en matière de RH.</li>
              <li>Une personne peut exercer ses pouvoirs délégués une fois : </li>
              <ul>
                <li>qu’elle occupe le poste associé aux pouvoirs, </li>
                <li>qu’elle a suivi la formation nécessaire et  </li>
                <li>qu’elle a reçu la délégation de la part de l’administrateur général.  </li>
              </ul>
              <li>Chaque organisation a ses propres outils lui permettant de déléguer les pouvoirs au niveau de gestion approprié.</li>
            </ul>
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Human Resources Planning</h3>
            <ul>
              <li>Human Resources planning is the foundation for assessing and understanding the current and future needs of the public service as a whole. It addresses how an organization identifies and deploys its workforce to achieve its business objectives, its mandate, and high-level government priorities.</li>
              <li>HR planning can help identify optimal strategies and activities for a wide variety of important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages.</li>
              <li>Your responsibilities as a manager are to:</li>
              <ol>
                <li>Identify the qualifications required for individuals in key positions to contribute to the success of organizational priorities</li>
                <li>Communicate the HR plan with critical and emerging gaps including succession planning strategies</li>
                <li>Encourage developmental opportunities that address gaps</li>
                <li>Link succession planning strategies to program and financial planning and</li>
                <li>Evaluate the effectiveness of the plan and adapt it as required</li>
              </ol>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Planification des ressources humaines</h3>
            <ul>
              <li>La planification des ressources humaines est essentielle à l’évaluation et à la compréhension des besoins actuels et futurs de l’ensemble de la fonction publique. Elle traite de la manière dont une organisation désigne et déploie ses effectifs pour atteindre ses objectifs opérationnels, son mandat et les priorités gouvernementales de haut niveau.</li>
              <!--
                NOUVELLE VERION? (CSPS-TD)
                <li>Les budgets correspondent essentiellement aux plans de travail exprimés en termes financiers. Autrement dit, le budget représente le montant que vous prévoyez dépenser pour réaliser votre plan.</li>
              -->

              <li>La planification des RH permet aussi de trouver des stratégies et des activités optimales pour une grande variété d’importants volets de la gestion comme le recrutement, le maintien en poste, l’apprentissage, le perfectionnement, la mobilisation des employés, la gestion du talent, l’avancement, la relève, l’équité en matière d’emploi et les langues officielles.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Pour créer un budget, vous passez en revue le budget de l’année précédente afin de déterminer quels salaires, quelles dépenses de fonctionnement et d’entretien et, dans certains cas, de capital et des subventions et contributions vous devrez conserver, éliminer ou ajouter.</li>
              -->

              <li>Vos responsabilités en tant que gestionnaire consistent à : </li>
              <ol>
                <li>Déterminer les qualités requises chez les personnes occupant des postes clés pour contribuer au succès des priorités organisationnelles.</li>
                <li>Communiquer le plan des RH présentant des écarts importants ou nouveaux, y compris les stratégies de planification de la relève.</li>
                <li>Encourager des occasions de perfectionnement qui visent à corriger les écarts.</li>
                <li>Lier les stratégies de planification de la relève à la planification de programmes et à la planification financière.</li>
                <li>Évaluer l’efficacité du plan et l’adapter au besoin.</li>
              </ol>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Vous comparez le budget de l’année précédente au nouveau plan de travail en vous assurant que toutes les dépenses liées aux activités sont prises en compte. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des modifications tout au long de l’année à mesure que les activités évoluent.</li>
              -->
            </ul>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('threeSixty')" size=128 iconColor="Scan360Background" :fileSize="$i18n.locale == 'en' ? '118' : '124'" name="threeSixty" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPTemplate')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPLastYear')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '120' : '120'" name="WorkPlan_lastYear" />
                </b-col>
              </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav planSection" v-else>
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="designPart1" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('HRDelegation')" type="video" />
      <microlearning size="140" path="designPart2" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('HRPlanning')" type="video" />
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning size="140" path="exam1" time="20" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="10" />
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
import externalLink from "~/components/externalLink"
import keyMessagesFiles from "~/components/keyMessagesFiles"
export default {
  components: {
    hamburger,
    microlearning,
    download,
    HTMLJobaidLink,
    externalLink,
    keyMessagesFiles
  },
  computed: {
    pageComplete() {
      return this.$store.state.currentPlaying.kmPlan
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  mounted() {
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmPlan', 100), 30000) // sets viewed after 30 secs
  },
  beforeDestroy() {
    clearTimeout(seenKey) // cancel if leaving before 30 secs.
  }
}

</script>
<i18n>
  {
    "en":{
      "keyPlanQuote": " Great planning leads to great performance. ",
      "planSectionBar": "FOUNDATION"
    },
    "fr":{
      "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
      "planSectionBar": "FONDATION" 
    }
  }
</i18n>
<style type="text/css" scoped>
  
p.quote.plan{
  position: relative;
}
  
p.quote.plan:before {
  position: absolute;
  content: " ";
  background-color: #d1dfe1;
  width: 100%;
  height: 32px;
  left: 0;
  top: calc(50% - 9px);
  z-index: -1;
  margin: 0;
}

h3 {
  font-family: "Roboto Condensed";
  font-size: 1.5em;
}

.bigQuote {
  font-size: 36px;
  padding-bottom: 2em;
  font-family: "Roboto", Roboto;
  font-weight: 500;
  color: #608a93;
  /*background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);*/
  background-color: white;
  quotes: """""";
  padding: 1em;
  display: block;
  margin: auto;
  width: 90%;
  line-height: normal;
}
  
@media(max-width: 768px){
  .bigQuote {
    font-size: 30px;
  }
}

[lang=en] .bigQuote {
  position: relative;
  bottom: .75em;
}

.bigQuote:before,
.bigQuote:after {
  font-size: 72px;
  font-family: Times;
  font-weight: bold;
  color: #608a93;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.planSection {
  position: relative;
}

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
