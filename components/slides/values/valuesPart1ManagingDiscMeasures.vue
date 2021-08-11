<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		    <b-card>
            <div v-if="$i18n.locale=='en'">
                <p>Angela has been a member of the public service for 9 years and has demonstrated a good work ethic. In the last couple of months, you notice that she has missed several important deadlines and reacted very defensively when you approached her to talk about it.</p>
                <p>An employee overheard Angela’s comments to you and told you that for a number of weeks Angela has been unusually defensive and frequently rude. In addition, yesterday she found an email on the printer between Angela and someone at ExPRESScor, a company that submitted a bid for a community infrastructure project. The email had a familiar tone and contained some details of the selection process.</p>
            </div>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
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
    "q1": {
      "text": "<p>What is your <b>best</b> course of action in this situation?</p>",
      "options": {
        "1": "Speak to a labour relations advisor about your best course of action.",
        "2": "Consult the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27146' target='_blank' alt='Link to the Directive on Performance Management web page'>Directive on Performance Management</a> and document the situation.",
        "3": "Consult the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=22370' target='_blank' alt='Link to the Guidelines for Discipline web page'>Guidelines for Discipline</a> and document the situation.",
        "4": "Consult the <a href='https://laws-lois.justice.gc.ca/eng/acts/p-33.3/' target='_blank' alt='Link to the Federal Public Sector Labour Relations Act web page'><i>Federal Public Sector Labour Relations Act</i></a>."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Consulting policies and directives is helpful, but your labour relations advisor is better able to determine the best course of action."
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