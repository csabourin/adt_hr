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
    "instructions2": "As a manager, it is your responsibility to perform the following seven functions:",
    "q1": {
      "sentence": "Commit to building and maintaining a diversified and {0} workplace",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "Align your organizational structure with your organizational {0} and business objectives",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "Staff existing vacant positions only when a review of the {0} confirms that the duties remain current",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "Ensure that job descriptions remain current, that they reflect the work assigned to and performed by your employees, and that they are signed by the {0} authority",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "Staff new positions only when the classification decisions have been rendered by an OC- {0} advisor",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "Confirm that your organizational structure does not {0} with the mandates and objectives of other components of the organization",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q7": {
      "sentence": "Conduct review-and-update exercises to ensure that your structure reflects any changes to the mandate, accountabilities, {0} or work in the organizational structure, business objectives, job descriptions and evaluations",
      "choices": {
        "1": "ACCREDITED",
        "2": "DELEGATED",
        "3": "INCLUSIVE",
        "4": "JOB DESCRIPTION",
        "5": "MANDATE",
        "6": "OVERLAP",
        "7": "RESPONSIBILITIES"
      },
      "feedback": {
        "right": "",
        "wrong": ""
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