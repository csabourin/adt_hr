<template><div>
  <h2 class="pageTitle">
    {{ $t('HRDelegation')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_tma13ut7/flavorId/0_ztiktgzj/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0icpxyhk/flavorId/0_7mxppcb6/name/a.mp4" chapters chapterFile="chapters.vtt" ccFile="FoundationPart1_captions.vtt" :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <p>As a manager, you may be asked to perform various HR activities such as hire a new employee, draft a new job description, approve leave requests and conduct performance reviews. But before you do any of these, you will need to know if you have the authority to do so.</p>
                      <p>You may be delegated key authorities in human resources, commonly referred to as HR. To exercise these authorities appropriately, you need to understand how they are delegated. You must also be able to interpret your organization’s HR delegation instruments and use them efficiently and effectively, in consultation with the appropriate subject matter experts.</p>
                      <p>In this section, you will learn to:</p>
                      <ul>
                        <li>Recognize who delegates authority and who receives delegation, and</li>
                        <li>Identify levels of authority required to approve specific HR requests</li>
                      </ul>
                      <p>This section should take you approximately 15 minutes to complete.</p>
                      <hr>
                      <h2>HR Authorities - Delegation and Sub-delegation</h2>
                      <p>Parliament creates authorities through legislation and from here deputy heads receive certain HR-related authorities directly from legislation and regulations, most specifically from the <i>Financial Administration Act</i> and the <i>Public Service Employment Act</i>.</p>
                      <p>In addition, the <i>Public Service Employment Act</i> gives the Public Service Commission the authority to make appointments to and within the public service. The <i>Public Service Employment Act</i> also authorizes the Public Service Commission to delegate appointment and appointment-related authorities to deputy heads, for positions within the jurisdiction. </p>
                      <p>Human resources authorities are divided into directly conferred authorities and delegated authorities. Directly conferred authorities are those granted directly to deputy heads and those granted to the Public Service Commission. The Public Service Commission may then delegate additional authorities to deputy heads.</p>
                      <p>An individual may exercise delegated authorities once they occupy the position to which authorities have been associated, have completed the necessary training, and received their delegation from the deputy head.</p>
                      <p>The Public Service Commission sub-delegates most appointments and appointment-related authorities to deputy heads, who may then sub-delegate the majority of these authorities to managers.</p>
                      <p>This differs from many other HR-related authorities, such as leave authorities, which may be exercised by virtue of occupying a position, while others require specialized training to receive accreditation, as is the case for Organization and Classification.</p>
                      <p>An individual may exercise sub-delegated authorities for staffing once they occupy the position to which authorities have been associated, have completed the necessary training, have received the delegation from the deputy head and have signed the attestation.</p>
                      <p>In the case of appointment authorities, they must be exercised by a duly sub-delegated manager. Although many people may be involved in a selection process, the sub-delegated manager remains accountable and responsible for all decisions.</p>
                      <p>For an overview of delegations, take a look at the Appointment Delegation and Accountability Instrument and review the types of authorities directly conferred to deputy heads, as well as those granted to the Public Service Commission.</p>
                      <hr>
                      <h2>HR Delegation Instrument</h2>
                      <p>Each organization has its own tools to delegate authorities appropriately through managerial levels. Generally speaking, an organization’s HR delegation instrument describes a series of activities and the authorization level or levels associated with it.</p>
                      <p>An individual may only exercise authorities for which they have received appropriate delegation. Consult your own organization’s instrument.</p>
                      <hr>
                      <h2>In Real Life</h2>
                      <p>Take what you have learned into real life!</p>
                      <p>Your organization will have its own ways of doing things. As a result, sub-delegation varies from one organization to another. It is a good practice to question if you have the authority to act before making an HR decision.</p>
                      <p>Take a time out from the course and ask your supervisor or an HR advisor where you can find your organization’s delegation instrument and how it should be used for the decisions you are making. Some human resources actions such as classification, pay, staffing may involve exercising authorities from multiple areas.</p>
                      <hr>
                      <h2>Quiz</h2>
                      <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>Introduction</h2>
                      <p>On pourrait vous demander, en tant que gestionnaire, de réaliser diverses activités de ressources humaines comme embaucher un nouvel employé, rédiger une nouvelle description de travail, approuver des demandes de congé et effectuer des évaluations du rendement. Cependant, avant d’accomplir ces tâches, vous devez savoir si vous avez les pouvoirs nécessaires. </p>
                      <p>Il est possible qu’on vous délègue des pouvoirs clés en matière de ressources humaines, communément appelées les RH. Vous devez comprendre comment ces pouvoirs sont délégués si vous voulez les exercer correctement. Vous devez aussi être en mesure d’interpréter les instruments de délégation en matière de RH de votre organisation et de les utiliser de manière efficace et efficiente, et ce en collaboration avec les experts en la matière.</p>
                      <p>Dans cette section, vous apprendrez à : </p>
                      <ul>
                        <li>reconnaître les personnes qui délèguent des pouvoirs et celles qui se voient accorder ces pouvoirs;</li>
                        <li>déterminer le niveau décisionnel requis pour approuver différentes demandes de RH.</li>
                      </ul>
                      <p>Il vous faudra environ 15 minutes pour compléter cette section.</p>
                     <hr>
                      <h2>Pouvoirs en matière de RH – Délégation et subdélégation</h2>
                      <p>Le Parlement crée des pouvoirs par l’entremise des lois. Ainsi, les lois et règlements, tout particulièrement la <i>Loi sur la gestion des finances publiques</i> et la <i>Loi sur l’emploi dans la fonction publique</i>, confèrent directement aux administrateurs généraux certains pouvoirs en matière de RH.</p>
                      <p>De plus, la <i>Loi sur l’emploi dans la fonction publique</i> donne à la Commission de la fonction publique le pouvoir de faire des nominations à la fonction publique et au sein de celle-ci. Cette loi permet aussi à la Commission de la fonction publique de déléguer aux administrateurs généraux des pouvoirs de nomination et des pouvoirs connexes, pour les postes qui relèvent de sa compétence.</p>
                      <p>Il existe deux types de pouvoirs en matière de RH : les pouvoirs conférés directement et les pouvoirs délégués. Les premiers sont conférés directement aux administrateurs généraux et à la Commission de la fonction publique. Cette dernière peut ensuite déléguer d’autres pouvoirs aux administrateurs généraux.</p>
                      <p>Une personne peut exercer ses pouvoirs délégués une fois qu’elle occupe le poste auquel les pouvoirs en question sont associés, qu’elle a suivi la formation nécessaire et qu’elle a reçu la délégation de la part de l’administrateur général.</p>
                      <p>La Commission de la fonction publique subdélègue la plupart des pouvoirs de nomination et des pouvoirs connexes aux administrateurs généraux. Ces derniers peuvent ensuite subdéléguer la majorité de ces pouvoirs aux gestionnaires.</p>
                      <p>Cette façon de faire diffère de celle associée à de nombreux autres pouvoirs en matière de RH, comme les pouvoirs d’approbation des congés, qu’une personne peut exercer du seul fait qu’elle occupe un poste donné. D’autres pouvoirs nécessitent de suivre une formation spécialisée permettant d’obtenir une accréditation. C’est notamment le cas des pouvoirs relatifs à l’organisation et à la classification.</p>
                      <p>Une personne peut exercer ses pouvoirs subdélégués de dotation une fois qu’elle occupe le poste auquel ces derniers sont associés, qu’elle a suivi la formation nécessaire, qu’elle a reçu la délégation de la part de l’administrateur général et qu’elle a signé l’attestation.</p>
                      <p>Pour leur part, les pouvoirs de nomination doivent être exercés par un gestionnaire dûment investi des pouvoirs subdélégués. Même si de nombreuses personnes peuvent avoir un rôle à jouer dans le cadre d’un processus de sélection, le gestionnaire subdélégué demeure responsable de toutes les décisions.</p>
                      <p>Pour avoir un aperçu des délégations, consultez l’Instrument de délégation et de responsabilisation en matière de nomination. Examinez les types de pouvoirs conférés directement aux administrateurs généraux ainsi que ceux qui sont confiés à la Commission de la fonction publique.</p>
                      <hr>
                      <h2>Instrument de délégation en matière de RH</h2>
                      <p>Chaque organisation a ses propres outils lui permettant de déléguer les pouvoirs au niveau de gestion approprié. De façon générale, l’instrument de délégation en matière de RH d’une organisation présente une série d’activités ainsi que le ou les niveaux d’approbation qui y sont associés.</p>
                      <p>Une personne peut seulement exercer les pouvoirs qui lui ont été délégués à juste titre. Consultez l’instrument de votre organisation.</p>
                      <hr>
                      <h2>Dans la vraie vie</h2>
                      <p>Appliquez maintenant ce que vous avez appris – dans la vraie vie!</p>
                      <p>Votre organisation aura sa propre façon de faire les choses. Par conséquent, la subdélégation varie d’une organisation à l’autre. Il est bon de vous demander si vous avez le pouvoir d’agir avant de prendre une décision en matière de RH.</p>
                      <p>Prenez le temps pour demander à votre superviseur ou à un conseiller en RH où se trouve l’instrument de délégation de votre organisation et comment l’utiliser dans le cadre des décisions que vous prenez. Certaines activités liées aux RH comme la classification, la paye et la dotation peuvent exiger d’exercer des pouvoirs dans plusieurs domaines.</p>
                      <hr>
                      <h2>Quiz</h2>
                      <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>
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
        <p>Voici la liste des ressources mentionnées dans cette section : </p>
        <ul>
          <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/delegation/instrument-delegation-responsabilisation.html#toc1.2" target="_blank" alt="Instrument de délégation et de responsabilisation en matière de nomination">Instrument de délégation et de responsabilisation en matière de nomination</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/fra/lois/f-11/" target="_blank" alt="Loi sur la gestion des finances publiques">Loi sur la gestion des finances publiques</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/fra/lois/p-33.01/" target="_blank" alt="Loi sur l’emploi dans la fonction publique">Loi sur l’emploi dans la fonction publique</a></li>
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
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
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
            <p>Your organization will have its own ways of doing things. As a result, sub-delegation varies from one organization to another. It is a good practice to question if you have the authority to act before making an HR decision.</p>
            <p>Take a time out from the course and ask your supervisor or an HR advisor where you can find your organization’s delegation instrument and how it should be used for the decisions you are making. Some human resources actions such as classification, pay, staffing may involve exercising authorities from multiple areas.</p>
          </div>
          <div v-if="$i18n.locale=='fr'">
            <p>Appliquez maintenant ce que vous avez appris – dans la vraie vie!</p>
            <p>Votre organisation aura sa propre façon de faire les choses. Par conséquent, la subdélégation varie d’une organisation à l’autre. Il est bon de vous demander si vous avez le pouvoir d’agir avant de prendre une décision en matière de RH.</p>
            <p>Prenez le temps pour demander à votre superviseur ou à un conseiller en RH où se trouve l’instrument de délégation de votre organisation et comment l’utiliser dans le cadre des décisions que vous prenez. Certaines activités liées aux RH comme la classification, la paye et la dotation peuvent exiger d’exercer des pouvoirs dans plusieurs domaines.</p>
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
    
    <microlearning path="designPart1" youAreHere imagePath="R-Contribute.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('HRDelegation')" type="video" />
    <microlearning size="140" path="designPart2" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="InitiateAuthSpending.svg" :text="$t('HRPlanning')" type="video" />
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
  "activityLinks":"References: External Links",
  "gotoLinks":"For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "hrAuthoritiesTitle": "Activity: Recognize delegated authorities",
  "hrDelegationTitle": "Activity: Identify levels of authority required to approve specific HR requests",
  "InRealLife":"In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "FOUNDATION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Références : Liens externes",
  "gotoLinks":"Pour plus d'information, veuillez consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "hrAuthoritiesTitle": "Activité : Reconnaître les pouvoirs délégués",
  "hrDelegationTitle": "Activité : Déterminer les niveaux décisionnels requis pour approuver différentes demandes de RH",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris – dans la vraie vie! </p>  <p>Votre organisation aura sa propre façon de faire les choses. Par conséquent, la subdélégation varie d’une organisation à l’autre. Il est bon de vous demander si vous avez le pouvoir d’agir avant de prendre une décision en matière de RH. </p>  <p>Prenez le temps pour demander à votre superviseur ou à un conseiller en RH où se trouve l’instrument de délégation de votre organisation et comment l’utiliser dans le cadre des décisions que vous prenez. Certaines activités liées aux RH comme la classification, la paye et la dotation peuvent exiger d’exercer des pouvoirs dans plusieurs domaines. </p>",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "BASE"
  }
  }
</i18n>
