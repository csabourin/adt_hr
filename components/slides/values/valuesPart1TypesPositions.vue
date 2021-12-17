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
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
    "instructions":"Answer the following questions.",
    "q1": {
      "text": "<a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12602' target='_blank' alt='Link to the Guidelines on Managerial and Confidential Exclusions'>The Guidelines on Managerial and Confidential Exclusions</a> apply to all departments and agencies in the public service.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "These guidelines apply to departments and agencies listed under Schedules I and IV of the <i>Financial Administration Act</i> and for which the Treasury Board is identified as the employer."
    },
    "q2": {
      "text": "Michel is acting for his director, Fatiha, whose position is excluded. Fatiha is on leave for 6 weeks. Based on managerial exclusion, who is excluded.",
      "options": {
        "1": "Fatiha",
        "2": "Michel",
        "3": "Both are excluded"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Positions are excluded, not people. Michel, as the incumbent performing the duties of manager, is excluded."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes.",
    "q1": {
      "text": "<a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12602' target='_blank' alt='Lien vers les lignes directrices sur les exclusions de postes de direction et de confidentialité'>Les Lignes directrices sur les postes de direction ou de confiance exclus </a> s’appliquent à tous les ministères et les organismes de la fonction publique.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Ces lignes directrices s’appliquent aux ministères et aux organismes figurant aux annexes I et IV de <i>la Loi sur la gestion des finances publiques</i> et dont l’employeur est le Conseil du Trésor."
    },
    "q2": {
      "text": "Michel assure l’intérim de sa directrice, Fatiha, dont le poste est exclu. Fatiha est en congé pendant six semaines. Compte tenu de l’exclusion du poste de direction, qui est exclu? ",
      "options": {
        "1": "Fatiha",
        "2": "Michel",
        "3": "Les deux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Ce sont les postes qui sont exclus, et non les personnes. Michel, en tant que titulaire assumant les responsabilités de direction, est donc exclu."
    }
  }
}</i18n>