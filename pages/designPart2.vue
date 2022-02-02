<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('HRPlanning')}}
    </h1>
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_7rzdl6ue/flavorId/0_7f9738ew/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_yrc8eron/flavorId/0_d74rzqlx/name/a.mp4" chapters chapterFile="BudgetChapters.vtt" ccFile="FoundationPart2_captions.vtt" posterFile="m2.png" :restartAt="thatPoint" toResume="setCreateBudget" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- Used to jump to activities<button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">
                        <h2>Introduction</h2>
                        <p>Human Resources planning is the foundation for assessing and understanding the current and future needs of government departments, agencies, and the public service as a whole.</p> 
                        <p>Moreover, HR planning is a key decision-support tool which allows HR staff to act expeditiously and in accordance with federal public service values.</p>
                        <p>In this section you will learn to: </p>
                        <ul>
                          <li>Recall the functions of HR planning and</li>
                          <li>Recognize your responsibilities as a manager.</li>
                        </ul>
                        <p>This section should take you approximately 10 minutes to complete.</p>
                        <hr>
                        <h2>Overview of HR Planning</h2>
                        <p>Human resources planning is the process of identifying current and future human resources needs. When we talk about HR planning, we are talking about how an organization identifies and deploys its workforce to achieve its business objectives, its mandate, and high-level government priorities.</p>
                        <p>HR planning ensures that we have a well-structured workplace, and can secure the right people, build a supportive work environment, and develop the capacity to ensure organizational success.</p>
                        <p>HR planning can help identify optimal strategies and activities for a wide variety of important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages.</p>
                        <p>In short, HR planning is essential to the continuous improvement of your organization’s capacity to deliver services to Canadians.</p>
                        <p>Remember to consult an HR advisor when considering the best ways to meet your particular business needs.</p>
                        <p>There are eight functions of effective HR planning. Done well:</p>
                        <p>It integrates your organization’s business objectives and reflects business needs and strong people management practices.</p>
                        <p>It is based on factual and timely information about current and future needs (for example, environmental scans and employee feedback), and identifies challenges and key risks to delivering on priorities, and outlines options for mitigation.</p>
                        <p>Effective HR planning should be openly communicated and foster open and transparent dialogue that is inclusive and respectful of diverse perspectives.</p>
                        <p>Lastly, it establishes processes for measuring performance and progress toward the objectives and ties into annual reporting, succession planning and management.</p>
                        <p>You might be wondering about your specific role in this context. With regard to HR planning, you have five main responsibilities.</p>
                        <ol>
                          <li>Identifying the qualifications required for individuals in key positions to contribute to the success of organizational priorities</li>
                          <li>Communicating the HR plan with critical and emerging gaps including succession planning strategies</li>
                          <li>Encouraging developmental opportunities that address gaps</li>
                          <li>Linking succession planning strategies to program and financial planning and</li>
                          <li>Evaluating the effectiveness of the plan and adapting it as required</li>
                        </ol>
                        <hr>

                        <h2>In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things.</p>
                        <p>HR planning helps organizations to fulfill their mandate. In some organizations, an HR plan and the organization’s business goals will be combined to produce an Integrated HR and business plan.</p>
                        <p>Take a time out from the course to locate your organization’s HR plan to better understand how it meets your business goals and the larger mandate.</p>
                        
                        <hr>

                        <h2>Quiz</h2>
                        <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>Introduction</h2>
                        <p>La planification des ressources humaines est [à] la base de l’évaluation et de la compréhension des besoins actuels et futurs des ministères, des organismes et de l’ensemble de la fonction publique.</p> 
                        <p>De plus, la planification des RH est un outil décisionnel clé qui permet au personnel des RH d’agir rapidement et dans le respect des valeurs de la fonction publique fédérale.</p>
                        <p>Dans cette section, vous : </p>
                        <ul>
                          <li>passerez en revue les fonctions de la planification des RH;</li>
                          <li>prendrez conscience de vos responsabilités en tant que gestionnaire.</li>
                        </ul>
                        <p>Il vous faudra environ 10 minutes pour parcourir cette section.</p>
                        <hr>
                        <h2>Aperçu de la planification des RH</h2>
                        <p>Le processus de planification des RH vise à déterminer les besoins actuels et futurs en RH. Cette planification correspond à la manière dont une organisation sélectionne et utilise ses ressources humaines pour réaliser ses objectifs opérationnels, remplir son mandat et répondre aux grandes priorités du gouvernement.</p>
                        <p>La planification des RH nous permet d’avoir un lieu de travail bien structuré, de trouver les bonnes personnes, de bâtir un environnement de travail positif et de garantir le succès de l’organisation.</p>
                        <p>La planification des RH permet aussi de trouver des stratégies et des activités optimales pour une grande variété de volets et de la gestion jugés importants, comme le recrutement, le maintien en poste, l’apprentissage, le perfectionnement, la mobilisation des employés, la gestion des talents, l’avancement, la relève, l’équité en matière d’emploi et les langues officielles.</p>
                        <p>Pour résumer, la planification des RH est nécessaire pour permettre à votre organisation d’améliorer de façon continue sa capacité à offrir des services aux Canadiens.</p>
                        <p>Consultez un conseiller en RH pour trouver les meilleures façons de répondre à vos besoins opérationnels.</p>
                        <p>La planification efficace des RH est assortie de huit fonctions.</p>
                        <p>Elle intègre les objectifs opérationnels de l’organisation et elle tient compte des besoins opérationnels ainsi que des pratiques solides de gestion du personnel.</p>
                        <p>Elle repose sur de l’information factuelle fournie en temps opportun concernant les besoins actuels et futurs (analyse de l’environnement et rétroaction des employés, par exemple) et elle permet de cerner les obstacles de même que les risques principaux liés à la concrétisation des priorités et de trouver un moyen de les atténuer.</p>
                        <p>La planification efficace des RH doit également s’appuyer sur une communication ouverte et encourager un dialogue honnête et transparent qui favorise l’inclusion et le respect des divers points de vue.</p>
                        <p>Enfin, elle établit les processus de mesure du rendement et des progrès en lien avec les objectifs et s’intègre à la production de rapports annuels ainsi qu’à la planification et à la gestion de la relève.</p>
                        <p>Vous vous demandez peut-être quel est plus précisément votre rôle dans ce contexte. Vous avez cinq responsabilités principales liées à la planification des RH.</p>
                        <ol>
                          <li>Déterminer les qualifications requises chez les personnes occupant des postes clés pour contribuer au succès des priorités organisationnelles.</li>
                          <li>Communiquer le plan des RH (qui peut comporter des écarts importants ou nouveaux), y compris les stratégies de planification de la relève.</li>
                          <li>Encourager des occasions de perfectionnement qui visent à corriger les écarts.</li>
                          <li>Lier les stratégies de planification de la relève à la planification de programmes et à la planification financière.</li>
                          <li>Évaluer l’efficacité du plan et l’adapter au besoin.</li>
                        </ol>
                        <hr>

                        <h2>Dans la vraie vie</h2>
                        <p>Appliquez maintenant ce que vous avez appris – dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses.</p>
                        <p>La planification des RH permet aux organisations de réaliser leur mandat. Dans certaines organisations, un plan des RH sera combiné aux buts opérationnels de l’organisation et produira ainsi un plan intégré des RH et des activités.</p>
                        <p>Prenez du temps pour consulter le plan des RH de votre organisation pour mieux comprendre comment il aide celle-ci à réaliser ses buts opérationnels et son mandat général.</p>
                        
                        <hr>

                        <h2>Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>

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
        <continue-popup id="purpose"></continue-popup>
        <b-modal no-stacking id="Introduction" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('activityLinks')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <div v-if="$i18n.locale=='fr'">
              <p>Jetez un coup d’œil à ces ressources, qui guident les activités des RH dans de nombreux domaines.</p>
              <ul>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32621&section=html" target="_blank" alt="Politique sur la gestion des personnes">Politique sur la gestion des personnes</a></li>
                <li><a href="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone/2020/discours-du-trone.html" target="_blank" alt="Discours du Trône">Discours du Trône</a></li>
                <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank" alt="Plans ministériels">Plans ministériels</a></li>
                <li><a href="https://www.canada.ca/fr/conseil-prive/organisation/rapports-publications.html" target="_blank" alt="Rapport annuel du greffier du Conseil privé">Rapport annuel du greffier du Conseil privé</a></li>
              </ul>
            </div>
            <div v-if="$i18n.locale=='en'">
              <p>Take a look at these resources, which guide HR activities in a variety of areas.</p>
              <ul>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32621&section=html" target="_blank" alt="Policy on People Management">Policy on People Management</a></li>
                <li><a href="https://www.canada.ca/en/privy-council/campaigns/speech-throne/2020/speech-from-the-throne.html" target="_blank" alt="Speech from the Throne">Speech from the Throne</a></li>
                <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank" alt="Departmental Plans">Departmental Plans</a></li>
                <li><a href="https://www.canada.ca/en/privy-council/corporate/reports-publications.html" target="_blank" alt="Annual report from the Clerk of the Privy Council">Annual report from the Clerk of the Privy Council</a></li>
              </ul>
            </div>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="overviewHRPlanning" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('overviewTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <planningOverview />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
          <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('InRealLife')}}
            </h3>
            <button type="button" aria-label="Close" class="close" @click="close()">×</button>
          </template>
          <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-html="$t('IRLText')"></p>
            </b-col>
          </b-row>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <part2Quiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="designPart1" imagePath="R-Contribute.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('HRDelegation')" type="video" />
      <microlearning youAreHere size="140" path="designPart2" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="InitiateAuthSpending.svg" :text="$t('HRPlanning')" type="video" />
      <microlearning path="designKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning size="140" path="exam1" time="20" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="10" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import planningOverview from '~/components/slides/design/designPart2Overview'
import part2Quiz from '~/components/slides/design/designPart2Quiz'
import continuePopup from '~/components/continuePopup'
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  data() {
    return {
      modalArray: ["Introduction", "overviewHRPlanning", "reallife", "quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    planningOverview,
    part2Quiz,
    continuePopup,
    download,
    HTMLJobaidLink
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setCreateBudget_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.createBudget
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  }
}
</script>
<style scoped>

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.planSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "activityLinks":"References: External Links",
  "overviewTitle": "Activity: Overview of HR Planning",
  "submitBudgetTitle":"Activity: Submit and Adjust your Budget",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "AnalyzeBudgetKT":"Activity: Analyze a Budget - Key Terms",
  "financialCycle":"References: Financial Cycle of the Government of Canada",
  "budgetAnalyzeActivity":"Activity: Analyze Available Information",
  "forecastBudgetTitle":"Activity: Forecast Your Budget Requirements",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><p><b>To supplement the knowledge required to perform HR planning, be sure to complete this additional course:</b></p><ul><li>The Introduction to Integrated Business and Human Resources Planning.</li></ul><p>This course will provide a more in-depth look at HR planning to help you perform your duties in this area.</p>",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "planSectionBar": "FOUNDATION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Références : Liens externes",
  "overviewTitle": "Activité : Aperçu de la planification des RH ",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "AnalyzeBudgetKT":"Activité : Analyser un budget - Termes clés",
  "financialCycle":"Référence : Le cycle financier",
  "budgetAnalyzeActivity":"Activité : Analyser les budgets précédents et en cours",
  "submitBudgetTitle":"Activité : Soumettre et ajuster votre budget ",
  "forecastBudgetTitle":"Activité : Prévoyez vos besoins budgétaires",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris – dans la vraie vie!</p><p><b>Pour approfondir les connaissances nécessaires à la planification des RH, suivez ce cours supplémentaire : </b></p><ul><li>Introduction à la planification intégrée des activités et des ressources humaines.</li></ul><p>Ce cours, qui présente la planification des RH plus en détail, vous aidera à accomplir vos fonctions dans ce domaine.</p>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "planSectionBar": "BASE"
  }
  }
</i18n>