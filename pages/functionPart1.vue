<template>
  <div>
    <h2 class="pageTitle" v-html="$t('OrganizationClassification')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_kuavebpz/flavorId/0_kl36sx20/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_55v2xnk5/flavorId/0_7yp7dcyb/name/a.mp4" chapters chapterFile="SpendPart1.vtt" ccFile="SpendPart1_captions.vtt" posterFile="spendPart1_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">

                        <h2>1. Check your Budget</h2>
                        <p>Now that you have your approved budget and are beginning to deliver on your work plan, let’s start spending money! </p>
                        <p>But before initiating and committing any expenditures, you must verify that there are sufficient funds in your budget.</p>
                        <p>This means you need to review what has been spent or committed to date, along with any other planned expenditures.  </p>
                        <p>As the year progresses, you will most likely shuffle unused amounts within your budgeted items to find the funds that you need for expenditures. </p>
                        <p>Don’t forget! The format of your budget may differ from the one used here, depending on where you work.</p>

                        <hr>

                        <h2>2. Delegation of Authority</h2>
                        <p>Did you know that financial authorities are granted to ministers and deputy heads through the Financial Administration Act, the FAA?</p>
                        <p>These individuals then delegate authority to positions identified by title through their organization’s delegation of financial signing authorities chart. </p>
                        <p>To exercise your financial authority, you need to do the following three things: </p>
                        <ol>
                          <li>One, successfully complete this course. </li>
                          <li>Two, submit your signed delegation card to your Finance unit.</li>
                          <li>And three, receive your formal delegation of authority in writing from your Finance unit.</li>
                        </ol>
                        <p>There are several delegated authorities, and managers typically have two.</p>
                        <p>Section 32 is expenditure initiation and commitment authority, and section 34 is certification authority. Section 32 would allow you to order office supplies, while section 34 would allow you to sign off on having received the supplies.</p>
                        <p>And then there’s section 33, which allows the Finance unit to pay for the supplies.</p>
                        <p>In certain situations, for example, temporary help services, you will need to go through a procurement process because it involves a contract. These situations are governed by section 41 of the FAA, and would typically be managed by the Procurement section in your organization.</p>
                        <p>To know what and how much you can authorize, consult your own signed delegation card and your organization’s delegation chart. </p>
                        <p>Again, the format of these documents will differ, depending on where you work.</p>

                        <hr>

                        <h2>3. Spending Mechanisms</h2>
                        <p>You have the money and you have the delegation. Great! </p>
                        <p>Now you need to determine the best way to get the goods and services in question. </p>
                        <p>The next activity will give you a chance to learn about spending mechanisms!</p>

                        <hr>

                        <h2>4. Recording in the Financial System</h2>
                        <p>Once you’ve checked that you have enough money to cover a purchase, you then create either a soft commitment or a hard commitment. </p>
                        <p>A soft commitment is when you reserve funds before the supplier is identified.</p>
                        <p>A hard commitment is when you make an arrangement with a known supplier.</p>
                        <p>Either way, you will need to enter these commitments in the financial system using the department’s unique financial coding.</p>
                        <p>This financial coding is a system that allows us to keep track of the different kinds of transactions throughout the year. It allows us to identify, among other things: </p>
                        <ul>
                          <li>which manager is responsible for the financial transaction,</li>
                          <li>which component of your budget is being used, operating and maintenance, salary, etc.,</li>
                          <li>the nature of the financial transaction, like if it is revenue, an expenditure, an asset, or a liability,</li>
                          <li>details of the transaction, </li>
                          <li>and the activity to which the financial transaction is linked.</li>
                        </ul>
                        <p>The financial coding system allows you to better manage your financial transactions and speak to your budget at any moment throughout the year. </p>
                        <p>Managers often work with administrative professionals or financial officers for this task.</p>

                        <hr>

                        <h2>5. Try It!</h2>
                        <p>To wrap up this section, let’s take a look at a practice scenario.</p>
                        <hr>
                        <h2>6. Section Completed</h2>

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Vérifiez votre budget</h2>
                        <p>Maintenant que votre budget est approuvé et que vous avez commencé à mettre en œuvre votre plan de travail, vous pouvez commencer à dépenser!</p>
                        <p>Avant d’engager des dépenses, toutefois, vous devez vous assurer que les fonds disponibles dans votre budget sont suffisants.</p>
                        <p>Pour ce faire, vous devez examiner les dépenses qui ont été engagées, dépensées ou prévues. </p>
                        <p>Au fur et à mesure que l’année avance, vous devrez probablement ajuster votre budget à vos besoins en déplaçant des montants d’un poste budgétaire à un autre au sein même votre budget.</p>
                        <p>N’oubliez pas que le gabarit utilisé dans votre unité peut différer sensiblement de celui que nous vous présentons ici!</p>

                        <hr>

                        <h2>2. Délégation des pouvoirs</h2>
                        <p>Saviez-vous que c’est la Loi sur la gestion des finances publiques (LGFP) qui confère aux ministres et aux administrateurs généraux leurs pouvoirs financiers? </p>
                        <p>Par la suite, ces personnes délèguent, à leur tour, une partie de ces pouvoirs financiers à l’intérieur de leur organisation, par le biais d’un tableau de délégation des pouvoirs de signature en matière financière.</p>
                        <p>Pour exercer votre délégation financière, vous avez besoin de faire ces 3 choses :</p>
                        <ol>
                          <li>Réussir le présent cours</li>
                          <li>Soumettre votre carte de délégation signée à votre service des finances</li>
                          <li>obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances </li>
                        </ol>
                        <p>Il existe divers pouvoirs délégués. Les gestionnaires en ont généralement deux. </p>
                        <p>L’article 32 permet à une personne déléguée d’engager des fonds et de dépenser tandis que l’article 34 fait référence à l’autorité de certification. L’article 32 vous permet de commander des articles de bureau, par exemple, puis l’article 34 vous permet de certifier que vous les avez bel et bien reçus.</p>
                        <p>Ensuite, l’article 33 permet à l’unité des finances de payer la facture.</p>
                        <p>Dans certaines situations, par exemple des services d’aide temporaire, vous devrez passer par un processus d’approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe d’Approvisionnement de votre organisation que reviendraient ces démarches, en vertu de l’article 41 de la Loi sur la gestion des finances publiques. </p>
                        <p>Pour savoir ce que vous pouvez engager, vous devez vous fier à votre carte de délégation signée ainsi qu’au tableau de délégation des pouvoirs de signature en matière financière dans votre organisation.</p>
                        <p>Encore une fois, le format de ces documents variera selon l’endroit où vous travaillez. </p>

                        <hr>

                        <h2>3. Mécanismes de dépense</h2>
                        <p>Vous avez l’argent et vous avez la délégation. Super! </p>
                        <p>Maintenant, vous devez déterminer la meilleure façon d’obtenir les biens et services en question. </p>
                        <p>L’activité suivante vous donnera l’occasion de vous familiariser avec les mécanismes de dépense!</p>

                        <hr>

                        <h2>4. Enregistrement dans le système financier</h2>
                        <p>Après avoir vérifié que vous avez assez d’argent pour payer un achat, vous créez soit un engagement préalable, soit un engagement ferme.</p>
                        <p>Un engagement préalable est pris lorsque vous réservez des fonds alors que vous n’avez pas encore trouvé le fournisseur. </p>
                        <p>Un engagement ferme est approprié lorsque vous faites affaire avec un fournisseur connu.</p>
                        <p>Dans un cas comme dans l’autre, vous devrez entrer ces engagements dans le système financier en utilisant le codage financier unique de votre organisation.</p>
                        <p>Ce codage financier est un système qui permet de faire le suivi des opérations financières tout au long de l’année. Il permet de déterminer, entre autres : </p>
                        <ul>
                          <li>le  gestionnaire responsable des opérations financières; </li>
                          <li>la composante de votre budget utilisée, par exemple fonctionnement et entretien, salaire, etc.;</li>
                          <li>la nature de l’opération financière, par exemple  dépenses, recettes, actif, passif;</li>
                          <li>les détails de la transaction;</li>
                          <li>et l’activité à laquelle est associée l’opération financière.</li>
                        </ul>
                        <p>Le système de codage financier vous permet de bien gérer vos opérations financières et de bien pouvoir répondre de votre budget à n’importe quel moment au cours de l’année. </p>
                        <p>Les gestionnaires travaillent souvent avec des professionnels de l'administration ou des agents financiers pour cette tâche.</p>

                        <hr>

                        <h2>5. Essayons-le!</h2>
                        <p>Afin de conclure cette section, prenons quelques instants pour appliquer le tout à un scénario fictif. </p>
                        <hr>
                        <h2>6. Section complétée</h2>

                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('ReferenceIcon')" width="32" height="32">
          {{ $t('activityLinks') }}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
        <p>Here is a list of resources referred to in this section.</p>
        <ul>
          <li><a href="" target="_blank" alt=""></a></li>
          <li><a href="" target="_blank" alt=""></a></li>
          <li><a href="" target="_blank" alt=""></a></li>
        </ul>
      </div>
      <div v-if="$i18n.locale=='en'">
        <p>Here is a list of resources referred to in this section.</p>
        <ul>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/F-11/" target="_blank" alt="Financial Administration Act (FAA)">Financial Administration Act (FAA)</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/h-6/" target="_blank" alt="Canadian Human Rights Act">Canadian Human Rights Act</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/topic-sujet-eng.aspx?ta=40" target="_blank" alt="Policy on People Management">Policy on People Management</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28698" target="_blank" alt="Directive on Classification">Directive on Classification</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28699" target="_blank" alt="Directive on Classification Oversight">Directive on Classification Oversight</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28698" target="_blank" alt="Directive on Classification Grievances">Directive on Classification Grievances</a></li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/collective-agreements/occupational-groups/occupational-groups-bargaining-agent-representation.html" target="_blank" alt="Occupational groups by bargaining agent representation">Occupational groups by bargaining agent representation</a></li>
        </ul>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="organizationClassification" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='en'">
        <p>Most represented employees are governed by one of three main unions.</p>
        <ul>
          <li>Public Service Alliance of Canada (PSAC)</li>
          <li>Professional Institute of the Public Service of Canada (PIPSC)</li>
          <li>Canadian Association of Professional Employees (CAPE)</li>
        </ul>
        <p>Some specific trades are governed by other unions, as indicated on the occupational group structure chart, while a small number of classifications are unrepresented.</p>
        <p><b>Take a look at the Occupational Group Structure for a visual representation of the occupational groups and bargaining agents.</b></p>
        <p>IMAGE MISSING</p>
        <p><b>For an accessible web version, see <a href="https://www.canada.ca/en/treasury-board-secretariat/services/collective-agreements/occupational-groups/occupational-groups-bargaining-agent-representation.html" target="_blank" alt="Link to accessible web version of the Occupational groups by bargaining agent representation page">Occupational groups by bargaining agent representation</a></b></p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="organizationalDesign" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <organizationalDesign />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="rolesResponsibilities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='en'">
        <p>Managers have a number of key organization and classification responsibilities, including:</p>
        <ul>
          <li>successfully completing the required training before exercising organizational design and classification responsibilities</li>
          <li>seeking advice from persons accredited in organizational design and classification when proposing organization and classification changes, including changes to job descriptions</li>
          <li>maintaining accurate organizational structures and current job descriptions for their area of responsibility</li>
          <li>ensuring that employees are notified each time a classification decision is rendered for the position they occupy</li>
        </ul>
        <p>Refer to the <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28700" target="_blank" alt="Link to the Directive on Classification web page">Directive on Classification</a> to fully understand your duties as a delegated manager.</p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="Authorities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <authorities />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="roleofOrganizationHR" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('hrAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='en'">
        <p>Organization and classification decisions have implications for every other HR discipline, as well as your budget.</p>
        <p>IMAGE MISSING</p>
        <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-2 variant="light">{{$t('imageDescription')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">
                        <p>Resourcing begins with writing or revising a job description. The HR advisor will review and evaluate the job description to render a classification decision. Then, Resourcing (staffing) will work with you to create a statement of merit criteria.</p>
                        <p>Pay and Benefits covers collective agreements, rates of pay, and associated benefits that are associated with each position.</p>
                        <p>Labour Relations may be implicated if an employee disagrees with their job description, assigned work activities or the effective date of the classification decision.</p>
                        <p>Performance Management covers an employee’s performance objectives, which are tied to the activities determined by their superior. These objectives are linked to the job description and evaluated regularly.</p>
                        <p>The type of training associated with a position should be recommended in light of the duties of the position as set out in the job description.</p>
                        <p>Official languages as described in the <a href="https://laws-lois.justice.gc.ca/eng/acts/o-3.01/" target="_blank" alt="Link to the Official Languages Act web page"><i>Official Languages Act</i></a> and the Treasury Board of Canada Secretariat’s <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26160" target="_blank" alt="Link to the Policy on Official Languages web page">Policy on Official Languages</a> govern a public servant’s obligation to provide communications and services to the public in both official languages and to respect language-of-work rights.</p>
                        <p>The identification of bilingual positions is based on the organization’s official languages obligations, its official languages strategy, as well as an objective assessment of the work to be performed.</p>
                        <p>Integrated HR planning is the foundation for assessing and understanding your current and future needs. As such, it is a key tool for making HR decisions efficiently and effectively.</p>
                        <p>Organizational design organizes work in a way to carry out a mandate or achieve business objectives. It is the process of configuring organizational structures to align an organization’s processes, systems, technology, culture and people with its ultimate goals. It is part of integrated planning and provides an opportunity to review and revise various components of the work, to ensure the organization is able to meet its mandate and carry out its business objectives successfully.</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                                                
                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('InRealLife')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
      <b-row>
        <b-col>
          <div v-if="$i18n.locale=='en'">
            <p>Take what you have learned into real life!</p>
            <p>To supplement the knowledge required to perform your organization and classification functions, be sure to complete the course Introduction to Organization and Classification (P930).</p>
            <p>This mandatory course is the first step in the training and accreditation of public servants working and specializing in classification.</p>
          </div>
        </b-col>
      </b-row>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32">
          {{$t('TakeTheQuiz')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <functionPart1Quiz />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning youAreHere path="functionPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('OrganizationClassification')" type="video" />
      <microlearning path="functionPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('Staffing')" type="video" />
      <microlearning path="functionKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import organizationalDesign from '~/components/slides/function/functionPart1OrgDesign'
import authorities from '~/components/slides/function/functionPart1Authorities'
import functionPart1Quiz from '~/components/slides/function/functionPart1Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction", "organizationClassification", "organizationalDesign", "rolesResponsibilities", "Authorities", "roleofOrganizationHR", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    organizationalDesign,
    authorities,
    functionPart1Quiz
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart1
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart1_player',e)
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start;
  counter-reset: episode;
}
#bar > li {
  list-style-type:none;
}
#bar > li > p {
  display: inline-block;
  height:2.6em;
}
/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 200px;
  height: 171px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #7d677d;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}
.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(episode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  display: inline-block;
  width:58px;
}
.playButton:hover, .activityButton:hover,.playButton:focus, .activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity:0.8;
}
.playButton{
  left: 20px;
}
.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
.spendSection {
  position: relative;
}
.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.spendSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "imageDescription": "Text description of the graphic",
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "delegateAuthority":"Activity: Delegation of Authority",
  "checkBudget":"Activity: Check Your Budget",
  "forecastBudgetTitle":"Activity: Forecast Budget Requirements",
  "RecordingTitle":"Activity: Recording in the Financial System",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "FUNCTION AND PROCESS"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "delegateAuthority":"Activité : Délégation des pouvoirs",
  "checkBudget":"Activité : Vérifiez votre budget",
  "tryItTitle":"Activité : Essayons-le!",
  "forecastBudgetTitle":"Activité : Prévoyez vos besoins budgétaires",
  "RecordingTitle":"Activité : Enregistrement dans le système financier",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>