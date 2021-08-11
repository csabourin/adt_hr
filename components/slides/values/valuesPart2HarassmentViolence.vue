<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <br />
          <p v-html="$t('matchInstructions')" />
          <matchingExercise :question="$t('q1')" qId="1" :feedback="$t('q1.feedback')" />
        </b-tab>
    </b-tabs>
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
  "instructions":"Now that you know more about organization and classification, test your knowledge by answering the following questions.",
  "matchInstructions": "Making the links between organization and classification and other HR disciplines will help guide you in the following activities. Match the sentence segments.",
    "q1": {
      "dotsRight": [
        "Employees who experience an occurrence of harassment and violence in the workplace (principal party), or who witness such an occurrence, must notify the employer or the Harassment and Violence Prevention Unit. They will be asked to complete a form identifying the principal party involved (if known) as well as the details of the occurrence. The identities of the parties involved in the resolution process are held in the strictest of confidence, but may be revealed to each other as part of the resolution process.",
        "This is an informal process where the principal party meets with the employer or the Harassment and Violence Prevention Unit to discuss the occurrence, clarify what was submitted on the form, and compare the occurrence to the definition of harassment and violence in the Canada Labour Code. Once this has been done, the principal party may continue with negotiated resolution, or pursue conciliation and/or an investigation.",
        "A principal party and responding party may engage in conciliation at any time during the resolution process, if they wish, by informing the Harassment and Violence Prevention Unit, who will then facilitate discussion.",
        "The principal party may request an investigation at any time during the resolution process. Should they request an investigation, the Harassment and Violence Prevention Unit will inform all parties and select an investigator. The investigator will conclude the investigation with a report of their findings, including their recommendations to eliminate or minimize the risk of a similar occurrence from happening in the future."
      ],
      "dotsLeft": [
        "Notice of an occurrence",
        "Negotiated resolution",
        "Conciliation",
        "Investigation"
      ],
      "conclusion": "<p><a href='https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf' target='_blank' alt='Link to the Senate Harassment and Violence Prevention Policy file'>Please consult the Senate Harassment and Violence Prevention Policy</a> for a full description of the resolution process.</p><p><b>Did you know?</b></p><p>An employee may have a union representative, friend, spouse, colleague or person of their choice present at any time during the resolution process.</p>"
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