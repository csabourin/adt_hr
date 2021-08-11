<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1">
        <fillTheBlanks :blanks="2" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['1', '3']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
        <fillTheBlanks :blanks="3" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['1', '3', '6']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
      </b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=4">{{$t('nextPage')}}</b-button>
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
    import fillTheBlanks from "~/components/interface/fillTheBlanks"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      matchingExercise,
      fillTheBlanks
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
  "instructions":"Answer the quiz.",
  "matchInstructions": "Making the links between organization and classification and other HR disciplines will help guide you in the following activities. Match the sentence segments.",
    "q1": {
      "sentence": "In the case of {0} permission from the Public Service Commission {1}.",
      "choices": {
        "1": "CANDIDACY",
        "2": "NON-CANDIDACY",
        "3": "IS REQUIRED",
        "4": "IS NOT REQUIRED"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "In advance of {0} a public servant {1} granted  permission by the {2}.",
      "choices": {
        "1": "CANDIDACY",
        "2": "NON-CANDIDACY",
        "3": "MUST BE",
        "4": "SHOULD BE",
        "5": "DEPUTY HEAD",
        "6": "PUBLIC SERVICE COMMISSION"
      },
      "feedback": {
        "right": "In the case of candidacy, permission from the Public Service Commission is required.",
        "wrong": "In the case of candidacy, permission from the Public Service Commission is required."
      }
    },
    "q3": {
      "text": "<p>Robert is a public servant who wants to state his support for a candidate by posting large campaign signs in his front yard.</p><p>Does Robert need to request permission from the Public Service Commission to engage in this political activity?</p>",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Employees are not required to request permission from the Public Service Commission to participate in non-candidacy political activities, such as activities to support or oppose a candidate or a political party. However, they are encouraged to consult their manager and their designated political activities representative about potentially real or perceived risks to political impartiality related to their public service duties."
    },
    "q4": {
      "text": "Is an employee’s political party affiliation a factor in the Public Service Commission’s decision to grant permission to seek nomination or to be a candidate in an election?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Political affiliation is neither requested nor considered in the Public Service Commission’s analysis of candidacy requests."
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