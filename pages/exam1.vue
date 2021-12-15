<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>As per Treasury Board requirements, you must pass this test before you can exercise human resources delegation.  </p>
              <p>The test is made up of three sections, one for each phase: Foundation, Function and Process and Core Values and Standards. </p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.  </p>
              <p>You are allowed to consult course materials during the test. You may take the test as many times as you need to get a passing grade.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Conformément aux exigences du Conseil du Trésor, vous devez réussir ce test avant de pouvoir exercer les pouvoirs en matière de ressources humaines qui vous ont été délégués.  </p> 
              <p>Le test comprend trois sections, soit une pour chaque phase : Éléments de base, Fonction et processus et Normes et valeurs fondamentales.  </p>
              <p>La note de passage est de 80&nbsp;%, par partie.</p>
              <p>Chaque section devrait vous prendre entre 20 et 25 minutes.  </p>
              <p>Vous pouvez consulter le matériel pédagogique du cours pendant le test, et vous pouvez faire le test autant de fois que vous le souhaitez, jusqu’à l’obtention de la note de passage.  </p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar">
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam plan" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,3,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,2,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="arraysMatch($event,['1','2','4','5'],3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="arraysMatch($event,['2','3','4'],4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,2,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="arraysMatch($event,['1','2','3'],6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
               <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="arraysMatch($event,['2','3'],7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,3,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="arraysMatch($event,['1','2'],9)" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group class="mt-2" :aria-label="$t('questionNav')">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=9">{{$t('nextPage')}}</b-button>
            </b-button-group>
          </div>
          <transition name="fade">
            <div style="margin-top: 50px;">
              <hr />
              <p><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
            </div>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    
    <div class="bottomNav generalSection" v-if="chosenScenario == 'justExam'">
      <div class="generalSectionBar"><span>{{$t('justExamShort')}}</span></div>
      <microlearning path="exam1" time="15" youAreHere size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="10" />
      <microlearning path="exam2" time="15" size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')" class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
    <div class="bottomNav planSection" v-else>
      <div class="planSectionBar"><span>{{$t('plan')}}</span></div>
      <microlearning path="designPart1" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('HRDelegation')" type="video" />
    <microlearning size="140" path="designPart2" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('HRPlanning')" type="video" />
    <microlearning path="designKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning  youAreHere size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="10" />
    </div>
    <!-- Debugging section -->
    <div v-if="debugging">
      <p>Alldone: {{allDone}}</p>
      <p>{{answerScore}}</p>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link></p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes:</p>
      
      <ul>
        <li v-for="question, index in unansweredQuestions" :key="question">Question {{question}}</li>
      </ul>
      
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import microlearning from "~/components/microlearning"
export default {
  name: "examOne",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 10
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz,
    microlearning
  },
  methods: {

    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('plan/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('plan/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('plan/setComplete', this.checkPercentage())
      }
      else{
        this.$bvModal.show('missingQuestions');
      }
    },
    checkPercentage() {
      var count = 0;
      for (let i in this.answerScore) {
        if (this.answerScore[i][0] == "01") // 01 means correct answer
          count++;
      }
      const score = parseInt(count / this.numQuestions * 100)
      return score
    },
    Refill(qId) {
      if (this.answerScore[qId]) { return this.answerScore[qId][1] } else { return undefined }
    },
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$store.commit('plan/setScore', [qId.toString(), "01", answer]) // 01 means right
      } else { this.$store.commit('plan/setScore', [qId.toString(), "'10'", answer]) } // wrong could be whatever
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1]) 
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('plan/setScore', [qId.toString(), "01", arr1]) // 01 means right
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['plan/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('plan/dismissAlert') : this.$store.commit('plan/undismissAlert') },
      get() { return this.$store.state.plan.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('plan/setCurrentTab', tabIndex) },
      get() { return this.$store.state.plan.tabIndex }
    },
    answerScore() {
      return this.$store.state.plan.score
    },
    quizLocked() {
      return this.$store.state.plan.quizLocked
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    },
    unansweredQuestions(){
      var unanswered = [];
      for (var i = 0; i < this.numQuestions; i++){
        if(!this.answerScore[i]){
          unanswered.push(i+1);
        }
      }
      return unanswered;
    },
    allAnswered(){
      const answers = Object.keys(this.answerScore).length
      return answers === this.numQuestions
    }
  },
}
</script>
<style type="text/css" scoped>
/*.planSection {
  position: relative;
  height: 100px;
}*/

.planSectionBar {
  text-transform: uppercase;
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

.progressBar {
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;

}

.square {
  font-size: .9em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  width: 42px;
  height: 22px;
  background-color: #DDD;
  cursor: pointer;
  color: #4d4d4d;
}

.filled {
  background-color: #587C84;
  color: #fff;
}

.Qactive {
  background-color: #e0e59e;
  box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
  outline: 1px solid #fff;
  color: #212529;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #B3C295
}
  
  .alert{
    padding-top: 1.5rem;
  }
  
  .alert h3{
    font-size: 22px;
  }
  
  .instructionsBtn{
    display: block;
    width: 60px;
    height: 60px;
    background: url('~assets/instructionsIcon.svg') center center no-repeat;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }
  
  .instructionsBtn:hover, .instructionsBtn:focus{
    opacity: 0.8;
    outline: none;
  }

</style>
<i18n>{
  "en": {
    "dismiss": "Dismiss",
    "warnReset":"This will erase your answer and score for this test, are you certain?",
    "Answered": "Answered",
    "markTest": "Mark my test",
    "testComplete": "Test Completed",
    "tryAgain": "Try again",
    "scoreIs":"Your final score is",
    "unanswered":"Unanswered question(s)",
    "plan": "FOUNDATION",
    "Questions": {
      "q1": {
        "text": "Deputy heads are delegated certain authorities from the Public Service Commission such as the choice of appointment process and hiring casual workers.  Which document grants these authorities? ",
        "options": {
          "1": "Public Service Employment Act (PSEA) ",
          "2": "Policy on People Management ",
          "3": "Authority Delegation and accountability Instrument (ADAI) "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "Ms. Dupré, a director with sub-delegated appointment authorities, would like to find a replacement to exercise her authorities in her absence for the summer holidays. How should this be done?  ",
        "options": {
          "1": "The replacement should complete the training and obtain permission in writing from the head of human resources ",
          "2": "The replacement should complete the training, sign the attestation and obtain sub-delegation in writing from the deputy head ",
          "3": "The replacement should sign the attestation and obtain permission in writing from the deputy head "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "A manager’s authorities are defined solely by the terms of the collective agreement.  ",
        "options": {
          "1": "True ",
          "2": "False"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q4": {
        "text": "Deputy heads obtain their HR delegated authorities from which sources.   ",
        "options": {
          "1": "Parliament ",
          "2": "The Public Service Commission ",
          "3": "Appointment Delegation and Accountability Instrument  ",
          "4": "The Financial Administration Act ",
          "5": "The Clerk of the Privy Council "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        }
      },
      "q5": {
        "text": "For which activities would you use your Organizational HR Delegation Instrument?  ",
        "options": {
          "1": "Assign authorities to a person  ",
          "2": "Approve leave requests ",
          "3": "Approve job descriptions  ",
          "4": "Assign performance agreement ratings "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Which of the following statements about human resources planning is false?  ",
        "options": {
          "1": "It identifies risks and challenges  ",
          "2": "It’s a key tool for addressing disciplinary issues ",
          "3": "It contributes to employment equity and retention "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "Which documents should you consult when developing your HR plan?    ",
        "options": {
          "1": "Annual report from the Clerk of the Privy Council   ",
          "2": "Departmental Plans ",
          "3": "Speech from the Throne",
          "4": "Financial Administration Act (FAA)"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Managers are responsible for which of the following  HR planning activities? ",
        "options": {
          "1": "Identify and eliminate barriers to employment to ensure equity and diversity in the workforce   ",
          "2": "Evaluate the effectiveness of the plan and adapting it as required   ",
          "3": "Link succession planning strategies to program and financial planning ",
          "4": "Redeploy individuals who are surplus in one area to a different area  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "The purpose of human resources planning is to help you ___________. ",
        "options": {
          "1": "determine if you have the staff to meet the business challenge ",
          "2": "assess the gaps in your current workforce ",
          "3": "identify current and future human resources need"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "Which are reasons for integrating human resources and business planning?",
        "options": {
          "1": "To align human resources and business objectives  ",
          "2": "To ensure a sustainable and healthy organization ",
          "3": "To ensure confidentiality of personal information "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    }
  },
  "fr": {
    "dismiss": "Faire disparaître",
    "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
    "Answered": "Répondue",
    "markTest": "Corriger mon test",
    "testComplete": "Test complété",
    "tryAgain": "Essayer de nouveau",
    "scoreIs":"Votre note finale est de",
    "unanswered":"Question(s) sans réponse",
    "plan": "BASE",
    "Questions": {
      "q1": {
        "text": "Les administrateurs généraux se voient confier certains pouvoirs par la Commission de la fonction publique, comme le choix du processus de nomination et l’embauche de travailleurs occasionnels. Quel document octroie ces pouvoirs? ",
        "options": {
          "1": "La Loi sur l’emploi dans la fonction publique (LEFP) ",
          "2": "La Politique sur la gestion des personnes ",
          "3": "L’Instrument de délégation et de responsabilisation en matière de nomination (IDRN)   "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "Mme Dupré, une directrice ayant des pouvoirs de nomination subdélégués, souhaite trouver une personne pour la remplacer et exercer ses pouvoirs pendant ses vacances estivales. Comment devrait‑elle procéder?",
        "options": {
          "1": "Le remplaçant devrait suivre la formation appropriée et obtenir l’autorisation écrite du responsable des ressources humaines. ",
          "2": "Le remplaçant devrait suivre la formation appropriée, signer l’attestation et se voir subdéléguer les pouvoirs par écrit par l’administrateur général. ",
          "3": "Le remplaçant devrait signer l’attestation et obtenir l’autorisation écrite de l’administrateur général. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Les pouvoirs d’un gestionnaire sont définis uniquement par les modalités de la convention collective. ",
        "options": {
          "1": "Vrai ",
          "2": "Faux"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q4": {
        "text": "Auprès de quelles sources les administrateurs généraux obtiennent-ils leurs pouvoirs délégués en matière de RH?",
        "options": {
          "1": "Le Parlement  ",
          "2": "La Commission de la fonction publique ",
          "3": "L’Instrument de délégation et de responsabilisation en matière de nomination ",
          "4": "La Loi sur la gestion des finances publiques ",
          "5": "Le greffier du Conseil privé  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        }
      },
      "q5": {
        "text": "Pour quelles activités utiliseriez-vous l’instrument de délégation des pouvoirs en matière de RH de votre organisation?  ",
        "options": {
          "1": "Attribuer des pouvoirs à une personne. ",
          "2": "Approuver les congés. ",
          "3": "Approuver les descriptions de travail.  ",
          "4": "Attribuer les cotes des ententes de rendement."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Lequel des énoncés suivants portant sur la planification des ressources humaines est faux?  ",
        "options": {
          "1": "Elle permet de cibler les risques et les défis.  ",
          "2": "Il s’agit d’un outil essentiel pour la gestion des problèmes disciplinaires. ",
          "3": "Elle contribue à l’équité en matière d’emploi et au maintien en poste. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "Quels documents devriez-vous consulter lors de l’élaboration de votre plan de RH? ",
        "options": {
          "1": "Rapport annuel du greffier du Conseil privé ",
          "2": "Plans ministériels ",
          "3": "Discours du Trône ",
          "4": "Loi sur la gestion des finances publiques (LGFP) "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Parmi les activités de planification des RH suivantes, lesquelles incombent aux gestionnaires? ",
        "options": {
          "1": "Déterminer et éliminer les obstacles à l’emploi afin d’assurer l’équité et la diversité de l’effectif.   ",
          "2": "Évaluer l’efficacité du plan et l’adapter au besoin.  ",
          "3": "Établir un lien entre, d’une part, les stratégies de planification de la relève et, d’autre part, la planification de programme et la planification financière.  ",
          "4": "Muter à un autre secteur les employés qui sont excédentaires dans un secteur donné. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "L’objectif de la planification des ressources humaines est de vous aider à ___________.  ",
        "options": {
          "1": "déterminer si vous disposez des effectifs nécessaires pour répondre aux objectifs opérationnels ",
          "2": "évaluer les lacunes de l’effectif en place ",
          "3": "cibler les besoins actuels et futurs en matière de ressources humaines"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "Quelles sont les raisons d’intégrer les ressources humaines et la planification opérationnelle?  ",
        "options": {
          "1": "Harmoniser les ressources humaines avec les objectifs opérationnels. ",
          "2": "Assurer une organisation durable et bien gérée. ",
          "3": "Garantir la confidentialité des renseignements personnels."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    }
  }
}</i18n>
