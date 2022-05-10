<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessS.svg" alt="" role="presentation" width="250px"></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Organization and Classification</h3>
            <ul>
              <li>Organization and classification decisions go hand in hand.  Based on the duties of a position, the group and level is determined within the organization's structure. Rates of pay are then matched to each occupational group and level, and employees are paid based on the group and level of the position they occupy.</li>
              <li>Managers are responsible for ensuring their organizational structure is in line with the organization’s mandate and business objectives and determining the work assigned to a position and described in the job description.</li>
              <li>Most organizations have an HR delegation instrument that indicates to whom organization and classification authorities and responsibilities are sub-delegated.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Organisation et classification</h3>
              <ul>
                <li>Les décisions en matière d’organisation et de classification vont de pair. Selon les tâches d’un poste, le groupe et le niveau sont déterminés dans la structure de l’organisation. Les taux de rémunération correspondent ensuite à chaque groupe et niveau professionnel, et les employés sont rémunérés en fonction du groupe et du niveau du poste qu’ils occupent.</li>
                <li>Les gestionnaires doivent s’assurer que leur structure organisationnelle est conforme au mandat et aux objectifs opérationnels de l’organisation et déterminer le travail attribué à un poste décrit dans la description de travail.</li>
                <li>La plupart des organisations disposent d’un instrument de délégation des pouvoirs en matière de RH identifiant les employés auxquels sont subdélégués les pouvoirs et les responsabilités en matière d’organisation et de classification.</li>
              </ul>
          </span>
          <span v-if="$i18n.locale=='en'">
            <h3>Staffing</h3>
            <ul>
              <li>In determining your staffing needs, consider your business objectives, your organizational goals and the public service workforce goals.</li>
              <li>Before you initiate an appointment process, it’s important to be acquainted with the legislation, policies and guidelines that govern appointments.</li>
              <li>There are three lenses to apply when staffing a position:
                <ul>
                  <li>diversity, equity and inclusion</li>
                  <li>business objectives and the judicious management of resources; and</li>
                  <li>integrity and ethics</li>
                </ul>
              </li>
            </ul>
            <h3>EE Diversity, Inclusion and Human Rights</h3>
            <ul>
              <li>It is your responsibility as a manager to ensure an equal access to opportunities that is free of discrimination. It is also your responsibility to remove barriers that prevent or hinder full and equal participation in employment in the core public administration.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Dotation</h3>
              <ul>
                <li>Lorsque vous déterminez vos besoins en matière de dotation, prenez en considération vos objectifs opérationnels, les buts de votre organisation et les buts de l’effectif de la fonction publique.</li>
                <li>Avant de commencer un processus de nomination, il est important de connaître les lois, politiques et lignes directrices qui régissent les nominations.</li>
                <li>La dotation d’un poste doit être considérée selon trois optiques : 
                <ul>
                  <li>la diversité, l’équité et l’inclusion</li>
                  <li>les objectifs opérationnels et la gestion judicieuse des ressources; ainsi que</li>
                  <li>l’intégrité et l’éthique</li>
                </ul>
              </li>
              </ul>
              <h3>Diversité conforme à l’équité en matière d’emploi, inclusion et droits de la personne</h3>
              <ul>
                <li>En tant que gestionnaire, il est de votre responsabilité de garantir un accès aux possibilités égal et exempt de discrimination. Vous devez aussi éliminer les obstacles qui empêchent ou entravent la participation entière et égale à l’emploi dans l’administration publique centrale.</li>
              </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span></p> -->
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="functionKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="functionPart1" imagePath="FunctionPart1.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('organizationClassification')" type="video" />
      <microlearning path="functionPart2" imagePath="FunctionPart2.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="FunctionPart3.svg" :text="$t('Staffing')" type="video" />
       <microlearning time="5" youAreHere path="functionKey" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning path="exam2" size="140" time="25" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import microlearning from "~/components/microlearning"
import keyMessagesFiles from "~/components/keyMessagesFiles"
export default {
  components: {
    microlearning,
    download,
    HTMLJobaidLink,
    keyMessagesFiles
  },
  computed:{
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
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmSpend', 100), 30000)
  },
  beforeDestroy() {
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": "Accountability breeds response-ability.",
  "spendSectionBar": "FUNCTION"
  },
  "fr":
  {
  "keyPlanQuote": "La responsabilité engendre l’habileté.",
  "spendSectionBar": "FONCTIONS"
  }
  }</i18n>
<style type="text/css" scoped>

p.quote.spend{
  position: relative;
}
  
p.quote.spend:before {
  position: absolute;
  content: " ";
  background-color: #cac1ca;
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
  color: #7d677d;
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
  color: #7d677d;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}
footer {
  display:inline;
}
</style>
