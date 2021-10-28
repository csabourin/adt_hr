<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="2" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['1','3']" :feedback="$t('q1.feedback')" qid="q1" />
        </b-tab>
        <b-tab title="Question 2">
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['3']" :feedback="$t('q2.feedback')" qid="q2" />
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['3']" :feedback="$t('q3.feedback')" qid="q3" />
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
      "sentence": "HR planning is how an organization {0} current and future human resources needs. It is also how an organization {1} its human resources to achieve its business objectives. ",
      "choices": {
        "1": "identifies",
        "2": "communicates",
        "3": "identifies and deploys",
        "4": "creates and deploys",
        "5": "identifies and prioritizes"
      },
      "feedback": {
        "right": "HR planning is how an organization identifies current and future human resources needs.",
        "wrong": "HR planning is how an organization identifies current and future human resources needs."
      }
    },
    "q2": {
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
    "q3": {
      "sentence": "HR planning can help identify {0} for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages. ",
      "choices": {
        "1": "specific individuals and skills",
        "2": "business objectives and priorities",
        "3": "optimal strategies and activities",
        "4": "talent management"
      },
      "feedback": {
        "right": "HR planning can help identify optimal strategies and activities, for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages. ",
        "wrong": "HR planning can help identify optimal strategies and activities, for important management components such as recruitment, retention, learning, development, employee engagement, talent management, promotion, succession, employment equity, and official languages. "
      }
    }
  },
  "fr": {
    "instructions": "Choisissez la meilleure réponse pour compléter les phrases suivantes. ",
    "q1": {
      "sentence": "La planification des RH correspond à la manière dont les organisations {0} besoins actuels et futurs en RH de même qu’à la manière dont elles {1} leurs RH afin d’atteindre leurs objectifs opérationnels.  ",
      "choices": {
        "1": "déterminent les",
        "2": "communiquent les",
        "3": "sélectionnent et utilisent",
        "4": "créent et utilisent",
        "5": "créent et comblent"
      },
      "feedback": {
        "right": " La planification des RH correspond à la manière dont les organisations déterminent les besoins actuels et futurs en RH de même qu’à la manière dont elles sélectionnent et utilisent leurs RH afin d’atteindre leurs objectifs opérationnels.",
        "wrong": " La planification des RH correspond à la manière dont les organisations déterminent les besoins actuels et futurs en RH de même qu’à la manière dont elles sélectionnent et utilisent leurs RH afin d’atteindre leurs objectifs opérationnels."
      }
    },
    "q2": {
      "sentence": "La planification des RH nous permet d’avoir un lieu de travail {0} de trouver les bonnes personnes, de bâtir un environnement de travail positif et de garantir le succès de l’organisation.",
      "choices": {
        "1": "dynamique",
        "2": "inclusif",
        "3": "bien structuré",
        "4": "respectueux"
      },
      "feedback": {
        "right": "La planification des RH nous permet d’avoir un lieu de travail bien structuré, de trouver les bonnes personnes, de bâtir un environnement de travail positif et de garantir le succès de l’organisation.",
        "wrong": "La planification des RH nous permet d’avoir un lieu de travail bien structuré, de trouver les bonnes personnes, de bâtir un environnement de travail positif et de garantir le succès de l’organisation."
      }
    },
    "q3": {
      "sentence": "La planification des RH permet d’établir {0} pour d’importants volets de la gestion comme le recrutement, le maintien en poste, l’apprentissage, le perfectionnement, la mobilisation des employés, la gestion des talents, l’avancement, la relève, l’équité en matière d’emploi et les langues officielles.",
      "choices": {
        "1": "les personnes et les compétences recherchées",
        "2": "des priorités et des objectifs opérationnels",
        "3": "des stratégies et des activités optimales",
        "4": "la gestion des talents"
      },
      "feedback": {
        "right": "La planification des RH permet d’établir des stratégies et des activités optimales pour d’importants volets de la gestion comme le recrutement, le maintien en poste, l’apprentissage, le perfectionnement, la mobilisation des employés, la gestion des talents, l’avancement, la relève, l’équité en matière d’emploi et les langues officielles. ",
        "wrong": "La planification des RH permet d’établir des stratégies et des activités optimales pour d’importants volets de la gestion comme le recrutement, le maintien en poste, l’apprentissage, le perfectionnement, la mobilisation des employés, la gestion des talents, l’avancement, la relève, l’équité en matière d’emploi et les langues officielles. "
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