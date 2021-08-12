<template>
  <div>
    <h2 class="pageTitle" v-html="$t('OfficialLanguages')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u5d1t3f4/flavorId/0_i0r0o0lc/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_rvohbyn6/flavorId/0_e3qt7rpb/name/a.mp4" chapters chapterFile="valuesPart3.vtt" ccFile="ReportPart2_captions.vtt" posterFile="reportPart2_poster.png" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <h2>1. External Government Reports</h2>
                        <p>The Government of Canada regularly publishes reports to keep Canadians informed on its spending and on the results it achieves using public funds.</p>
                        <p>As a manager, it’s unlikely that you will be required to write these reports yourself. However, the work you do may be included in these reports. For example, you may be asked to report on how well your programs achieved their intended results. As such, you must continuously track your performance and results and compare them with what was planned.</p>
                        <p>Let’s do a quick activity to get more familiar with the terminology!</p>
                        <hr>
                        <h2>2. Identify Results</h2>
                        <p>Fiscal year-end is when reporting closes the loop on work plans within the organization, and when we present, globally, the results we achieved in the Departmental Results Report. As the fiscal year is a cycle, last year’s results will inform planning for the next fiscal year.</p>
                        <p>You need to demonstrate how your performance compares with what you set out in your work plan, and explain any variances. In most departments, your Planning or Finance section will reach out to you to request this information.</p>
                        <p>Demonstrating your performance means showing whether you met the indicators as set out in the PIPs, the performance information profiles. These identify more concretely each program’s core responsibility and results to be achieved. Some departments review performance information profiles throughout the year to see if the targets are on track or at risk of not being achieved.</p>
                        <p>In the next activity, you will have the opportunity to practise reporting on whether your targets were met.</p>
                        <hr>
                        <h2>3. In Real Life</h2>
                        <p>Let’s take what you have learned into real life. Look up your organization’s performance information profiles and its external reports, such as the Departmental Results Report.</p>
                        <p>Your organization will have their own ways of doing financial situation reports, and reporting on spending and results. Talk to your Finance or Planning section and your director. Ask them:</p>
                        <ul>
                          <li>What do we call our financial situation reports, and what do they look like? Where can I find them?</li>
                          <li>How frequently do we prepare them?</li>
                          <li>Do we complete these reports in the financial system or in a spreadsheet?</li>
                          <li>What is my role? </li>
                          <li>And what information will I provide to feed into external reports?</li>
                        </ul>
                        <hr>
                        <h2>4. Section Completed</h2>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Rapports externes du gouvernement</h2>
                        <p>Le gouvernement du Canada publie régulièrement des rapports pour tenir les Canadiens au courant de ses dépenses et des résultats qu’il a obtenus grâce aux fonds publics. </p>
                        <p>En tant que gestionnaire, il est peu probable que vous ayez à rédiger ces rapports vous-même. Cependant, le travail que vous faites peut être inclus dans ces rapports. Par exemple, on vous demandera peut-être d'indiquer dans quelle mesure vos programmes ont atteint les résultats visés à l’origine. Pour ce faire, vous devez effectuer un suivi continu de votre rendement et de vos résultats par rapport à ce qui avait été planifié.</p>
                        <p>Voici une petite activité pour vous familiariser avec la terminologie nécessaire!</p>
                        <hr>
                        <h2>2. Démontrer les résultats</h2>
                        <p>La fin de l'exercice financier est le moment où la production de rapports ferme la boucle des plans de travail de l’organisation et permet de présenter, de manière globale, les résultats de l’année dans le Rapport sur les résultats ministériels. Comme l’exercice financier est un cycle, les résultats de l’an dernier permettront la planification de l’année qui vient.</p>
                        <p>Vous devrez faire état de votre rendement par rapport à ce qui avait été prévu dans votre plan de travail et justifier tout écart. Dans la plupart des ministères, la section de la Planification ou des Finances communiquera avec vous pour vous demander ces renseignements.</p>
                        <p>Démontrer votre rendement signifie démontrer si vous avez atteint les indicateurs établis dans le PIR -  les profils de l’information sur le rendement. Celles-ci déterminent de façon plus concrète la responsabilité fondamentale de chaque programme et les résultats à atteindre. Certains ministères examinent les profils de l'information sur le rendement tout au long de l'année pour voir si les chiffres cibles sont en bonne voie d’être atteints ou s’ils risquent de ne pas l’être</p>
                        <p>L’activité suivante vous permettra de vous exercer à rapporter si les objectifs ont été atteints.</p>
                        <hr>
                        <h2>3. Dans la vraie vie</h2>
                        <p>Appliquons ce que vous avez appris dans la vraie vie. Cherchez les profils de l'information sur le rendement de votre organisation et ses rapports externes, comme le Rapport sur les résultats ministériels.</p>
                        <p>Votre organisation aura sa propre façon de produire des rapports sur la situation financière et de rendre compte de ses dépenses et de ses résultats. Parlez-en à votre section des Finances ou de la Planification et à votre directeur. Demandez-leur :</p>
                        <ul>
                          <li>Comment s’appellent nos rapports sur la situation financière et à quoi ressemblent-ils? À quel endroit puis-je les trouver?</li>
                          <li>À quelle fréquence préparons-nous des rapports sur la situation financière?</li>
                          <li>Doit-on remplir ces rapports dans le système financier ou dans un tableur?</li>
                          <li>Quel est mon rôle?</li>
                          <li>Et quelles informations vais-je fournir pour alimenter les rapports externes?</li>
                        </ul>
                        <hr>
                        <h2>4. Section complétée</h2>                        
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
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('introductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Resources:</p>
          <p><b>Legislation</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/eng/const/page-1.html" target="_blank" alt="Link to the Constitution Act, 1867"><i>Constitution Act, 1867</i></a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/Const/page-12.html" target="_blank" alt="Link to the Constitution Act, 1982, Part 1: Canadian Charter of Rights and Freedoms"><i>Constitution Act, 1982</i>, Part 1: Canadian Charter of Rights and Freedoms</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/o-3.01/" target="_blank" alt="Link to the Official Languages Act web page"><i>Official Languages Act</i></a></li>
            <li><a href="https://laws.justice.gc.ca/eng/regulations/sor-92-48/index.html" target="_blank" alt="Link to the Official Languages (Communications with and Services to the Public) Regulations web page">Official Languages (Communications with and Services to the Public) Regulations</a></li>
          </ul>
          <p><b>Treasury Board policy instruments</b></p>
          <ul>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26163" target="_blank" alt="Link to the Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations web page">Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164" target="_blank" alt="Link to the Directive on Official Languages for Communications and Services web page">Directive on Official Languages for Communications and Services</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168" target="_blank" alt="Link to the Directive on Official Languages for People Management web page">Directive on Official Languages for People Management</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26160" target="_blank" alt="Link to the Policy on Official Languages web page">Policy on Official Languages</a></li>
          </ul>
          <p><b>Other Resources</b></p>
          <ul>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/assessment-official-languages-appointment-process.html" target="_blank" alt="Link to the Assessment of official languages in the appointment process web page">Assessment of official languages in the appointment process</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/burolis/search-recherche/search-recherche-eng.aspx" target="_blank" alt="Link to the Burolis database web page">Burolis database</a></li>
            <li><a href="https://www.clo-ocol.gc.ca/html/stu_etu_032011_p7_e.php" target="_blank" alt="Link to the Leadership Competencies Profile for Official Languages web page">Leadership Competencies Profile for Official Languages</a></li>
            <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/values-ethics/official-languages/list-bilingual-regions-canada-language-of-work-purposes.html" target="_blank" alt="Link to the •	List of Bilingual Regions of Canada for Language-of-Work Purposes web page">List of Bilingual Regions of Canada for Language-of-Work Purposes</a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="legalFramework" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('legalFrameworkTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
            <p>The specific responsibilities of managers are defined in the related directives, listed in the policy’s supporting tools:</p>
            <ul>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26163" target="_blank" alt="Link to the Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations web page">Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations</a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164" target="_blank" alt="Link to the Directive on Official Languages for Communications and Services web page">Directive on Official Languages for Communications and Services</a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168" target="_blank" alt="Link to the Directive on Official Languages for People Management web page">Directive on Official Languages for People Management</a></li>
            </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="officialLanguages" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('officialLanguagesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <officialLanguages />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="languagesResponsibilities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('languagesResponsibilitiesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <languagesResponsibilities />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="languageRequirements" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('languageRequirementsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>To gain a better understanding of how to perform your duties in this area, consult the web page <a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/assessment-official-languages-appointment-process.html" target="_blank" alt="Link to the Assessment of official languages in the appointment process web page">Assessment of official languages in the appointment process</a> for guidance.</p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/R-Contribute.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p>Take what you have learned into real life!</p>
          <p>Your organization will have its own ways of doing things. Take a time out from the course to consult the course tool box for a list of the persons responsible for official languages and the official languages champions in institutions subject to the <i>Official Languages Act</i>.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Faites une recherche afin de localiser les profils d’information sur le rendement de votre organisation et ses rapports externes, comme le Rapport ministériel sur les résultats.&nbsp;</p>
          <p>Votre organisation aura sa propre fa&ccedil;on de produire des rapports sur la situation financi&egrave;re et de rendre compte de ses dépenses et de ses résultats. Parlez-en à votre section des finances ou de la planification et à votre directeur. Demandez-leur :</p>
          <ul>
            <li>Comment appelons-nous nos rapports sur la situation financi&egrave;re et à quoi ressemblent-ils ? &Agrave; quel endroit puis-je les trouver?</li>
            <li>&Agrave; quelle fréquence préparons-nous des rapports sur la situation financi&egrave;re?&nbsp;</li>
            <li>Doit-on remplir ces rapports dans le syst&egrave;me financier ou dans un tableur?</li>
            <li>Quel est mon r&ocirc;le?</li>
            <li>Quelles informations vais-je fournir pour alimenter les rapports externes?</li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
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
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="valuesPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('LabourRelations')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart3" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart4" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import officialLanguages from '~/components/slides/values/valuesPart3OfficialLanguages'
import languagesResponsibilities from '~/components/slides/values/valuesPart3LanguagesResponsibilities'
import Quiz from '~/components/slides/values/valuesPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction", "legalFramework", "officialLanguages", "languagesResponsibilities", "languageRequirements", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    officialLanguages,
    languagesResponsibilities,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart2
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
    updatePercent(e) {
      this.$store.commit('currentPlaying/setReportPart2_player', e)
    }
  }
}

</script>
<style scoped>
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

.img-real_Life{
  width:265px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<i18n>{
  "en":{
  "introductionTitle": "Introduction",
  "legalFrameworkTitle": "Activity: Legal Framework",
  "officialLanguagesTitle": "Activity: Regions designated bilingual for language-of-work purposes",
  "languagesResponsibilitiesTitle": "Activity: Managers’ official languages responsibilities for people management",
  "languageRequirementsTitle": "Activity: Identifying language requirements",
  "inRealLifeTitle":"Activity: In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "VALUES"
  },
  "fr":{
  "externalGovtReports":"Activité : Rapports externes du gouvernement",
  "IdentifyResultsTitle":"Activité : Démontrer les résultats",
  "inRealLifeTitle":"Activité : Dans la vraie vie",
  "TakeTheQuiz":"Répondez au questionnaire",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
