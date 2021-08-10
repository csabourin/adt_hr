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
      <b-tab title="Question 4"><checkboxQuiz :question="$t('q4')" qId="4" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q6')" qId="6" :Answer="['1', '2']" /></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 9"><radioQuiz :question="$t('q9')" qId="9" /></b-tab>
      <b-tab title="Question 10"><radioQuiz :question="$t('q10')" qId="10" /></b-tab>
      <b-tab title="Question 11"><checkboxQuiz :question="$t('q11')" qId="11" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 12"><checkboxQuiz :question="$t('q12')" qId="12" :Answer="['1', '3', '6']" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=11">{{$t('nextPage')}}</b-button>
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
      "text": "<p>True or false?</p><p>Entering into a contract with a subject matter expert to meet short-term needs for specific technical skills is an effective HR strategy.</p>",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Employing contractors is an effective way to fill a need for specific skills."
    },
    "q2": {
      "text": "<p>True or false?</p><p>A reference check is ___________________________.</p>",
      "options": {
        "1": "a condition of hire performed as the last step in a hiring process.",
        "2": "an assessment method used to assess a candidate’s qualifications.",
        "3": "necessary in all staffing actions to verify competencies."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p>A reference check is an assessment method used to assess a candidate’s qualifications.</p>"
    },
    "q3": {
      "text": "<p>You are a sub-delegated manager in a remote location who has been trying to staff a specialized position. In recent years, it has been difficult to attract and retain employees in your unit and experts are hard to find. Last week, you attended a conference in Vancouver and during a break, you met someone who works in the private sector and who has the expertise required for the vacant position in your team. Which staffing process could be used to appoint this person to this position?</p>",
      "options": {
        "1": "Deployment",
        "2": "Internal advertised",
        "3": "Secondment",
        "4": "External Non-advertised"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is External non-advertised."
    },
    "q4": {
      "text": "<p>What is/are the key element(s) to determine your staffing needs?</p>",
      "options": {
        "1": "business objectives",
        "2": "skills required for the position",
        "3": "organizational objectives, such as employment equity"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "All options are correct."
    },
    "q5": {
      "text": "Staffing priorities are guided by which of the following?",
      "options": {
        "1": "The Clerk of the Privy Council",
        "2": "The Treasury Board Secretariat",
        "3": "The Deputy Head"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Staffing priorities are guided by all of the above."
    },
    "q6": {
      "text": "Appointment processes are framed primarily by which of the following?",
      "options": {
        "1": "Legislation",
        "2": "Policy and directives",
        "3": "Speech from the Throne"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Staffing processes are framed primarily by legislation and policy and directives."
    },
    "q7": {
      "text": "As a manager, you have several staffing obligations. Complete the following statements. Managers can achieve employment equity, diversity and inclusion objectives by eliminating ___________________.",
      "options": {
        "1": "barriers",
        "2": "orders of precedence",
        "3": "application of merit"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "One way to achieve employment equity, diversity and inclusion is by eliminating barriers."
    },
    "q8": {
      "text": "A job advertisement could be posed only in English on the Government of Canada Public Service resourcing website (jobs.gc.ca) if the position to staff is in a unilingual region?",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Advertisements must be posted in both official languages regardless of the region in which the position is staffed."
    },
    "q9": {
      "text": "Managers must comply with legislative and policy__________.",
      "options": {
        "1": "obligations",
        "2": "requirements",
        "3": "directives"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Managers must comply with legislative and policy requirements."
    },
    "q10": {
      "text": "Managers must ____________ public sector values and ethics.",
      "options": {
        "1": "regulate",
        "2": "adhere to",
        "3": "implement"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Managers must adhere to public sector values and ethics."
    },
    "q11": {
      "text": "When conducting an appointment process, managers must respect_______________ .",
      "options": {
        "1": "The <i>Public Service Employment Act</i>",
        "2": "The Public Service Commision Appointment Policy",
        "3": "The organizational staffing framework"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "When conducting an appointment process, managers must respect all of the above."
    },
    "q12": {
      "text": "When staffing a position, managers should _____________.",
      "options": {
        "1": "Take into account employment equity objectives",
        "2": "Conduct a reference check",
        "3": "Determine who will be eligible to apply by establishing the area of selection",
        "4": "Open the job posting to the public as often as possible",
        "5": "Appointment based on competencies and best fit",
        "6": "Choose an appropriate staffing process"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "When staffing a position, managers should take into account employment equity objectives, determine who will be eligible to apply by establishing the area of selection, and choose an appropriate staffing process."
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