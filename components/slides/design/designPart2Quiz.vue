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
      <b-tab title="Question 3"><br/><p v-html="$t('consultPolicy')" /><checkboxQuiz :question="$t('q3')" qId="3" :Answer="['1', '2']" /></b-tab>
      <b-tab title="Question 4"><checkboxQuiz :question="$t('q4')" qId="4" :Answer="['1', '2', '3']" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1', '3', '4']" /></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q6')" qId="6" :Answer="['2', '3', '5']" /></b-tab>
      <b-tab title="Question 7"><checkboxQuiz :question="$t('q7')" qId="7" :Answer="['2', '3', '4']" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=6">{{$t('nextPage')}}</b-button>
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
  "instructions":"<p>Test your knowledge by answering the following questions.</p> <p>Select “Submit” when you are done.</p><p>When developing an HR plan, you must incorporate HR strategies that will help meet the organization’s priorities. Decide whether the following are effective HR strategies.</p>",
  "takeTheQuiz": "<b>Take the Quiz</b>",
  "consultPolicy": "Consult the Policy on People Management, if needed.",
    "q1": {
      "text": "Focusing recruitment and development on key positions that generate significant competitive advantage is an effective HR strategy.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Focusing energy where it will have the greatest impact is an effective HR strategy."
    },
    "q2": {
      "text": "Creating an organizational structure focused on the knowledge and abilities of the staff is an effective HR strategy.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "An organizational structure should focus on the work that is required, not on the abilities of individuals."
    },
    "q3": {
      "text": "Which of the following are the roles and responsibilities of managers regarding HR planning?",
      "options": {
        "1": "Communicate and discuss HR plans with employees",
        "2": "Identify the skills required for key positions",
        "3": "Supervise employees in their official language of choice"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 1 and 2. Managers’ HR planning roles and responsibilities are to communicate and discuss HR plans with employees and identify the skills required for key positions. The responsibility for supervising employees in their official language of choice is a general management responsibility, not an HR planning responsibility."
    },
    "q4": {
      "text": "When developing your HR plan, you want to better understand the internal and external environment. Which documents should you consult?",
      "options": {
        "1": "Speech from the Throne",
        "2": "Departmental Plans",
        "3": "Annual report from the Clerk of the Privy Council"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p>The answer is: 1, 2 and 3. You should consult all of these sources of information to better understand your internal and external environment.</p><p>Other sources you could consult include:</p><ul><li>industry reports</li><li>your organization’s demographic analysis</li><li>responses to the Public Service Employee Survey</li></ul>"
    },
    "q5": {
      "text": "The <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32621&section=html' target='_blank' alt='Policy on People Management'>Policy on People Management</a> is a fundamental HR policy because:",
      "options": {
        "1": "It takes the place of more than a dozen previously existing policies",
        "2": "It explains how to develop and retain talented individuals",
        "3": "It outlines the responsibilities of deputy heads",
        "4": "It applies to everyone employed in the core public administration"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 1, 3 and 4. The Policy on People Management takes the place of more than a dozen previously existing policies, outlines the responsibilities of deputy heads, and applies to everyone employed in the core public administration."
    },
    "q6": {
      "text": "Identify the functions of effective HR planning.",
      "options": {
        "1": "Integrates your organization’s HR needs into the needs of the public service as a whole",
        "2": "Reflects business needs and strong people management practices",
        "3": "Identifies challenges and key risks to delivering on priorities, and outlines options for mitigation",
        "4": "Provides a means for dealing with conflict regarding respect and inclusivity",
        "5": "Establishes processes for measuring performance and progress towards the objectives"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 2, 3 and 5. Effective HR planning reflects business needs and strong people management practices, identifies challenges and key risks to delivering on priorities, outlines options for mitigation, and establishes processes for measuring performance and progress towards the objectives."
    },
    "q7": {
      "text": "Which of the following statements reflect a manager’s responsibilities regarding HR planning?",
      "options": {
        "1": "Identifying and eliminating barriers to employment to ensure equity and diversity in the workforce",
        "2": "Communicating the HR plan with critical and emerging gaps including succession planning strategies",
        "3": "Linking succession planning strategies to program and financial planning",
        "4": "Evaluating the effectiveness of the plan and adapting it as required",
        "5": "Redeploying individuals who are surplus in one area to a different area"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The answer is 2, 3 and 4. A manager’s HR planning responsibilities include communicating the HR plan with critical and emerging gaps including succession planning strategies, linking succession planning strategies to program and financial planning, and evaluating the effectiveness of the plan and adapting it as required."
    }
  },
  "fr": {
  "instructions":"<p>Évaluez vos connaissances en répondant aux questions suivantes.</p><p><b>Cliquez sur « Soumettre » lorsque vous avez terminé.</b></p><p>Lorsque vous élaborez un plan des RH, vous devez y incorporer des stratégies qui favoriseront la concrétisation des priorités de l’organisation. Décidez si les stratégies des RH suivantes sont efficaces.</p>",
  "takeTheQuiz": "<b>Répondez au quiz</b>",
  "consultPolicy": "Consultez la Politique sur la gestion des personnes au besoin.",
    "q1": {
      "text": "La concentration des efforts de recrutement et de perfectionnement dans les postes clés qui génèrent des avantages concurrentiels importants est une stratégie de RH efficace. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Concentrer l’énergie là où elle aura le plus d’incidence est une stratégie de RH efficace. "
    },
    "q2": {
      "text": "La création d’une structure organisationnelle axée sur les connaissances et les capacités du personnel est une stratégie de RH efficace. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Une structure organisationnelle doit être axée sur le travail à accomplir, et non sur les capacités des personnes."
    },
    "q3": {
      "text": "Parmi les choix suivants, lesquels sont des rôles et des responsabilités des gestionnaires à l’égard de la planification des RH?",
      "options": {
        "1": "Communiquer les plans des RH aux employés et en discuter avec eux. ",
        "2": "Déterminer les capacités requises pour les postes clés.  ",
        "3": "Superviser les employés dans la langue officielle de leur choix. "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " La réponse est 1 et 2. Les rôles et les responsabilités des gestionnaires à l’égard de la planification des RH consistent à communiquer les plans des RH aux employés et à en discuter avec eux de même qu’à déterminer les capacités requises pour les postes clés. Superviser un employé dans la langue officielle de son choix est plutôt une responsabilité générale de la direction, et non une responsabilité liée à la planification des RH. "
    },
    "q4": {
      "text": "Lorsque vous élaborez votre plan des RH, vous souhaitez mieux comprendre l’environnement interne et externe. Quels documents devriez-vous consulter? ",
      "options": {
        "1": "Discours du Trône ",
        "2": "Plans ministériels ",
        "3": "Rapport annuel du greffier du Conseil privé "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p> La réponse est 1, 2 et 3. Vous devriez consulter toutes ces sources d’information pour mieux comprendre vos environnements interne et externe.</p><p>Voici d’autres ressources que vous pouvez consulter. </p><ul><li>Rapports de l’industrie </li><li>Analyse démographique de votre organisation </li><li>Réponses au Sondage auprès des fonctionnaires fédéraux </li></ul>"
    },
    "q5": {
      "text": "La <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32621&section=html' target='_blank' alt='Politique sur la gestion des personnes'>Politique sur la gestion des personnes</a> est une politique fondamentale des RH, car :",
      "options": {
        "1": "Elle remplace plus d’une dizaine d’anciennes politiques.  ",
        "2": "Elle explique comment perfectionner et maintenir en poste des personnes talentueuses.  ",
        "3": "Elle présente les responsabilités des administrateurs généraux. ",
        "4": "Elle s’applique à toutes les personnes employées dans l’administration publique centrale.  "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La réponse est 1, 3 et 4. La Politique de gestion des personnes remplace plus d’une dizaine d’anciennes politiques, elle présente les responsabilités des administrateurs généraux et elle s’applique à toutes les personnes employées dans l’administration publique centrale."
    },
    "q6": {
      "text": "Choisissez les fonctions d’une planification des RH efficace.",
      "options": {
        "1": "Intégrer les besoins en RH de votre organisation aux besoins de l’ensemble de la fonction publique.  ",
        "2": "Tenir compte des besoins opérationnels ainsi que des pratiques solides de gestion du personnel. ",
        "3": "Cerner les obstacles de même que les risques principaux liés à la concrétisation des priorités et trouver un moyen de les atténuer. ",
        "4": "Fournir un moyen de gérer les conflits relatifs au respect et à l’inclusivité. ",
        "5": "Établir des processus de mesure du rendement et des progrès en lien avec les objectifs. "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La réponse est 2, 3 et 5. La planification efficace des RH tient compte des besoins opérationnels ainsi que des pratiques solides de gestion du personnel, elle cerne les obstacles de même que les risques principaux liés à la concrétisation des priorités et trouve un moyen de les atténuer, et elle établit des processus de mesure du rendement et des progrès en lien avec les objectifs."
    },
    "q7": {
      "text": "Parmi les réponses suivantes, lesquelles représentent les responsabilités des gestionnaires liées à la planification des RH? ",
      "options": {
        "1": "Cerner et éliminer les obstacles à l’emploi et ainsi garantir l’équité et la diversité de l’effectif.  ",
        "2": "Communiquer le plan des RH (qui peut comporter des écarts importants ou nouveaux), y compris les stratégies de planification de la relève. ",
        "3": "Lier les stratégies de planification de la relève à la planification de programmes et à la planification financière. ",
        "4": "Évaluer l’efficacité du plan et l’adapter au besoin. ",
        "5": "Muter les employés excédentaires d’un secteur à un autre.  "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La réponse est 2, 3 et 4. Les responsabilités du gestionnaire en matière de planification des RH sont notamment de communiquer le plan des RH (qui peut comporter des écarts importants ou nouveaux), y compris les stratégies de planification de la relève, de lier les stratégies de planification de la relève à la planification de programmes et à la planification financière de même que d’évaluer l’efficacité du plan et de l’adapter au besoin. "
    }
  }
}</i18n>