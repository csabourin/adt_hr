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
  "instructions":"To gain a better understanding of the three main pieces of legislation in the area of diversity, equity, inclusion and accessibility, read the definitions below and select the associated act.",
    "q1": {
      "text": "In order to achieve workplace equality, we must address the gaps we see between racialized and non-racialized groups to ensure greater equity and inclusion. This act prohibits all forms of discrimination in workplaces under federal jurisdiction and specifies the prohibited grounds of discrimination.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q2": {
      "text": "This act requires employers to identify and eliminate employment barriers against persons in four designated groups, including visible minorities. This involves instituting positive policies and practices and making such reasonable accommodations as will ensure that the number of designated group members in each occupational group in the workforce reflects their representation in the Canadian workforce.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q3": {
      "text": "This act will benefit everyone in Canada, especially persons with disabilities, by helping to create a barrier-free Canada through the proactive identification, removal and prevention of barriers to accessibility. It also gives the Government of Canada the authority to work with stakeholders and persons with disabilities to create new accessibility regulations, which will set out requirements for organizations to follow, enforcement measures, and a complaints mechanism.",
      "options": {
        "1": "<i>Accessible Canada Act</i>",
        "2": "<i>Canadian Human Rights Act</i>",
        "3": "<i>Employment Equity Act</i>"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    }
  },
  "fr": {
  "instructions":"Pour mieux comprendre les trois principales lois relatives à la diversité, à l’équité, à l’inclusion et à l’accessibilité, lisez chaque définition ci-dessous et choisissez la loi qui lui correspond. ",
    "q1": {
      "text": "Pour parvenir à l’égalité en milieu de travail, nous devons combler les écarts observables entre les groupes racisés et non racisés, ce qui renforcera l’équité et l’inclusion. Cette loi interdit toute forme de discrimination dans les lieux de travail de compétence fédérale, et précise les motifs de distinction illicite. ",
      "options": {
        "1": "<i>Loi canadienne sur l’accessibilité </i>",
        "2": "<i>Loi canadienne sur les droits de la personne </i>",
        "3": "<i>Loi sur l’équité en matière d’emploi </i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q2": {
      "text": "Cette loi exige que les employeurs repèrent et éliminent les obstacles à l’emploi pour les personnes faisant partie des quatre groupes désignés, y compris les minorités visibles. Il faut notamment adopter des politiques et des pratiques positives et prendre des mesures d’adaptation raisonnables. Ces dernières font en sorte que le nombre de personnes faisant partie d’un groupe désigné dans chaque catégorie professionnelle de l’effectif est représentatif de la population active du Canada. ",
      "options": {
        "1": "<i>Loi canadienne sur l’accessibilité </i>",
        "2": "<i>Loi canadienne sur les droits de la personne </i>",
        "3": "<i>Loi sur l’équité en matière d’emploi </i>"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q3": {
      "text": "Cette loi profite à l’ensemble des Canadiens et des Canadiennes, en particulier aux personnes handicapées, puisqu’elle aide à faire du Canada un pays exempt d’obstacles grâce à des mesures proactives de repérage, d’élimination et de prévention des obstacles à l’accessibilité. Elle permet aussi au gouvernement du Canada de collaborer avec les intervenants et les personnes handicapées à la création de nouveaux règlements sur l’accessibilité. Ces derniers établiront les mesures d’application, un mécanisme de traitement des plaintes et les exigences que devront respecter les organisations.",
      "options": {
        "1": "<i>Loi canadienne sur l’accessibilité </i>",
        "2": "<i>Loi canadienne sur les droits de la personne </i>",
        "3": "<i>Loi sur l’équité en matière d’emploi </i>"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    }
  }
}</i18n>