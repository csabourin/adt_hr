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
      <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
      <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 9"><radioQuiz :question="$t('q9')" qId="9" /></b-tab>
      <b-tab title="Question 10"><radioQuiz :question="$t('q10')" qId="10" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=9">{{$t('nextPage')}}</b-button>
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
  "instructions":"In which region (for the purposes of language of work) do deputy heads or their delegates have the following responsibilities? Identify whether the region is unilingual or bilingual for each statement.",
    "q1": {
      "text": "Communications and services to employees are in both official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q2": {
      "text": "Employees who occupy bilingual positions have email signature blocks, voicemail messages and automated messages that are complete in each of the two official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Communications and services intended exclusively for employees in unilingual regions are in the official language of the province or territory in which the region is located.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q4": {
      "text": "Organizations respect the language-of-work rights of employees in the institutions they provide services to or have authority over.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": ""
    },
    "q5": {
      "text": "Employees who occupy bilingual positions have email signature blocks, voicemail messages and automated messages that are complete in each of the two official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q6": {
      "text": "Employees are able to communicate with employees of other institutions who speak the other official language.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": ""
    },
    "q7": {
      "text": "Employees are able to communicate with employees of other institutions in either official language.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q8": {
      "text": "Employees who occupy bilingual positions have email signature blocks, voicemail messages and automated messages that are complete in each of the two official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": ""
    },
    "q9": {
      "text": "Communications with employees in regions with differing languages of work are conducted using one of the options listed in Appendix 1 of the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164' target='_blank' alt='Link to the Directive on Official Languages for Communications and Services web page'>Directive on Official Languages for Communications and Services</a>.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": ""
    },
    "q10": {
      "text": "Communications with specific employees are in their preferred language.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
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