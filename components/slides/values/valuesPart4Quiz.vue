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
      <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer="['1', '2', '3', '5']" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
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
  "instructions":"Answer the quiz.",
  "matchInstructions": "Making the links between organization and classification and other HR disciplines will help guide you in the following activities. Match the sentence segments.",
    "q1": {
      "text": "<p>The social committee has booked a team lunch at a favourite local spot to wish your manager a happy retirement before her last day. You mention to your colleague that you are looking forward to the event tomorrow. He tells you that he won’t be attending because the restaurant is only accessible by stairs. He also says that he provided his reason for declining and requested a wheelchair accessible venue, but has not received a response from the social committee.</p><p>Is your colleague experiencing harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Socially excluding or isolating someone is considered to be harassment and violence."
    },
    "q2": {
      "text": "As a manager, you must deal with issues related to harassment and violence when they first arise or you may be subject to disciplinary measures.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Despite preventive measures, harassment or the perception of harassment might still occur. Do not wait until an employee files a complaint. It is important to deal with issues related to harassment when they first arise, as management is ultimately responsible for providing a workplace free of harassment and ensuring the well-being of their employees."
    },
    "q3": {
      "text": "Which of the following is considered wrongdoing as defined under the <i>Public Servants Disclosure Protection Act</i>?",
      "options": {
        "1": "Breaking laws or regulations either deliberately or through negligence",
        "2": "Misusing public assets",
        "3": "Advising someone to use public funds for personal benefit",
        "4": "Limiting advancement opportunities for employees from equity-seeking groups",
        "5": "Endangering the lives or safety of Canadians through an action or omission"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Limiting advancement opportunities for employees from equity-seeking groups is not wrongdoing as defined under the <i>Public Servants Disclosure Protection Act</i>."
    },
    "q4": {
      "text": "<p>Dominic is First Nations Algonquin and is very proud of his culture. A colleague always refers to him as the Chief. Dominic has explained on multiple occasions that he doesn’t feel comfortable being called that. Dominic’s colleague laughs and says that it’s only a joke.</p><p>Does the colleague’s comment constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "This is a case of harassment and violence. Dominic asked his colleague to stop referring to him as the Chief, but the colleague hasn’t stopped. In addition, appropriating cultural terminology for a joke is a form of discrimination."
    },
    "q5": {
      "text": "<p>Your employee Jean (they/them), a manager with no direct reports, occupies a position designated at risk of post-employment conflict of interest situations. Jean has recently received a firm offer of employment that could place them in a real, apparent or potential conflict of interest situation. If Jean accepts, they will quit the federal public service and commence work in 6 months.</p><p>What action do you first advise Jean to take?</p>",
      "options": {
        "1": "Disclose the situation to the deputy head.",
        "2": "Accept the offer immediately. Jean has no supervisory responsibilities.",
        "3": "Decline the offer. Jean is subject to the mandatory one-year limitation period."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Jean should disclose the situation to the deputy head before accepting the offer. The Directive on Conflict of Interest applies to all those who occupy positions designated at risk of post-employment conflict of interest situations, regardless of supervisory or managerial responsibilities. Jean is subject to the full one-year limitation period, but they could request that the deputy head waive the limitation period."
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