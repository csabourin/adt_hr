<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
    </b-tabs>
</b-card>
</b-col>

</b-row>
</b-container>
	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz
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
    "instructions":"Answer the following question. ",
    "q1": {
      "text": "<p>Suzanne, an EC-04, has decided to finish her master’s degree in International Relations. In a conversation with Damon, an AS-02, she mentions that she is happy that her education leave has been approved, and she lets her friend know that she will be away for a year. After the conversation, Damon is upset that his education leave request to start a degree in Public Administration was denied.</p> <p>What does Damon need to know?</p>",
      "options": {
        "1": "Because Suzanne is almost finished her degree, she qualified for education leave.",
        "2": "Damon qualifies for career development in terms of courses and seminars, as opposed to programs.",
        "3": "Because Suzanne is completing a master’s degree in a field related to her work, she qualifies for education leave.",
        "4": "To be approved, Damon needs to enter a program more relevant to his job."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Career development opportunities vary depending on the group."
    }
  },
  "fr": {
  "instructions":"Répondez à la question suivante. ",
    "q1": {
      "text": "<p>Suzanne, une employée des groupe et niveau EC-04, a décidé de terminer sa maîtrise en relations internationales. Dans une conversation avec son ami Damon, un employé des groupe et niveau AS-02, elle dit qu’elle est heureuse que son congé d’études ait été approuvé et l’informe qu’elle sera absente pendant un an. Après la conversation, Damon est contrarié, car sa demande de congé d’études pour l’obtention d’un diplôme en administration publique lui a été refusée.</p> <p><u>Que doit savoir Damon?</u>?</p>",
      "options": {
        "1": "Comme Suzanne a presque terminé son programme d’études, elle est admissible à un congé d’études. ",
        "2": "Damon est admissible au perfectionnement professionnel dans le cadre du cours et de séminaires, mais pas aux programmes d’études.  ",
        "3": "Comme Suzanne termine une maîtrise dans un domaine lié à son travail, elle a droit à un congé d’études. ",
        "4": "Pour que sa demande soit approuvée, Damon doit commencer un programme se rapportant à son travail. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les possibilités de perfectionnement professionnel varient en fonction du groupe."
    }
  }
}</i18n>