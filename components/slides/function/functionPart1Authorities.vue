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
  "instructions":"Use the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15772' target='_blank' alt='Link to the Terms and Conditions of Employment web page'>Directive on Terms and Conditions of Employment</a> to answer the following true-or-false questions.",
    "q1": {
      "text": "Not all sections of this directive apply to persons who are subject to terms and conditions of employment specific to their group.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "See section 2 of the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15772' target='_blank' alt='Link to the Terms and Conditions of Employment web page'>Directive on Terms and Conditions of Employment</a> for clarity on the application of this directive."
    },
    "q2": {
      "text": "When there is conflict or incompatibility between a provision of the collective agreement and the Treasury Board terms and conditions of employment policy instruments, the Treasury Board terms and conditions of employment policy instruments apply.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "In this situation, the provisions of the collective agreement apply. See section 3.3 of the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15772' target='_blank' alt='Link to the Terms and Conditions of Employment web page'>Directive on the Terms and Conditions of Employment</a> for clarity on the context of this directive."
    }
  },
  "fr": {
  "instructions":"Utilisez la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15772' target='_blank' alt='Lien vers la page web des conditions d'emploi'>Directive sur les conditions d’emploi</a> pour répondre aux questions suivantes, de type vrai ou faux.",
    "q1": {
      "text": "Ce ne sont pas toutes les sections de cette directive qui s’appliquent aux personnes assujetties aux conditions d’emploi propres à leur groupe. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Voir la section 2 de la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15772' target='_blank' alt='Lien vers la page web des conditions d'emploi'>Directive sur les conditions d’emploi</a> pour plus de précisions concernant l’application de cette directive."
    },
    "q2": {
      "text": "En cas de conflit ou d’incompatibilité entre une disposition de la convention collective et les instruments de politique du Conseil du Trésor concernant les conditions d’emploi, les instruments de politique du Conseil du Trésor concernant les conditions d’emploi s’appliquent. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Dans cette situation, les dispositions de la convention collective s’appliquent. Voir la section 3.3 de la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15772' target='_blank' alt='Lien vers la page web des conditions d'emploi'>Directive sur les conditions d’emploi</a> pour plus de précisions concernant le contexte de cette directive."
    }
  }
}</i18n>