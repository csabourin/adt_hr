<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
         <p v-html="$t('dyk')"></p>
         <p v-html="$t('linkdesc')"></p>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2"/></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3"/></b-tab>
    </b-tabs>
    <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
</b-card>
</b-col>

</b-row>
</b-container>
	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz
		},
    data(){
      return{
        tabIndex:0
      }
    },
    methods:{
      focus(){
        setTimeout(function(){
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
        }, 300);
      }
    }
	}
</script>
<i18n>{
  "en": {
    "dyk":"<p><b>Did you know?</b></p><p>The Directive on the Prevention and Resolution of Workplace Harassment and Violence does not only apply in the workplace. It also applies to activities sponsored by the employer, including conferences, training, information sessions, social events, and while on travel status.</p>",
    "linkdesc": "Using the <a href='https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention.html#definition' target='_blank' alt='Link to the Requirements for employers to prevent harassment and violence in federally regulated workplaces web page'>Requirements for employers to prevent harassment and violence in federally regulated workplaces</a> answer the following questions.",
    "q1": {
      "text": "<p>Amira is the lead on a priority project that is due soon.  According to the work plan, she is a little behind, but she says the next phase of the project can be done more quickly than anticipated. There are a lot of details to be finalized before you can present it to your director general, so you offer to help. Amira refuses your help and asks you to trust her. You are concerned about the timeline, so you ask Amira to give you a status update every Wednesday and Friday for the next 3 weeks. She is clearly annoyed, but says nothing.</p><p>Does your behaviour constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Requesting updates or status reports is not considered to be harassment and violence."
    },
    "q2": {
      "text": "<p>Your expertise is unique on your team, and a recent shift in organizational priorities has resulted in your director tasking you with several new files. It is a heavy workload, and there is no staffing budget to hire someone to help you.  Your director is aware of the situation, is helping you prioritize projects and is pushing for reasonable timelines with senior management, but there are no significant changes, and you feel that the workload is too much.</p><p>Does your director’s behaviour constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Assigning work and directing how and when it should be done is not considered to be harassment and violence."
    },
    "q3": {
      "text": "<p>Liang is a first-generation Canadian. She speaks with an accent, but takes the time to speak slowly and deliberately and focuses on speaking clearly. Her supervisor frequently corrects her pronunciation.</p><p>Does the supervisor’s repeated correction of Liang’s pronunciation constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "If Liang didn’t ask for correction, the behaviour could be considered harassment and violence. However, if Liang has asked her supervisor to help her improve her pronunciation by pointing out and correcting her errors, then the behaviour is not harassment and violence."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes",
    "dyk":"<p><b>Le saviez-vous?</b></p><p>La Directive sur la Prévention et la résolution du harcèlement et de la violence dans le lieu de travail ne s’applique pas seulement au milieu de travail proprement dit, mais également aux activités parrainées par l’employeur, notamment les conférences, les formations, les séances d’information, les événements sociaux et les déplacements.  </p>",
    "linkdesc": "Reportez-vous aux <a href='https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence.html#definition' target='_blank' alt='Lien vers la page web Exigences imposées aux employeurs pour prévenir le harcèlement et la violence dans les lieux de travail sous réglementation fédérale'>Obligations des employeurs pour prévenir le harcèlement et la violence en milieu de travail sous réglementation fédérale</a> pour répondre aux questions suivantes. ",
    "q1": {
      "text": "<p>Amira dirige un projet prioritaire dont l’échéance approche. Selon le plan de travail, elle accuse un peu de retard, mais elle affirme que la prochaine phase du projet peut se faire plus rapidement que prévu. Beaucoup de détails doivent encore être mis au point avant que vous puissiez présenter le projet à votre directeur général. Vous proposez alors votre aide à Amira, qui décline votre offre, tout en vous demandant de lui faire confiance. Comme le calendrier vous préoccupe, vous demandez à Amira de faire le point sur la situation tous les mercredis et vendredis pendant les trois prochaines semaines. Visiblement, ça l’ennuie, mais elle ne dit rien.</p><p>Votre comportement constitue-t-il du harcèlement et de la violence?  </p>",
      "options": {
        "1": "Oui",
        "2": "Non",
        "3": "Ça dépend"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Une demande visant à obtenir des mises à jour ou des rapports d’étape ne représente pas du harcèlement et de la violence."
    },
    "q2": {
      "text": "<p>Votre expertise est unique au sein de votre équipe, et un récent changement dans les priorités organisationnelles a fait en sorte que votre directeur vous a chargé de plusieurs nouveaux dossiers. Il s’agit d’une lourde charge de travail, et le budget ne permet pas d’embaucher quelqu’un pour vous aider. Votre directeur est conscient de la situation. Il vous aide à établir l’ordre de priorité des projets et insiste auprès de la haute direction pour que les délais soient raisonnables, mais vous ne constatez aucun changement majeur et estimez que la charge de travail est trop importante. </p><p>Le comportement de votre directeur constitue-t-il du harcèlement et de la violence? </p>",
      "options": {
       "1": "Oui",
        "2": "Non",
        "3": "Ça dépend"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Lorsqu’une personne assigne des tâches et indique comment et quand le travail doit être exécuté, il ne s’agit pas de harcèlement ni de violence."
    },
    "q3": {
      "text": "<p>Liang est une Canadienne de première génération. Elle a un accent, mais elle prend le temps de parler lentement et de façon posée et s’assure de bien articuler. Son superviseur corrige fréquemment sa prononciation.   </p><p>Est-ce que la correction répétée de la prononciation de Liang par son superviseur constitue du harcèlement et de la violence?  </p>",
      "options": {
       "1": "Oui",
        "2": "Non",
        "3": "Ça dépend"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Si Liang n’a pas demandé à être corrigée, ce comportement pourrait alors être considéré comme du harcèlement et de la violence. Toutefois, si Liang a demandé à son superviseur de l’aider à améliorer sa prononciation en soulignant et en corrigeant ses erreurs, le comportement du superviseur ne représente pas du harcèlement et de la violence. "
    }
  }
}</i18n>