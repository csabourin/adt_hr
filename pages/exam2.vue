<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col class="col-12">
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
               <p>As per Treasury Board requirements, you must pass this test before you can exercise human resources delegation.  </p>
              <p>The test is made up of three sections, one for each phase: Foundation, Function and Process and Core Values and Standards.  </p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.&nbsp;</p>
              <p>You are allowed to consult course materials during the test. You may take the test as many times as you need to get a passing grade.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Directives</h3>
              <p>Conformément aux exigences du Conseil du Trésor, vous devez réussir ce test avant de pouvoir exercer les pouvoirs en matière de ressources humaines qui vous ont été délégués.</p>
              <p>Le test comprend trois sections, soit une pour chaque phase : Éléments de base, Fonction et processus et Normes et valeurs fondamentales.</p>
              <p>La note de passage de toutes les sections est de 80 %. </p>
              <p>Chaque section devrait vous prendre entre 20 et 25 minutes.  </p>
              <p>Vous pouvez consulter le matériel pédagogique du cours pendant le test, et vous pouvez faire le test autant de fois que vous le souhaitez, jusqu’à l’obtention de la note de passage. </p>
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
            <b-tabs card pills v-model="tabIndex" class="exam spend" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="arraysMatch($event,['1','3'],0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,1,1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="arraysMatch($event,['1','4','5'],2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="arraysMatch($event,3,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,2,4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,1,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="arraysMatch($event,3,6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,2,7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,2,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,1,9)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[10]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>11
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="arraysMatch($event,4,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="arraysMatch($event,4,11)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[12]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>13
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="calculateAnswer($event,2,12)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[13]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>14
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="calculateAnswer($event,1,13)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[14]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>15
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="arraysMatch($event,4,14)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[15]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>16
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q16')" qId="15" :refill="Refill('15')" @response="calculateAnswer($event,4,15)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[16]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>17
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q17')" qId="16" :refill="Refill('16')" @response="calculateAnswer($event,2,16)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[17]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>18
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q18')" qId="17" :refill="Refill('17')" @response="calculateAnswer($event,2,17)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[18]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>19
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q19')" qId="18" :refill="Refill('18')" @response="arraysMatch($event,['2','3'],18)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[19]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>20
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q20')" qId="19" :refill="Refill('19')" @response="calculateAnswer($event,2,19)" />
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
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=19">{{$t('nextPage')}}</b-button>
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
      <microlearning path="exam1" time="15" size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="10" />
      <microlearning path="exam2" time="15" youAreHere size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')"  class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spend')}}</span></div>
      <microlearning path="functionPart1" imagePath="FunctionPart1.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('organizationClassification')" type="video" />
      <microlearning path="functionPart2"  imagePath="FunctionPart2.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="FunctionPart3.svg" :text="$t('Staffing')" type="video" />
      <microlearning path="functionKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning youAreHere path="exam2" size="140" time="20" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
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
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes : </p>
      
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
  name: "examTwo",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 20
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
            this.$store.commit('spend/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('spend/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('spend/setComplete', this.checkPercentage())
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
        this.$store.commit('spend/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('spend/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('spend/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['spend/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('spend/dismissAlert') : this.$store.commit('spend/undismissAlert') },
      get() { return this.$store.state.spend.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('spend/setCurrentTab', tabIndex) },
      get() { return this.$store.state.spend.tabIndex }
    },
    answerScore() {
      return this.$store.state.spend.score
    },
    quizLocked() {
      return this.$store.state.spend.quizLocked
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

/*Using a scoped 'deep' selector*/
>>> .qTable td,>>> .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
>>> .qTable th{
  background-color: #7d677d;
  color:#fff;
}
/*.spendSection {
  position: relative;
  height: 100px;
}*/

.spendSectionBar {
  text-transform: uppercase;
  position: absolute;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
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
  background-color: #7d677d;
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
  background-color: #AFA68E;
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
    "tryAgain": "Try Again",
    "scoreIs": "Your final score is",
    "unanswered":"Unanswered Question(s)",
    "spend": "FUNCTION",
    "Questions": {
      "q1": {
        "text": "Creating or classifying a position in line with the organization’s mandate will ____________. ",
        "options": {
          "1": "enable you to deliver your product or service",
          "2": "build inclusivity ",
          "3": "help meet the organization’s objectives ",
          "4": "ensure that the employee can deliver the product or service effectively "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Rendering a classification decision for new and revised job descriptions _________________. ",
        "options": {
          "1": "will help avoid grievances ",
          "2": "must be done  before hiring",
          "3": "will ensure that the employee can deliver the product or service effectively "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Organization and classification decisions ______________. ",
        "options": {
          "1": "are essentially financial transactions",
          "2": "are made by the deputy head",
          "3": "are made by a manager",
          "4": "are made by an OC-accredited advisor ",
          "5": "are based on job descriptions approved by a manager "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        }
      },
      "q4": {
        "text": "Which of the following is <u>NOT</u> among your organization and classification responsibilities as a manager, when creating a new position.",
        "options": {
          "1": "Ensure that the position fits into the organizational structure",
          "2": "Write a job description that aligns with your organizational mandate and business objectives",
          "3": "Decide on the group and level of the position based on the job description",
          "4": "Verify that the job description is representative of the work assigned to the position"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "It is a manager’s responsibility to _______________________.  ",
        "options": {
          "1": "evaluate and render classification decisions and determine the department’s organizational structure ",
          "2": "ensure that the organizational structure is in line with the organization’s mandate and business objectives  ",
          "3": "determine compensation for their employees based on their job descriptions  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "<p>Mr. Drolet is the director general in the National Capital Region responsible for the management of the fleet services located in headquarters and the regions. A decision was made to move this function to Miramichi, NB causing the need to restructure  Mr. Drolet’s directorate.</p><p> What is the most appropriate next step? </p>",
        "options": {
          "1": "Conduct an organizational analysis in consultation with an organization and classification (OC)-accredited HR advisor ",
          "2": "Reclassify all positions affected",
          "3": "Inform all employees that the measures of the Treasury Board Workforce Adjustment Directive are in effect "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "Organization and Classification has a direct impact on human resources management.  Which of the following is not an area of HR management in Organization and Classification.",
        "options": {
          "1": "Mandate and budget",
          "2": "Organizational design",
          "3": "Employment Equity ",
          "4": "Resourcing"
        },
        "feedback": {
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        }
      },
      "q8": {
        "text": "This policy provides deputy heads with the parameters to manage their classification authorities and to delegate classification authority to accredited persons.",
        "options": {
          "1": "<i>The Financial Administration Act</i> (FAA)",
          "2": "The Policy on People Management",
          "3": "Authority Delegation Accountability Instrument"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q9": {
        "text": "A reference check is ___________________________. ",
        "options": {
          "1": "a condition of hire performed as the last step in a hiring process ",
          "2": "an assessment method used to validate a candidate’s qualifications",
          "3": "necessary in all staffing actions to verify competencies"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "You are a sub-delegated manager, who has  been trying to staff a specialized position in a remote location. In recent years, it has been difficult to attract and retain employees in your unit. Experts are hard to find. Last week, you attended a conference in Vancouver. During a break, you met someone who is just finishing her term in the Interchange Canada program and will be returning to her substantive position in the public service. She  has the expertise required for the vacant position in your team. Which staffing process could be used to appoint this person to this position?",
        "options": {
          "1": "Deployment",
          "2": "Internal advertised",
          "3": "Secondment",
          "4": "External Non-advertised"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "What should you consider when determining your staffing needs?",
        "options": {
          "1": "Business plans",
          "2": "Qualifications required for the position ",
          "3": "Organizational objectives, such as employment equity",
          "4": "All of the above"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Staffing priorities are guided by which of the following?",
        "options": {
          "1": "The Clerk of the Privy Council",
          "2": "The Treasury Board Secretariat",
          "3": "The Deputy Head",
          "4": "All of the above"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Managers can achieve employment equity, diversity and inclusion objectives by ___________________.",
        "options": {
          "1": "ensuring the application of merit criteria",
          "2": "eliminating barriers during the staffing process",
          "3": "following orders of precedence "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "Which policy covers the requirements for deployments, assignments, secondments, reclassifications, and official languages in relation to staffing?",
        "options": {
          "1": "Policy on People Management ",
          "2": "Apppointment Policy ",
          "3": "<i>Public Service Employment Act</i>"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Which of the following staffing options is <u>NOT</u> used to hire someone for an indeterminate period of employment?",
        "options": {
          "1": "External advertised appointment process",
          "2": "Deployment  ",
          "3": "Internal unadvertised appointment process ",
          "4": "Secondment"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "A candidate in a staffing process you are conducting has requested an accommodation. What should you do?  ",
        "options": {
          "1": "Assess the candidate on slightly different criteria  ",
          "2": "Offer no accommodation because they are not required during the assessment ",
          "3": "Consider the validity of the accommodation request ",
          "4": "Arrange to meet the accommodation needs of the candidate "
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Demand for your program’s services has increased substantially, and now everyone is required to work four night shifts per month. Brad is a single father of two young children, and he is unable to comply and requested accommodation. Are you required to accommodate Brad? ",
        "options": {
          "1": "Yes, because he is a single father ",
          "2": "Yes, because he has requested accommodation based on family status  ",
          "3": "Yes, because you must accommodate when someone makes a request ",
          "4": "No, because his situation does not impede his ability to do his job "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "What is the impact of employment equity, diversity and inclusion policies.",
        "options": {
          "1": "Increases the cost of doing business by needing to accommodate with special tools and equipment for those who request them",
          "2": "Ensures that current and potential employees have equal opportunity to be hired or promoted for their qualifications",
          "3": "Hinders full and equal participation in the workplace"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q19": {
        "text": "Which of the following statements about biases are true?",
        "options": {
          "1": "Conscious biases tend to be positive while unconscious biases tend to be negative",
          "2": "Biases arise as a result of the brain’s tendency to generalize ",
          "3": "Biases can be unlearned ",
          "4": "Conscious biases affect our behaviours while unconscious biases affect our attitudes"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "To ensure equal access to opportunities and to facilitate full and equal participation, which of the following is your responsibility? ",
        "options": {
          "1": "Assess an employee’s need for accommodation to determine what the employee is able to do ",
          "2": "Inform all employees of their right to request work-related accommodation to address needs that may impede their ability to work effectively ",
          "3": "Suggest your employees read the organizational policies and procedures on diversity equity and inclusion, so they know their rights. "
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
    "scoreIs": "Votre note finale est de",
    "unanswered":"Question(s) non-répondue(s)",
    "spend": "FONCTION",
    "Questions": {
       "q1": {
        "text": "La création ou la classification d’un poste conformément au mandat de l’organisation ____________.",
        "options": {
          "1": "vous permettra de livrer votre produit ou de fournir votre service ",
          "2": "favorisera l’inclusivité ",
          "3": "contribuera à l’atteinte des objectifs de l’organisation ",
          "4": "fera en sorte que l’employé pourra livrer le produit ou fournir le service efficacement  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Une décision en matière de classification pour les descriptions de travail, nouvelles et révisées _________________. ",
        "options": {
          "1": "permettra d’éviter certains griefs  ",
          "2": "doit être prise avant l’embauche ",
          "3": "fera en sorte que l’employé pourra livrer le produit ou fournir le service efficacement  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Les décisions en matière d’organisation et de classification ______________. ",
        "options": {
          "1": "consistent essentiellement en des opérations financières ",
          "2": "sont prises par l’administrateur général ",
          "3": "sont prises par un gestionnaire ",
          "4": "sont prises par un conseiller accrédité en OC ",
          "5": "reposent sur des descriptions de travail approuvées par un gestionnaire "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": ""
        }
      },
      "q4": {
        "text": "Lequel des éléments suivants NE représente PAS, lors de la création d’un nouveau poste, une de vos responsabilités en matière d’organisation et de classification en tant que gestionnaire?",
        "options": {
          "1": "Faire en sorte que le poste s’intègre bien dans la structure organisationnelle.",
          "2": "Rédiger une description de travail qui correspond au mandat et aux objectifs opérationnels de votre organisation.",
          "3": "Déterminer le groupe et le niveau du poste à la lumière de la description de travail.",
          "4": "Vérifier que la description du poste est représentative des fonctions du poste."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Il incombe au gestionnaire _______________________. ",
        "options": {
          "1": "d’évaluer la situation, de prendre des décisions en matière de classification et de déterminer la structure organisationnelle du ministère ",
          "2": "de veiller à ce que la structure organisationnelle soit conforme au mandat et aux objectifs opérationnels de l’organisation ",
          "3": "de déterminer la rémunération de ses employés en fonction de leur description de travail  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "<p>M. Drolet est le directeur général de la région de la capitale nationale qui est responsable de la gestion des parcs automobiles situés à l’administration centrale et dans les régions. Il a été décidé que cette fonction serait transférée à Miramichi, au Nouveau-Brunswick, ce qui entraîne la nécessité de restructurer la direction où travaille M. Drolet. </p><p>Quelle est la prochaine étape la plus appropriée parmi les suivantes? </p>",
        "options": {
          "1": "Effectuer une analyse organisationnelle en consultation avec un conseiller en RH accrédité en organisation et en classification (OC). ",
          "2": "Reclassifier tous les postes concernés. ",
          "3": "Informer tous les employés que les dispositions de la Directive sur le réaménagement des effectifs du Conseil du Trésor sont en vigueur. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "L’organisation et la classification ont une incidence directe sur la gestion des ressources humaines. Quel aspect de la gestion des RH n'est pas pas lié à l’organisation et à la classification?",
        "options": {
          "1": "Mandat et budget ",
          "2": "Conception organisationnelle ",
          "3": "Équité en matière d’emploi ",
          "4": "Ressourcement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Cette politique fournit aux administrateurs généraux les paramètres nécessaires pour gérer leurs pouvoirs en matière de classification et pour déléguer des pouvoirs de classification à des personnes accréditées. ",
        "options": {
          "1": "La <i>Loi sur la gestion des finances publiques</i> (LGFP) ",
          "2": "La Politique sur la gestion des personnes ",
          "3": "L’Instrument de délégation et de responsabilisation en matière de nomination "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q9": {
        "text": "Une vérification des références est ___________________________.  ",
        "options": {
          "1": "une condition d’embauche effectuée à la dernière étape du processus d’embauche  ",
          "2": "une méthode d’évaluation des qualifications d’un candidat ou d’une candidate  ",
          "3": "nécessaire à toutes les mesures de dotation afin de vérifier les compétences"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "Vous occupez un poste de gestionnaire subdélégué et vous essayez de pourvoir un poste spécialisé dans une région éloignée. Ces dernières années, vous avez eu du mal à attirer et à maintenir en poste des employés au sein de votre unité. Les experts sont difficiles à trouver. La semaine dernière, vous avez assisté à une conférence à Vancouver. Lors d’une pause, vous avez rencontré quelqu’un qui vient de terminer son mandat au programme Échanges Canada et qui retournera à son poste d’attache dans la fonction publique. Elle possède l’expertise requise pour le poste vacant dans votre équipe. Quel processus de dotation pourrait servir à nommer cette personne à ce poste?",
        "options": {
          "1": "Mutation",
          "2": "Processus interne annoncé",
          "3": "Détachement  ",
          "4": "Processus externe non annoncé "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Que devriez-vous prendre en compte au moment de déterminer vos besoins en dotation?",
        "options": {
          "1": "Les plans d’activités",
          "2": "Les qualifications requises pour le poste",
          "3": "Les objectifs organisationnels, comme l’équité en matière d’emploi",
          "4": "Toutes ces réponses"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Parmi les intervenants suivants, qui établit les priorités en matière de dotation?",
        "options": {
          "1": "Le greffier du Conseil privé",
          "2": "Le Secrétariat du Conseil du Trésor",
          "3": "L’administrateur général  ",
          "4": "Toutes ces réponses"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Les gestionnaires peuvent atteindre les objectifs d’équité en matière d’emploi, de diversité et d’inclusion en ___________________.",
        "options": {
          "1": "veillant à l’application des critères de mérite",
          "2": "éliminant les obstacles pendant les processus de dotation",
          "3": "suivant les ordres de priorité"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "Quelle politique aborde les exigences relatives aux mutations, aux affectations, aux détachements, à la reclassification et aux langues officielles dans le domaine de la dotation?",
        "options": {
          "1": "La Politique sur la gestion des personnes ",
          "2": "La Politique de nomination  ",
          "3": "La <i>Loi sur l’emploi dans la fonction publique</i> "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Laquelle des options de dotation suivantes n'est pas une stratégie pour embaucher une personne pour une période indéterminée?",
        "options": {
          "1": "Processus de nomination externe annoncé  ",
          "2": "Mutation",
          "3": "Processus interne de nomination non annoncé ",
          "4": "Détachement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "Lors d’un processus de dotation, un candidat vous demande de prendre des mesures d’adaptation. Que devriez-vous faire?",
        "options": {
          "1": "Évaluer le candidat selon des critères légèrement différents.",
          "2": "Refuser d’offrir des mesures d’adaptation, car il n’est pas nécessaire de le faire à l’étape de l’évaluation. ",
          "3": "Examiner la validité de la demande.",
          "4": "Prendre des dispositions pour répondre aux besoins d’adaptation du candidat."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Vous avez observé une augmentation importante des demandes de services dans le cadre de votre programme, et tous les employés doivent désormais travailler quatre quarts de nuit par mois. Brad, qui élève seul ses deux jeunes enfants, est incapable de se conformer à cette nouvelle réalité et demande une mesure d'adaptation. Avez‑vous l’obligation de lui offrir des mesures d’adaptation?",
        "options": {
          "1": "Oui, parce qu’il est un père célibataire.",
          "2": "Oui, parce qu’il a demandé des mesures d’adaptation en raison de sa situation familiale.",
          "3": "Oui, car vous devez prendre des mesures d’adaptation lorsqu’une personne en fait la demande.",
          "4": "Non, car sa situation n’entrave pas sa capacité à travailler. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Quelle est l’incidence des politiques d’équité en matière d’emploi, de diversité et d’inclusion?",
        "options": {
          "1": "Elles entraînent une augmentation des coûts d’exploitation, car il faut prévoir des outils et du matériel particuliers pour ceux qui en font la demande. ",
          "2": "Elles font en sorte que les employés actuels et potentiels ont des chances égales d’être promus ou embauchés grâce à leurs qualifications.  ",
          "3": "Elles empêchent une participation totale et égale dans le lieu de travail. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q19": {
        "text": "Parmi les énoncés suivants portant sur les préjugés, lesquels sont vrais?",
        "options": {
          "1": "Les préjugés conscients ont tendance à être positifs, et les préjugés inconscients tendent à être négatifs. ",
          "2": "Les préjugés sont causés par la tendance du cerveau à généraliser. ",
          "3": "Les préjugés peuvent être désappris. ",
          "4": "Les préjugés conscients ont une incidence sur notre comportement, tandis que les préjugés inconscients ont une incidence sur notre attitude."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "Pour garantir un accès égal aux possibilités offertes et permettre une participation totale et égale, laquelle des mesures suivantes avez‑vous la responsabilité de prendre?",
        "options": {
          "1": "Évaluer le besoin de mesures d’adaptation d’un employé afin de déterminer ce que celui-ci est capable de faire. ",
          "2": "Informer tous les employés qu’ils ont le droit de demander des mesures d’adaptation liées au travail pour remédier à une lacune qui pourrait les empêcher de travailler efficacement.",
          "3": "Suggérer à vos employés de lire les politiques et les procédures de l’organisation en matière de diversité, d’équité et d’inclusion afin de sa familiariser avec leurs droits. "
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
