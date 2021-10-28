<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		    <b-card>
            <div v-if="$i18n.locale=='en'">
                <p>Angela has been a member of the public service for 9 years and has demonstrated a good work ethic. In the last couple of months, you notice that she has missed several important deadlines and reacted very defensively when you approached her to talk about it.</p>
                <p>An employee overheard Angela’s comments to you and told you that for a number of weeks Angela has been unusually defensive and frequently rude. In addition, yesterday she found an email on the printer between Angela and someone at ExPRESScor, a company that submitted a bid for a community infrastructure project. The email had a familiar tone and contained some details of the selection process.</p>
            </div>
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
      "text": "<p>Angela has been a member of the public service for 9 years and has demonstrated a good work ethic. In the last couple of months, you notice that she has missed several important deadlines and reacted very defensively when you approached her to talk about it.</p><p>An employee overheard Angela’s comments to you and told you that for a number of weeks Angela has been unusually defensive and frequently rude. In addition, yesterday she found an email on the printer between Angela and someone at ExPRESScor, a company that submitted a bid for a community infrastructure project. The email had a familiar tone and contained some details of the selection process.</p><p>What is your best course of action in this situation? </p>",
      "options": {
        "1": "Speak to a labour relations advisor about your best course of action.",
        "2": "Consult the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27146' target='_blank' alt='Link to the Directive on Performance Management web page'>Directive on Performance Management</a> and document the situation.",
        "3": "Consult the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=22370' target='_blank' alt='Link to the Guidelines for Discipline web page'>Guidelines for Discipline</a> and document the situation.",
        "4": "Consult the <a href='https://laws-lois.justice.gc.ca/eng/acts/p-33.3/' target='_blank' alt='Link to the Federal Public Sector Labour Relations Act web page'>Federal Public Sector Labour Relations Act</a>."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Consulting policies and directives is helpful, but your labour relations advisor is better able to determine the best course of action."
    }
  },
  "fr": {
  "instructions":"Répondez à la question suivante. ",
        "q1": {
      "text": "<p>Angela travaille à la fonction publique depuis neuf ans et fait preuve d’une bonne éthique de travail. Vous avez constaté, au cours des deux derniers mois, qu’elle avait dépassé plusieurs échéances importantes, et elle s’est tenue sur la défensive lorsque vous l’avez approchée pour lui en parler.</p><p>Une employée a entendu les commentaires d’Angela et elle vous a dit que, depuis quelques semaines, Angela était inhabituellement sur la défensive et fréquemment impolie. Cette employée a même trouvé hier sur l’imprimante un courriel entre Angela et un employé d’ExPRESScor, une société qui a soumissionné pour un projet d’infrastructure communautaire. Le courriel révélait un ton familier et contenait des détails du processus de sélection. </p><p>Quelle est la meilleure marche à suivre dans une telle situation? </p>",
      "options": {
        "1": "Parler à un conseiller en relations de travail pour connaître la meilleure marche à suivre. ",
        "2": "Consulter la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27146' target='_blank' alt='Lien vers la page web de la directive sur la gestion des performances'>Directive sur la gestion du rendement</a>, puis consigner la situation.",
        "3": "Consulter les <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=22370' target='_blank' alt='Lien vers la page web des lignes directrices en matière de discipline'>Lignes directrices concernant la discipline</a> and document the situation.",
        "4": "Consulter la <a href='https://laws-lois.justice.gc.ca/fra/lois/p-33.3/' target='_blank' alt='Lien vers la page Web de la Loi sur les relations de travail dans le secteur public fédéral'>F Loi sur les relations de travail dans le secteur public fédéral</a>."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Il est utile de consulter les politiques et les directives, mais votre conseiller en relations de travail est le mieux placé pour déterminer la meilleure marche à suivre."
    }
  }
}</i18n>