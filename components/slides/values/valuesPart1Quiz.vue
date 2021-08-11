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
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '3', '4', '6']" /></b-tab>
      <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
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
      "text": "<p>Tina would like to work from 6:00 am to 2:00 pm to avoid heavy traffic in her commute. Use the <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-eng.aspx?id=15' target='_blank' alt='Link to the Program and Administrative Services collective agreement web page'>Program and Administrative Services collective agreement</a> to help you decide if you should approve Tina’s request.</p>",
      "options": {
        "1": "Approve the request.",
        "2": "Approve the request after verifying that other employees will be available to meet operational requirements after 2:00 pm.",
        "3": "Deny the request because she could take the bus to work.",
        "4": "Deny the request because the normal workday is between 7:00 am and 6:00 pm."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You should deny the request because the normal workday is between 7:00 am and 6:00 pm. See clause 25.08 in the collective agreement."
    },
    "q2": {
      "text": "John has requested leave with pay to take care of his father who is ill and lives in a long-term care home. Use the <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-eng.aspx?id=15' target='_blank' alt='Link to the Program and Administrative Services collective agreement web page'>Program and Administrative Services collective agreement</a> to help you decide if you should approve John’s request.",
      "options": {
        "1": "Approve the request. Family-related leave applies to parents, whether or not they reside with the employee.",
        "2": "Refuse the request. Family-related leave applies to parents only if they reside with the employee."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The need to provide care to a parent qualifies for leave with pay for family-related responsibilities, whether or not the parent resides with the employee. See article 44.01 in the collective agreement."
    },
    "q3": {
      "text": "<p>Using the <a href='https://www.njc-cnm.gc.ca/directive/d7/v23/s252/en#s252-tc-tm_3' target='_blank' alt='Link to the Occupational Health and Safety Directive web page'>Occupational Health and Safety Directive</a>, answer the following question.</p><p>What is the ideal temperature range for the office during work hours?</p>",
      "options": {
        "1": "18 to 22°C",
        "2": "17 to 24°C",
        "3": "19 to 24°C",
        "4": "20 to 26°C"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You are responsible for considering employment equity as part of HR planning and applying your organization’s employment equity policies."
    },
    "q4": {
      "text": "<p>As a manager, if you receive a grievance from an employee, what should you do?</p>",
      "options": {
        "1": "Acknowledge receipt of the grievance to the employee and forward it to the person in your organization who is responsible for handling grievances.",
        "2": "Speak to the employee to gain a better understanding of their grievance.",
        "3": "Speak to the employees involved to find a resolution."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Acknowledge receipt of the grievance to the employee and forward it to the person in your organization who is responsible for handling grievances."
    },
    "q5": {
      "text": "According to the <a href='' target='_blank' alt='Link to the guide to the key elements of an ICMS in the core public administration web page'>guide to the key elements of an ICMS in the core public administration</a>, which of the following are informal conflict management system (ICMS) best practices?",
      "options": {
        "1": "Create a culture that encourages resolution of conflict at the lowest level through face-to-face dialogue between the parties in conflict.",
        "2": "Make available conflict management training for managers and employees to address conflicts.",
        "3": "Offer the name of more than one person to ensure employees have access to a trusted and knowledgeable ICMS person.",
        "4": "Make available informal processes such as coaching and mediation for addressing conflict.",
        "5": "Make available stress management resources and training to de-escalate conflict.",
        "6": "Provide procedures to allow employees to move from formal processes to informal processes, if they wish to do so."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Training should be available in advance of conflicts, not to address conflicts, and stress management resources and training are not identified in the list of best practices. All other responses are correct."
    },
    "q6": {
      "text": "The Treasury Board alone determines the terms and conditions of collective agreements.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is False. The Treasury Board negotiates terms and conditions of employment and compensation for unionized employees with their respective bargaining agents and determines compensation for non‑unionized employees."
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