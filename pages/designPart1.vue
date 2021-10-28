<template><div>
  <h2 class="pageTitle">
    {{ $t('HRDelegation')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_99dima2k/flavorId/0_zhrf5f52/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_iazbfh85/flavorId/0_j64obzqm/name/a.mp4" chapters chapterFile="chapters.vtt" posterFile="buildworkplan.png" ccFile="buildWP_captions.vtt" :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col>
          <div role="tablist" class="transcriptionBox">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <span v-if="$i18n.locale=='en'">
                      <h2>Introduction</h2>
                      <p>In this section, you will learn to:</p>
                      <ul>
                        <li>interpret a work plan</li>
                        <li>make a 360 degree scan</li>
                        <li>incorporate Government priorities into a work plan and</li>
                        <li>adjust a work plan according to new information</li>
                      </ul>
                      <p>This section should take you approximately 20 minutes to complete.</p>
                      <hr>
                      <h2>1. The Purpose of a Work Plan</h2>
                      <p>A <strong>work plan</strong> is a living document in which you define and prioritize your unit’s activities. Think of it as a to-do list for the upcoming year. It helps you to communicate how you’ll be assigning resources and managing timelines. It’s the cornerstone of your planning process because it supports your budget and reporting activities.</p>
                      <p>Typically, you wouldn’t start from scratch. You would simply <strong>review last year's work plan, budget and reports to identify what needs to be kept, added or removed for the new year</strong>.</p>
                      <p>But even before putting together your work plan, it’s useful to step out of your role and look at the big picture.</p>
                      <p>[A Continue to the next segment pop-up text box appears.]</p>
                      <hr>
                      <h2>2. Align your Work Plan with Government Priorities</h2>
                      <p>It all starts with the <strong>Speech from the Throne</strong>, which outlines government priorities.</p>
                      <p>These priorities will cascade down to you as a manager, and will need to be reflected in your work plan.</p>
                      <p>After the Speech from the Throne, the Prime Minister addresses a <strong>mandate letter</strong> to each department’s minister. </p>
                      <p>In it, the Prime Minister sets out their <strong>overall expectations</strong> and <strong>policy objectives</strong>. </p>
                      <p>Every year, there is a <strong>federal budget</strong>, which sets Canada’s economic agenda for the year. Departments will have priorities and objectives that align to this agenda in addition to other core mandates.</p>
                      <p>The organization’s core responsibilities, results, results indicators, and program inventory are outlined in a <strong>Departmental Results Framework or “DRF”</strong>.</p>
                      <p>Then there is the <strong>Departmental Plan</strong>, which outlines, amongst other things, an organization’s expenditure plan for the coming year. It includes in more detail the elements of the DRF, expected results, and associated resourcing requirements, covering a 3-year period.</p>
                      <p>Then you may have plans per <strong>sector</strong>, <strong>branch</strong>, and <strong>directorate</strong>.</p>
                      <p>This is where your work plan comes in! You build your work plan around the activities that are the responsibility of your unit and this naturally ties back to the Departmental Plan and DRF.</p>
                      <p>[A Reference: External Links pop-up text box appears.]</p>
                      <hr>
                      <h2>3. Parts of a Work Plan</h2>
                      <p>At this point, you might be wondering what a work plan looks like. Not all units use the same model. By talking to your colleagues and to folks in corporate planning and finance, you can find out which one is used in your office. Here is a typical work plan structure. Have a look! Also, look in the files section on the top right to find work plan examples.</p>
                      <p>Take a moment now to explore the different sections of a work plan.</p>
                      <p>[Onscreen text showing the Try It! instruction for the Parts of a Work Plan activity.]</p>
                      <hr>
                      <h2>4. Make a 360° Scan</h2>
                      <p>To build a work plan, it helps to understand the <strong>historical</strong> and <strong>cultural context</strong> of your unit by asking yourself a series of questions. This is what we call the <strong>360° scan</strong>.</p>
                      <p>Here’s a typical example of last year’s work plan. Try to apply the questions in the 360° scan document to this fictional example.</p>
                      <p>You may access the 360° scan document at any time from the File section at the top right.</p>
                      <p>[Onscreen text showing the Try it! instruction for the Apply a 360o Scan activity.]s</p>
                      <hr>
                      <h2>5. Prepare a Work Plan</h2>
                      <p>At this point, you should understand the context, both historically and culturally, and be in a position to craft this year’s work plan!</p>
                      <p>Imagine that your director shares with you this coming year’s priorities for your directorate: <strong>protect aquatic ecosystems, sustain fisheries and manage the issuing of licences</strong>.</p>
                      <p>Using the drop-down menu, choose the best option for each section of this work plan.</p>
                      <p>[Onscreen text showing the Try it! instruction for the Prepare a Work Plan activity.]</p>
                      <hr>
                      <h2>6. Complete the Work Plan</h2>
                      <p>To help you wrap your mind around how to fill the other sections of the work plan, let’s continue with the same scenario. Looking at your draft, you’ll notice that some items have been dropped into the wrong location or may be missing. Update your draft accordingly.</p>
                      <p>[Onscreen text showing Try it! instruction for the Complete the Work Plan activity.]</p>
                      <hr>
                      <h2>7. Adjust the Work Plan </h2>
                      <p>Alright. Your director tells you that they’ve been to a steering committee meeting  and that they now have <strong>3 new pieces of information</strong> that should be reflected in your work plan:</p>
                      <ol>
                        <li>there will be new software implementation to speed up the issuing of licences</li>
                        <li>there’s a new policy that now requires licences to be issued in 15 days, not 30 days, starting on November first and</li>
                        <li>there’s been a decision to not replace a retiring employee.</li>
                      </ol>
                      <p>[An Activity: Adjust the Work Plan pop-up text box appears.]</p>
                      <hr>
                      <h2>8. In Real Life</h2>
                      <p>Let’s take what you’ve learned into real life. Your organization will have their own ways of doing things. Take a time out now from the course to scan your intranet and see which templates are used. Connect with your colleagues, your director, your financial officer to have a chat about work plans.</p>
                      <p>[An In Real Life pop-up text box appears.]</p>
                      <hr>
                      <h2>9. Quiz</h2>
                      <p>So now that you know how to examine, prepare and adjust a work plan, let’s see what you remember by <strong>taking this short quiz</strong>.</p>
                      <p>[Onscreen text showing the Take the Quiz! instruction for the Quiz activity.]</p>
                      <hr>
                      <h2>10. Section Completed</h2>
                      <p>[Onscreen text showing Section Completed instruction.]</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>Introduction</h2>
                      <p>Dans la présente section, vous apprendrez ce qui suit&nbsp;:</p>
                      <ul>
                        <li>interpréter un plan de travail; </li>
                        <li>effectuer un aperçu à 360 degrés;</li>
                        <li>intégrer les priorités du gouvernement à un plan de travail; et</li>
                        <li>ajuster un plan de travail en fonction des nouveaux renseignements.</li>
                      </ul>
                      <p>Il vous faudra environ 20 minutes pour compléter cette section.</p>
                      <hr>
                      <h2>1. Le but d’un plan de travail</h2>
                      <p>Un <strong>plan de travail</strong> est un document évolutif dans lequel vous définissez et priorisez les activités de votre unité. Considérez-le comme une liste de choses à faire pour l'année à venir. Il vous aide à communiquer la façon dont vous avez l’intention <strong>d’affecter vos ressources et de fixer vos échéances</strong>. C'est la pierre angulaire de votre processus de planification, car elle soutient votre budget et vos activités de production de rapports. </p>
                      <p>D'habitude, on ne part pas de rien. Vous examinez simplement le <strong>plan de travail, le budget et les rapports de l'année dernière pour déterminer ce qui doit être conservé, ajouté ou supprimé pour la nouvelle année</strong>.</p>
                      <p>Mais avant même d'élaborer votre plan de travail, prenons un instant pour sortir de notre rôle de gestionnaire afin de regarder la situation dans son ensemble.</p>
                      <p>[Une fenêtre contextuelle Continuer au segment suivant apparaît.]</p>
                      <hr>
                      <h2>2. Aligner votre plan de travail sur les priorités du gouvernement</h2>
                      <p>Tout commence avec le discours du Trône dans lequel on énonce les priorités du gouvernement.</p>
                      <p>Ces priorités se rendront jusqu'à vous en tant que gestionnaire et devront se refléter dans votre plan de travail.</p>
                      <p>Après le discours du Trône, le premier ministre adresse une <strong>lettre de mandat</strong> au ministre de chaque ministère.</p>
                      <p>Dans cette lettre, le premier ministre y énonce ses <strong>attentes globales</strong> et ses <strong>objectifs stratégiques</strong>.</p>
                      <p>Chaque année, le <strong>budget fédéral</strong> établit le programme économique du Canada pour la prochaine année. Les ministères vont se voir attribuer des priorités et des objectifs qui s'aligneront sur ce programme en plus de leurs mandats de base. </p>
                      <p>Les responsabilités essentielles, les résultats, les indicateurs de rendement et le répertoire de programmes de l'organisation sont décrits dans le <strong>Cadre ministériel des résultats - ou le CMR</strong>.</p>
                      <p>Ensuite, il y a le <strong>Plan ministériel</strong>, qui décrit, entre autres, les plans de dépenses d’une organisation pour l'année à venir. Il comprend plus en détail les éléments du CMR, les résultats escomptés et les besoins connexes en ressources, pour une période de 3 ans.</p>
                      <p>Ensuite, vous pouvez avoir des plans par <strong>secteur</strong>, par <strong>direction générale</strong> et par <strong>direction</strong>.</p>
                      <p>C'est là qu'intervient votre plan de travail! Vous construisez votre plan de travail autour des activités dont vous êtes responsables au sein de votre unité et cela se rattache naturellement au Plan ministériel et le CMR.</p>
                      <p>[Une fenêtre contextuelle Référence : Liens externes apparaît.]</p>
                      <hr>
                      <h2>3. Parties d’un plan de travail</h2>
                      <p>À ce stade, vous vous demandez peut-être à quoi ressemble un plan de travail. Toutes les unités n'utilisent pas le même modèle. En parlant à vos collègues et aux gens de la planification d'entreprise et des finances, vous pouvez savoir lequel est utilisé dans votre bureau. Voici une structure de plan de travail typique. Jetez-y un coup d'œil! Aussi, regardez dans la section Fichiers, en haut à droite, pour trouver des exemples de plans de travail.</p>
                      <p>Prenez un moment pour explorer les différentes sections du plan de travail.</p>
                      <p>[Texte à l’écran indiquant l'instruction Essayez-le! pour l’activité Parties d’un plan de travail.]</p>
                      <hr>
                      <h2>4. Effectuer un aperçu à 360 degrés</h2>
                      <p>Pour élaborer un plan de travail, il est utile de comprendre le <strong>contexte historique et culturel</strong> de votre unité en vous posant une série de questions. C'est ce que nous appellerons l’aperçu à 360 degrés.</p>
                      <p>Voici un exemple fictif du plan de travail, du budget et du rapport de l'an dernier. Essayez d'appliquer les questions du document Aperçu à 360 degrés à cet exemple fictif.</p>
                      <p>Vous pouvez accéder au document d’aperçu à 360 degrés, à tout moment à partir de l'icône Fichier en haut à droite.</p>
                      <p>[Texte à l’écran indiquant l’instruction Essayez-le! pour l’activité Aperçu à 360 degrés.]</p>
                      <hr>
                      <h2>5. Préparer un plan de travail</h2>
                      <p>À ce stade-ci, vous devriez comprendre le contexte, tant historique que culturel, et être en mesure d'élaborer le plan de travail de cette année!</p>
                      <p>Imaginez que votre directeur partage avec vous les priorités de la prochaine année pour votre direction : protéger les écosystèmes aquatiques, soutenir les pêches et gérer la délivrance des permis.</p>
                      <p>Choisissez la meilleure option pour chaque section de ce plan de travail en utilisant les menus déroulants.</p>
                      <p>[Texte à l’écran indiquant l’instruction Essayez-le! pour l’activité Préparer un plan de travail.]</p>
                      <hr>
                      <h2>6. Compléter le plan de travail</h2>
                      <p>Pour vous aider à remplir les autres sections du plan de travail, continuons avec le même scénario. En regardant votre brouillon, vous remarquez que certains items ont été placés au mauvais endroit ou sont manquants. Mettez à jour votre brouillon en conséquence.</p>
                      <p>[Texte à l’écrant indiquant l’instruction Essayez-le pour l’activité Compléter le plan de travail.]</p>
                      <hr>
                      <h2>7. Ajuster le plan de travail</h2>
                      <p>Votre directeur vous dit qu'il a participé à une réunion du comité directeur et qu'il dispose maintenant de 3 nouveaux renseignements qui devraient se refléter dans votre plan de travail :</p>
                      <ol>
                        <li>la mise en œuvre d'un nouveau logiciel pour accélérer l'émission des licences;</li>
                        <li>une nouvelle politique qui exige que maintenant les licences soient émises en 15 jours, et non plus en 30 jours, à compter du 1er novembre;</li>
                        <li>une décision de ne pas remplacer un employé qui prend sa retraite.</li>
                      </ol>
                      <p>[Une fenêtre contextuelle Activité : Ajuster le plan de travail apparaît.]</p>
                      <hr>
                      <h2>8. Dans la vraie vie</h2>
                      <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de consulter votre intranet pour voir quels modèles sont utilisés. Communiquez avec vos collègues, votre directeur ou votre agent financier pour discuter de plans de travail.</p>
                      <p>[Une fenêtre contextuelle Dans la vraie vie apparaît.]</p>
                      <hr>
                      <h2>9. Quiz</h2> 
                      <p>Maintenant que vous savez comment examiner, préparer et ajuster un plan de travail, voyons ce dont vous vous souvenez <strong>en répondant à ce petit quiz</strong>.</p>
                      <p>[Texte à l’écran indiquant l’instruction Répondez au quiz pour l’activité Quiz.]</p>
                      <hr>
                      <h2>10. Section complétée</h2>
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
    <b-modal no-stacking id="Introduction" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32">
          {{ $t('activityLinks') }}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
        <p>Here is a list of resources referred to in this section.</p>
        <ul>
          <li><a href="" target="_blank" alt=""></a></li>
          <li><a href="" target="_blank" alt=""></a></li>
          <li><a href="" target="_blank" alt=""></a></li>
        </ul>
      </div>
      <div v-if="$i18n.locale=='en'">
        <p>Here is a list of resources referred to in this section.</p>
        <ul>
          <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/delegation-overview/appointment-delegation-accountability-instrument.html#toc1.2" target="_blank" alt="Appointment Delegation and Accountability Instrument">Appointment Delegation and Accountability Instrument</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/F-11/" target="_blank" alt="Financial Administration Act">Financial Administration Act</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/p-33.01/" target="_blank" alt="Public Service Employment Act">Public Service Employment Act</a></li>
        </ul>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="HRAuthorities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <HRAutorities />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="HRDelegation" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('hrDelegationTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <HRDelegation />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">
          {{$t('InRealLife')}}
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
          <div v-if="$i18n.locale=='en'">
            <p>Take what you have learned into real life!</p>
            <p>Each deputy head determines how authorities are sub-delegated. As a result, sub-delegation varies from one organization to another. It is a good practice to question if you have the authority to act before making an HR decision.</p>
            <p>Ask your supervisor or an HR advisor where you can find your organization’s delegation instrument and how it should be used for the decisions you are making. Some human resources actions such as classification, pay, staffing may involve exercising authorities from multiple areas.</p>
          </div>
        </b-col>
      </b-row>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32">
          {{$t('TakeTheQuiz')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <designPart1Quiz />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
  <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    
    <microlearning path="designPart1" youAreHere imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('HRDelegation')" type="video" />
    <microlearning size="140" path="designPart2" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('HRPlanning')" type="video" />
    <microlearning path="designKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="20" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="10" />
  </div>
</div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import HRAutorities from '~/components/slides/design/designPart1HRAuthorities'
import HRDelegation from '~/components/slides/design/designPart1HRDelegation'
import designPart1Quiz from '~/components/slides/design/designPart1Quiz'
import continuePopup from '~/components/continuePopup'
export default {
  data() {
    return {
      modalArray: ["Introduction", "HRAuthorities", "HRDelegation", "InRealLife", "Quiz"]
    }
  },
  components: {
    microlearning,
    videoPlayer,
    HRAutorities,
    HRDelegation,
    designPart1Quiz,
    continuePopup
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setBuildWP_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.buildWP
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
<i18n>{
  "en":{
  "gotItContent": "Pop-ups will appear throughout the course to indicate what comes next, such as a video, an exercise, a list of links or a job aid.",
  "activityLinks":"Reference: External Links",
  "gotoLinks":"For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "hrAuthoritiesTitle": "Activity: Recognize delegated authorities",
  "hrDelegationTitle": "Activity: Identify levels of authority required to approve specific HR requests",
  "InRealLife":"In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "DESIGN FOUNDATION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Référence : Liens externes",
  "gotoLinks":"Pour plus d'information, veuillez consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "hrAuthoritiesTitle": "",
  "hrDelegationTitle": "",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris – dans la vraie vie! </p>  <p>Votre organisation aura sa propre façon de faire les choses. Par conséquent, la subdélégation varie d’une organisation à l’autre. Il est bon de vous demander si vous avez le pouvoir d’agir avant de prendre une décision en matière de RH. </p>  <p>Prenez le temps pour demander à votre superviseur ou à un conseiller en RH où se trouve l’instrument de délégation de votre organisation et comment l’utiliser dans le cadre des décisions que vous prenez. Certaines activités liées aux RH comme la classification, la paye et la dotation peuvent exiger d’exercer des pouvoirs dans plusieurs domaines. </p>",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "DESIGN"
  }
  }
</i18n>
