<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1" /></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
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
    import matchingExercise from "~/components/interface/matchingExerciseAll"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
            matchingExercise
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
  "instructions":"Appendix 4 of the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168' target='_blank' alt='Link to the Directive on Official Languages for People Management web page'>Directive on Official Languages for People Management</a> offers clarification on the terms used in the directive. Use this document to answer the following questions.",
    "q1": {
      "text": "An organizational culture in which employees are systematically encouraged to use the official language of their choice in the workplace.",
      "options": {
        "1": "Conducive (workplace)",
        "2": "Bilingual regions",
        "3": "Designated offices"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Conducive (workplace): An organizational culture in which employees are systematically encouraged to use the official language of their choice in the workplace."
    },
    "q2": {
      "text": "Staffing procedure for a bilingual position allowing the consideration of applicants who meet all essential qualifications except for the requisite language skills.",
      "options": {
        "1": "Imperative staffing",
        "2": "Non-imperative staffing",
        "3": "Exceptional staffing"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Non-imperative staffing: Staffing procedure for a bilingual position allowing the consideration of applicants who meet all essential qualifications except for the requisite language skills."
    },
    "q3": {
      "text": "The list of Bilingual Regions of Canada for Language-of-Work Purposes is available on which organization’s website?",
      "options": {
        "1": "Treasury Board of Canada Secretariat",
        "2": "Public Service Commission",
        "3": "Public Works and Government Services Canada"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The list of Bilingual Regions of Canada for Language-of-Work Purposes is available on the Treasury Board of Canada Secretariat’s website."
    },
    "q4": {
      "text": "Unilingual regions are any region that is not on the list of bilingual regions.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Unilingual regions are any region that is not on the list of bilingual regions."
    }
  },
  "fr": {
  "instructions":"<p>L’appendice 4 de la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26168' target='_blank' alt='Lien vers la page web de la Directive sur les langues officielles pour la gestion des personnes'>Directive sur les langues officielles pour la gestion des personnes </a> clarifie les termes utilisés dans la Directive. Utilisez ce document pour répondre aux questions suivantes.</p> ",
    "q1": {
      "text": "Une culture organisationnelle dans laquelle les employés sont systématiquement encouragés à utiliser la langue officielle de leur choix dans le milieu de travail.",
      "options": {
        "1": "Milieu de travail propice ",
        "2": "Régions bilingues ",
        "3": "Bureaux désignés "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Milieu de travail propice : Une culture organisationnelle dans laquelle les employés sont systématiquement encouragés à utiliser la langue officielle de leur choix dans le milieu de travail."
    },
    "q2": {
      "text": "Mesure de dotation qui permet que l’on prenne en considération, lors d’un processus de sélection pour la nomination à un poste bilingue, la candidature de personnes qui satisfont à toutes les qualifications essentielles à l’exception des compétences linguistiques requises. ",
      "options": {
        "1": "Dotation impérative ",
        "2": "Dotation non impérative ",
        "3": "Situation exceptionnelle de dotation "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Dotation non impérative : Mesure de dotation qui permet que l’on prenne en considération, lors d’un processus de sélection pour la nomination à un poste bilingue, la candidature de personnes qui satisfont à toutes les qualifications essentielles à l’exception des compétences linguistiques requises."
    },
    "q3": {
      "text": "Quelle organisation offre sur son site Web la liste des régions bilingues du Canada aux fins de la langue de travail?  ",
      "options": {
        "1": "Secrétariat du Conseil du Trésor du Canada ",
        "2": "Commission de la fonction publique ",
        "3": "Travaux publics et Services gouvernementaux Canada "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La liste des régions bilingues du Canada aux fins de la langue de travail se trouve sur le site Web du Secrétariat du Conseil du Trésor du Canada."
    },
    "q4": {
      "text": "Les régions unilingues correspondent à toutes les régions qui ne se trouvent pas sur la liste des régions bilingues. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les régions unilingues correspondent à toutes les régions qui ne se trouvent pas sur la liste des régions bilingues."
    }
  }
}</i18n>