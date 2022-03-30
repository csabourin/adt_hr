<template>
  <div>
    <h2 class="pageTitle" v-html="$t('PoliticalActivities')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_ym6oj5ui/flavorId/0_lo6w2o4q/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_n0dzvop0/flavorId/0_09raw5af/name/a.mp4" chapters chapterFile="valuesPart4.vtt" ccFile="ValuesPart4_captions.vtt" :restartAt="parseInt(thatPoint)" toResume="setValuesPart4" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <h2>1. Introduction</h2>
                        <p>The <i>Public Service Employment Act</i> (PSEA) defines “political activity” as:</p>
                        <ul>
                          <li>any activity in support of, within, or in opposition to a political party or a candidate before or during an election period, or</li>
                          <li>seeking nomination as, or being, a candidate in a municipal, provincial, territorial or federal election, before or during the election period</li>
                        </ul>
                        <p>In your new role as a manager, you are responsible for providing advice and guidance to your employees regarding non-partisanship and political activities, with the support of your designated political activities representative (or DPAR).</p>
                        <p>In this section you will learn to:</p>
                        <ul>
                          <li>Identify what constitutes political activities , and</li>
                          <li>Recognize when permission from the Public Service Commission is required to participate in political activities</li>
                        </ul>
                        <p>This section should take you approximately 10 minutes to complete.</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Non-Partisanship and Political Activities</h2>
                        <p>Non-partisanship is an essential element of a professional public service and a responsible democratic government. Upholding the non-partisan character of the public service is the responsibility of all public service employees.</p>
                        <p>According to the <i>Public Service Employment Act</i> (PSEA), public service employees can engage in political activities if those activities do not impair, or are not seen to impair, their ability to perform their public service duties in a politically impartial manner.</p>
                        <p>Political activities can be divided into two categories: candidacy (seeking nomination as, or to be, a candidate) and non-candidacy.</p>
                        <p>Any public servant wishing to seek nomination as or to be a candidate in an election at the municipal, provincial, territorial, or federal level must first request permission from the Public Service Commission.</p>
                        <p>That permission, if granted, may be subject to conditions to address potential risks to political impartiality, which may include a requirement to take leave without pay. If elected at the provincial, territorial or federal level, a public service employee would cease to be a public servant on the day they are declared elected.</p>
                        <p>In the case of non-candidacy, which includes political activities in support of or in opposition to a political party or candidate, permission from the Public Service Commission not required.</p>
                        <p>In these instances, public service employees are responsible for making informed decisions about whether the activities could impair (or be perceived as impairing) their ability to perform their duties in an impartial manner.</p>
                        <p>Public servants wishing to engage in political activities are encouraged to consult their organization’s designated political activities representative, their values and ethics advisor, or the Political Activities and Non-Partisanship Division at the Public Service Commission.</p>
                        <p>Allegations of improper political activity against an employee may be investigated by the Public Service Commission to determine if corrective action is appropriate.</p>
                        <p>[A Non-partisanship reference pop-up text box appears.]</p>
                        <hr>

                        <h2>3. In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to watch these short videos and share them with your employees:</p>
                        <p>Political Activities: Candidacy</p>
                        <p>Political Activities: Making an Informed Decision</p>
                        <p>They are an excellent source of information if you or any of your employees are considering becoming a candidate in a federal, provincial, territorial or municipal election, or participating in political activities.</p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Quiz</h2>
                        <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Introduction</h2>
                        <p> La <i>Loi sur l’emploi dans la fonction publique</i> (LEFP) définit une « activité politique » comme : </p>
                        <ul>
                          <li>toute activité exercée au sein d’un parti politique, ou exercée pour soutenir un tel parti ou un candidat ou pour s’y opposer, avant ou pendant la période électorale;</li>
                          <li>le fait d’être candidat à une élection municipale, provinciale, territoriale ou fédérale, ou de tenter de le devenir, avant ou pendant la période électorale.</li>
                        </ul>
                        <p>En tant que gestionnaire qui vient d’entrer en fonction, vous êtes responsable de conseiller et de guider vos employés concernant les questions qui ont trait à l’impartialité et aux activités politiques; pour ce faire, vous pouvez compter sur le soutien de votre représentant désigné en matière d’activités politiques (RDAP).</p>
                        <p>Dans cette section, vous apprendrez à : </p>
                        <ul>
                          <li>définir ce qu’est une activité politique;</li>
                          <li>reconnaître les situations dans lesquelles la permission de la Commission de la fonction publique est nécessaire pour qu’une personne puisse participer à des activités politiques.</li>
                        </ul>
                        <p>Il vous faudra environ 10 minutes pour compléter cette section.</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>2. Impartialité et activités politiques</h2>
                        <p>L’impartialité est un élément essentiel au sein d’une fonction publique professionnelle et d’un gouvernement démocratique responsable. Tous les fonctionnaires doivent préserver le caractère impartial de la fonction publique.</p>
                        <p>Conformément à la LEFP, les fonctionnaires peuvent se livrer à des activités politiques, sauf si celles-ci portent ou semblent porter atteinte à leur capacité d’exercer leurs fonctions de façon politiquement impartiale.</p>
                        <p>Les activités politiques sont divisées en deux catégories : activités liées à une candidature (fonctionnaire désireux d’être choisi comme candidat) et activités non liées à une candidature.</p>
                        <p>Tout fonctionnaire désireux d’être choisi comme candidat à une élection municipale, provinciale, territoriale ou fédérale doit d’abord demander la permission de la Commission de la fonction publique.</p>
                        <p>Si la permission est accordée, elle pourrait tout de même être soumise à des conditions visant à limiter les risques pour l’impartialité politique, comme un congé sans solde. Si un fonctionnaire est élu à l’échelon provincial, territorial ou fédéral, il cesse d’être fonctionnaire à partir du moment où il est déclaré élu.</p>
                        <p>Il n’est pas nécessaire d’obtenir la permission de la Commission de la fonction publique si l’activité n’est pas liée à une candidature, notamment si le fonctionnaire se livre à une activité politique visant à soutenir un candidat ou un parti électoral, ou à s’y opposer.</p>
                        <p>Dans ce cas, le fonctionnaire est responsable de juger si cette activité pourrait porter atteinte (ou sembler porter atteinte) à sa capacité d’exercer ses fonctions de façon politiquement impartiale.</p>
                        <p>Les fonctionnaires qui souhaitent se livrer à des activités politiques sont invités à consulter leur RDAP, leur conseiller en valeurs et éthique ou la Direction des activités politiques et de l’impartialité politique de la Commission de la fonction publique.</p>
                        <p>Toute allégation d’activités politiques irrégulières formulée contre un fonctionnaire pourrait faire l’objet d’une enquête par la Commission de la fonction publique, qui visera à déterminer si la prise de mesures correctives est nécessaire.</p>
                        <p>[Une boîte de texte de référence d’Impartialité apparaît.]</p>
                        <hr>

                        <h2>3. Dans la vraie vie</h2>
                        <p>Appliquer ce que vous avez appris dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour jeter un coup d’œil à ces courtes vidéos et pour les faire suivre à vos employés : </p>
                        <p>Activités politiques – Candidature;</p>
                        <p>Activités politiques – Prenez une décision éclairée.</p>
                        <p>Ces vidéos sont une excellente source d’information si vous ou l’un de vos employés envisagez de devenir candidat à une élection fédérale, provinciale, territoriale ou municipale, ou si vous voulez vous livrer à des activités politiques.</p>
                        <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                        <hr>

                        <h2>4. Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>
                        <p>[Une boîte de texte de l’activité Répondez au quiz apparaît.]</p>
                        <hr>

                        <h2>5. Section complétée</h2>
                        <p>[Texte à l’écran indiquant l’instruction Section complétée.]</p>                
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
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('introductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Here is a list of resources referred to in this section.</p>
          <ul>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities.html" target="_blank" alt="Link to the Political Activities web page">Political Activities</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities/i-want-to-become-a-candidate.html" target="_blank" alt="Link to the I want to become a candidate web page">I want to become a candidate</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities/other-political-activities/suite-of-tools-related-to-other-political-activities.html" target="_blank" alt="Link to the Suite of tools related to other political activities web page">Suite of tools related to other political activities</a></li>
          </ul>
        </div>
         <div v-if="$i18n.locale=='fr'">
          <p>Voici une liste des ressources auxquelles on fait référence dans cette section.</p>
         <ul>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques.html" target="_blank" alt="Activités politiques">Activités politiques</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/je-souhaite-etre-candidat.html" target="_blank" alt="Je souhaite être candidat">Je souhaite être candidat</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/autres-activites-politiques/gamme-d-outils-sur-les-autres-activites-politique.html" target="_blank" alt="Gamme d’outils sur les autres activités politiques">Gamme d’outils sur les autres activités politiques</a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="nonPartisanship" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('nonPartisanshipTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
            <p>Have a look at this resource <a href="https://www.canada.ca/en/public-service-commission/services/political-activities/role-public-service-commission.html" target="_blank" alt="Link to the Role of the Public Service Commission of Canada site">Role of the Public Service Commission of Canada</a>.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
            <p>Jetez un rapide coup d’œil à cette ressource : <a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/role-commission-fonction-publique.html" target="_blank" alt="Lien vers le site du Rôle de la Commission de la fonction publique du Canada.">Rôle de la Commission de la fonction publique du Canada</a>.</p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/R-Contribute.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p>Every organization has a designated political activities representative (DPAR). <a href="https://www.canada.ca/en/public-service-commission/services/political-activities/designated-political-activities-representatives-organizations-subject-political-activities-provisions-public-service-employment-act.html" target="_blank" alt="Link to the Public Service Commission web page">Find yours!</a> The list is available on the Public Service Commission’s website.</p>
          <p>To learn more about political activities, see the following videos:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=dbh8-JdIcjQ" target="_blank">Political Activities: Candidacy</a></li>
            <li><a href="https://www.youtube.com/watch?v=3k3nkuGr6vU" target="_blank">Political Activities: Making an Informed Decision</a></li>
          </ul>
          <p>You can also visit the following web pages:</p>
          <ul>
              <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities.html" target="_blank" alt="Link to the Political Activities web page">Political Activities</a></li>
              <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities/i-want-to-become-a-candidate.html" target="_blank" alt="Link to the I want to become a candidate web page">I want to become a candidate</a></li>
              <li><a href="https://www.canada.ca/en/public-service-commission/services/political-activities/other-political-activities/suite-of-tools-related-to-other-political-activities.html" target="_blank" alt="Link to the Suite of tools related to other political activities web page">Suite of tools related to other political activities</a></li>
          </ul>
          <p>If you have any questions, feel free to contact <a href="https://www.canada.ca/en/public-service-commission/services/political-activities/designated-political-activities-representatives-organizations-subject-political-activities-provisions-public-service-employment-act.html" target="_blank" alt="Link to the DPAR web page">your DPAR</a> or the Political Activities and Non-Partisanship Division at <a href="mailto:cfp.activitespolitiques-politicalactivities.psc@cfp-psc.gc.ca" target="_blank" alt="Political Activities and Non-Partisanship Division's Email Adress">cfp.activitespolitiques-politicalactivities.psc@cfp-psc.gc.ca</a> or 1-866-707-7152</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
         <p>Chaque organisation a un représentant désigné en matière d’activités politiques (RDAP). <a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/representants-designes-matiere-activites-politiques-organisations-assujetties-dispositions-loi-emploi-fonction-publique-regissant-activites-politiques.html" target="_blank" alt="Lien vers la page web de la Commission du service public">Trouvez le vôtre</a>! La liste se trouve sur le site Web de la Commission de la fonction publique.</p>
          <p>Pour en apprendre plus sur les activités politiques, voir les vidéos suivantes : </p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=t82RvSluS48" target="_blank">Activités politiques – Candidature;</a></li>
            <li><a href="https://www.youtube.com/watch?v=kKqB8wgtV-c" target="_blank">Activités politiques – Prenez une décision éclairée.</a></li>
          </ul>
          <p>Vous pouvez aussi consulter les pages Web suivantes : </p>
          <ul>
              <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques.html" target="_blank" alt="Lien vers la page web des activités politiques">Activités politiques</a></li>
              <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/je-souhaite-etre-candidat.html" target="_blank" alt="Lien vers la page web Je veux devenir candidat.">Je souhaite être candidat</a></li>
              <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/autres-activites-politiques/gamme-d-outils-sur-les-autres-activites-politique.html" target="_blank" alt="Lien vers la page web Suite d'outils liés à d'autres activités politiques">Gamme d’outils sur les autres activités politiques</a></li>
          </ul>
          <p>Si vous avez des questions, n’hésitez pas à communiquer avec <a href="https://www.canada.ca/fr/commission-fonction-publique/services/activites-politiques/representants-designes-matiere-activites-politiques-organisations-assujetties-dispositions-loi-emploi-fonction-publique-regissant-activites-politiques.html" target="_blank" alt="Lien vers la page web de la Commission du service public">votre RDAP</a> ou avec la Direction des activités politiques et de l’impartialité politique par courriel à l’adresse <a href="mailto:cfp.activitespolitiques-politicalactivities.psc@cfp-psc.gc.ca" target="_blank" alt="Adresse électronique de la Division des activités politiques et de la non-partisannerie">cfp.activitespolitiques-politicalactivities.psc@cfp-psc.gc.ca</a> ou par téléphone au 1-866-707-7152.</p>
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
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="ValuesPart2.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart3_player" path="valuesPart3" imagePath="ValuesPart3.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart4_player" path="valuesPart4" imagePath="ValuesPart4.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import Quiz from '~/components/slides/values/valuesPart4Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction", "nonPartisanship", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.valuesPart4
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
      this.$store.commit('currentPlaying/setValuesPart4_player', e)
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
  "introductionTitle": "References: External Links",
  "nonPartisanshipTitle": "References: Non-partisanship",
  "inRealLifeTitle":"In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "VALUES"
  },
  "fr":{
  "introductionTitle": "Références : Liens externes",
  "nonPartisanshipTitle": "Références : Impartialité ",
  "inRealLifeTitle":"Dans la vraie vie",
  "TakeTheQuiz":"Répondez au quiz",
  "transcriptText":"",
  "reportSectionBar": "VALEURS"
  }
  }
</i18n>
