<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
         <p v-html="$t('dyk')"></p>
         <p v-html="$t('linkdesc')"></p>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2"/></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3"/></b-tab>
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
    "dyk":"<p><b>Did you know?</b></p><p>The Directive on the Prevention and Resolution of Workplace Harassment and Violence does not only apply in the workplace. It also applies to activities sponsored by the employer, including conferences, training, information sessions, social events, and while on travel status.</p>",
    "linkdesc": "Using the <a href='https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention.html#definition' target='_blank' alt='Link to the Requirements for employers to prevent harassment and violence in federally regulated workplaces web page'>Requirements for employers to prevent harassment and violence in federally regulated workplaces</a> answer the following questions.",
    "q1": {
      "text": "<p>Amira is the lead on a priority project that is due soon.  According to the work plan, she is a little behind, but she says the next phase of the project can be done more quickly than anticipated. There are a lot of details to be finalized before you can present it to your director general, so you offer to help. Amira refuses your help and asks you to trust her. You are concerned about the timeline, so you ask Amira to give you a status update every Wednesday and Friday for the next 3 weeks. She is clearly annoyed, but says nothing.</p><p>Does your behaviour constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Requesting updates or status reports is not considered to be harassment and violence."
    },
    "q2": {
      "text": "<p>Your expertise is unique on your team, and a recent shift in organizational priorities has resulted in your director tasking you with several new files. It is a heavy workload, and there is no staffing budget to hire someone to help you.  Your director is aware of the situation, is helping you prioritize projects and is pushing for reasonable timelines with senior management, but there are no significant changes, and you feel that the workload is too much.</p><p>Does your director’s behaviour constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Assigning work and directing how and when it should be done is not considered to be harassment and violence."
    },
    "q3": {
      "text": "<p>Liang is a first-generation Canadian. She speaks with an accent, but takes the time to speak slowly and deliberately and focuses on speaking clearly. Her supervisor frequently corrects her pronunciation.</p><p>Does the supervisor’s repeated correction of Liang’s pronunciation constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "If Liang didn’t ask for correction, the behaviour could be considered harassment and violence. However, if Liang has asked her supervisor to help her improve her pronunciation by pointing out and correcting her errors, then the behaviour is not harassment and violence."
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