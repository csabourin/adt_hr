<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('takeTheQuiz')" />
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
      <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 9"><radioQuiz :question="$t('q9')" qId="9" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
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
    import fillTheBlanks from "~/components/interface/fillTheBlanks"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
            fillTheBlanks
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
  "instructions":"Test your knowledge by answering the following questions. Select “Submit” when you are done.",
  "takeTheQuiz": "<b>Take the Quiz</b>",
    "q1": {
      "text": "Which of the following documents supports good HR decision making?",
      "options": {
        "1": "HR plan",
        "2": "Performance agreements",
        "3": "Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The HR plan supports good HR decision making." 
    },
    "q2": {
      "text": "Deputy heads receive their HR authorities from which legislation?",
      "options": {
        "1": "<em>Financial Administration Act</em> and the <em>Public Service Employment Act</em>",
        "2": "<em>Public Service Administration Act</em> and the Policy on People Management",
        "3": "Policy on People Management and the Public Service Commission"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Deputy heads receive their HR authorities from the <em>Financial Administration Act</em> and the <em>Public Service Employment Act</em>."
    },
    "q3": {
      "text": "An individual may exercise delegated authorities once they have completed the necessary training.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is false. A person must occupy a position to which authorities are associated. They must also complete the necessary training and be granted signing authority by the deputy head."
    },
    "q4": {
      "text": "Once you have been delegated authorities, you will keep your delegation when you move to another position and/or department.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Delegated authority is associated with a position, not an individual."
    },
    "q5": {
      "text": "Establishing merit criteria, making deployments and accepting resignations are examples of authorities directly conferred to deputy heads through which legislation?",
      "options": {
        "1": "<em>Financial Administration Act</em>",
        "2": "<em>Public Service Employment Act</em>",
        "3": "Appointment Delegation and Accountability Instrument"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Establishing merit criteria, making deployments and accepting resignations are examples of authorities directly conferred to deputy heads through the <em>Public Service Employment Act</em>."
    },
    "q6": {
      "text": "Which of the following authorities is conferred directly to deputy heads through the <em>Financial Administration Act</em>?",
      "options": {
        "1": "Authority to lay off or retain employees",
        "2": "Authority to hire casual workers",
        "3": "Authority to hire consultants"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The authority to hire consultants is conferred directly to deputy heads through the <em>Financial Administration Act</em>."
    },
    "q7": {
      "text": "The ___________ specifies the authorities that are delegated to deputy heads by the Public Service Commission.",
      "options": {
        "1": "Policy on People Management",
        "2": "Appointment Delegation and Accountability Instrument",
        "3": "<em>Financial Administration Act</em>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The Appointment Delegation and Accountability Instrument specifies the authorities that are delegated to deputy heads by the Public Service Commission."
    },
    "q8": {
      "text": "A manager with sub-delegated HR authorities can sub-delegate these to a supervisor on their team.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "A manager with sub-delegated HR authorities cannot sub-delegate these to a supervisor on their team."
    },
    "q9": {
      "text": "Organizations use which document to confirm the level of authority needed to approve such HR activities as leave requests, job descriptions and performance agreement ratings?",
      "options": {
        "1": "Policy on People Management",
        "2": "Organizational Chart",
        "3": "Organizational HR Delegation Instrument"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Organizations use the Organizational HR Delegation Instrument to confirm the level of authority needed to approve such HR activities as leave requests, job descriptions and performance agreement ratings."
    }
  },
  "fr": {
  "instructions":"Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé. ",
  "takeTheQuiz": "<b>Répondez au quiz</b>",
    "q1": {
      "text": "Lequel des documents suivants favorise une prise de décision efficace en matière de RH? ",
      "options": {
        "1": "Plan des RH ",
        "2": "Ententes de rendement ",
        "3": "Plan ministériel "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Le plan des RH favorise une prise de décision efficace en matière de RH. "
    },
    "q2": {
      "text": "Quelles lois confèrent aux administrateurs généraux leurs pouvoirs en matière de RH? ",
      "options": {
        "1": "La <em>Loi sur la gestion des finances publiques</em> et la <em>Loi sur l’emploi dans la fonction publique</em>",
        "2": "La <em>Loi sur l’administration dans la fonction publique</em> et la Politique sur la gestion des personnes ",
        "3": "La Politique sur la gestion des personnes et la Commission de la fonction publique "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La <em>Loi sur la gestion des finances publiques</em> et la <em>Loi sur l’emploi dans la fonction publique</em> confèrent aux administrateurs généraux leurs pouvoirs en matière de RH."
    },
    "q3": {
      "text": "Une personne peut exercer ses pouvoirs délégués une fois qu’elle a suivi la formation nécessaire. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": " La réponse est Faux. Une personne doit occuper le poste auquel les pouvoirs sont associés. Elle doit aussi avoir suivi la formation nécessaire et avoir été investie du pouvoir de signature par l’administrateur général."
    },
    "q4": {
      "text": "Une fois que des pouvoirs vous ont été délégués, vous conservez ces pouvoirs lorsque vous changez de poste ou de ministère. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Les pouvoirs délégués sont associés à un poste et non à une personne."
    },
    "q5": {
      "text": " Établir des critères de mérite, effectuer des mutations et accepter des démissions sont des exemples de pouvoirs conférés directement aux administrateurs généraux. Quelle loi leur confère ces pouvoirs? ",
      "options": {
        "1": "La <em>Loi sur la gestion des finances publiques</em>",
        "2": "La <em>Loi sur l’emploi dans la fonction publique </em>",
        "3": "L’Instrument de délégation et de responsabilisation en matière de nomination "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Établir des critères de mérite, effectuer des mutations et accepter des démissions sont des exemples de pouvoirs conférés directement aux administrateurs généraux en vertu de la <em>Loi sur l’emploi dans la fonction publique</em>."
    },
    "q6": {
      "text": "Lequel des pouvoirs suivants est conféré directement aux administrateurs généraux par l’entremise de la <em>Loi sur la gestion des finances publiques</em>?",
      "options": {
        "1": "Le pouvoir de mettre en disponibilité ou de maintenir en poste des employés ",
        "2": "Le pouvoir d’embaucher des employés occasionnels ",
        "3": "Le pouvoir d’embaucher des experts-conseils "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Le pouvoir d’embaucher des experts-conseils est conféré directement aux administrateurs généraux en vertu de la <em>Loi sur la gestion des finances publiques</em>."
    },
    "q7": {
      "text": "Quel document présente les pouvoirs délégués aux administrateurs généraux par la Commission de la fonction publique?   ",
      "options": {
        "1": "La Politique sur la gestion des personnes ",
        "2": "L’Instrument de délégation et de responsabilisation en matière de nomination ",
        "3": "La <em>Loi sur la gestion des finances publiques </em>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "L’Instrument de délégation et de responsabilisation en matière de nomination présente les pouvoirs qui sont délégués aux administrateurs généraux par la Commission de la fonction publique."
    },
    "q8": {
      "text": "Un gestionnaire investi de pouvoirs subdélégués en matière de RH peut subdéléguer ses pouvoirs à un superviseur de son équipe. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Un gestionnaire investi de pouvoirs subdélégués en matière de RH ne peut pas subdéléguer ses pouvoirs à un superviseur de son équipe."
    },
    "q9": {
      "text": "Quel document utilisent les organisations pour confirmer le niveau décisionnel requis pour approuver des activités de RH comme des demandes de congé, des descriptions de travail et des cotes d’ententes de rendement? ",
      "options": {
        "1": "La Politique sur la gestion des personnes ",
        "2": "L’organigramme de l’organisation ",
        "3": "L’instrument de délégation des pouvoirs en matière de RH de l’organisation "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Les organisations utilisent leur instrument de délégation des pouvoirs en matière de RH de l’organisation pour confirmer le niveau décisionnel requis pour approuver des activités de RH comme des demandes de congé, des descriptions de travail et des cotes d’ententes de rendement."
    }
  }
}
</i18n>