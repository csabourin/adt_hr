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
  "instructions":"Answer the following questions. ",
    "q1": {
      "text": "Demand for your program’s services has increased substantially, and now everyone is required to work four night shifts per month. Brad is a single father of two young children, and he is unable to comply. Brad has requested accommodation based on family status. You are required to accommodate Brad.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Changes to a policy or requirement may cause an adverse impact on an employee. If the employee requests accommodation based on one or more of the prohibited grounds, the employer has a legal obligation to accommodate."
    },
    "q2": {
      "text": "The term “employment equity” refers to the concept of “equal pay for work of equal value” and allows different jobs within an establishment to be compared based on their similar value to the employer. ",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "This is the definition of the term “pay equity.” “Employment equity” in the federal public service means eliminating barriers to employment for four designated groups: women, Aboriginal peoples, persons with disabilities, and members of a visible minority group. It involves accommodating differences and it can require special measures to eliminate any identified barriers. "
    },
    "q3": {
      "text": "<p>For which of the following tasks are you responsible?</p>",
      "options": {
        "1": "Preparing an employment equity plan that specifies the measures to be taken to eliminate barriers to employment.",
        "2": "Considering employment equity as part of HR planning and applying your organization’s EE policies.",
        "3": "Both 1 and 2"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "You are responsible for considering employment equity as part of HR planning and applying your organization’s employment equity policies."
    },
    "q4": {
      "text": "<p>It is common to be drawn to others who share the same hobbies, interests and other pursuits. This is an expression of bias.</p>",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "This is an example of a type of bias called affinity bias. It can affect access to opportunities and career advancement."
    },
    "q5": {
      "text": "An employee who is consistently late for work is demonstrating a lack of commitment to the job.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "There could be a number of reasons why your employee is late for work. Making an assumption about their behaviour is a form of bias called conformity bias."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes.",
    "q1": {
      "text": "Vous avez observé une augmentation importante de la demande des services que votre programme fournit, et désormais, tous les employés doivent travailler de nuit quatre jours par mois. Brad est un père monoparental de deux jeunes enfants et ne peut pas travailler de nuit. Il a demandé des mesures d’adaptation en fonction de sa situation de famille. Vous devez prendre des mesures d’adaptation pour Brad. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Des changements apportés à une politique ou à une exigence peuvent avoir une incidence négative sur un employé. Si l’employé demande des mesures d’adaptation en fonction d’au moins un des motifs de distinction illicite, l’employeur a l’obligation, sur le plan légal, de prendre des mesures d’adaptation."
    },
    "q2": {
      "text": "L’expression « équité en matière d’emploi » renvoie au concept de « rémunération égale pour un travail égal » et signifie que divers postes dans une organisation sont comparés en fonction de leur valeur aux yeux de l’employeur. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Il s’agit de la définition de l’« équité salariale ». Au sein de la fonction publique fédérale, l’équité en matière d’emploi se traduit par l’élimination des obstacles à l’emploi pour les quatre groupes désignés : les femmes, les Autochtones, les personnes handicapées et les membres des minorités visibles. Elle suppose notamment qu’il faut s’adapter aux différences et peut exiger des mesures spéciales visant à éliminer les obstacles relevés. "
    },
    "q3": {
      "text": "Parmi les tâches suivantes, de laquelle êtes-vous responsable? ",
      "options": {
        "1": "Préparer un plan d’équité en matière d’emploi qui précise les mesures à prendre en vue d’éliminer les obstacles à l’emploi. ",
        "2": "Intégrer l’équité en matière d’emploi à la planification des RH et appliquer les politiques d’équité en matière d’emploi de votre organisation. ",
        "3": "1 et 2."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Vous êtes responsable de l’intégration de l’équité en matière d’emploi à la planification des RH et de l’application des politiques d’équité en matière d’emploi de votre organisation."
    },
    "q4": {
      "text": "Il n’est pas rare d’être attiré vers les personnes qui partagent nos passetemps et champs d’intérêt et avec qui nous avons d’autres points communs. Il s’agit d’une manifestation des préjugés. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "C’est un exemple de type de préjugé appelé « préjugé d’affinité ». Il peut avoir une incidence sur l’accès aux possibilités et sur l’avancement professionnel."
    },
    "q5": {
      "text": "Un employé qui arrive constamment en retard au travail fait preuve d’un manque d’engagement.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Un grand nombre de raisons pourraient expliquer pourquoi cet employé est en retard au travail. Le fait de porter un jugement sur son comportement est un type de préjugé appelé « préjugé de conformité."
    }
  }
}</i18n>