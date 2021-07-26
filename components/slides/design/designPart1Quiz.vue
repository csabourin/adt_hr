<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
      <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 9"><radioQuiz :question="$t('q9')" qId="9" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
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
    import fillTheBlanks from "~/components/interface/fillTheBlanks"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
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
  "instructions":"Test your knowledge by answering the following questions. Select “Submit” when you are done.",
    "q1": {
      "text": "Which of the following documents supports good HR decision making?",
      "options": {
        "1": "HR plan",
        "2": "Performance agreements",
        "3": "Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The HR plan supports good HR decision making."
    },
    "q2": {
      "text": "Deputy heads receive their HR authorities from which legislation?",
      "options": {
        "1": "<i>Financial Administration Act</i> and the <i>Public Service Employment Act</i>",
        "2": "<i>Public Service Administration Act</i> and the Policy on People Management",
        "3": "Policy on People Management and the Public Service Commission"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Deputy heads receive their HR authorities from the <i>Financial Administration Act</i> and the <i>Public Service Employment Act</i>."
    },
    "q3": {
      "text": "An individual may exercise delegated authorities once they have completed the necessary training.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is false. A person must occupy a position to which authorities are associated. They must also complete the necessary training and be granted signing authority by the deputy head."
    },
    "q4": {
      "text": "Once you have been delegated authorities, you will keep your delegation when you move to another position and/or department.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Delegated authority is associated with a position, not an individual."
    },
    "q5": {
      "text": "Establishing merit criteria, making deployments and accepting resignations are examples of authorities directly conferred to deputy heads through which legislation?",
      "options": {
        "1": "<i>Financial Administration Act</i>",
        "2": "<i>Public Service Employment Act</i>",
        "3": "Appointment Delegation and Accountability Instrument"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Establishing merit criteria, making deployments and accepting resignations are examples of authorities directly conferred to deputy heads through the <i>Public Service Employment Act</i>."
    },
    "q6": {
      "text": "Which of the following authorities is conferred directly to deputy heads through the <i>Financial Administration Act</i>?",
      "options": {
        "1": "Authority to lay off or retain employees",
        "2": "Authority to hire casual workers",
        "3": "Authority to hire consultants"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The authority to hire consultants is conferred directly to deputy heads through the <i>Financial Administration Act</i>."
    },
    "q7": {
      "text": "The ___________ specifies the authorities that are delegated to deputy heads by the Public Service Commission.",
      "options": {
        "1": "Policy on People Management",
        "2": "Appointment Delegation and Accountability Instrument",
        "3": "<i>Financial Administration Act</i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The Appointment Delegation and Accountability Instrument specifies the authorities that are delegated to deputy heads by the Public Service Commission."
    },
    "q8": {
      "text": "A manager with sub-delegated HR authorities can sub-delegate these to a supervisor on their team.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "A manager with sub-delegated HR authorities cannot sub-delegate these to a supervisor on their team."
    },
    "q9": {
      "text": "Organizations use which document to confirm the level of authority needed to approve such HR activities as leave requests, job descriptions and performance agreement ratings?",
      "options": {
        "1": "Policy on People Management",
        "2": "Organizational Chart",
        "3": "Organizational HR Delegation Instrument"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Organizations use the Organizational HR Delegation Instrument to confirm the level of authority needed to approve such HR activities as leave requests, job descriptions and performance agreement ratings."
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