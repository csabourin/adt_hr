<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <br>
    <p><img src="~/assets/KeyMessR.svg" alt="" role="presentation" width="250px"></p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg xl="12">
          <span v-if="$i18n.locale=='en'">
            <h3>Labour Relations</h3>
            <ul>
              <li>As a delegated manager, you are responsible for implementing the <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12602" target="_blank" alt="Link to the webpage of the Guidelines on Managerial or Confidential Exclusions">Guidelines on Managerial or Confidential Exclusions</a>.
              <ul>
                <li>Managers must become familiar with their employees’ collective agreements.</li>
                <li>Managers must acknowledge and send grievances received from employees to the proper authority within their organization to follow up.</li>
              </ul>
              </li>
            </ul>
            <h3>Values and Ethics</h3>
            <ul>
              <li>As a manager you are in a position of influence and authority. You must:   
                <ul>
                  <li>explain and guide your staff in acting ethically,</li>
                  <li>be a role model to your team, and</li>
                  <li>apply a values-and-ethics filter in executing your responsibilities.</li>
                </ul>
              </li>
              <li>Fostering a safe, healthy work environment, including protecting employees from harassment and violence, is a key requirement of employers.</li>
              <li>To resolve allegations of harassment and violence with the least disruption to the work environment, managers must follow the steps <a href="https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention/complaints/resolve.html" target="_blank" alt="Link to the webpage">solve a workplace harassment and violence complaint</a>.</li>
              <li>Acts of wrongdoing are defined by such actions as breaking laws or regulations, misusing public funds or assets or gross mismanagement.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Relations de travail</h3>
            <ul>
              <li>À titre de gestionnaire, il vous incombe de mettre en œuvre les <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12602" target="_blank" alt="Lien vers le site web">Lignes directrices sur les postes de direction ou de confiance exclus</a>.
              <ul>
                <li>Les gestionnaires doivent se familiariser avec les conventions collectives de leurs employés.</li>
                <li>Les gestionnaires doivent accuser réception des griefs reçus des employés et les transmettre à l'autorité compétente de leur organisation pour qu'elle y donne suite.</li>
              </ul>
              </li>
            </ul>
            <h3>Valeurs et éthique</h3>
            <ul>
              <li>En tant que gestionnaire, vous êtes en position d’influence et d’autorité. Vous devez :  
                <ul>
                  <li>expliquer à votre personnel comment agir de manière éthique et le guider en ce sens,</li>
                  <li>agir comme modèle pour votre équipe, et</li>
                  <li>appliquer un filtre de valeurs et d’éthique lorsque vous vous acquittez de vos responsabilités.</li>
                </ul>
              </li>
              <li>Les employeurs doivent favoriser un milieu de travail sain et sécuritaire et protéger les employés contre le harcèlement et la violence.</li>
              <li>Pour résoudre des allégations de harcèlement et de violence avec le moins de perturbations possible pour le milieu de travail, les gestionnaires doivent suivre les étapes visant à <a href="https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence/plaintes/regler.html" target="_blank" alt="Lien vers le site web">régler une plainte de harcèlement ou de violence en milieu de travail</a>.</li>
              <li>Les actes répréhensibles sont définis par des actions telles que la violation de lois ou de règlements, l'utilisation abusive de fonds ou de biens publics ou des cas graves de mauvaise gestion.</li>
            </ul>
          </span>
        <span v-if="$i18n.locale=='en'">
            <h3>Official Languages</h3>
            <ul>
              <li>Managers must ensure that communications and services in their offices are actively offered in English and French, and that communications with and services to the public from a designated office are in both official languages or in the preferred language of the recipient, if known.</li>
              <li>Managers must ensure that the positions they manage reflect the level of language proficiency required to perform the duties and tasks of the positions.</li>
              <li>In bilingual regions, managers and supervisors must 
                <ul>
                  <li>provide employees with regularly and widely used work instruments and electronic systems in both official languages</li>
                  <li>supervise employees in the official language of the employee's choice when they occupy bilingual or either/or positions, and</li>
                  <li>supervise employees in the language of the position when they occupy unilingual positions.</li>
                </ul>
              </li>
            </ul>
            <h3>Political Activities</h3>
            <ul>
              <li>Public service employees can engage in political activities if those activities do not impair or seem to impair, their ability to perform their public service duties in a politically impartial manner.</li>
              <li>Political activities can be divided into two categories: candidacy and non-candidacy.</li>
              <li>Any public servant wishing to be a candidate in an election at the municipal, provincial, territorial, or federal level must first request permission from the Public Service Commission.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <h3>Langues officielles</h3>
            <ul>
              <li>Les gestionnaires doivent s’assurer que les communications et les services sont offerts en anglais et en français dans leurs bureaux, et que les communications avec le public et la prestation des services au public à partir d'un bureau désigné le sont dans les deux langues officielles ou dans la langue préférée du bénéficiaire, si celle-ci est connue.</li>
              <li>Les gestionnaires doivent s'assurer que les postes qui relèvent de leur gestion correspondent au niveau de compétence linguistique requis pour accomplir les fonctions et les tâches de ces postes.</li>
              <li>Dans les régions bilingues, les gestionnaires et les superviseurs doivent
                <ul>
                  <li>mettre à la disposition des employés des instruments de travail et des systèmes électroniques d'usage courant et généralisé dans les deux langues officielles;</li>
                  <li>superviser les employés dans la langue officielle de leur choix quand ceux-ci occupent des postes bilingues ou réversibles; et</li>
                  <li>superviser les employés dans la langue officielle du poste quand ceux-ci occupent des postes unilingues.</li>
                </ul>
              </li>
            </ul>
            <h3>Activités politiques</h3>
            <ul>
              <li>Les fonctionnaires peuvent se livrer à des activités politiques, sauf si celles-ci portent ou semblent porter atteinte à leur capacité d’exercer leurs fonctions de façon politiquement impartiale.</li>
              <li>Les activités politiques sont divisées en deux catégories : activités liées à une candidature et activités non liées à une candidature.</li>
              <li>Tout fonctionnaire désireux d’être choisi comme candidat à une élection municipale, provinciale, territoriale ou fédérale doit d’abord demander la permission de la Commission de la fonction publique.</li>
            </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('ourRoles')" size=128 iconColor="reportBackground" :fileSize="$i18n.locale == 'en' ? '107' : '111'" name="ourRoles" />
                </b-col>
             </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
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
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav reportSection" v-else>
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="valuesPart1" imagePath="R-Conduct.svg" size="100" time="20" :text="$t('LabourRelations')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="ValuesPart2.svg" size="100" time="30" :text="$t('ValuesEthics')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.valuesPart3_player" path="valuesPart3" imagePath="ValuesPart3.svg" size="100" time="30" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.valuesPart4_player" path="valuesPart4" imagePath="ValuesPart4.svg" size="100" time="10" :text="$t('PoliticalActivities')" type="video" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.kmReport" path="valuesKey" time="5" size="100" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="100" time="25" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="Exam" questionNum="10" />
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
  mounted(){
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmReport',100),30000)
  },
  beforeDestroy(){
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": " Reports should tell the public the story of our performance. ",
  "reportSectionBar": "VALUES"
  },
  "fr":
  {
  "keyPlanQuote": " Les rapports devraient faire part de notre performance au public.",
  "reportSectionBar": "VALEURS"
  }
  }</i18n>
<style type="text/css" scoped>

p.quote.report{
  position: relative;
}
  
p.quote.report:before {
  position: absolute;
  content: " ";
  background-color: #e5dddc;
  width: 100%;
  height: 32px;
  left: 0;
  top: calc(50% - 9px);
  z-index: -1;
  margin: 0;
}

@media(max-width: 768px){
  .bigQuote {
    font-size: 30px;
  }
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
  color: #865f56;
  /*background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);*/
  background-color: white;
  quotes: """""";
  padding: 1em;
  display: block;
  margin: auto;
  width: 90%;
  line-height: normal;
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
  color: #865f56;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.reportSection {
  position: relative;
}

.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
