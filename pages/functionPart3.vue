<template>
  <div>
    <h1 class="pageTitle" v-html="$t('Staffing')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_mg1mled1/flavorId/0_0jrrhyl9/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0rk3xq64/flavorId/0_pj54ikc4/name/a.mp4"  chapters chapterFile="SpendPart3.vtt" ccFile="SpendPart3_captions.vtt" posterFile="spendPart3_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">
                        <h2>1. Continuous Monitoring</h2>
                        <p>As a manager, you are responsible for ensuring that all commitments and expenditures are monitored throughout the year and that they are accurately recorded in the financial system.</p>
                        <p>This monitoring is both at a transactional level and at a strategic level. Depending on the situation, it may involve one or more of the following actions:</p>
                        <ul>
                          <li>Closing commitments that are no longer required.</li>
                          <li>Amending contracts for scope, time, and amount.</li>
                          <li>Updating the salary forecast to reflect your current and planned staffing needs. </li>
                          <li>Planning for potential budget shortfalls or pressures.</li>
                          <li>Flagging budget surpluses to senior management.</li>
                          <li>And making expenditure adjustments.</li>
                        </ul>
                        <p>Let’s play with a few examples.</p>
                        <hr>
                        <h2>2. Data Comparison</h2>
                        <p>Taking care of your budget is really important because the decisions you make within your budget may influence your sector, your branch, or even your department.</p>
                        <p>At the end of the fiscal year, you will need to justify any deficits or surpluses. Depending on your department, you may need to be within a certain percentage of your forecasts.</p>
                        <p>On one hand, overspending can cause a deficit, which puts a lot of pressure on senior management to find additional sources of funds to compensate.</p>
                        <p>On the other hand, a surplus should be flagged as early as possible so that your unit doesn’t miss an opportunity to reallocate unused funds to another activity, or another unit.</p>
                        <p>Monthly reports help you track your financials. They are sometimes called “financial situation reports” or FSRs and are usually produced by the Finance team within your organization.</p>
                        <p>What is in the FSR needs to match what is actually going on in your unit. If it doesn’t, then you need to take appropriate action to resolve the discrepancy. </p>
                        <p>In the next activity, you will have a chance to review and adjust your financial situation according to new information.</p>
                        <hr>
                        <h2>3. Year-End Procedures</h2>
                        <p>Since most budgets are allocated by Parliament on an annual basis and must be used within the fiscal year, goods and services must be received on or before March 31.</p>
                        <p>However, you will most likely have a number of outstanding expenditures that you will not be able to pay before the end of the fiscal year for goods that are in your possession. To help with that, the Finance unit will establish Payables at Year-End or Receivables at Year-End in the financial system after receiving your list of outstanding payables.</p>
                        <p>A P-A-Y-E is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received.</p>
                        <p>An R-A-Y-E is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</p>
                        <p>Usually, again depending on the practices within your department—Finance will send out year-end instructions about how to establish a P-A-Y-E or an  R-A-Y-E. These instructions will also include specific requirements with respect to the minimum dollar amount and the timeline. </p>
                        <p>Contracts can be a bit tricky when we are close to the end of the fiscal year. Here are a couple of things to keep in mind:</p>
                        <ol>
                          <li>Pay attention to the deadlines set by Procurement. You may not be able to create a purchase order as you approach year-end. </li>
                          <li>Follow up with suppliers to make sure that the goods or services will be delivered before year-end. If it’s not possible before March 31, the expenditures will have to be paid using new year funding. Talk to Procurement about possible steps. </li>
                        </ol>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>So now that you know how to initiate expenditures, authorize commitments, exercise financial authority and monitor and control finances, let’s see what you remember by taking this short quiz.</p>
                        <hr>
                        <h2>5. Section Completed</h2>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Suivi continu </h2>
                        <p>En tant que gestionnaire, vous avez la responsabilité de veiller à ce que les engagements et les dépenses soient suivis tout au long de l'année et qu’ils soient enregistrés avec exactitude dans le système financier.</p>
                        <p>Ce suivi se fait à la fois au niveau transactionnel et au niveau stratégique. Selon la situation, cela se traduit par l’une ou l’autre des actions suivantes :</p>
                        <ul>
                          <li>annuler les engagements qui ne sont plus nécessaires; </li>
                          <li>modifier les contrats en fonction de leur portée, de leur durée et des montants qui leur sont alloués;</li>
                          <li>mettre à jour les prévisions salariales pour tenir compte de vos besoins actuels et futurs en matière de dotation; </li>
                          <li>Planifier pour les insuffisances ou les pressions budgétaires;</li>
                          <li>signaler les excédents budgétaires à la haute direction;</li>
                          <li>et apporter des ajustements aux dépenses.</li>
                        </ul>
                        <p>Amusons-nous maintenant avec quelques exemples.</p>
                        <hr>
                        <h2>2. Comparaison des données</h2>
                        <p>Il est essentiel de porter une attention particulière et soutenue à votre budget parce que les décisions que vous prenez peuvent avoir une incidence sur votre secteur, votre direction générale, ou même votre ministère. </p>
                        <p>À la fin de l’exercice financier, vous devez justifier tout déficit ou surplus. Selon le ministère pour lequel vous travaillez, vous pourriez devoir demeurer à l’intérieur d’une marge d’un certain pourcentage de vos prévisions.</p>
                        <p>D’une part, le fait de dépasser votre budget pourrait causer un déficit, ce qui met beaucoup de pression sur la haute direction pour trouver d'autres sources de financement en compensation.</p>
                        <p>D’autre part, un surplus devrait être signalé le plus tôt possible sans quoi on pourrait manquer l’occasion de réaffecter les fonds inutilisés à une autre activité ou à une autre unité.</p>
                        <p>Les rapports mensuels vous aident à suivre vos dépenses. On les appelle parfois « Rapports sur la situation financière » - ou RSF - et sont habituellement produits par l’unité des Finances de votre organisation. </p>
                        <p>Ce qui se trouve dans votre RSF doit refléter ce qui se passe dans votre unité. Si ce n’est pas le cas, vous devez faire un suivi afin de résoudre cet écart.</p>
                        <p>Dans l’activité suivante, vous aurez l’occasion de réviser et d’ajuster vos données financières selon les nouvelles informations. </p>
                        <hr>
                        <h2>3. Procédures de fin d’année</h2>
                        <p>Étant donné que la plupart des budgets sont établis par le Parlement chaque année et qu’ils doivent être utilisés au cours de l'exercice financier, les biens et services doivent être reçus au plus tard le 31 mars.</p>
                        <p>Il est toutefois fort probable que vous ne soyez pas en mesure de payer le reste de vos dépenses avant la fin de l'exercice financier pour les biens qui sont en votre possession. C'est pourquoi l’unité des Finances établira des créditeurs à la fin de l'exercice (CAFE) ou des débiteurs à la fin de l'exercice (DAFE) après avoir reçu votre liste de payables non réglés.</p>
                        <p>Un CAFE est un montant dû pour des biens ou des services fournis dans l’exercice financier précédent, en se servant des fonds de l’exercice financier précédent, mais payés dans le nouvel exercice financier alors qu’on aura reçu la facture du fournisseur.</p>
                        <p>Un DAFE est un montant dû d’un autre ministère pour des biens ou des services fournis dans l’exercice financier précédent pour lesquels le paiement sera fait dans le nouvel exercice financier. </p>
                        <p>D’habitude, encore une fois selon les pratiques courantes dans votre ministère, vous recevrez des instructions de fin d'année pour l’établissement des CAFE et des DAFE. Ces instructions incluront aussi les critères quant au montant minimal exigé et à l'échéancier.</p>
                        <p>Lorsqu’on s’approche de la fin de l’exercice financier, les choses peuvent se compliquer un peu en ce qui a trait aux contrats. Voici deux choses à tenir à l’esprit.</p>
                        <ol>
                          <li>Portez attention aux délais fixés par le service d’approvisionnement. Il se peut que vous ne puissiez pas créer de commande d'achat en fin d'année.</li>
                          <li>Faites un suivi auprès des fournisseurs pour vous assurer que les biens ou services seront livrés avant la fin de l'année. Si ce n'est pas possible avant le 31 mars, les dépenses devront être payées en utilisant les fonds de la nouvelle année. Discutez des étapes possibles avec Approvisionnement.</li>
                        </ol>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>Maintenant que vous savez comment engager et autoriser des dépenses, exercer des pouvoirs financiers, et surveiller et contrôler les finances, voyons ce dont vous vous souvenez en répondant à ce petit quiz!</p>
                        <hr>
                        <h2>5. Section complétée</h2>
                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32"> {{$t('IntroductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <functionLinks />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingNeeds" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('StaffingNeedsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <staffingNeeds />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingObligations" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32"> {{$t('StaffingObligationsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Watch this video, which provides an overview of hiring decisions in the public service</p>
          <p><a href="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_a99j37rq/flavorId/0_43vicyi5/name/a.mp4" target="_blank">Who Makes Hiring Decisions in the Public Service?</a></p>
          <p>Job aids will come later In addition, the People Management Legislation and Policy Landscape document {doc needs review and adapting} contains resources to help guide you. You can find this document in the toolbox. </p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Regardez la vidéo suivante, qui donne un aperçu des décisions d’embauche dans la fonction publique. </p>
          <p><a href="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u97ukui1/flavorId/0_0we3ci6t/name/a.mp4" target="_blank">Qui prend des décisions d’embauche dans la fonction publique? </a></p>
          <p>Vous aurez accès à des aide-mémoire plus tard. De plus, le document sur l’ensemble des lois et des politiques en matière de gestion des personnes {doc needs review and adapting} contient des ressources qui peuvent vous aider. Ce document se trouve dans la boîte à outils. </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InclusiveHiring" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('InclusiveHiringTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <inclusiveHiring />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingPosition" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32"> {{$t('StaffingPositionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>To ensure that you understand certain terms in this section, have a look at the following definitions:</p>
          <p><b>Bias</b></p>
          <p>A preconceived and often erroneous opinion, idea or feeling formed without knowledge, thought or reason, either favourable or unfavourable, which prevents objective consideration of a situation, person or issue.</p>
          <p><b>Unconscious bias</b></p>
          <p>Subtle, unintentional thoughts, ideas and beliefs.</p>
          <p><b>Discrimination</b></p>
          <p>The behavioural manifestation of a conscious or unconscious bias or prejudice</p>
          <p><b>Appointment based on merit</b></p>
          <p>An appointment is made on the basis of merit when the hiring manager performs an assessment process and is satisfied that the candidate meets each of the essential qualifications and other merit criteria for the work to be performed.</p>
          <p><b>Area of selection</b></p>
          <p>An area of selection establishes who is eligible for an appointment process. The area can be geographic, organizational, occupational or can identify persons belonging to any of the designated employment equity groups identified in the <a href="https://laws-lois.justice.gc.ca/eng/acts/E-5.401" target="_blank" alt="Link to the web page"><i>"Employment Equity Act</i></a>.</p>
          <p><b>Priority entitlement</b></p>
          <p>Persons entitled to a priority for appointment are appointed to vacant positions ahead of all others if they meet the essential qualifications.</p>
          <p><b>Duty to accommodate</b></p>
          <p>The <i>Canadian Human Rights Act</i> requires employers and service providers to accommodate people’s needs when those needs relate to one of the 11 grounds of discrimination.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Lisez les définitions suivantes pour vous assurer de bien comprendre les termes utilisés dans cette section : </p>
          <p><b>Préjugé </b></p>
          <p>Opinion, idée ou sentiment préconçu et souvent erroné, favorable ou défavorable, ne découlant d’aucune connaissance, réflexion ou raison, qui empêche l’examen objectif d’une situation, d’une personne ou d’une question. </p>
          <p><b>Préjugé inconscient </b></p>
          <p>Pensées, idées et croyances subtiles et involontaires. </p>
          <p><b>Discrimination </b></p>
          <p>Manifestation comportementale d’un préjugé conscient ou inconscient, ou d’un préjudice.</p>
          <p><b>Nomination fondée sur le mérite </b></p>
          <p>Une nomination est faite selon le mérite lorsqu’un gestionnaire d’embauche mène un processus d’évaluation et est convaincu que la personne choisie possède toutes les qualifications essentielles et satisfait aux autres critères de mérite établis pour le travail à accomplir.</p>
          <p><b>Zone de sélection </b></p>
          <p>La zone de sélection définit qui peut participer au processus de nomination. La zone peut être géographique, organisationnelle ou professionnelle, ou encore cibler les personnes appartenant à un des groupes visés par l’équité en matière d’emploi définis dans la <a href="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/" target="_blank" alt="Link to the web page"><i>Loi sur l’équité en matière d’emploi</i></a>.</p>
          <p><b>Droit de priorité </b></p>
          <p>Les personnes bénéficiant d’un droit de priorité sont nommées aux postes vacants avant tous les autres candidats si elles possèdent les qualifications essentielles. </p>
          <p><b>Obligation de prendre des mesures d’adaptation </b></p>
          <p>La <i>Loi canadienne sur les droits de la personne</i> oblige les employeurs et les fournisseurs de services à prendre des mesures d’adaptation pour répondre aux besoins des personnes, quand ces besoins sont liés à un des 11 motifs de discrimination. </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32"> {{$t('IRLTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p><b>To supplement the knowledge required to perform your staffing functions, be sure to complete this additional course:</b></p>
          <ul><li>Basics of Staffing in the Public Service (H200 Modules 1 and 2)</li></ul>
          <p>This course will provide a more in-depth look at staffing to help you perform your duties in this area.</p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="Quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <Quiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="functionPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('organizationClassification')" type="video" />
      <microlearning path="functionPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning youAreHere path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('Staffing')" type="video" />
      <microlearning path="functionKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import functionLinks from '~/components/spend_links'
import staffingNeeds from '~/components/slides/function/functionPart3StaffingNeeds'
import inclusiveHiring from '~/components/slides/function/functionPart3InclusiveHiring'
import Quiz from '~/components/slides/function/functionPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction","StaffingNeeds","StaffingObligations","InclusiveHiring","StaffingPosition","InRealLife","Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    functionLinks,
    staffingNeeds,
    inclusiveHiring,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart3_player',e)
    }
  }
}

</script>
<style scoped>
.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "IntroductionTitle": "Références : Liens externes",
  "StaffingNeedsTitle":"Activity:  Identifying Your Staffing Needs",
  "StaffingObligationsTitle": "References: Staffing Obligations",
  "InclusiveHiringTitle": "Activity: Inclusive Hiring",
  "StaffingPositionTitle": "Activity: Staffing your position",
  "IRLTitle": "In Real Life",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "FUNCTION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "IntroductionTitle": "Références : Liens externes",
  "StaffingNeedsTitle":"Activité : Détermination de vos besoins en matière de dotation ",
  "StaffingObligationsTitle": "Références : Obligations en matière de dotation ",
  "InclusiveHiringTitle": "Activité – Embauche inclusive",
  "StaffingPositionTitle": "Références : Dotation d’un poste",
  "DataComparisonTitle":"Activité : Comparaison des données",
  "ContinuousMonitoringTitle":"Activité : Suivi continu",
  "YearEndProceduresTitle":"Activité : Procédures de fin d’année",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>
