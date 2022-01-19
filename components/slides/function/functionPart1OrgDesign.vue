<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
        <p v-html="$t('instructions2')" />
        <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['3']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['5']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['4']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['2']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['1']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['6']" :feedback="$t('q6.feedback')" qid="q6" /><hr>
        <fillTheBlanks :blanks="1" :sentence="$t('q7.sentence')" :termList="$t('q7.choices')" :answer="['7']" :feedback="$t('q7.feedback')" qid="q7" />
    </b-card>
  </fieldset>
</template>
<script type="text/javascript">
  import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
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
        document.querySelector(".tab-pane.active").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active").focus();
      }, 300);
    }
  }
}
</script>
<i18n>
  {
  "en": {
    "instructions": "Discover your functions as a manager by completing the sentences with the appropriate word. Select the best choice to fill in the blanks.",
    "instructions2": "<b>As a manager, it is your responsibility to perform the following seven functions:</b>",
    "q1": {
      "sentence": "Commit to building and maintaining a diversified and {0} workplace",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "Align your organizational structure with your organizational {0} and business objectives",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "Staff existing vacant positions only when a review of the {0} confirms that the duties remain current",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "Ensure that job descriptions remain current, that they reflect the work assigned to and performed by your employees, and that they are signed by the {0} authority",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "Staff new positions only when the classification decisions have been rendered by an OC- {0} advisor",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "Confirm that your organizational structure does not {0} with the mandates and objectives of other components of the organization",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q7": {
      "sentence": "Conduct review-and-update exercises to ensure that your structure reflects any changes to the mandate, accountabilities, {0} or work in the organizational structure, business objectives, job descriptions and evaluations",
      "choices": {
        "1": "accredited",
        "2": "delegated",
        "3": "inclusive",
        "4": "job description",
        "5": "mandate",
        "6": "overlap",
        "7": "responsibilities"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    }
  },
  "fr": {
    "instructions": "Découvrez vos fonctions à titre de gestionnaire en sélectionnant le mot approprié pour compléter les phrases suivantes. Choisissez le meilleur choix pour remplir les blancs.",
    "instructions2": "<b>À titre de gestionnaire, vous devez vous acquitter des sept fonctions suivantes :</b> ",
    "q1": {
      "sentence": "vous engager à créer et à maintenir un lieu de travail diversifié et {0};",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "harmoniser votre structure organisationnelle avec votre {0} organisationnel et vos objectifs opérationnels;",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "ne doter les postes vacants existants que lorsqu’un examen des {0} confirme que les fonctions sont toujours pertinentes;",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "vous assurer que les descriptions de travail restent à jour, qu’elles reflètent le travail assigné aux employés et effectué par ceux-ci, et qu’elles sont signées par une personne ayant le pouvoir {0} requis;",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "ne pourvoir les nouveaux postes que lorsque les décisions en matière de classification ont été prises par un conseille {0} en OC",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "confirmer qu’il n’y a pas de {0} entre votre structure organisationnelle et le mandat et les objectifs d’autres secteurs de l’organisation;",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q7": {
      "sentence": "réaliser des exercices de révision et de mise à jour pour vous assurer que toute modification apportée au mandat, aux obligations redditionnelles, aux {0} ou au travail est prise en compte dans la structure organisationnelle, les objectifs opérationnels, les descriptions de travail et les évaluations.",
      "choices": {
        "1": "accrédité ",
        "2": "délégué",
        "3": "inclusif",
        "4": "descriptions de travail ",
        "5": "mandat",
        "6": "chevauchement",
        "7": "responsabilités"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    }
  }
}
</i18n>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>