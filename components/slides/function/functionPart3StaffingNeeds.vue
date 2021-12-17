<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" /><hr>
          <radioQuiz :question="$t('q2')" qId="2" /><hr>
          <radioQuiz :question="$t('q3')" qId="3" /><hr>
          <radioQuiz :question="$t('q4')" qId="4" /><hr>
        </b-tab>
        <b-tab title="Question 2">           
          <radioQuiz :question="$t('q5')" qId="5" /><hr>
          <radioQuiz :question="$t('q6')" qId="6" /><hr>
          <radioQuiz :question="$t('q7')" qId="7" /><hr>
          <radioQuiz :question="$t('q8')" qId="8" /><hr>
        </b-tab>
      <b-tab title="Question 3">
          <radioQuiz :question="$t('q9')" qId="9" /><hr>
          <radioQuiz :question="$t('q10')" qId="10" /><hr>
          <radioQuiz :question="$t('q11')" qId="11" /><hr>
          <radioQuiz :question="$t('q12')" qId="12" /><hr>
      </b-tab>
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
    import matchingExercise from "~/components/interface/matchingExercise"
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
  "instructions":"There are quite literally a dozen options available to you when you need to staff a position. Select the type of staffing process that corresponds to each description. ",
    "q1": {
      "text": "Open to the public and public servants ",
      "options": {
        "1": "Internal Appointment ",
        "2": "External Appointment ",
        "3": "Student Appointment  ",
        "4": "Term Employment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q2": {
      "text": "Exempted from the application of merit, priority appointments and other provisions under the PSEA ",
      "options": {
        "1": "Internal Appointment ",
        "2": "External Appointment ",
        "3": "Student Appointment  ",
        "4": "Term Employment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q3": {
      "text": "Open only to public servants. These appointments are used for acting assignments, promotions and other types of recruitment within the public service.",
        "options": {
        "1": "Internal Appointment ",
        "2": "External Appointment ",
        "3": "Student Appointment ",
        "4": "Term Employment "
      },
      "feedback": {
         "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q4": {
      "text": "An appointment for a specific period, governed by the TBS Term Employment Policy ",
      "options": {
        "1": "Internal Appointment ",
        "2": "External Appointment ",
        "3": "Student Appointment",
        "4": "Term Employment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q5": {
      "text": "A temporary appointment to a higher-level position available to term and indeterminate employees. ",
      "options": {
        "1": "Acting Appointment ",
        "2": "Assignment ",
        "3": "Deployment ",
        "4": "Secondment "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q6": {
      "text": "Transferring to another position at level or below, within or between organizations; this person no longer occupies their previous position.",
       "options": {
        "1": "Acting Appointment ",
        "2": "Assignment ",
        "3": "Deployment ",
        "4": "Secondment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q7": {
      "text": "Used for capacity building or career development, this is the temporary movement of an employee to another organization.",
       "options": {
        "1": "Acting Appointment ",
        "2": "Assignment ",
        "3": "Deployment ",
        "4": "Secondment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q8": {
      "text": "Moving to another position at level or below, within or between organizations, this person still occupies their previous position ",
      "options": {
        "1": "Acting Appointment ",
        "2": "Assignment ",
        "3": "Deployment ",
        "4": "Secondment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q9": {
      "text": "Used ahead of most other internal and external appointment options.",
      "options": {
        "1": "Casual",
        "2": "Interchange Canada ",
        "3": "Temporary Help ",
        "4": "Priority Appointment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q10": {
      "text": "Used to meet short-term operational requirements; merit and eligibility for internal appointment processes do not apply to these workers.",
       "options": {
        "1": "Casual",
        "2": "Interchange Canada ",
        "3": "Temporary Help ",
        "4": "Priority Appointment "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q11": {
      "text": "Used to meet short-term operational requirements these workers are employees of a firm that is hired to provide services on a temporary basis. ",
       "options": {
        "1": "Casual",
        "2": "Interchange Canada ",
        "3": "Temporary Help ",
        "4": "Priority Appointment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q12": {
      "text": "Used ahead of most other internal and external appointment options. ",
       "options": {
        "1": "Casual",
        "2": "Interchange Canada ",
        "3": "Temporary Help ",
        "4": "Priority Appointment "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    }
  },
  "fr": {
  "instructions":"Il y a littéralement une dizaine d’options qui s’offrent à vous quand vous devez pourvoir un poste. Choisissez le type de processus de dotation qui correspond à chaque description.",
     "q1": {
      "text": "Nomination ouverte au public et aux fonctionnaires. ",
      "options": {
        "1": "Nomination interne",
        "2": "Nomination externe ",
        "3": "Nomination d’un étudiant ",
        "4": "Nomination pour une période déterminée  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q2": {
      "text": "Nomination exemptée de l’application du principe de mérite, des droits de priorité et d’autres dispositions de la <i>Loi sur l’emploi dans la fonction publique</i>. ",
      "options": {
       "1": "Nomination interne",
        "2": "Nomination externe ",
        "3": "Nomination d’un étudiant ",
        "4": "Nomination pour une période déterminée  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q3": {
      "text": "Nomination ouverte seulement aux fonctionnaires. Ces nominations sont utilisées pour les nominations intérimaires, les promotions et les autres types d’activités de recrutement dans la fonction publique. ",
        "options": {
        "1": "Nomination interne",
        "2": "Nomination externe ",
        "3": "Nomination d’un étudiant ",
        "4": "Nomination pour une période déterminée  "
      },
      "feedback": {
         "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      }
    },
    "q4": {
      "text": "Nomination d’une durée précise régie par la Politique sur l’emploi pour une période déterminée du Secrétariat du Conseil du Trésor.",
      "options": {
       "1": "Nomination interne",
        "2": "Nomination externe ",
        "3": "Nomination d’un étudiant ",
        "4": "Nomination pour une période déterminée  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q5": {
      "text": "Nomination temporaire à un poste de niveau supérieur offerte aux employés nommés pour une période déterminée ou pour une période indéterminée.",
      "options": {
        "1": "Nomination intérimaire ",
        "2": "Affectation  ",
        "3": "Mutation  ",
        "4": "Détachement  "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q6": {
      "text": "Déplacement d’une personne à un poste du même niveau ou d’un niveau inférieur, au sein de l’organisation ou dans une autre organisation. Cette personne n’occupe plus son poste précédent. ",
       "options": {
         "1": "Nomination intérimaire ",
        "2": "Affectation  ",
        "3": "Mutation  ",
        "4": "Détachement  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q7": {
      "text": "Nomination permettant à une personne de renforcer ses capacités et de poursuivre son perfectionnement professionnel. L’employé est déplacé temporairement dans une autre organisation. ",
       "options": {
         "1": "Nomination intérimaire ",
        "2": "Affectation  ",
        "3": "Mutation  ",
        "4": "Détachement  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q8": {
      "text": "Déplacement d’une personne à un autre poste du même niveau ou d’un niveau inférieur, au sein de l’organisation ou dans une autre organisation. Cette personne occupe encore son poste précédent. ",
      "options": {
         "1": "Nomination intérimaire ",
        "2": "Affectation  ",
        "3": "Mutation  ",
        "4": "Détachement  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    },
    "q9": {
      "text": "Nomination qui a lieu avant la plupart des autres options de nomination à l’interne et à l’externe.",
      "options": {
        "1": "Nomination d’un employé occasionnel ",
        "2": "Échanges Canada ",
        "3": "Aide temporaire ",
        "4": "Nomination d’un bénéficiaire de priorité "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q10": {
      "text": "Nomination servant à satisfaire aux exigences opérationnelles à court terme. Le mérite et l’admissibilité aux processus de nomination internes ne s’appliquent pas à ces travailleurs. ",
       "options": {
         "1": "Nomination d’un employé occasionnel ",
        "2": "Échanges Canada ",
        "3": "Aide temporaire ",
        "4": "Nomination d’un bénéficiaire de priorité "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q11": {
      "text": "Méthode servant à satisfaire aux exigences opérationnelles à court terme. Ces travailleurs sont employés par l’intermédiaire d’une agence pour fournir des services de façon temporaire. ",
       "options": {
         "1": "Nomination d’un employé occasionnel ",
        "2": "Échanges Canada ",
        "3": "Aide temporaire ",
        "4": "Nomination d’un bénéficiaire de priorité "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      }
    },
    "q12": {
      "text": "Méthode servant à satisfaire aux exigences opérationnelles à court terme. Ces travailleurs sont employés par l’intermédiaire d’une agence pour fournir des services de façon temporaire. ",
       "options": {
         "1": "Nomination d’un employé occasionnel ",
        "2": "Échanges Canada ",
        "3": "Aide temporaire ",
        "4": "Nomination d’un bénéficiaire de priorité "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      }
    }
  }
}</i18n>