<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1">
        <hr style="display=none;">
        <p v-html="$t('instructions2')" />
        <fillTheBlanks :blanks="2" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['1', '3']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
        <fillTheBlanks :blanks="3" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['1', '3', '6']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
      </b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
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
    import fillTheBlanks from "~/components/interface/fillTheBlanks"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      matchingExercise,
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
  "instructions":"Answer the following questions. ",
  "instructions2": "Political activities can be divided into two categories: candidacy and non-candidacy.  ",
    "q1": {
      "sentence": "In the case of {0} permission from the Public Service Commission {1}.",
      "choices": {
        "1": "CANDIDACY",
        "2": "NON-CANDIDACY",
        "3": "IS REQUIRED",
        "4": "IS NOT REQUIRED"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "In advance of {0} a public servant {1} granted  permission by the {2}.",
      "choices": {
        "1": "CANDIDACY",
        "2": "NON-CANDIDACY",
        "3": "MUST BE",
        "4": "SHOULD BE",
        "5": "DEPUTY HEAD",
        "6": "PUBLIC SERVICE COMMISSION"
      },
      "feedback": {
        "right": "In the case of candidacy, permission from the Public Service Commission is required.",
        "wrong": "In the case of candidacy, permission from the Public Service Commission is required."
      }
    },
    "q3": {
      "text": "<p>Robert is a public servant who wants to state his support for a candidate by posting large campaign signs in his front yard.</p><p>Does Robert need to request permission from the Public Service Commission to engage in this political activity?</p>",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Employees are not required to request permission from the Public Service Commission to participate in non-candidacy political activities, such as activities to support or oppose a candidate or a political party. However, they are encouraged to consult their manager and their designated political activities representative about potentially real or perceived risks to political impartiality related to their public service duties."
    },
    "q4": {
      "text": "Is an employee’s political party affiliation a factor in the Public Service Commission’s decision to grant permission to seek nomination or to be a candidate in an election?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Political affiliation is neither requested nor considered in the Public Service Commission’s analysis of candidacy requests."
    }
  },
  "fr": {
  "instructions":"Évaluez vos connaissances en répondant aux questions suivantes.",
  "instructions2": "Les activités politiques peuvent être séparées en deux catégories : les activités liées à une candidature et les activités non liées à une candidature. ",
    "q1": {
      "sentence": "Il {0} d’obtenir la permission de la Commission de la fonction publique pour se livrer à une {1}.",
      "choices": {
        "1": "est nécessaire",
        "2": "n’est pas nécessaire",
        "3": "activité liée à une candidature",
        "4": "activité non liée à une candidature"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "Le fonctionnaire {0} obtenir la permission de {1} avant d’entreprendre une {2}.",
      "choices": {
        "1": "doit",
        "2": "devrait",
        "3": "l’administrateur général",
        "4": "la Commission de la fonction publique",
        "5": "activité liée à une candidature",
        "6": "activité non liée à une candidature"
      },
      "feedback": {
        "right": "In the case of candidacy, permission from the Public Service Commission is required.",
        "wrong": "In the case of candidacy, permission from the Public Service Commission is required."
      }
    },
    "q3": {
      "text": "<p>Robert est fonctionnaire et veut montrer son soutien à un candidat en installant de grandes affiches électorales dans sa cour avant.</p><p>Robert doit-il demander la permission à la Commission de la fonction publique pour se livrer à cette activité politique? </p>",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": " Les fonctionnaires n’ont pas à demander la permission à la Commission de la fonction publique pour se livrer à des activités politiques non liées à une candidature, notamment à une activité visant à soutenir un candidat ou un parti politique, ou à s’y opposer. Toutefois, les fonctionnaires sont invités à consulter leur gestionnaire et leur représentant désigné en matière d’activités politiques pour discuter des risques réels ou perçus pour l’impartialité politique en lien avec leur rôle de fonctionnaire."
    },
    "q4": {
      "text": "La Commission de la fonction publique considère-t-elle l’allégeance politique d’un fonctionnaire qui demande la permission de poser sa candidature à une élection ou d’être candidat à une élection?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "L’allégeance politique n’est ni demandée ni prise en considération lorsque la Commission de la fonction publique analyse une demande relative à une candidature."
    }
  }
}</i18n>