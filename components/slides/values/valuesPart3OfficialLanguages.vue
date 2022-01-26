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
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=9">{{$t('nextPage')}}</b-button>
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
  "instructions":"In which region (for the purposes of language of work) do deputy heads or their delegates have the following responsibilities? Identify whether the region is unilingual or bilingual for each statement.",
    "q1": {
      "text": "Communications and services to employees are in both official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q2": {
      "text": "Employees who occupy bilingual positions have email signature blocks, voicemail messages and automated messages that are complete in each of the two official languages.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Communications and services intended exclusively for employees in unilingual regions are in the official language of the province or territory in which the region is located.",
      "options": {
        "1": "Unilingual region",
        "2": "Bilingual region"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": ""
    }
  },
  "fr": {
  "instructions":"Dans quelle région (aux fins de la langue de travail) les administrateurs généraux ou leurs délégués ont-ils les responsabilités suivantes? Pour chaque énoncé, déterminez si la région est unilingue ou bilingue. ",
    "q1": {
      "text": "Les communications avec les employés et la prestation des services se font dans les deux langues officielles.",
      "options": {
        "1": "Région unilingue",
        "2": "Région bilingue "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q2": {
      "text": "Les employés occupant un poste bilingue ont un bloc‑signature de courriel, un message de boîte vocale et un message de réponse automatique entièrement bilingues (dans les deux langues officielles).",
      "options": {
        "1": "Région unilingue",
        "2": "Région bilingue "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Les communications et les services destinés exclusivement aux employés des régions unilingues sont offerts dans la langue officielle de la province ou du territoire en question.",
      "options": {
        "1": "Région unilingue",
        "2": "Région bilingue "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": ""
    }
  }
}</i18n>