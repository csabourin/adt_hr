<template>
  <span>
    <div>
      <b-card>
        <radioQuiz :question="$t('q1')" qId="1" />
      </b-card>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
   ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0

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
    "q1": {
      "text": "An individual may exercise delegated authorities once they occupy the position to which authorities have been associated.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> The answer is false. An individual must have completed the necessary training in addition to occupying the position. ",
        "2": "<span class='v-right' /><strong>Correct!</strong> The answer is false. An individual must have completed the necessary training in addition to occupying the position. "
      }
    }
  },
  "fr": {
    "q1": {
      "text": "Une personne peut exercer ses pouvoirs délégués une fois qu’elle occupe le poste auquel les pouvoirs en question sont associés. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> La réponse est Faux. La personne doit avoir suivi la formation nécessaire en plus d’occuper le poste.",
        "2": "<span class='v-right' /><strong>Correct!</strong> La réponse est Faux. La personne doit avoir suivi la formation nécessaire en plus d’occuper le poste."
      }
    }
  }
}</i18n>