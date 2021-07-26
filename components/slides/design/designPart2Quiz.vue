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
      <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer="['1', '2']" /></b-tab>
      <b-tab title="Question 4"><checkboxQuiz :question="$t('q4')" qId="4" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '3', '4']" /></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q6')" qId="6" :Answer="['2', '3', '5']" /></b-tab>
      <b-tab title="Question 7"><checkboxQuiz :question="$t('q7')" qId="7" :Answer="['2', '3', '4']" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=6">{{$t('nextPage')}}</b-button>
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
  "instructions":"<p>Test your knowledge by answering the following questions.</p> <p>Select “Submit” when you are done.</p><p>When developing an HR plan, you must incorporate HR strategies that will help meet the organization’s priorities. Decide whether the following are effective HR strategies.</p>",
    "q1": {
      "text": "Focusing recruitment and development on key positions that generate significant competitive advantage is an effective HR strategy.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Focusing energy where it will have the greatest impact is an effective HR strategy."
    },
    "q2": {
      "text": "Creating an organizational structure focused on the knowledge and abilities of the staff is an effective HR strategy.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "An organizational structure should focus on the work that is required, not on the abilities of individuals."
    },
    "q3": {
      "text": "Which of the following are the roles and responsibilities of managers regarding HR planning?",
      "options": {
        "1": "Communicate and discuss HR plans with employees",
        "2": "Identify the skills required for key positions",
        "3": "Supervise employees in their official language of choice"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 1 and 2. Managers’ HR planning roles and responsibilities are to communicate and discuss HR plans with employees and identify the skills required for key positions. The responsibility for supervising employees in their official language of choice is a general management responsibility, not an HR planning responsibility."
    },
    "q4": {
      "text": "When developing your HR plan, you want to better understand the internal and external environment. Which documents should you consult?",
      "options": {
        "1": "Speech from the Throne",
        "2": "Departmental Plans",
        "3": "Annual report from the Clerk of the Privy Council"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p>The answer is: 1, 2 and 3. You should consult all of these sources of information to better understand your internal and external environment.</p><p>Other sources you could consult include:</p><ul><li>industry reports</li><li>your organization’s demographic analysis</li><li>responses to the Public Service Employee Survey</li></ul>"
    },
    "q5": {
      "text": "The <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32621&section=html' target='_blank' alt='Policy on People Management'>Policy on People Management</a> is a fundamental HR policy because:",
      "options": {
        "1": "It takes the place of more than a dozen previously existing policies",
        "2": "It explains how to develop and retain talented individuals",
        "3": "It outlines the responsibilities of deputy heads",
        "4": "It applies to everyone employed in the core public administration"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 1, 3 and 4. The Policy on People Management takes the place of more than a dozen previously existing policies, outlines the responsibilities of deputy heads, and applies to everyone employed in the core public administration."
    },
    "q6": {
      "text": "Identify the functions of effective HR planning.",
      "options": {
        "1": "Integrates your organization’s HR needs into the needs of the public service as a whole",
        "2": "Reflects business needs and strong people management practices",
        "3": "Identifies challenges and key risks to delivering on priorities, and outlines options for mitigation",
        "4": "Provides a means for dealing with conflict regarding respect and inclusivity",
        "5": "Establishes processes for measuring performance and progress towards the objectives"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 2, 3 and 5. Effective HR planning reflects business needs and strong people management practices, identifies challenges and key risks to delivering on priorities, outlines options for mitigation, and establishes processes for measuring performance and progress towards the objectives."
    },
    "q7": {
      "text": "Which of the following statements reflect a manager’s responsibilities regarding HR planning?",
      "options": {
        "1": "Identifying and eliminating barriers to employment to ensure equity and diversity in the workforce",
        "2": "Communicating the HR plan with critical and emerging gaps including succession planning strategies",
        "3": "Linking succession planning strategies to program and financial planning",
        "4": "Evaluating the effectiveness of the plan and adapting it as required",
        "5": "Redeploying individuals who are surplus in one area to a different area"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 2, 3 and 4. A manager’s HR planning responsibilities include communicating the HR plan with critical and emerging gaps including succession planning strategies, linking succession planning strategies to program and financial planning, and evaluating the effectiveness of the plan and adapting it as required."
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