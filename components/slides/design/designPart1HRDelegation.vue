<template>
	<div>
    <b-container>
      <b-row>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
      <p v-html="$t('instructions2')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
      <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=4">{{$t('nextPage')}}</b-button>
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
  "instructions":"Using the sample <a href='jobaidHTML/en/delegChart_en.html' target='_blank'>sub-delegation instrument for HR authorities</a>, identify the lowest level of authority that can approve the request.",
  "instructions2":"Answer the following questions.",
    "q1": {
      "text": "<p>An employee calls in sick but their sick leave credits are all used up. They would like an advance of sick leave with pay.</p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned.",
        "4": "<span class='v-right' /><strong>Correct!</strong> In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned.",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, directors at the EX level are the lowest level that can authorize advance of sick leave with pay. Where an employee has insufficient or no credits to cover the granting of sick leave with pay, sick leave with pay may, at the discretion of the employer, be granted to an employee for a period of up to 25 days subject to the deduction of such advanced leave from any sick leave credits subsequently earned."
      }
    },
    "q2": {
      "text": "<p>An employee announces she is pregnant and wants to take maternity leave without pay in a few months.</p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child",
        "5": "<span class='v-right' /><strong>Correct!</strong> In the example provided, managers can authorize maternity or parental leave or parental leave without pay. Parental leave without pay is leave available to any employee for the purpose of caring for their newborn or newly adopted child"
      }
    },
    "q3": {
      "text": "<p>An employee wants to return to college and has requested education leave without pay, with allowance.</p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong> In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements.",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> In the example provided, deputy heads can grant education leave without pay with allowance. An assistant deputy minister could approve such a request without allowance. Approval of leave without pay for educational needs is discretionary. The delegated manager may approve the leave after considering the degree to which the educational leave is needed or its relevance to the organizational requirements."
      }
    },
    "q4": {
      "text": "<p>An employee asks to not come into work because it would be too dangerous due to icy roads in her neighbourhood. Since she is not responsible for this situation, she feels she should still be paid even though she won’t come to work.</p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave.",
        "2": "<span class='v-right' /><strong>Correct!</strong> Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave.",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> Only the deputy head or an assistant deputy minister can authorize paid time off due to adverse climatic or environmental conditions. Adverse environmental conditions at the workplace, such as a lack of heat, and emergency conditions affecting the community, such as a serious flood or snowstorm, are situations that may occur which could require management to exercise discretion with respect to granting leave with pay. In addition, the option to work remotely may be a possible solution before requesting this type of leave."
      }
    },
    "q5": {
      "text": "<p>An employee has a dental appointment Tuesday afternoon and would like paid time off to go to their appointment.</p> <p>Which is the lowest level of authority that can approve the request?</p>",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Director General",
        "4": "Director (EX)",
        "5": "Manager",
        "6": "Supervisor"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits.",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits.",
        "6": "<span class='v-right' /><strong>Correct!</strong> The manager can authorize paid time off work for personal medical and dental appointments. In this example, a supervisor also has the authority to approve the request. The employer may grant up to half a day of paid time off for such absences. Time off work with pay should not be for any follow-up appointments, or a series of appointments to treat a condition. Such absences are to be charged to the employee’s sick leave credits."
      }
    }
  },
  "fr": {
  "instructions":"À l’aide de l’exemple d’<a href='jobaidHTML/fr/delegChart_fr.html' target='_blank'>instrument de subdélégation pour les pouvoirs en matière de RH</a>, déterminez le niveau décisionnel minimal requis pour approuver la demande.",
  "instructions2":"Répondez aux questions suivantes.",
    "q1": {
      "text": "<p>Un employé téléphone pour dire qu’il est malade, mais ses crédits de congé de maladie sont épuisés. Il demande une avance de crédits de congé de maladie payé.</p><p>Quel est le niveau décisionnel minimal requis pour approuver cette demande? </p>",
      "options": {
        "1": "Administrateur général",
        "2": "Sous-ministre adjoint ",
        "3": "Directeur général ",
        "4": "Directeur (EX) ",
        "5": "Gestionnaire "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le niveau minimal requis pour autoriser une avance de crédits de congé de maladie payé est celui de directeur de niveau EX. Si un employé n’a pas de crédits ou que leur nombre est insuffisant pour couvrir la durée du congé de maladie payé, l’employeur peut, à sa discrétion, lui avancer jusqu’à 25 jours de congé de maladie payé, à condition que toute avance soit déduite des crédits de congé de maladie acquis par la suite. ",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le niveau minimal requis pour autoriser une avance de crédits de congé de maladie payé est celui de directeur de niveau EX. Si un employé n’a pas de crédits ou que leur nombre est insuffisant pour couvrir la durée du congé de maladie payé, l’employeur peut, à sa discrétion, lui avancer jusqu’à 25 jours de congé de maladie payé, à condition que toute avance soit déduite des crédits de congé de maladie acquis par la suite. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le niveau minimal requis pour autoriser une avance de crédits de congé de maladie payé est celui de directeur de niveau EX. Si un employé n’a pas de crédits ou que leur nombre est insuffisant pour couvrir la durée du congé de maladie payé, l’employeur peut, à sa discrétion, lui avancer jusqu’à 25 jours de congé de maladie payé, à condition que toute avance soit déduite des crédits de congé de maladie acquis par la suite. ",
        "4": "<span class='v-right' /><strong>Correct!</strong> Dans l’exemple donné, le niveau minimal requis pour autoriser une avance de crédits de congé de maladie payé est celui de directeur de niveau EX. Si un employé n’a pas de crédits ou que leur nombre est insuffisant pour couvrir la durée du congé de maladie payé, l’employeur peut, à sa discrétion, lui avancer jusqu’à 25 jours de congé de maladie payé, à condition que toute avance soit déduite des crédits de congé de maladie acquis par la suite. ",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le niveau minimal requis pour autoriser une avance de crédits de congé de maladie payé est celui de directeur de niveau EX. Si un employé n’a pas de crédits ou que leur nombre est insuffisant pour couvrir la durée du congé de maladie payé, l’employeur peut, à sa discrétion, lui avancer jusqu’à 25 jours de congé de maladie payé, à condition que toute avance soit déduite des crédits de congé de maladie acquis par la suite. "
      }
    },
    "q2": {
      "text": "<p>Une employée annonce qu’elle est enceinte et désire prendre un congé de maternité non payé dans quelques mois.</p> <p>Quel est le niveau décisionnel minimal requis pour approuver cette demande?</p>",
      "options": {
        "1": "Administrateur général",
        "2": "Sous-ministre adjoint ",
        "3": "Directeur général ",
        "4": "Directeur (EX) ",
        "5": "Gestionnaire "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le gestionnaire peut accorder un congé de maternité ou parental ou un congé parental non payé. N’importe quel employé peut prendre un congé parental non payé pour prendre soin de son nouveau-né ou de son enfant récemment adopté. ",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le gestionnaire peut accorder un congé de maternité ou parental ou un congé parental non payé. N’importe quel employé peut prendre un congé parental non payé pour prendre soin de son nouveau-né ou de son enfant récemment adopté. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le gestionnaire peut accorder un congé de maternité ou parental ou un congé parental non payé. N’importe quel employé peut prendre un congé parental non payé pour prendre soin de son nouveau-né ou de son enfant récemment adopté. ",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, le gestionnaire peut accorder un congé de maternité ou parental ou un congé parental non payé. N’importe quel employé peut prendre un congé parental non payé pour prendre soin de son nouveau-né ou de son enfant récemment adopté. ",
        "5": "<span class='v-right' /><strong>Correct!</strong> Dans l’exemple donné, le gestionnaire peut accorder un congé de maternité ou parental ou un congé parental non payé. N’importe quel employé peut prendre un congé parental non payé pour prendre soin de son nouveau-né ou de son enfant récemment adopté. "
      }
    },
    "q3": {
      "text": "<p>Un employé désire retourner à l’université et demande un congé d’études non payé, mais avec indemnités.</p> <p>Quel est le niveau décisionnel minimal requis pour approuver cette demande? </p>",
      "options": {
         "1": "Administrateur général",
        "2": "Sous-ministre adjoint ",
        "3": "Directeur général ",
        "4": "Directeur (EX) ",
        "5": "Gestionnaire "
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong> Dans l’exemple donné, l’administrateur général peut accorder un congé d’études non payé avec indemnités. Un sous-ministre adjoint pourrait approuver une telle demande, mais sans indemnités. L’approbation d’un congé d’études non payé est discrétionnaire. Le gestionnaire délégué pourrait approuver le congé après avoir évalué la nécessité de ce congé d’études ou son utilité à l’égard des besoins de l’organisation. ",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, l’administrateur général peut accorder un congé d’études non payé avec indemnités. Un sous-ministre adjoint pourrait approuver une telle demande, mais sans indemnités. L’approbation d’un congé d’études non payé est discrétionnaire. Le gestionnaire délégué pourrait approuver le congé après avoir évalué la nécessité de ce congé d’études ou son utilité à l’égard des besoins de l’organisation. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, l’administrateur général peut accorder un congé d’études non payé avec indemnités. Un sous-ministre adjoint pourrait approuver une telle demande, mais sans indemnités. L’approbation d’un congé d’études non payé est discrétionnaire. Le gestionnaire délégué pourrait approuver le congé après avoir évalué la nécessité de ce congé d’études ou son utilité à l’égard des besoins de l’organisation. ",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, l’administrateur général peut accorder un congé d’études non payé avec indemnités. Un sous-ministre adjoint pourrait approuver une telle demande, mais sans indemnités. L’approbation d’un congé d’études non payé est discrétionnaire. Le gestionnaire délégué pourrait approuver le congé après avoir évalué la nécessité de ce congé d’études ou son utilité à l’égard des besoins de l’organisation. ",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> Dans l’exemple donné, l’administrateur général peut accorder un congé d’études non payé avec indemnités. Un sous-ministre adjoint pourrait approuver une telle demande, mais sans indemnités. L’approbation d’un congé d’études non payé est discrétionnaire. Le gestionnaire délégué pourrait approuver le congé après avoir évalué la nécessité de ce congé d’études ou son utilité à l’égard des besoins de l’organisation. "
      }
    },
    "q4": {
      "text": "<p>Une employée demande de ne pas se présenter au travail parce que les routes de son quartier sont glacées et trop dangereuses. Puisqu’elle n’est pas responsable de cette situation, elle estime qu’elle devrait être rémunérée même si elle est absente. </p> <p>Quel est le niveau décisionnel minimal requis pour approuver cette demande? </p>",
      "options": {
        "1": "Administrateur général",
        "2": "Sous-ministre adjoint ",
        "3": "Directeur général ",
        "4": "Directeur (EX) ",
        "5": "Gestionnaire "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Une absence payée à cause de conditions environnementales ou météorologiques défavorables peut uniquement être autorisée par l’administrateur général ou un sous‑ministre adjoint. La direction peut accorder, à sa discrétion, un congé payé en cas de conditions environnementales défavorables observées sur le lieu de travail, comme une panne de chauffage, et de situation d’urgence touchant la collectivité, par exemple une grave inondation ou une tempête de neige. Par ailleurs, le travail à distance peut être une solution à considérer avant de demander ce type de congé. ",
        "2": "<span class='v-right' /><strong>Correct!</strong> Une absence payée à cause de conditions environnementales ou météorologiques défavorables peut uniquement être autorisée par l’administrateur général ou un sous‑ministre adjoint. La direction peut accorder, à sa discrétion, un congé payé en cas de conditions environnementales défavorables observées sur le lieu de travail, comme une panne de chauffage, et de situation d’urgence touchant la collectivité, par exemple une grave inondation ou une tempête de neige. Par ailleurs, le travail à distance peut être une solution à considérer avant de demander ce type de congé. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Une absence payée à cause de conditions environnementales ou météorologiques défavorables peut uniquement être autorisée par l’administrateur général ou un sous‑ministre adjoint. La direction peut accorder, à sa discrétion, un congé payé en cas de conditions environnementales défavorables observées sur le lieu de travail, comme une panne de chauffage, et de situation d’urgence touchant la collectivité, par exemple une grave inondation ou une tempête de neige. Par ailleurs, le travail à distance peut être une solution à considérer avant de demander ce type de congé. ",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Une absence payée à cause de conditions environnementales ou météorologiques défavorables peut uniquement être autorisée par l’administrateur général ou un sous‑ministre adjoint. La direction peut accorder, à sa discrétion, un congé payé en cas de conditions environnementales défavorables observées sur le lieu de travail, comme une panne de chauffage, et de situation d’urgence touchant la collectivité, par exemple une grave inondation ou une tempête de neige. Par ailleurs, le travail à distance peut être une solution à considérer avant de demander ce type de congé. ",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> Une absence payée à cause de conditions environnementales ou météorologiques défavorables peut uniquement être autorisée par l’administrateur général ou un sous‑ministre adjoint. La direction peut accorder, à sa discrétion, un congé payé en cas de conditions environnementales défavorables observées sur le lieu de travail, comme une panne de chauffage, et de situation d’urgence touchant la collectivité, par exemple une grave inondation ou une tempête de neige. Par ailleurs, le travail à distance peut être une solution à considérer avant de demander ce type de congé. "
      }
    },
    "q5": {
      "text": "<p>Un employé a un rendez-vous chez le dentiste mardi après-midi et aimerait prendre un congé payé pour aller à son rendez-vous.</p> <p>Quel est le niveau décisionnel minimal requis pour approuver cette demande?</p>",
      "options": {
        "1": "Administrateur général",
        "2": "Sous-ministre adjoint ",
        "3": "Directeur général ",
        "4": "Directeur (EX) ",
        "5": "Gestionnaire ",
        "6": "Superviseur "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. ",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. ",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. ",
        "5": "<span class='v-wrong' /><strong>Incorrect.</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. ",
        "6": "<span class='v-right' /><strong>Correct!</strong> Le gestionnaire peut autoriser une absence payée pour des rendez-vous personnels chez le dentiste et le médecin. Dans l’exemple donné, un superviseur a le pouvoir d’approuver une telle demande. L’employeur peut accorder jusqu’à une demi-journée de congé payé pour ce type d’absences, qui ne doit pas servir à aller à des rendez-vous de suivi ou à une série de rendez-vous visant à traiter un problème de santé. Ces absences doivent être imputées aux crédits de congé de maladie de l’employé. "
      }
    }
  }
}</i18n>