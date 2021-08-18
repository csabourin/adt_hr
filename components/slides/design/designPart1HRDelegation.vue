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
	export default{
		components:{
			checkboxQuiz,
			radioQuiz
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
  "instructions":"Using the sample sub-delegation instrument for HR authorities, identify the lowest level of authority that can approve the request.",
    "q1": {
      "text": "<p><b>An employee calls in sick but their sick leave credits are all used up. They would like an advance of sick leave with pay.</b></p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned."
    },
    "q2": {
      "text": "<p><b>An employee announces she is pregnant and wants to take maternity leave without pay in a few months.</b></p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "5": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child."
    },
    "q3": {
      "text": "<p><b>An employee wants to return to college and has requested education leave without pay, with allowance.</b></p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements."
    },
    "q4": {
      "text": "<p><b>An employee asks to not come into work because it would be too dangerous due to icy roads in her neighbourhood. Since she is not responsible for this situation, she feels she should still be paid even though she won’t come to work.</b></p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave."
    },
    "q5": {
      "text": "<p><b>An employee has a dental appointment Tuesday afternoon and would like paid time off to go to their appointment.</b></p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager",
        "6": "Supervisor"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "6": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The manager can authorize paid time off work for personal medical and dental appointments. In this example, a level 6 supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits."
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