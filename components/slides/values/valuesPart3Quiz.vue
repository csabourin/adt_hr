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
  "instructions":"Answer the following questions.",
    "q1": {
      "text": "As a French-speaking manager working in a bilingual region for language-of-work purposes, my employee, who occupies a bilingual position, has the right to choose English as the language of communication between us.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "In bilingual regions for the purposes of language of work, employees occupying bilingual positions and either/or positions have the right to be supervised in their official language of choice."
    },
    "q2": {
      "text": "In bilingual regions for language-of-work purposes, all employees can record an out-of-office message in the language of their choice.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "In bilingual regions for language-of-work purposes, employees who occupy bilingual positions must have email signature blocks, voicemail messages, and automated messages that are complete in each of the two official languages."
    },
    "q3": {
      "text": "An office may be designated bilingual for services to the public even if it is located in a unilingual region.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "If you are not sure if your office is required to provide services in both official languages, consult the Burolis database."
    },
    "q4": {
      "text": "A manager can change the language profile of a position to help increase the number of suitable applicants.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Managers are responsible for ensuring that the language requirement reflects the functions and duties related to the position."
    },
    "q5": {
      "text": "You work in a bilingual region for language-of-work purposes and you hire a student who receives a computer with English Microsoft Office software. The student asks you for a computer with French Microsoft Office software, but you are not obligated to provide a student with software in the language they request.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "In bilingual regions for language-of-work purposes, managers and supervisors are responsible for providing all employees with regularly and widely used work instruments and electronic systems in both official languages."
    }
  },
  "fr": {
  "instructions":"Évaluez vos connaissances en répondant aux questions suivantes. ",
    "q1": {
      "text": "Si je suis une gestionnaire francophone et que je travaille dans une région bilingue aux fins de la langue de travail, mon employé qui occupe un poste bilingue a tout de même le droit de s’exprimer en anglais avec moi.  ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Dans les régions bilingues aux fins de la langue de travail, les employés qui occupent un poste bilingue ou un poste réversible ont le droit d’être supervisés dans la langue officielle de leur choix."
    },
    "q2": {
      "text": "Dans les régions bilingues aux fins de la langue de travail, tous les employés peuvent enregistrer un message d’absence dans la langue de leur choix.  .",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Dans les régions bilingues aux fins de la langue de travail, les employés qui occupent un poste bilingue doivent avoir un bloc‑signature de courriel, un message de boîte vocale et un message d’absence automatique entièrement bilingues (dans les deux langues officielles)."
    },
    "q3": {
      "text": "Un bureau peut être désigné bilingue aux fins de prestation de services au public même s’il est situé dans une région unilingue.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Si vous ne savez pas si votre bureau doit fournir des services dans les deux langues officielles, consultez la base de données Burolis."
    },
    "q4": {
      "text": "Un gestionnaire peut changer le profil linguistique d’un poste pour augmenter le nombre de candidats pouvant se qualifier.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Les gestionnaires doivent faire en sorte que le profil des postes correspond aux compétences linguistiques nécessaires à l’exercice des fonctions et des tâches de ces postes."
    },
    "q5": {
      "text": "Vous travaillez dans une région bilingue aux fins de la langue de travail et vous embauchez un étudiant qui reçoit un ordinateur sur lequel est installée la suite Microsoft Office en anglais. L’étudiant vous demande la version française, mais vous n’êtes pas obligé de fournir à l’étudiant les logiciels dans la langue de son choix.  ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Dans les régions bilingues aux fins de la langue de travail, les gestionnaires et les superviseurs sont responsables de mettre à la disposition des employés des instruments de travail et des systèmes informatiques d’usage courant et généralisé dans les deux langues officielles."
    }
  }
}</i18n>