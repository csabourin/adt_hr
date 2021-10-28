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
      <b-tab title="Question 4"><checkboxQuiz :question="$t('q4')" qId="4" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q6')" qId="6" :Answer="['1', '2']" /></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 9"><radioQuiz :question="$t('q9')" qId="9" /></b-tab>
      <b-tab title="Question 10"><radioQuiz :question="$t('q10')" qId="10" /></b-tab>
      <b-tab title="Question 11"><checkboxQuiz :question="$t('q11')" qId="11" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 12"><checkboxQuiz :question="$t('q12')" qId="12" :Answer="['1', '3', '6']" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=11">{{$t('nextPage')}}</b-button>
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
  "instructions":"Answer the following questions. ",
    "q1": {
      "text": "Entering into a contract with a subject matter expert to meet short-term needs for specific technical skills is an effective HR strategy. ",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Employing contractors is an effective way to fill a need for specific skills."
    },
    "q2": {
      "text": "A reference check is ___________________________.",
      "options": {
        "1": "a condition of hire performed as the last step in a hiring process.",
        "2": "an assessment method used to assess a candidate’s qualifications.",
        "3": "necessary in all staffing actions to verify competencies."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p>A reference check is an assessment method used to assess a candidate’s qualifications.</p>"
    },
    "q3": {
      "text": "<p>You are a sub-delegated manager in a remote location who has been trying to staff a specialized position. In recent years, it has been difficult to attract and retain employees in your unit and experts are hard to find. Last week, you attended a conference in Vancouver and during a break, you met someone who works in the private sector and who has the expertise required for the vacant position in your team. Which staffing process could be used to appoint this person to this position?</p>",
      "options": {
        "1": "Deployment",
        "2": "Internal advertised",
        "3": "Secondment",
        "4": "External Non-advertised"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is External non-advertised."
    },
    "q4": {
      "text": "<p>What is/are the key element(s) to determine your staffing needs?</p>",
      "options": {
        "1": "business objectives",
        "2": "skills required for the position",
        "3": "organizational objectives, such as employment equity"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "All options are correct."
    },
    "q5": {
      "text": "Staffing priorities are guided by which of the following?",
      "options": {
        "1": "The Clerk of the Privy Council",
        "2": "The Treasury Board Secretariat",
        "3": "The Deputy Head"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Staffing priorities are guided by all of the above."
    },
    "q6": {
      "text": "Appointment processes are framed primarily by which of the following?",
      "options": {
        "1": "Legislation",
        "2": "Policy and directives",
        "3": "Speech from the Throne"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Staffing processes are framed primarily by legislation and policy and directives."
    },
    "q7": {
      "text": "As a manager, you have several staffing obligations. Complete the following statements. Managers can achieve employment equity, diversity and inclusion objectives by eliminating ___________________.",
      "options": {
        "1": "barriers",
        "2": "orders of precedence",
        "3": "application of merit"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "One way to achieve employment equity, diversity and inclusion is by eliminating barriers."
    },
    "q8": {
      "text": "A job advertisement could be posed only in English on the Government of Canada Public Service resourcing website (jobs.gc.ca) if the position to staff is in a unilingual region?",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Advertisements must be posted in both official languages regardless of the region in which the position is staffed."
    },
    "q9": {
      "text": "Managers must comply with legislative and policy__________.",
      "options": {
        "1": "obligations",
        "2": "requirements",
        "3": "directives"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Managers must comply with legislative and policy requirements."
    },
    "q10": {
      "text": "Managers must ____________ public sector values and ethics.",
      "options": {
        "1": "regulate",
        "2": "adhere to",
        "3": "implement"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Managers must adhere to public sector values and ethics."
    },
    "q11": {
      "text": "When conducting an appointment process, managers must respect_______________ .",
      "options": {
        "1": "The <i>Public Service Employment Act</i>",
        "2": "The Public Service Commision Appointment Policy",
        "3": "The organizational staffing framework"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "When conducting an appointment process, managers must respect all of the above."
    },
    "q12": {
      "text": "When staffing a position, managers should _____________.",
      "options": {
        "1": "Take into account employment equity objectives",
        "2": "Conduct a reference check",
        "3": "Determine who will be eligible to apply by establishing the area of selection",
        "4": "Open the job posting to the public as often as possible",
        "5": "Appointment based on competencies and best fit",
        "6": "Choose an appropriate staffing process"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "When staffing a position, managers should take into account employment equity objectives, determine who will be eligible to apply by establishing the area of selection, and choose an appropriate staffing process."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes.",
    "q1": {
      "text": "Attribuer un contrat à un expert en la matière afin de répondre aux besoins à court terme en matière de compétences techniques particulières constitue une stratégie de RH efficace.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Embaucher un employé contractuel est une manière efficace de combler un besoin en matière de compétences particulières."
    },
    "q2": {
      "text": "Une vérification des références est ___________________________. ",
      "options": {
        "1": "une condition d’embauche que l’on trouve à la dernière étape du processus d’embauche ",
        "2": "une méthode d’évaluation des qualifications d’une personne ayant participé à un processus ",
        "3": "une étape nécessaire dans le cadre de toutes les mesures de dotation aux fins de la vérification des compétences "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Une vérification des références est <strong>une méthode d’évaluation des qualifications d’une personne ayant participé à un processus.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong> Il s’agit d’<strong>une méthode d’évaluation des qualifications d’une personne ayant participé à un processus.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Une vérification des références est <strong>une méthode d’évaluation des qualifications d’une personne ayant participé à un processus.</strong>"
      }
    },
    "q3": {
      "text": "Vous êtes gestionnaire subdélégué dans une région éloignée et vous essayez de pourvoir un poste spécialisé. Depuis quelques années, il est difficile d’attirer des employés dans votre unité et de les maintenir en poste, et les experts se font rares. La semaine dernière, vous avez assisté à une conférence à Vancouver. Pendant une pause, vous avez rencontré quelqu’un qui travaille dans le secteur privé et qui possède l’expertise requise pour le poste vacant au sein de votre équipe. Quel processus de dotation pourrait servir à nommer cette personne à ce poste? ",
      "options": {
        "1": "Mutation ",
        "2": "Processus interne annoncé ",
        "3": "Détachement ",
        "4": "Processus externe non annoncé"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "La réponse est Processus externe non annoncé."
    },
    "q4": {
      "text": "Quel est ou quels sont les principaux éléments qui déterminent vos besoins en matière de dotation?",
      "options": {
        "1": "Objectifs opérationnels ",
        "2": "Compétences requises pour le poste",
        "3": "Objectifs organisationnels, comme l’équité en matière d’emploi "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Toutes les réponses s’appliquent."
    },
    "q5": {
      "text": "Parmi les intervenants suivants, qui établit les priorités en matière de dotation?",
      "options": {
        "1": "Le greffier du Conseil privé ",
        "2": "Le Secrétariat du Conseil du Trésor ",
        "3": "L’administrateur général "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Tous les intervenants ci-dessus établissent les priorités en matière de dotation."
    },
    "q6": {
      "text": "Les processus de nomination sont encadrés principalement par lequel des éléments suivants? ",
      "options": {
        "1": "Lois et règlements ",
        "2": "Politiques et directives",
        "3": "Discours du Trône "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les processus de dotation sont encadrés principalement par les lois et les règlements ainsi que par les politiques et les directives."
    },
    "q7": {
      "text": "<p>En tant que gestionnaire, vous avez plusieurs obligations en matière de dotation. Complétez les énoncés suivants. </p><p>Les gestionnaires peuvent atteindre les objectifs d’équité en matière d’emploi, de diversité et d’inclusion en éliminant ___________________. </p>",
      "options": {
        "1": "les obstacles ",
        "2": "les ordres de priorité ",
        "3": "l’application du mérite "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Une manière d’atteindre l’équité en matière d’emploi, la diversité et l’inclusion est d’éliminer les obstacles."
    },
    "q8": {
      "text": "Une annonce d’emploi peut être publiée seulement en anglais sur le site de recrutement de la fonction publique fédérale (emplois.gc.ca) si le poste à combler se trouve dans une région unilingue. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Les annonces d’emploi doivent être publiées dans les deux langues officielles, peu importe la région du poste à pourvoir."
    },
    "q9": {
      "text": "Les gestionnaires doivent respecter les__________ législatives et politiques.",
      "options": {
        "1": "obligations",
        "2": "exigences",
        "3": "directives"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les gestionnaires doivent respecter les exigences législatives et politiques."
    },
    "q10": {
      "text": "Les gestionnaires doivent ____________ les valeurs et les principes d’éthique du secteur public. ",
      "options": {
        "1": "réglementer",
        "2": "respecter",
        "3": "mettre en place"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les gestionnaires doivent respecter les valeurs et les principes d’éthique du secteur public."
    },
    "q11": {
      "text": "Lors d’un processus de nomination, les gestionnaires doivent respecter_______________. ",
      "options": {
        "1": "la Loi sur <i>l’emploi dans la fonction publique</i>",
        "2": "la Politique de nomination de la Commission de la fonction publique ",
        "3": "le cadre de dotation de l’organisation "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Lors d’un processus de nomination, les gestionnaires doivent respecter tous ces instruments."
    },
    "q12": {
      "text": "Lors de la dotation d’un poste, les gestionnaires doivent _____________. ",
      "options": {
        "1": "tenir compte des objectifs d’équité en matière d’emploi ",
        "2": "effectuer une vérification des références",
        "3": "déterminer qui pourra postuler en établissant la zone de sélection",
        "4": "permettre aussi souvent que possible au public de postuler ",
        "5": "nommer des personnes parce qu’elles ont les compétences requises et parce qu’elles sont les meilleures pour le poste",
        "6": "choisir un processus de dotation approprié"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Lors de la dotation d’un poste, les gestionnaires doivent tenir compte des objectifs d’équité en matière d’emploi, déterminer qui pourra postuler en établissant la zone de sélection et choisir un processus de dotation approprié."
    }
  }
}</i18n>