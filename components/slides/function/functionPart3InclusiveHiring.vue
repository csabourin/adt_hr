<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <br />
          <p v-html="$t('matchInstructions')" />
          <matchingExercise :question="$t('q1')" qId="1" :feedback="$t('q1.feedback')" />
        </b-tab>
        <b-tab title="Question 2">
            <br />
            <p v-html="$t('matchInstructions')" />
            <matchingExercise :question="$t('q2')" qId="2" :feedback="$t('q2.feedback')" />
        </b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
  "instructions":"Consult the hyperlinked guidance documents to match each one to a statement.",
  "matchInstructions": "<ul><li><a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32635&section=html' target='_blank' alt='Link to the Directive on Employment Equity, Diversity and Inclusion web page'>Directive on Employment Equity, Diversity and Inclusion</a></li><li><a href='https://www.canada.ca/en/public-service-commission/services/appointment-framework/federal-public-service-inclusive-appointment-lens.html' target='_blank' alt='Link to the Federal Public Service Inclusive Appointment Lens web page'>Federal Public Service Inclusive Appointment Lens</a></li><li><a href='https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/qa-staffing-options-support-ee-di-under-psac.html' target='_blank' alt='Link to the Staffing options to support employment equity, and diversity and inclusion, under the Public Service Employment Act – Questions and answers web page'>Staffing options to support employment equity, and diversity and inclusion, under the <i>Public Service Employment Act</i> – Questions and answers</a></li></ul>",
    "q1": {
      "dotsRight": [
        "Directive on Employment Equity, Diversity and Inclusion",
        "Federal Public Service Inclusive Appointment Lens",
        "Staffing options to support employment equity, and diversity and inclusion, under the Public Service Employment Act – Questions and answers"
      ],
      "dotsLeft": [
        "Expects such results as a workplace where no person is denied employment opportunities for reasons unrelated to ability or job requirements.",
        "Provides guidance on ensuring an equitable, diverse and inclusive workforce.",
        "Tells us there are no provisions in the Employment Equity Act or the Employment Equity Regulations which address “diversity” or “inclusion.”"
      ],
      "conclusion": ""
    },
    "q2": {
      "dotsRight": [
        "Directive on Employment Equity, Diversity and Inclusion",
        "Federal Public Service Inclusive Appointment Lens",
        "Staffing options to support employment equity, and diversity and inclusion, under the Public Service Employment Act – Questions and answers"
      ],
      "dotsLeft": [
        "Outlines mandatory procedures for employment equity, diversity and inclusion.",
        "Offers self-reflection questions to uncover biases.",
        "Offers answers to frequently asked question on the topic of diversity, equity and inclusion."
      ],
      "conclusion": ""
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes en consultant la facture fournie.",
    "q1": {
      "text": "Vous avez reçu 15 paires de lunettes roses. Les 5 autres paires sont en rupture de stock. Payez-vous la facture pour la commande compl&egrave;te de 20 paires?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous devrez contacter le fournisseur pour faire corriger la facture, car vous n’avez pas reçu 5 paires."
    },
    "q2": {
      "text": "Vous avez commandé des surligneurs d’une valeur de 10&nbsp;$ auprès de l’Entreprise XYZ. En regardant la facture fournie, devriez-vous la payer?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Si vous regardez attentivement, vous avez commandé chez Entreprise XYZ, mais la facture indique Entreprise ABC."
    },
    "q3": {
      "text": "Vous avez commandé des lunettes roses au prix de 20&nbsp;$ la paire. En regardant la facture fournie, devriez-vous la payer?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": " Si vous regardez bien, vous avez commandé des lunettes roses à 20&nbsp;$ la paire. La facture indique 25&nbsp;$ l’unité. Vous devrez communiquer avec le fournisseur pour faire corriger la facture."
    }
  }
}</i18n>