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
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '3']"/></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q6')" qId="6" :Answer="['1', '2', '3', '5']"/></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=7">{{$t('nextPage')}}</b-button>
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
    import matchingExercise from "~/components/interface/matchingExercise"
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
  "instructions":"Now that you know more about organization and classification, test your knowledge by answering the following questions.",
  "matchInstructions": "Making the links between organization and classification and other HR disciplines will help guide you in the following activities. Match the sentence segments.",
    "q1": {
      "dotsRight": [
        "Creating or classifying a position in line with the organization’s mandate",
        "Planning positions according to the organization’s future needs",
        "Validating the job descriptions before staffing a position"
      ],
      "dotsLeft": [
        "will enable you to deliver your product or service",
        "will help meet the organization’s objectives (and mandate)",
        "will ensure that the current classification decision is still applicable to each position"
      ]
      
    },
    "q2": {
      "dotsRight": [
        "Ensuring that job descriptions are accurate and up to date",
        "Appropriately identifying the official languages requirements of a position",
        "Ensuring that a classification decision is rendered for new and revised job descriptions"
      ],
      "dotsLeft": [
        "will help avoid grievances",
        "will ensure that the employee can deliver the product or service effectively",
        "must be done before hiring"
      ]
    },
    "q3": {
      "text": "Organization and classification decisions are made with the same accountability as other financial transactions.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Organization and classification decisions are made with the same accountability as other financial transactions."
    },
    "q4": {
      "text": "“Configuring organizational structures to align the organization’s processes, systems, technology, culture and people with its ultimate goals” is the definition of which term?",
      "options": {
        "1": "Organization and classification",
        "2": "Classification",
        "3": "HR planning",
        "4": "Organizational design"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Organizational design is the process of configuring organizational structures to align the organization’s processes, systems, technology, culture and people with its ultimate goals."
    },
    "q5": {
      "text": "The occupational group and level of a position must be _______________________.",
      "options": {
        "1": "based on the duties assigned within the organizational structure",
        "2": "determined by the manager",
        "3": "assigned by an OC-accredited advisor",
        "4": "assigned in accordance with the staffing budget"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The occupational group and level of a position must be based on the duties assigned within the organizational structure and be assigned by an OC-accredited advisor."
    },
    "q6": {
      "text": "You want to create a new position in your organization. Identify your organization and classification responsibilities from the list below.",
      "options": {
        "1": "Ensure that the position fits into the organizational structure",
        "2": "Write a job description that aligns with your organizational mandate and business objectives",
        "3": "Ensure that the organizational structure, mandate and business objectives are accurate and up to date",
        "4": "Decide on the group and level of the position based on the job description",
        "5": "Verify that the job description is representative of the work assigned to the position",
        "6": "Ensure that the funds are available to staff the position"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "To create a new position in your organization, you should ensure that the position fits into the organizational structure, write a job description that aligns with your organizational mandate and business objectives, ensure that the organizational structure, mandate and business objectives are accurate and up to date and verify that the job description is representative of the work assigned to the position."
    },
    "q7": {
      "text": "Classification is a key component of coherent working relationships.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Classification underpins coherent working relationships by determining the relative value of work at each occupational group and level, which ensures fair compensation."
    },
    "q8": {
      "text": "It is a manager’s responsibility to ­­­­­_______________________.",
      "options": {
        "1": "evaluate and render classification decisions and determine the department’s organizational structure",
        "2": "determine compensation for their employees based on their job descriptions",
        "3": "ensure that the organizational structure is in line with the organization’s mandate and business objectives"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "It is a manager’s responsibility to ensure that the organizational structure is in line with the organization’s mandate and business objectives."
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