<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" /><hr>
          <radioQuiz :question="$t('q2')" qId="2" /><hr>
          <radioQuiz :question="$t('q3')" qId="3" /><hr>
          <radioQuiz :question="$t('q4')" qId="4" /><hr>
        </b-tab>
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
  import matchingExercise from "~/components/interface/matchingExerciseAll"
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
  "instructions":"Match the correct stage of the resolution process to the answers provided.",
    "q1": {
      "text": "<p>Employees who experience an occurrence of harassment and violence in the workplace (principal party), or who witness such an occurrence, must notify the employer or the Harassment and Violence Prevention Unit. They will be asked to complete a form identifying the principal party involved (if known) as well as the details of the occurrence.</p><p>The identities of the parties involved in the resolution process are held in the strictest of confidence, but may be revealed to each other as part of the resolution process. </p> ",
      "options": {
        "1": "Conciliation ",
        "2": "Investigation ",
        "3": "Negotiated resolution ",
        "4": "Notice of an occurrence "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "<p> Please consult the <a href='https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf' target='_blank' alt='Link to the Senate Harassment and Violence Prevention Policy file'>Senate Harassment and Violence Prevention Policy</a> for a full description of the resolution process.</p><p><b>Did you know?</b></p><p>An employee may have a union representative, friend, spouse, colleague or person of their choice present at any time during the resolution process.</p>"
    },
    "q2": {
      "text": "<p>This is an informal process where the principal party meets with the employer or the Harassment and Violence Prevention Unit to discuss the occurrence, clarify what was submitted on the form, and compare the occurrence to the definition of harassment and violence in the Canada Labour Code.  </p><p>Once this has been done, the principal party may continue with negotiated resolution, or pursue conciliation and/or an investigation. </p> ",
      "options": {
        "1": "Conciliation ",
        "2": "Investigation ",
        "3": "Negotiated resolution ",
        "4": "Notice of an occurrence "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p> Please consult the <a href='https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf' target='_blank' alt='Link to the Senate Harassment and Violence Prevention Policy file'>Senate Harassment and Violence Prevention Policy</a> for a full description of the resolution process.</p><p><b>Did you know?</b></p><p>An employee may have a union representative, friend, spouse, colleague or person of their choice present at any time during the resolution process.</p>"
    },
    "q3": {
      "text": "<p>A principal party and responding party may engage in conciliation at any time during the resolution process, if they wish, by informing the Harassment and Violence Prevention Unit, who will then facilitate discussion. </p> ",
      "options": {
        "1": "Conciliation ",
        "2": "Investigation ",
        "3": "Negotiated resolution ",
        "4": "Notice of an occurrence "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
     "conclusion": "<p> Please consult the <a href='https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf' target='_blank' alt='Link to the Senate Harassment and Violence Prevention Policy file'>Senate Harassment and Violence Prevention Policy</a> for a full description of the resolution process.</p><p><b>Did you know?</b></p><p>An employee may have a union representative, friend, spouse, colleague or person of their choice present at any time during the resolution process.</p>"
    },
    "q4": {
      "text": "<p>The principal party may request an investigation at any time during the resolution process. Should they request an investigation, the Harassment and Violence Prevention Unit will inform all parties and select an investigator. The investigator will conclude the investigation with a report of their findings, including their recommendations to eliminate or minimize the risk of a similar occurrence from happening in the future. </p> ",
      "options": {
        "1": "Conciliation ",
        "2": "Investigation ",
        "3": "Negotiated resolution ",
        "4": "Notice of an occurrence "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p> Please consult the <a href='https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf' target='_blank' alt='Link to the Senate Harassment and Violence Prevention Policy file'>Senate Harassment and Violence Prevention Policy</a> for a full description of the resolution process.</p><p><b>Did you know?</b></p><p>An employee may have a union representative, friend, spouse, colleague or person of their choice present at any time during the resolution process.</p>"
    }
  },
  "fr": {
  "instructions":"Associez l'étape du processus de règlement à la bonne description.",
    "q1": {
      "text": "<p>Les employés qui subissent une situation de harcèlement et de violence au travail (partie principale) ou qui sont témoins d’une telle situation doivent en informer l’employeur ou l’Unité de prévention du harcèlement et de la violence. Ils seront invités à remplir un formulaire pour identifier la partie principale (si elle est connue) et fournir les détails de l’incident. </p><p>L’identité des parties concernées par le processus de résolution reste strictement confidentielle, mais elle peut être révélée aux autres parties dans le cadre du processus de résolution. </p> ",
      "options": {
        "1": "Conciliation  ",
        "2": "Enquête  ",
        "3": "Résolution négociée ",
        "4": "Avis d’incident  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "<p> Consultez la <a href='https://sencanada.ca/content/sen/committee/431/CIBA/Reports/CIBA_RPT4_f.pdf' target='_blank' alt='Lien vers le dossier de la politique de prévention du harcèlement et de la violence du Sénat'>Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat</a> pour obtenir une description complète du processus de résolution.</p><p><b>Le saviez-vous?</b></p><p>En tout temps pendant le processus de résolution, l’employé peut se faire accompagner par un représentant syndical, un ami, un conjoint, un collègue ou une autre personne de son choix.</p>"
    },
    "q2": {
      "text": "<p>Il s’agit d’un processus informel au cours duquel la partie principale rencontre l’employeur ou l’Unité de prévention du harcèlement et de la violence pour discuter de l’incident, clarifier les éléments soumis sur le formulaire et comparer l’incident à la définition de harcèlement et de violence figurant dans le Code canadien du travail.</p><p>Par la suite, la partie principale peut poursuivre la résolution négociée ou encore opter pour la conciliation ou la tenue d’une enquête.</p> ",
      "options": {
         "1": "Conciliation  ",
        "2": "Enquête  ",
        "3": "Résolution négociée ",
        "4": "Avis d’incident  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p> Consultez la <a href='https://sencanada.ca/content/sen/committee/431/CIBA/Reports/CIBA_RPT4_f.pdf' target='_blank' alt='Lien vers le dossier de la politique de prévention du harcèlement et de la violence du Sénat'>Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat</a> pour obtenir une description complète du processus de résolution.</p><p><b>Le saviez-vous?</b></p><p>En tout temps pendant le processus de résolution, l’employé peut se faire accompagner par un représentant syndical, un ami, un conjoint, un collègue ou une autre personne de son choix.</p>"
    },
    "q3": {
      "text": "<p>La partie principale et la partie intimée peuvent, si elles le souhaitent, opter pour  la conciliation à tout moment pendant le processus de résolution, en informant l’Unité de prévention du harcèlement et de la violence, qui animera alors la discussion. </p> ",
      "options": {
         "1": "Conciliation  ",
        "2": "Enquête  ",
        "3": "Résolution négociée ",
        "4": "Avis d’incident  "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
     "conclusion": "<p> Consultez la <a href='https://sencanada.ca/content/sen/committee/431/CIBA/Reports/CIBA_RPT4_f.pdf' target='_blank' alt='Lien vers le dossier de la politique de prévention du harcèlement et de la violence du Sénat'>Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat</a> pour obtenir une description complète du processus de résolution.</p><p><b>Le saviez-vous?</b></p><p>En tout temps pendant le processus de résolution, l’employé peut se faire accompagner par un représentant syndical, un ami, un conjoint, un collègue ou une autre personne de son choix.</p>"
    },
    "q4": {
      "text": "<p>À tout moment pendant le processus de résolution, la partie principale peut demander la tenue d’une enquête. Si c’est le cas, l’Unité de prévention du harcèlement et de la violence en informera toutes les parties concernées et choisira un enquêteur. Au terme de l’enquête, celui-ci présentera un rapport faisant état de ses conclusions, dans lequel il formulera également des recommandations visant à éliminer ou à réduire le risque qu’un événement comparable se produise dans le futur. </p> ",
      "options": {
         "1": "Conciliation  ",
        "2": "Enquête  ",
        "3": "Résolution négociée ",
        "4": "Avis d’incident  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "<p> Consultez la <a href='https://sencanada.ca/content/sen/committee/431/CIBA/Reports/CIBA_RPT4_f.pdf' target='_blank' alt='Lien vers le dossier de la politique de prévention du harcèlement et de la violence du Sénat'>Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat</a> pour obtenir une description complète du processus de résolution.</p><p><b>Le saviez-vous?</b></p><p>En tout temps pendant le processus de résolution, l’employé peut se faire accompagner par un représentant syndical, un ami, un conjoint, un collègue ou une autre personne de son choix.</p>"
    }
  }
}</i18n>