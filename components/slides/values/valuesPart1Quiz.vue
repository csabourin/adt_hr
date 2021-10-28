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
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '3', '4', '6']" /></b-tab>
      <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
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
  "instructions":"Answer the quiz.",
    "q1": {
      "text": "<p>Tina would like to work from 6:00 am to 2:00 pm to avoid heavy traffic in her commute. Use the <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-eng.aspx?id=15' target='_blank' alt='Link to the Program and Administrative Services collective agreement web page'>Program and Administrative Services collective agreement</a> to help you decide if you should approve Tina’s request.</p>",
      "options": {
        "1": "Approve the request.",
        "2": "Approve the request after verifying that other employees will be available to meet operational requirements after 2:00 pm.",
        "3": "Deny the request because she could take the bus to work.",
        "4": "Deny the request because the normal workday is between 7:00 am and 6:00 pm."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You should deny the request because the normal workday is between 7:00 am and 6:00 pm. See clause 25.08 in the collective agreement."
    },
    "q2": {
      "text": "John has requested leave with pay to take care of his father who is ill and lives in a long-term care home. Use the <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-eng.aspx?id=15' target='_blank' alt='Link to the Program and Administrative Services collective agreement web page'>Program and Administrative Services collective agreement</a> to help you decide if you should approve John’s request.",
      "options": {
        "1": "Approve the request. Family-related leave applies to parents, whether or not they reside with the employee.",
        "2": "Refuse the request. Family-related leave applies to parents only if they reside with the employee."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The need to provide care to a parent qualifies for leave with pay for family-related responsibilities, whether or not the parent resides with the employee. See article 44.01 in the collective agreement."
    },
    "q3": {
      "text": "<p>Using the <a href='https://www.njc-cnm.gc.ca/directive/d7/v23/s252/en#s252-tc-tm_3' target='_blank' alt='Link to the Occupational Health and Safety Directive web page'>Occupational Health and Safety Directive</a>, answer the following question.</p><p>What is the ideal temperature range for the office during work hours?</p>",
      "options": {
        "1": "18 to 22°C",
        "2": "17 to 24°C",
        "3": "19 to 24°C",
        "4": "20 to 26°C"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You are responsible for considering employment equity as part of HR planning and applying your organization’s employment equity policies."
    },
    "q4": {
      "text": "<p>As a manager, if you receive a grievance from an employee, what should you do?</p>",
      "options": {
        "1": "Acknowledge receipt of the grievance to the employee and forward it to the person in your organization who is responsible for handling grievances.",
        "2": "Speak to the employee to gain a better understanding of their grievance.",
        "3": "Speak to the employees involved to find a resolution."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Acknowledge receipt of the grievance to the employee and forward it to the person in your organization who is responsible for handling grievances."
    },
    "q5": {
      "text": "According to the <a href='' target='_blank' alt='Link to the guide to the key elements of an ICMS in the core public administration web page'>guide to the key elements of an ICMS in the core public administration</a>, which of the following are informal conflict management system (ICMS) best practices?",
      "options": {
        "1": "Create a culture that encourages resolution of conflict at the lowest level through face-to-face dialogue between the parties in conflict.",
        "2": "Make available conflict management training for managers and employees to address conflicts.",
        "3": "Offer the name of more than one person to ensure employees have access to a trusted and knowledgeable ICMS person.",
        "4": "Make available informal processes such as coaching and mediation for addressing conflict.",
        "5": "Make available stress management resources and training to de-escalate conflict.",
        "6": "Provide procedures to allow employees to move from formal processes to informal processes, if they wish to do so."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Training should be available in advance of conflicts, not to address conflicts, and stress management resources and training are not identified in the list of best practices. All other responses are correct."
    },
    "q6": {
      "text": "The Treasury Board alone determines the terms and conditions of collective agreements.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is False. The Treasury Board negotiates terms and conditions of employment and compensation for unionized employees with their respective bargaining agents and determines compensation for non‑unionized employees."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes.",
    "q1": {
      "text": "<p>Tina aimerait travailler de 6 h à 14 h pour éviter les embouteillages. Utilisez la <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-fra.aspx?id=15' target='_blank' alt='Lien vers la page Web de la convention collective des Services des programmes et de l'administration'>convention collective des Services des programmes et de l’administration</a> pour décider si vous devriez approuver la demande de Tina.</p>",
      "options": {
        "1": "Approuver la demande.",
        "2": "Approuver la demande après avoir vérifié que d’autres employés seront présents pour répondre aux besoins opérationnels après 14 h.",
        "3": "Refuser demande parce que Tina pourrait prendre l’autobus pour se rendre au travail.",
        "4": "Refuser la demande, car les heures de travail doivent se situer entre 7 h et 18 h. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous devriez refuser la demande, car les heures de travail doivent se siter entre de 7 h et 18 h. Voir l’article 25.08 de la convention collective."
    },
    "q2": {
      "text": "John a demandé un congé payé pour prendre soin de son père, qui est malade et vit dans un foyer de soins de longue durée. Utilisez la <a href='https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-fra.aspx?id=15' target='_blank' alt='Lien vers la page Web de la convention collective des Services des programmes et de l'administration'>convention collective des Services des programmes et de l’administration</a> pour décider si vous devriez approuver la demande de John.",
      "options": {
        "1": "Approuver la demande. Le congé pour raisons familiales s’applique aux parents, qu’ils résident ou non avec l’employé. ",
        "2": "Rejeter la demande. Le congé pour raisons familiales ne s’applique aux parents que s’ils résident avec l’employé."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Lorsque des soins doivent être donnés à un parent, un employé a droit à un congé payé pour obligations familiales, que le parent en question réside ou non avec l’employé. Voir l’article 44.01 de la convention collective."
    },
    "q3": {
      "text": "<p>Répondez à la question suivante à l’aide de la <a href='https://www.njc-cnm.gc.ca/directive/d7/v23/s252/fr#s252-tc-tm_3' target='_blank' alt='Lien vers la page web de la directive sur la santé et la sécurité au travail'>Directive sur la santé et la sécurité au travail</a>.</p><p>Quel est l’intervalle de température idéal pour le bureau pendant les heures de travail?</p>",
      "options": {
        "1": "De 18 °C à 22 °C",
        "2": "De 17 °C à 24 °C",
        "3": "De 19 °C à 24 °C ",
        "4": "De 20 °C à 26 °C "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "La température idéale est de 20 °C à 26 °C. Voir l’article 2.2.2 de la Directive."
    },
    "q4": {
      "text": "<p>En tant que gestionnaire, si vous recevez un grief d’un employé, que devez-vous faire? </p>",
      "options": {
        "1": "Accuser réception du grief et le transmettre à la personne responsable du traitement des griefs dans votre organisation. ",
        "2": "Parler à l’employé afin de mieux comprendre son grief. ",
        "3": "Parler aux employés concernés afin de trouver une solution."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Accuser réception du grief et le transmettre à la personne responsable du traitement des griefs dans votre organisation."
    },
    "q5": {
      "text": "Selon le <a href='https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/prevention-resolution-harcelement/systeme-gestion-informelle-conflits/guide-principaux-elements-sgic-administration-publique-centrale.html' target='_blank' alt='Lien vers le guide des éléments clés d'un SGIC dans la page web de l'administration publique centrale'>Guide des principaux éléments d’un SGIC dans l’administration publique centrale</a>, lesquels des éléments suivants constituent des pratiques exemplaires en matière de système de gestion informelle des conflits (SGIC)?",
      "options": {
        "1": "Créer une culture propice à la résolution des conflits, au plus bas niveau possible, en favorisant le dialogue entre les parties.  ",
        "2": "Offrir aux gestionnaires et aux employés une formation sur la gestion des conflits. ",
        "3": "Proposer aux employés plusieurs personnes pour qu’ils aient accès à une personne digne de confiance qui connaît bien le SGIC. ",
        "4": "Mettre à la disposition des employés des processus informels, comme l’encadrement et la médiation, en vue de traiter les conflits. ",
        "5": "Mettre à la disposition des employés des ressources de gestion du stress et des formations afin de désamorcer les conflits. ",
        "6": "Prévoir des procédures pour que les employés puissent passer d’un processus formel à un processus informel, s’ils le souhaitent.  "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Une formation devrait être offerte avant les conflits au lieu de servir à les régler. Les ressources et la formation concernant la gestion du stress ne figurent pas dans la liste des pratiques exemplaires. Toutes les autres réponses sont correctes. "
    },
    "q6": {
      "text": "Le Conseil du Trésor détermine seul les modalités des conventions collectives. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "La réponse est Faux. Le Conseil du Trésor négocie les conditions d’emploi et la rémunération des employés syndiqués avec les agents négociateurs concernés et détermine la rémunération des employés non syndiqués. "
    }
  }
}</i18n>