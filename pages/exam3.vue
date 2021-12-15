<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>As per Treasury Board requirements, you must pass this test before you can exercise human resources delegation.</p>
              <p>The test is made up of three sections, one for each phase: Foundation, Function and Process and Core Values and Standards. </p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.  </p>
              <p>You are allowed to consult course materials during the test. You may take the test as many times as you need to get a passing grade.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Conformément aux exigences du Conseil du Trésor, vous devez réussir ce test avant de pouvoir exercer les pouvoirs en matière de ressources humaines qui vous ont été délégués.</p>
              <p>Le test comprend trois sections, soit une pour chaque phase : Éléments de base, Fonction et processus et Normes et valeurs fondamentales.</p>
              <p>La note de passage de toutes les sections est de 80 %.</p>
              <p>Chaque section devrait vous prendre entre 20 et 25 minutes.</p>
              <p>Vous pouvez consulter le matériel pédagogique du cours pendant le test, et vous pouvez faire le test autant de fois que vous le souhaitez, jusqu’à l’obtention de la note de passage. </p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar" >
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam report" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,2,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="arraysMatch($event,['1','2'],1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,1,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,1,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,1,4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,4,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,2,6)" />
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
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="arraysMatch($event,['2','3'],8)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,3,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,3,11)" />
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
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="arraysMatch($event,['1','2','3'],13)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[14]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>15
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,1,14)" />
              </b-tab>
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
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=14">{{$t('nextPage')}}</b-button>
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
      <microlearning path="exam1" time="15" size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="20" />
      <microlearning path="exam2" time="15" size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')" class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" youAreHere size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')"  class="report" noGrey type="exam" questionNum="10" />
    </div>
    <div class="bottomNav reportSection" v-else>
      <div class="reportSectionBar"><span>{{$t('report')}}</span></div>
       <microlearning  :completion="$store.state.currentPlaying.reportPart1_player" path="valuesPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('LabourRelations')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart3" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart4" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" time="5" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning youAreHere :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="20" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
    </div>

    <!-- Debugging section -->
    <div v-if="debugging">
      <p>{{allDone}}</p>
      <p>{{answerScore}}</p>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes :</p>
      
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
  name: "examThree",
  data() {
    return {
      debugging: false,
      isNull: false,
      numQuestions: 15
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
            this.$store.commit('report/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('report/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('report/setComplete', this.checkPercentage())
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
        this.$store.commit('report/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('report/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('report/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone() {
      return this.$store.getters['report/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('report/dismissAlert') : this.$store.commit('report/undismissAlert') },
      get() { return this.$store.state.report.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('report/setCurrentTab', tabIndex) },
      get() { return this.$store.state.report.tabIndex }
    },
    answerScore() {
      return this.$store.state.report.score
    },
    quizLocked() {
      return this.$store.state.report.quizLocked
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
>>>.qTable td,
>>>.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

>>>.qTable th[scope="col"] {
  background-color: #865F56;
  color: #fff;
}

/*.reportSection {
  position: relative;
  height: 100px;
}*/

.reportSectionBar {
  text-transform: uppercase;
  background-color: #e5dddc;
  position: absolute;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
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
  background-color: #865F56;
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
  background-color: #B3A27A;
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
  "report": "VALUES",
  "Questions": {
  "q1": {
  "text": "Tina, who offers administrative support to your team, has requested to work from 6:00 am to 2:00 pm to reduce commuting time and to spend more time with her kids. Which document should you consult to help you decide if you should approve Tina’s request?  ",
      "options": {
      "1": "The Policy on People Management ",
      "2": "Tina’s collective agreement  ",
      "3": "The Federal Public Sector Labour Relations Act ",
      "4": "Guidelines for Essential Services Designations "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q2": {
      "text": "In which of the situations is an employee entitled to present a grievance? ",
      "options": {
      "1": "If they feel aggrieved by a provision of a collective agreement ",
      "2": "If they feel aggrieved about an occurrence affecting the terms and conditions of employment ",
      "3": "If they feel aggrieved by a policy or regulation on the distribution of organizational funding "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q3": {
      "text": "You are a manager who has had informal problem-solving discussions with a disgruntled employee.  Yesterday the employee filed a grievance in writing.  What should you do?",
      "options": {
      "1": "Acknowledge receipt of the grievance and forward it to the person responsible ",
      "2": "Speak to the employee to gain a better understanding of what has happened   ",
      "3": "Speak to the employees involved to find the least disruptive resolution "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q4": {
      "text": "An employee in Ms. Boivin’s division has requested leave with pay. Which of the following reference sources should Ms. Boivin consult to determine if the request should be authorized?",
      "options": {
      "1": "The employee’s collective agreement",
      "2": "Policy on People Management",
      "3": "Public Service Employment Act "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q5": {
      "text": "Which one of the following actions cannot result in a grievance under the Public Sector Labour Relations Act?  ",
      "options": {
      "1": "Elimination from a staffing process",
      "2": "Disciplinary action resulting in suspension or financial penalty ",
      "3": "Termination of employment or demotion"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q6": {
      "text": "Who is accountable for ensuring that the Values and Ethics Code for the Public Sector is fully upheld and implemented in an organization?",
      "options": {
      "1": "Public Service Integrity Officer",
      "2": "Office of the Ethics Commissioner  ",
      "3": "All public servants ",
      "4": "Deputy Head "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q7": {
      "text": "One of your employees has been calling in sick on average 2 days per week over the last month. After checking in on the employee about their wellbeing you decide to request a medical document to support absence from work in the future. Would this be deemed as harassment and violence? ",
      "options": {
      "1": "Yes ",
      "2": "No"
      },
      "feedback": {
      "1": "",
      "2": ""
      }
      },
      "q8": {
      "text": "Endangering the lives or safety of Canadians through an action or omission is an example of wrongdoing as defined by which document. ",
      "options": {
      "1": "Values and Ethics Code for the Public Service",
      "2": "Public Servants Disclosure Protection Act",
      "3": "Directive on Conflict of Interest ",
      "4": "Federal Public Sector Labour Relations Act ."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q9": {
      "text": "One of your employees informs you that they have started a part-time business outside of work hours consulting on a subject area that is not related to their public service roles and responsibilities.  As a manager what are your responsibilities in this situation?",
      "options": {
      "1": "You do not have any responsibilities in this situation as the employee is not in a real, apparent or potential conflict of interest ",
      "2": "Advise the employee to review the requirements outlined in the Directive on Conflict of Interest ",
      "3": "Write a report that will inform the deputy head of the situation and support the determination of a real, apparent or potential conflict of interest"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q10": {
      "text": "<p>Your employee Jean (they/them), a manager with no direct reports, occupies a position designated at risk of post-employment conflict of interest situations. Jean has recently received a firm offer of employment that could place them in a real, apparent or potential conflict of interest situation. If Jean accepts, they will quit the federal public service and commence work in 6 months.</p><p>What action do you first advise Jean to take?  </p>",
      "options": {
      "1": "Disclose the situation to the deputy head",
      "2": "Accept the offer immediately, Jean has no supervisory responsibilities ",
      "3": "Decline the offer, Jean is subject to the mandatory one-year limitation period"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q11": {
      "text": "You are an English-speaking manager working in a bilingual region. You are about to meet Ms. Dhingra, your employee who is in a bilingual position, to discuss her work objectives as part of the performance appraisal process. In which language should you conduct the meeting with Ms. Dhingra?",
      "options": {
      "1": "You can choose either English or French",
      "2": "You should conduct the meeting in both languages in a bilingual region  ",
      "3": "You should conduct the meeting in Ms. Dhingra’s official language of choice"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q12": {
      "text": "You are a manager in a compensation unit, who was forwarded a complaint from an employee in your department.  Although the employee has identified as having French as a first language, she has requested her benefits information in English. She continues to receive information from your office in French. What should you do? ",
      "options": {
      "1": "Respond to the employee letting her know that you will look into the issue ",
      "2": "Respond to the employee in English letting her know that because she has checked both English and French boxes, the system will default to the official language ",
      "3": "Respond to the employee in English letting her know that because she has checked both English and French boxes, the system will default to the official language "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q13": {
      "text": "In bilingual regions, managers and supervisors are responsible for ensuring that the Official Languages Act is upheld.  Which of the following statements is wrong? ",
      "options": {
      "1": "Managers supervise employees in the language of the position when they occupy unilingual positions ",
      "2": "Managers take all necessary measures to enable employees practice both official languages by holding meetings alternately in French and English ",
      "3": "Managers ensure that training and professional development is available to employees in the official language of their choice"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q14": {
      "text": "Which of the items  is considered a political activity?",
      "options": {
      "1": "Voting in an election",
      "2": "Contributing funds to a candidate or political party ",
      "3": "Displaying a lawn sign during an election campaign "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q15": {
      "text": "For which political activities must you seek permission from the Public Service Commission? ",
      "options": {
      "1": "Seeking candidacy in an federal, provincial or municipal election ",
      "2": "Taking a post as an elected official at the federal, provincial or municipal ",
      "3": "Opposing a political candidate or party in a way that could be perceived as partisan ",
      "4": "The Public Service Commission does not grant permission in this area "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      }
      }
      },
      "fr": {
      "dismiss": "Faire disparaître",
      "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
      "Answered": "Répondue",
      "markTest": "Corriger mon test",
      "testComplete": "Examen complété",
      "tryAgain": "Essayer de nouveau",
      "scoreIs": "Votre note finale est de",
      "unanswered":"Question(s) sans réponse",
      "report": "VALEURS",
      "Questions": {
      "q1": {
      "text": "Tina, qui offre du soutien administratif à votre équipe, a demandé à travailler de 6 h à 14 h pour réduire son temps de déplacement et pouvoir passer plus de temps avec ses enfants. Quel document devriez-vous consulter pour déterminer si vous devriez approuver la demande de Tina?",
      "options": {
      "1": "La Politique sur la gestion des personnes ",
      "2": "La convention collective de Tina  ",
      "3": "La Loi sur les relations de travail dans le secteur public fédéral ",
      "4": "Les Lignes directrices pour la désignation des services essentiels  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q2": {
      "text": "Dans lesquelles des situations suivantes un employé a-t-il le droit de déposer un grief? ",
      "options": {
      "1": "S’il s’estime lésé par une disposition d’une convention collective. ",
      "2": "S’il s’estime lésé par un incident ayant une incidence sur ses conditions d’emploi. ",
      "3": "S’il s’estime lésé par une politique ou un règlement sur la distribution des fonds de l’organisation. "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q3": {
      "text": "Vous êtes gestionnaire, et vous avez eu des discussions informelles sur la résolution de problèmes avec un employé mécontent. Hier, l’employé a déposé un grief par écrit. Que devriez-vous faire?  ",
      "options": {
      "1": "Accuser réception du grief et le transmettre à la personne responsable.  ",
      "2": "Parler à l’employé afin de mieux comprendre la situation.   ",
      "3": "Discuter avec les employés concernés pour trouver la solution la moins perturbatrice qui soit.  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q4": {
      "text": "Un employé de la division de Mme Boivin a demandé un congé payé. Laquelle des sources de référence suivantes Mme Boivin devrait-elle consulter pour déterminer si la demande devrait être acceptée?  ",
      "options": {
      "1": "La convention collective de l’employé  ",
      "2": "La Politique sur la gestion des personnes ",
      "3": "La Loi sur l’emploi dans la fonction publique  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q5": {
      "text": "Laquelle des mesures suivantes ne peut pas donner lieu au dépôt d’un grief en vertu de la Loi sur les relations de travail dans la fonction publique?  ",
      "options": {
      "1": "L’élimination dans le cadre d’un processus de dotation  ",
      "2": "Une mesure disciplinaire entraînant la suspension ou une sanction pécuniaire ",
      "3": "Le licenciement ou la rétrogradation  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q6": {
      "text": "Qui est responsable du respect et de la mise en œuvre en bonne et due forme du Code de valeurs et d’éthique du secteur public au sein d’une organisation?  ",
      "options": {
      "1": "L’agent de l’intégrité de la fonction publique  ",
      "2": "Le Bureau du commissaire à l’éthique ",
      "3": "Tous les fonctionnaires ",
      "4": "L’administrateur général "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q7": {
      "text": "Un de vos employés a pris des congés de maladie en moyenne deux jours par semaine au cours du dernier mois. Après avoir demandé à l’employé comment il se sentait, vous décidez de lui demander à l’avenir de fournir une preuve médicale pour justifier ses absences. Une telle mesure serait‑elle considérée comme du harcèlement et de la violence? ",
      "options": {
      "1": "Oui ",
      "2": "Non"
      },
      "feedback": {
      "1": "",
      "2": ""
      }
      },
      "q8": {
      "text": "Selon quel document le fait de mettre en danger la vie ou la sécurité des Canadiens par une action ou une omission constitue‑t‑il un exemple d’acte répréhensible?",
      "options": {
      "1": "Le Code de valeurs et d’éthique de la fonction publique ",
      "2": "La Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles ",
      "3": "La Directive sur les conflits d’intérêts ",
      "4": "La Loi sur les relations de travail dans le secteur public fédéral"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q9": {
      "text": "Un de vos employés vous informe qu’il a lancé sa petite entreprise d’expert-conseil à temps partiel – à laquelle il se consacre à l’extérieur de ses heures de travail – dans un domaine qui n’est pas lié au rôle et aux responsabilités qu’il exerce dans la fonction publique. En tant que gestionnaire, quelles sont vos responsabilités dans une telle situation? ",
      "options": {
      "1": "Vous n’avez aucune responsabilité dans cette situation, car l’employé n’est pas en situation de conflit d’intérêts réel, apparent ou potentiel. ",
      "2": "Vous devez demander à l’employé de revoir les exigences figurant dans la Directive sur les conflits d’intérêts. ",
      "3": "Vous devez rédiger un rapport qui informera l’administrateur général de la situation et qui aidera à déterminer s’il y a conflit d’intérêts réel, apparent ou potentiel."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q10": {
      "text": "<p>Une personne sous votre responsabilité, Jean (iel/ille), est gestionnaire, n’a aucun subalterne et occupe un poste susceptible de poser un risque de conflit d’intérêts après‑mandat. Jean a récemment reçu d’une entreprise une offre d’emploi qui risque de causer une situation de conflit d’intérêts réel, apparent ou potentiel. Si Jean accepte l’offre, iel quittera la fonction publique fédérale et commencera à travailler six mois plus tard.</p><p>À votre sens, quelle est la première chose que devrait faire Jean?</p>",
      "options": {
      "1": "Aviser l’administrateur général de la situation. ",
      "2": "Accepter l’offre immédiatement; Jean n’a aucune responsabilité de supervision. ",
      "3": "Décliner l’offre; Jean doit se soumettre à la période de restriction obligatoire d’un an. "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q11": {
      "text": "Vous êtes anglophone et occupez un poste de gestionnaire dans une région bilingue. Vous êtes sur le point de rencontrer Mme Dhingra, une employée qui occupe un poste bilingue, pour discuter de ses objectifs professionnels dans le cadre du processus d’évaluation du rendement. Dans quelle langue la réunion avec Mme Dhingra devrait-elle se dérouler? ",
      "options": {
      "1": "Vous pouvez choisir soit l’anglais, soit le français.",
      "2": "Dans une région bilingue, la réunion devrait se dérouler dans les deux langues.  ",
      "3": "La réunion devrait se dérouler dans la langue officielle choisie par Mme Dhingra. "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q12": {
      "text": "Vous êtes gestionnaire d’une unité de rémunération et vous avez reçu une plainte d’une employée de votre service. Bien que cette employée se déclare comme francophone, elle a demandé que les renseignements sur ses avantages sociaux lui soient fournis en anglais. Pourtant, elle continue de recevoir les renseignements de votre bureau en français. Que devriez‑vous faire? ",
      "options": {
      "1": "Répondre à l’employée et lui indiquer que vous examinerez la question. ",
      "2": "Répondre à l’employée en anglais et lui dire qu’étant donné qu’elle a coché les cases anglais et français, le système utilisera par défaut la langue officielle. ",
      "3": "Répondre à l’employée, dans la langue utilisée dans son courriel, et lui indiquer que vous veillerez à ce que les documents lui soient envoyés en anglais, conformément à sa demande."
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q13": {
      "text": "Dans les régions bilingues, les gestionnaires et les superviseurs doivent veiller au respect de la Loi sur les langues officielles. Laquelle des affirmations suivantes est fausse?",
      "options": {
      "1": "Les gestionnaires supervisent les employés dans la langue associée à leur poste s’il s’agit de postes unilingues. ",
      "2": "Les gestionnaires prennent toutes les mesures nécessaires pour que les employés puissent s’exercer à comprendre et à parler leur deuxième langue en tenant des réunions en anglais ou en français, en alternance. ",
      "3": "Les gestionnaires s’assurent que les séances de formation et les activités de perfectionnement professionnel sont offertes aux employés dans la langue officielle de leur choix. "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q14": {
      "text": "Lequel des éléments suivants est considéré comme une activité politique?  ",
      "options": {
      "1": "Voter à une élection. ",
      "2": "Contribuer au financement d’un candidat ou d’un parti politique. ",
      "3": "Mettre une pancarte sur une pelouse pendant une campagne électorale.  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q15": {
      "text": "Pour quelle activité politique devez-vous obtenir la permission de la Commission de la fonction publique? ",
      "options": {
      "1": "Se porter candidat à une élection fédérale, provinciale ou municipale. ",
      "2": "Accepter un poste de représentant élu à l’échelle fédérale, provinciale ou municipale. ",
      "3": "S’opposer à un candidat ou à un parti politique d’une manière pouvant être perçue comme partisane. ",
      "4": "La Commission de la fonction publique ne donne aucune permission dans ce domaine. "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      }
          }
          }
          }</i18n>
