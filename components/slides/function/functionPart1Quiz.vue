<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
         <hr style="display=none;">
           <p v-html="$t('instructions2')" />
          <radioQuiz :question="$t('q1')" qId="1" /><hr>
          <radioQuiz :question="$t('q2')" qId="2" /><hr>
          <radioQuiz :question="$t('q3')" qId="3" /><hr>
        </b-tab>
        <b-tab title="Question 2">
          <br />
           <p v-html="$t('instructions2')" />
            <hr style="display=none;">
          <radioQuiz :question="$t('q4')" qId="4" /><hr>
          <radioQuiz :question="$t('q5')" qId="5" /><hr>
          <radioQuiz :question="$t('q6')" qId="6" /><hr>
        </b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
      <b-tab title="Question 5"><checkboxQuiz :question="$t('q9')" qId="9" :Answer="['1', '3']"/></b-tab>
      <b-tab title="Question 6"><checkboxQuiz :question="$t('q10')" qId="10" :Answer="['1', '2', '3', '5']"/></b-tab>
      <b-tab title="Question 7"><radioQuiz :question="$t('q11')" qId="11" /></b-tab>
      <b-tab title="Question 8"><radioQuiz :question="$t('q12')" qId="12" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=7">{{$t('nextPage')}}</b-button>
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
  "instructions":"<p>Now that you know more about organization and classification, test your knowledge by answering the following questions.</p>",
  "instructions2":"<p>Making the links between organization and classification and other HR disciplines will help guide you in the following activities. Match the sentence to the correct answer. </p>",
    "q1": {
      "text": "Creating or classifying a position in line with the organization’s mandate ",
      "options": {
        "1": "will enable you to deliver your product or service ",
        "2": "will help meet the organization’s objectives (and mandate)  ",
        "3": "will ensure that the current classification decision is still applicable to each position "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Creating or classifying a position in line with the organization’s mandate will enable you to deliver your product or service."
    },
    "q2": {
      "text": "Planning positions according to the organization’s future needs",
      "options": {
        "1": "will enable you to deliver your product or service ",
        "2": "will help meet the organization’s objectives (and mandate)  ",
        "3": "will ensure that the current classification decision is still applicable to each position "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Planning positions according to the organization’s future needs will help meet the organization’s objectives (and mandate).  "
    },
    "q3": {
      "text": "Validating the job descriptions before staffing a position",
        "options": {
        "1": "will enable you to deliver your product or service ",
        "2": "will help meet the organization’s objectives (and mandate)  ",
        "3": "will ensure that the current classification decision is still applicable to each position"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
        
      },
      "conclusion": "Validating the job description before staffing a position will ensure that the current classification decision is still applicable to each position."
    },
    "q4": {
      "text": "Ensuring that job descriptions are accurate and up to date",
      "options": {
        "1": "will ensure that the employee can deliver the product or service effectively  ",
        "2": "must be done before hiring  ",
        "3": "will help avoid grievances  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Ensuring that job descriptions are accurate and up to date will help avoid grievances."
    },
    "q5": {
      "text": "Appropriately identifying the official languages requirements of a position",
      "options": {
        "1": "will ensure that the employee can deliver the product or service effectively  ",
        "2": "must be done before hiring  ",
        "3": "will help avoid grievances  "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Appropriately identifying the OL requirements of a position will ensure that the employee can deliver the product or service effectively."
    },
    "q6": {
      "text": "Ensuring that a classification decision is rendered for new and revised job descriptions",
      "options": {
        "1": "will ensure that the employee can deliver the product or service effectively  ",
        "2": "must be done before hiring  ",
        "3": "will help avoid grievances  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Ensuring that a classification decision is rendered for new and revised job descriptions must be done before hiring."
    },
    "q7": {
      "text": "Organization and classification decisions are made with the same accountability as other financial transactions.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Organization and classification decisions are made with the same accountability as other financial transactions."
    },
    "q8": {
      "text": "“Configuring organizational structures to align the organization’s processes, systems, technology, culture and people with its ultimate goals” is the definition of which term?",
      "options": {
        "1": "Organization and classification ",
        "2": "Classification ",
        "3": "HR planning ",
        "4": "Organizational design "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Organizational design is the process of configuring organizational structures to align the organization’s processes, systems, technology, culture and people with its ultimate goals."
    },
    "q9": {
      "text": "The occupational group and level of a position must be _______________________. ",
      "options": {
        "1": "based on the duties assigned within the organizational structure ",
        "2": "determined by the manager ",
        "3": "assigned by an OC-accredited advisor ",
        "4": "assigned in accordance with the staffing budget "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> The occupational group and level of a position must be based on the duties assigned within the organizational structure and be assigned by an OC-accredited advisor.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The occupational group and level of a position must be based on the duties assigned within the organizational structure and be assigned by an OC-accredited advisor."
      }
    },
    "q10": {
      "text": "You want to create a new position in your organization. Identify your organization and classification responsibilities from the list below.",
      "options": {
        "1": "Ensure that the position fits into the organizational structure ",
        "2": "Write a job description that aligns with your organizational mandate and business objectives ",
        "3": "Ensure that the organizational structure, mandate and business objectives are accurate and up to date ",
        "4": "Decide on the group and level of the position based on the job description ",
        "5": "Verify that the job description is representative of the work assigned to the position. ",
        "6": "Ensure that the funds are available to staff the position "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> To create a new position in your organization, you should ensure that the position fits into the organizational structure, write a job description that aligns with your organizational mandate and business objectives, ensure that the organizational structure, mandate and business objectives are accurate and up to date and verify that the job description is representative of the work assigned to the position. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> To create a new position in your organization, you should ensure that the position fits into the organizational structure, write a job description that aligns with your organizational mandate and business objectives, ensure that the organizational structure, mandate and business objectives are accurate and up to date and verify that the job description is representative of the work assigned to the position. "
      }
    },
    "q11": {
      "text": "Classification is a key component of coherent working relationships. ",
      "options": {
        "1": "True ",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Classification underpins coherent working relationships by determining the relative value of work at each occupational group and level, which ensures fair compensation."
    },
    "q12": {
      "text": "It is a manager’s responsibility to ­­­­­_______________________.",
      "options": {
        "1": "evaluate and render classification decisions and determine the department’s organizational structure",
        "2": "determine compensation for their employees based on their job descriptions",
        "3": "ensure that the organizational structure is in line with the organization’s mandate and business objectives"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "It is a manager’s responsibility to ensure that the organizational structure is in line with the organization’s mandate and business objectives."
    }
  },
  "fr": {
  "instructions":"Maintenant que vous en savez davantage sur l’organisation et la classification, évaluez vos connaissances en répondant aux questions suivantes. ",
  "instructions2":"Établir des liens entre, d’une part, l’organisation et la classification et, d’autre part, d’autres disciplines des RH vous guidera dans les activités qui suivent. Veuillez associer les différents segments de phrase. ",
    "q1": {
      "text": "Créer ou classifier un poste en conformité avec le mandat de l’organisation",
      "options": {
        "1": "vous permettra de fournir votre produit ou  votre service. ",
        "2": "permettra d’atteindre les objectifs (et de remplir le mandat) de l’organisation.  ",
        "3": "permettra de vous assurer que la décision en matière de classification actuelle s’applique toujours au poste."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Créer ou classifier un poste en conformité avec le mandat de l’organisation vous permettra de fournir votre produit ou votre service."
    },
    "q2": {
      "text": "Assurer la planification des postes en fonction des besoins futurs de l’organisation",
      "options": {
        "1": "vous permettra de fournir votre produit ou  votre service. ",
        "2": "permettra d’atteindre les objectifs (et de remplir le mandat) de l’organisation.  ",
        "3": "permettra de vous assurer que la décision en matière de classification actuelle s’applique toujours au poste.  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Assurer la planification des postes en fonction des besoins futurs de l’organisation permettra d’atteindre les objectifs (et de remplir le mandat) de l’organisation."
    },
    "q3": {
      "text": "Confirmer les descriptions de travail avant de pourvoir un poste ",
        "options": {
        "1": "vous permettra de fournir votre produit ou  votre service. ",
        "2": "permettra d’atteindre les objectifs (et de remplir le mandat) de l’organisation.  ",
        "3": "permettra de vous assurer que la décision en matière de classification actuelle s’applique toujours au poste."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
        
      },
      "conclusion": "Confirmer les descriptions de travail avant de pourvoir un poste permettra de vous assurer que la décision en matière de classification actuelle s’applique toujours au poste."
    },
    "q4": {
      "text": "Veiller à ce que les descriptions de travail soient exactes et à jour ",
      "options": {
        "1": "permettra d’assurer que l’employé peut fournir le produit ou le service de manière efficace.",
        "2": "avant de procéder à l’embauche.  ",
        "3": "permettra d’éviter les griefs.  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Veiller à ce que les descriptions de travail soient exactes et à jour permettra d’éviter les griefs."
    },
    "q5": {
      "text": "Déterminer de façon appropriée les exigences en matière de langues officielles d’un poste  ",
      "options": {
        "1": "permettra d’assurer que l’employé peut fournir le produit ou le service de manière efficace.  ",
        "2": "avant de procéder à l’embauche.  ",
        "3": "permettra d’éviter les griefs.  "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Déterminer de façon appropriée les exigences en matière de langues officielles d’un poste permettra d’assurer que l’employé peut fournir le produit ou le service de manière efficace."
    },
    "q6": {
      "text": "Veiller à ce qu’une décision en matière de classification soit prise pour les descriptions de travail nouvelles et révisées",
      "options": {
        "1": "permettra d’assurer que l’employé peut fournir le produit ou le service de manière efficace.  ",
        "2": "avant de procéder à l’embauche.  ",
        "3": "permettra d’éviter les griefs.  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Veiller à ce qu’une décision en matière de classification soit prise pour les descriptions de travail nouvelles et révisées avant de procéder à l’embauche."
    },
    "q7": {
      "text": "Les décisions en matière d’organisation et de classification sont assorties des mêmes obligations redditionnelles que les autres transactions financières. ",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        
      },
      "conclusion": "Les décisions en matière d’organisation et de classification sont assorties des mêmes obligations redditionnelles que les autres transactions financières."
    },
    "q8": {
      "text": "« Configurer les structures organisationnelles pour harmoniser les processus, les systèmes, la technologie, la culture et les employés de l’organisation avec les objectifs finaux de celleci. » À quel terme cette définition correspond-elle?",
      "options": {
        "1": "Organisation et classification",
        "2": "Classification  ",
        "3": "Planification des RH ",
        "4": "Conception organisationnelle "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "La conception organisationnelle est le processus de configuration des structures organisationnelles visant à harmoniser les processus, les systèmes, la technologie, la culture et les employés de l’organisation avec les objectifs finaux de celle-ci. "
    },
    "q9": {
      "text": "Le groupe et le niveau professionnels d’un poste doivent être _______________________.",
      "options": {
        "1": "fondés sur les tâches attribuées au sein de la structure organisationnelle ",
        "2": "établis par le gestionnaire ",
        "3": "assignés par un conseiller accrédité en OC",
        "4": "assignés en fonction du budget de dotation"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Le groupe et le niveau professionnels d’un poste doivent être fondés sur les tâches attribuées au sein de la structure organisationnelle et être assignés par un conseiller accrédité en OC.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le groupe et le niveau professionnels d’un poste doivent être fondés sur les tâches attribuées au sein de la structure organisationnelle et être assignés par un conseiller accrédité en OC."
      }
    },
    "q10": {
      "text": "Vous voulez créer un nouveau poste au sein de votre organisation. Dans la liste ci-dessous, indiquez quelles sont vos responsabilités en matière d’organisation et de classification.  ",
      "options": {
        "1": "Veiller à ce que le poste s’intègre dans la structure organisationnelle. ",
        "2": "Rédiger une description de travail qui correspond au mandat de votre organisation et à ses objectifs opérationnels. ",
        "3": "Veiller à ce que la structure organisationnelle, le mandat et les objectifs opérationnels soient exacts et à jour. ",
        "4": "Décider du groupe et du niveau du poste en vous fondant sur la description de travail. ",
        "5": "Vérifier que la description de travail est représentative du travail associé au poste. ",
        "6": "Vous assurer qu’il y a suffisamment de fonds pour doter le poste. "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Pour créer un nouveau poste au sein de votre organisation, vous devez veiller à ce que le poste s’intègre dans la structure organisationnelle, rédiger une description de travail qui correspond au mandat de votre organisation et à ses objectifs opérationnels, veiller à ce que la structure organisationnelle, le mandat et les objectifs opérationnels soient exacts et à jour et vérifier que la description de travail est représentative du travail associé au poste.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour créer un nouveau poste au sein de votre organisation, vous devez veiller à ce que le poste s’intègre dans la structure organisationnelle, rédiger une description de travail qui correspond au mandat de votre organisation et à ses objectifs opérationnels, veiller à ce que la structure organisationnelle, le mandat et les objectifs opérationnels soient exacts et à jour et vérifier que la description de travail est représentative du travail associé au poste."
      }
    },
    "q11": {
      "text": "La classification est un élément clé de la cohérence des relations de travail.",
      "options": {
        "1": "Vrai ",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "La classification appuie l’établissement de relations de travail cohérentes puisqu’elle permet de déterminer la valeur relative du travail au sein de chaque groupe et niveau professionnels, ce qui garantit une rémunération équitable."
    },
    "q12": {
      "text": "Les gestionnaires doivent s’acquitter des responsabilités suivantes ­­­­­_______________________. ",
      "options": {
        "1": "faire des évaluations et prendre des décisions en matière de classification, et déterminer la structure organisationnelle au sein du ministère ",
        "2": "déterminer la rémunération des employés en fonction de leur description de travail ",
        "3": "s’assurer que la structure organisationnelle est conforme au mandat et aux objectifs opérationnels de l’organisation "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Il est de la responsabilité du gestionnaire de s’assurer que la structure organisationnelle est conforme au mandat et aux objectifs opérationnels de l’organisation."
    }
  }
}</i18n>