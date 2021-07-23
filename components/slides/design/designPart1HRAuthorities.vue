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
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The answer is false. An individual must have completed the necessary training in addition to occupying the position."
    }
  },
  "fr": {
    "q1": {
      "text": "Le sous-ministre adjoint a approuvé une demande de voyage de 5&nbsp;000&nbsp;$. Elle a été enregistrée dans le système financier. Une semaine plus tard, au moment de réserver le vol, le prix est passé de 600&nbsp;$ à 650&nbsp;$. Que feriez-vous?",
      "options": {
        "1": "Modifiez le montant réel de vos dépenses.",
        "2": "Modifiez vos engagements sans demander une augmentation de l’autorisation de déplacement.",
        "3": "Ne rien changer à la situation financière.  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne modifierez pas le montant réel des dépenses puisque le salarié n’a pas encore présenté de demande d’indemnité de déplacement.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne demandez pas une augmentation de voyage parce que seul le billet d’avion a augmenté, et non le coût total du voyage. Toutefois, si vous croyez que le montant total du voyage dépassera le montant préapprouvé, vous devriez faire approuver de nouveau le montant rajusté du voyage.",
        "3": "<span class='v-right' /><strong>Correct!</strong> Vous ne modifierez pas le montant réel des dépenses puisque le salarié n’a pas encore présenté de demande d’indemnité de déplacement. Vous ne demandez pas une augmentation de voyage parce que seul le billet d’avion a augmenté, et non le coût total du voyage."
      },
      "conclusion": ""
    }
  }
}</i18n>