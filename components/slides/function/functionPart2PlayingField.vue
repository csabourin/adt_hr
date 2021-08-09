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
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
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
  "instructions":"To gain a better understanding of the three main pieces of legislation in the area of diversity, equity, inclusion and accessibility, read the definitions below and select the associated act.",
    "q1": {
      "text": "In order to achieve workplace equality, we must address the gaps we see between racialized and non-racialized groups to ensure greater equity and inclusion. This act prohibits all forms of discrimination in workplaces under federal jurisdiction and specifies the prohibited grounds of discrimination.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "The <i>Canadian Human Rights Act</i> prohibits all forms of discrimination in workplaces under federal jurisdiction and specifies the prohibited grounds of discrimination."
    },
    "q2": {
      "text": "This act requires employers to identify and eliminate employment barriers against persons in four designated groups, including visible minorities. This involves instituting positive policies and practices and making such reasonable accommodations as will ensure that the number of designated group members in each occupational group in the workforce reflects their representation in the Canadian workforce.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The <i>Employment Equity Act</i> requires employers to identify and eliminate employment barriers against persons in four designated groups, including visible minorities. This involves instituting positive policies and practices and making such reasonable accommodations as will ensure that the number of designated group members in each occupational group in the workforce reflects their representation in the Canadian workforce."
    },
    "q3": {
      "text": "This act will benefit everyone in Canada, especially persons with disabilities, by helping to create a barrier-free Canada through the proactive identification, removal and prevention of barriers to accessibility. It also gives the Government of Canada the authority to work with stakeholders and persons with disabilities to create new accessibility regulations, which will set out requirements for organizations to follow, enforcement measures, and a complaints mechanism.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The <i>Accessible Canada Act</i> act will benefit everyone in Canada, especially persons with disabilities, by helping to create a barrier-free Canada through the proactive identification, removal and prevention of barriers to accessibility. It also gives the Government of Canada the authority to work with stakeholders and persons with disabilities to create new accessibility regulations, which will set out requirements for organizations to follow, enforcement measures, and a complaints mechanism."
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