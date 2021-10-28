<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
        <checkboxQuiz :question="$t('q1')" qId="1" :Answer='["2","5"]' /><hr>
        <checkboxQuiz :question="$t('q2')" qId="2" :Answer='["3","4"]' /><hr>
        <checkboxQuiz :question="$t('q3')" qId="3" :Answer='["1","6"]' /><hr>
        </b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=0">{{$t('nextPage')}}</b-button>
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
  "instructions":"Consult the hyperlinked guidance documents to match each one to the correct deffinition(s). ",
    "q1": {
      "text": "<a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32635&section=html' target='_blank' alt='Link to the Directive on Employment Equity, Diversity and Inclusion web page'>Directive on Employment Equity, Diversity and Inclusion</a>",
      "options": {
        "1": "Tells us there are no provisions in the Employment Equity Act or the Employment Equity Regulations which address “diversity” or “inclusion.” ",
        "2": "Outlines mandatory procedures for employment equity, diversity and inclusion.",
        "3": "Provides guidance on ensuring an equitable, diverse and inclusive workforce.",
        "4": "Offers self-reflection questions to uncover biases.",
        "5": "Expects results such as a workplace where no person is denied employment opportunities for reasons unrelated to ability or job requirements. ",
        "6": "Offers answers to frequently asked question on the topic of diversity, equity and inclusion. "
      },
      "feedback": {
       "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    },
    "q2": {
      "text": "<a href='https://www.canada.ca/en/public-service-commission/services/appointment-framework/federal-public-service-inclusive-appointment-lens.html' target='_blank' alt='Link to the Federal Public Service Inclusive Appointment Lens web page'>Federal Public Service Inclusive Appointment Lens</a>",
      "options": {
        "1": "Tells us there are no provisions in the Employment Equity Act or the Employment Equity Regulations which address “diversity” or “inclusion.” ",
        "2": "Outlines mandatory procedures for employment equity, diversity and inclusion.",
        "3": "Provides guidance on ensuring an equitable, diverse and inclusive workforce.",
        "4": "Offers self-reflection questions to uncover biases.",
        "5": "Expects results such as a workplace where no person is denied employment opportunities for reasons unrelated to ability or job requirements. ",
        "6": "Offers answers to frequently asked question on the topic of diversity, equity and inclusion. "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    },
    "q3": {
      "text": "<a href='https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/qa-staffing-options-support-ee-di-under-psac.html' target='_blank' alt='Link to the Staffing options to support employment equity, and diversity and inclusion, under the Public Service Employment Act – Questions and answers web page'>Staffing options to support employment equity, and diversity and inclusion, under the <i>Public Service Employment Act</i> – Questions and answers</a>",
       "options": {
        "1": "Tells us there are no provisions in the Employment Equity Act or the Employment Equity Regulations which address “diversity” or “inclusion.” ",
        "2": "Outlines mandatory procedures for employment equity, diversity and inclusion.",
        "3": "Provides guidance on ensuring an equitable, diverse and inclusive workforce.",
        "4": "Offers self-reflection questions to uncover biases.",
        "5": "Expects results such as a workplace where no person is denied employment opportunities for reasons unrelated to ability or job requirements. ",
        "6": "Offers answers to frequently asked question on the topic of diversity, equity and inclusion. "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes en consultant la facture fournie.",
    "q1": {
      "text": "<a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32635&section=html' target='_blank' alt='Lien vers la page web de la directive sur l'équité en matière d'emploi, la diversité et l'inclusion'>Directive sur l’équité en matière d’emploi, la diversité et l’inclusion </a>",
      "options": {
        "1": "Révèle qu’aucune disposition de la Loi sur l’équité en matière d’emploi ou du Règlement sur l’équité en matière d’emploi n’aborde la question de la « diversité » ou de l’« inclusion ». ",
        "2": "Présente les procédures obligatoires pour l’équité en matière d’emploi, la diversité et l’inclusion. ",
        "3": "Offre une orientation permettant d’assurer un effectif équitable, diversifié et inclusif. ",
        "4": "Contient des questions de réflexion personnelle permettant de découvrir les préjugés. ",
        "5": "Présente les résultats attendus, comme un milieu de travail où personne ne se voit refuser une possibilité d’emploi pour des raisons qui ne sont pas liées à ses capacités ou aux exigences du poste. ",
        "6": "Répond aux questions les plus souvent posées au sujet de la diversité, de l’équité et de l’inclusion. "
      },
      "feedback": {
       "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    },
    "q2": {
      "text": "<a href='https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/optique-nomination-inclusive-fonction-publique-federale.html' target='_blank' alt='Lien vers la page Web de la lentille de nomination inclusive de la fonction publique fédérale'>Optique de nomination inclusive dans la fonction publique fédérale</a>",
      "options": {
        "1": "Révèle qu’aucune disposition de la Loi sur l’équité en matière d’emploi ou du Règlement sur l’équité en matière d’emploi n’aborde la question de la « diversité » ou de l’« inclusion ». ",
        "2": "Présente les procédures obligatoires pour l’équité en matière d’emploi, la diversité et l’inclusion. ",
        "3": "Offre une orientation permettant d’assurer un effectif équitable, diversifié et inclusif. ",
        "4": "Contient des questions de réflexion personnelle permettant de découvrir les préjugés. ",
        "5": "Présente les résultats attendus, comme un milieu de travail où personne ne se voit refuser une possibilité d’emploi pour des raisons qui ne sont pas liées à ses capacités ou aux exigences du poste. ",
        "6": "Répond aux questions les plus souvent posées au sujet de la diversité, de l’équité et de l’inclusion. "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    },
    "q3": {
      "text": "<a href='https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils/faq-options-dotation-appuyer-eme-di-vertu-lefp.html' target='_blank' alt='Lien vers la page Web des options de dotation à l'appui de l'équité en matière d'emploi, de la diversité et de l'inclusion, en vertu de la Loi sur l'emploi dans la fonction publique - Questions et réponses.'>Options de dotation pour appuyer l’équité en matière d’emploi, la diversité et l’inclusion en vertu de la Loi sur l’emploi dans la fonction publique – Foire aux questions</a>",
       "options": {
        "1": "Révèle qu’aucune disposition de la Loi sur l’équité en matière d’emploi ou du Règlement sur l’équité en matière d’emploi n’aborde la question de la « diversité » ou de l’« inclusion ». ",
        "2": "Présente les procédures obligatoires pour l’équité en matière d’emploi, la diversité et l’inclusion. ",
        "3": "Offre une orientation permettant d’assurer un effectif équitable, diversifié et inclusif. ",
        "4": "Contient des questions de réflexion personnelle permettant de découvrir les préjugés. ",
        "5": "Présente les résultats attendus, comme un milieu de travail où personne ne se voit refuser une possibilité d’emploi pour des raisons qui ne sont pas liées à ses capacités ou aux exigences du poste. ",
        "6": "Répond aux questions les plus souvent posées au sujet de la diversité, de l’équité et de l’inclusion. "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      }
    }
  }
}</i18n>