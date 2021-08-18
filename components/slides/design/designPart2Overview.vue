<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['3']" :feedback="$t('q1.feedback')" qid="q1" />
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['1']" :feedback="$t('q2.feedback')" qid="q2" />
        </b-tab>
        <b-tab title="Question 2">
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['3']" :feedback="$t('q3.feedback')" qid="q3" />
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['3']" :feedback="$t('q4.feedback')" qid="q4" />
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
    "instructions": "Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "HR planning is how an organization {0} current and future human resources needs.",
      "choices": {
        "1": "creates",
        "2": "fulfills",
        "3": "identifies",
        "4": "communicates"
      },
      "feedback": {
        "right": "HR planning is how an organization identifies current and future human resources needs.",
        "wrong": "HR planning is how an organization identifies current and future human resources needs."
      }
    },
    "q2": {
      "sentence": "It is also how an organization {0} its human resources to achieve its business objectives.",
      "choices": {
        "1": "identifies and deploys",
        "2": "creates and deploys",
        "3": "creates and fulfills",
        "4": "identifies and prioritizes"
      },
      "feedback": {
        "right": "It is also how an organization identifies and deploys its human resources to achieve its business objectives.",
        "wrong": "It is also how an organization identifies and deploys its human resources to achieve its business objectives."
      }
    },
    "q3": {
      "sentence": "HR planning ensures that we have a/an {0}, workplace, and can secure the right people, build a supportive work environment, and develop the capacity to ensure organizational success.",
      "choices": {
        "1": "dynamic",
        "2": "inclusive",
        "3": "well-structured",
        "4": "respectful"
      },
      "feedback": {
        "right": "HR planning ensures that we have a well-structured workplace, and can secure the right people, build a supportive work environment, and develop the capacity to ensure organizational success.",
        "wrong": "HR planning ensures that we have a well-structured workplace, and can secure the right people, build a supportive work environment, and develop the capacity to ensure organizational success."
      }
    },
    "q4": {
      "sentence": "HR planning can help identify {0} for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages.",
      "choices": {
        "1": "specific individuals and skills",
        "2": "business objectives and priorities",
        "3": "optimal strategies and activities",
        "4": "talent management"
      },
      "feedback": {
        "right": "HR planning can help identify optimal strategies and activities, for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages.",
        "wrong": "HR planning can help identify optimal strategies and activities, for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages."
      }
    }
  },
  "fr": {
    "instructions": "Voici l&rsquo;occasion pour vous de confirmer votre connaissance des budgets et des coûts. Sélectionnez le meilleur choix pour remplir les blancs. ",
    "q1": {
      "sentence": "{0} comprend les postes permanents, de durée déterminée et de durée occasionnelle, les heures supplémentaires, la rémunération au rendement et les demandes de remboursement des congés.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget salarial comprend ces postes.",
        "wrong": "Le budget salarial comprend ces postes."
      }
    },
    "q2": {
      "sentence": "{0} comprend des articles comme les voyages, la formation, la traduction, les fournitures de bureau, etc.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement et d'entretien (F et E) comprend ces postes.",
        "wrong": "Le budget de fonctionnement et d'entretien (F et E) comprend ces postes."
      }
    },
    "q3": {
      "sentence": "L’aide temporaire est considérée comme un contrat et est payée à même {0}.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement et d'entretien (F et E) comprendrait un poste pour un contrat d'aide temporaire.",
        "wrong": "Le budget de fonctionnement et d'entretien (F et E) comprendrait un poste pour un contrat d'aide temporaire."
      }
    },
    "q4": {
      "sentence": "L’argent donné aux organisations non gouvernementales pour l’établissement des réfugiés, comme les cours de langue, proviendrait du budget de {0}",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des subventions et contributions (S et C).",
        "wrong": "Ces fonds proviendraient du budget des subventions et contributions (S et C)."
      }
    },
    "q5": {
      "sentence": "Le budget de fonctionnement comprend {0} et {1}.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)",
        "wrong": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)"
      }
    },
    "q6": {
      "sentence": "{0} est de l’argent qui est fourni à des entités extérieures au gouvernement fédéral, pour répondre au mandat du ministère.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des subventions et contributions (S et C).",
        "wrong": "Ces fonds proviendraient du budget des subventions et contributions (S et C)."
      }
    },
    "q7": {
      "sentence": "{0} s’applique aux articles qui se déprécieront avec le temps, comme une annexe à un bâtiment, des véhicules, etc.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des immobilisations.",
        "wrong": "Ces fonds proviendraient du budget des immobilisations."
      }
    },
    "q8": {
      "sentence": "Les coûts {0} sont essentiels à l’exécution de vos activités et, si des compressions budgétaires peuvent vous empêcher de les exécuter, vous pourriez ne pas être en mesure de les faire.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": "Les coûts essentiels sont non discrétionnaires. ",
        "wrong": "Les coûts essentiels sont non discrétionnaires. "
      }
    },
    "q9": {
      "sentence": "Les coûts {0} sont moins susceptibles d’avoir une incidence négative sur l’exécution de vos activités.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": " Ces coûts seraient discrétionnaires.",
        "wrong": " Ces coûts seraient discrétionnaires."
      }
    },
    "q10": {
      "sentence": "Une pratique exemplaire consiste à inclure une colonne supplémentaire {0} dans vos besoins budgétaires pour vous rappeler comment vous êtes arrivé aux chiffres que vous avez obtenus.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": "Une colonne Notes vous aidera à faire le suivi de vos besoins budgétaires.Vous ne soumettez peut-être pas ces notes, mais c'est bien de les avoir.",
        "wrong": "Une colonne Notes vous aidera à faire le suivi de vos besoins budgétaires.Vous ne soumettez peut-être pas ces notes, mais c'est bien de les avoir."
      }
    },
    "q11": {
      "sentence": "Si vous avez des niveaux de référence, vous commencez par {0}.",
      "choices": {
        "1": "un montant prédéterminé prévu au budget",
        "2": "0 $"
      },
      "feedback": {
        "right": "Vous avez un montant prédéterminé prévu à votre budget et vous devrez déterminer s'il est suffisant, ou bien trop peu ou trop élevé. Certains ministères fournissent des niveaux de référence et d'autres pas.",
        "wrong": "Vous avez un montant prédéterminé prévu à votre budget et vous devrez déterminer s'il est suffisant, ou bien trop peu ou trop élevé. Certains ministères fournissent des niveaux de référence et d'autres pas."
      }
    },
    "q12": {
      "sentence": "Si vous n’avez pas de niveaux de référence, vous commencez par {0}.",
      "choices": {
        "1": "un montant prédéterminé prévu au budget",
        "2": "0 $"
      },
      "feedback": {
        "right": "Pour les activités continues, vous pouvez utiliser les chiffres de l'année dernière et de l'année en cours pour répondre à vos besoins budgétaires. Pour les nouvelles activités, vous devez en estimer les coûts.",
        "wrong": "Pour les activités continues, vous pouvez utiliser les chiffres de l'année dernière et de l'année en cours pour répondre à vos besoins budgétaires. Pour les nouvelles activités, vous devez en estimer les coûts."
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