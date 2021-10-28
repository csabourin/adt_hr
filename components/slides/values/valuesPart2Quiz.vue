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
      <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer="['1', '2', '3', '5']" /></b-tab>
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
      "text": "<p>The social committee has booked a team lunch at a favourite local spot to wish your manager a happy retirement before her last day. You mention to your colleague that you are looking forward to the event tomorrow. He tells you that he won’t be attending because the restaurant is only accessible by stairs. He also says that he provided his reason for declining and requested a wheelchair accessible venue, but has not received a response from the social committee.</p><p>Is your colleague experiencing harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Socially excluding or isolating someone is considered to be harassment and violence."
    },
    "q2": {
      "text": "As a manager, you must deal with issues related to harassment and violence when they first arise or you may be subject to disciplinary measures.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Despite preventive measures, harassment or the perception of harassment might still occur. Do not wait until an employee files a complaint. It is important to deal with issues related to harassment when they first arise, as management is ultimately responsible for providing a workplace free of harassment and ensuring the well-being of their employees."
    },
    "q3": {
      "text": "Which of the following is considered wrongdoing as defined under the <i>Public Servants Disclosure Protection Act</i>?",
      "options": {
        "1": "Breaking laws or regulations either deliberately or through negligence",
        "2": "Misusing public assets",
        "3": "Advising someone to use public funds for personal benefit",
        "4": "Limiting advancement opportunities for employees from equity-seeking groups",
        "5": "Endangering the lives or safety of Canadians through an action or omission"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Limiting advancement opportunities for employees from equity-seeking groups is not wrongdoing as defined under the <i>Public Servants Disclosure Protection Act</i>."
    },
    "q4": {
      "text": "<p>Dominic is First Nations Algonquin and is very proud of his culture. A colleague always refers to him as the Chief. Dominic has explained on multiple occasions that he doesn’t feel comfortable being called that. Dominic’s colleague laughs and says that it’s only a joke.</p><p>Does the colleague’s comment constitute harassment and violence?</p>",
      "options": {
        "1": "Yes",
        "2": "No",
        "3": "It depends"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "This is a case of harassment and violence. Dominic asked his colleague to stop referring to him as the Chief, but the colleague hasn’t stopped. In addition, appropriating cultural terminology for a joke is a form of discrimination."
    },
    "q5": {
      "text": "<p>Your employee Jean (they/them), a manager with no direct reports, occupies a position designated at risk of post-employment conflict of interest situations. Jean has recently received a firm offer of employment that could place them in a real, apparent or potential conflict of interest situation. If Jean accepts, they will quit the federal public service and commence work in 6 months.</p><p>What action do you first advise Jean to take?</p>",
      "options": {
        "1": "Disclose the situation to the deputy head.",
        "2": "Accept the offer immediately. Jean has no supervisory responsibilities.",
        "3": "Decline the offer. Jean is subject to the mandatory one-year limitation period."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Jean should disclose the situation to the deputy head before accepting the offer. The Directive on Conflict of Interest applies to all those who occupy positions designated at risk of post-employment conflict of interest situations, regardless of supervisory or managerial responsibilities. Jean is subject to the full one-year limitation period, but they could request that the deputy head waive the limitation period."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes.",
    "q1": {
      "text": "<p>Le comité social a planifié un dînerd’équipe dans un lieu local prisé pour souhaiter une bonne retraite à votre gestionnaire avant son dernier jour de travail. Vous mentionnez à votre collègue que vous attendez avec impatience l’événement, qui aura lieu le lendemain. Il vous dit qu’il ne pourra pas y participer, car le restaurant n’est accessible que par des escaliers. Il ajoute qu’il a expliqué son refus et demandé qu’on choisisse plutôt un lieu accessible aux fauteuils roulants, mais que le comité social ne lui a pas répondu.</p><p>Votre collègue est-il victime de harcèlement et de violence? </p>",
      "options": {
        "1": "Oui",
        "2": "Nom"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Le fait d’exclure ou d’isoler quelqu’un sur le plan social est considéré comme du harcèlement et de la violence"
    },
    "q2": {
      "text": "En tant que gestionnaire, vous devez gérer les situations de harcèlement et de violence dès qu’elles surviennent, sans quoi vous pourriez faire l’objet de mesures disciplinaires. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Malgré les mesures préventives, le harcèlement ou la perception de harcèlement peut toujours subsister. N’attendez pas que l’employé dépose une plainte. Il est important de traiter toute situation de harcèlement dès son apparition, car il incombe à la direction de fournir un milieu de travail exempt de harcèlement et d’assurer le bien-être des employés."
    },
    "q3": {
      "text": "Lequel des éléments suivants est considéré comme un acte répréhensible au sens de la <i>Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles</i>?",
      "options": {
        "1": "Contrevenir aux lois ou aux règlements, délibérément ou par négligence. ",
        "2": "Utiliser les biens publics de façon abusive.",
        "3": "Conseiller à quelqu’un d’utiliser les fonds publics à son propre avantage.",
        "4": "Limiter les possibilités d’avancement des employés issus des groupes en quête d’équité.",
        "5": "Mettre en danger la vie ou la sécurité des Canadiens par un geste ou une omission."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Limiter les possibilités d’avancement des employés issus des groupes en quête d’équité ne constitue pas un acte répréhensible au sens de la <i>Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles</i>."
    },
    "q4": {
      "text": "<p>Dominic est Algonquin et il est très fier de sa culture. Un collègue l’appelle toujours « Chef ». Dominic lui répète constamment qu’il ne se sent pas à l’aise d’être appelé ainsi. Le collègue de Dominic rit et explique que c’est seulement une blague.</p><p>Le commentaire du collègue constitue-t-il du harcèlement et de la violence?  </p>",
      "options": {
        "1": "Oui",
        "2": "Non",
        "3": "Ça dépend"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Il s’agit d’un cas de harcèlement et de violence. Dominic a demandé à son collègue de cesser de l’appeler « Chef », mais le collègue continue de le faire. Il faut aussi savoir que le fait d’utiliser des termes faisant référence à la culture pour faire des blagues constitue une forme de discrimination."
    },
    "q5": {
      "text": "<p>Une personne sous votre responsabilité,Jean (iel/ellui), est gestionnaire n’a aucun subalterne et occupe un poste susceptible de poser un risque de conflit d’intérêts d’après-mandat. Jean a reçu récemment d’une agence une offre d’emploi qui risque de causer une situation de conflit d’intérêts réel, apparent ou potentiel. Si Jean accepte l’offre, iel quittera la fonction publique fédérale et commencera à travailler six mois plus tard.</p><p>Quel est le premier conseil que vous donnerez à Jean?</p>",
      "options": {
        "1": "Divulguer la situation à l’administrateur général.",
        "2": "Accepter l’offre sur-le-champ. Jean n’a pas de tâches de supervision. ",
        "3": "Refuser l’offre. Jean doit se soumettre à la période de restriction obligatoire d’un an. "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Jean devrait faire part de la situation à l’administrateur général avant d’accepter l’offre. La Directive sur les conflits d’intérêts s’applique aux personnes qui occupent des postes susceptibles de poser un risque de conflit d’intérêts d’après-mandat, indépendamment des responsabilités de supervision ou de gestion. Jean doit se soumettre à une période de restriction d’un an complet, mais iel peut demander à l’administrateur général d’annuler cette période."
    }
  }
}</i18n>