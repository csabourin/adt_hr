<template>
  <div>
    <h1 class="pageTitle" v-html="$t('DiversityInclusion')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_gg0n4kqr/flavorId/0_n3sk64wq/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_4sryljih/flavorId/0_tu5e59di/name/a.mp4" chapters chapterFile="SpendPart2.vtt" ccFile="FunctionPart2_captions.vtt" posterFile="m4.jpg" :restartAt="parseInt(thatPoint)" toResume="setSpendPart2" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalParts') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">
                        <p><strong>[00:00:02 Title is shown onscreen.] </strong></p>
                        <h2>Module 4: Employment Equity, Diversity and Inclusion</h2>
                        <p><strong>[00:00:09 Title is shown onscreen.] </strong></p>
                        <h2>1. Introduction</h2>
                        <p>Everyone benefits from employment equity, diversity and inclusion because they ensure that current and potential employees have equal opportunity to be hired or promoted for their skills and abilities.</p>
                        <p>They also enhance your organization and your team as a whole, because a diverse workforce can provide a broader range of ideas and insights and greater resilience.</p>
                        <p>In this section you will learn to:</p>
                        <ul>
                          <li>recognize the scope of responsibilities regarding employment equity, diversity, inclusion and accommodation.</li>
                        </ul>
                        <p>Ultimately, employment equity is about removing barriers, and diversity, equity and inclusion are about embracing differences so that employees can perform effectively and fully contribute to the organization.</p>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <p><strong>[00:01:01 A “Reference: External Links” pop-up text box appears onscreen.]  </strong></p>
                        <p><strong>[00:01:01 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>2. Workplace Accommodation</h2>
                        <p>It is your responsibility as a manager to ensure an equal access to opportunities that is free of discrimination. It is also your responsibility to remove barriers that prevent or hinder full and equal participation in employment in the core public administration.</p>
                        <p>Be sure to inform your employees of their right to request work-related accommodation to address needs and limitations that impede their ability to do their best work.</p>
                        <p>In offering accommodation, there is no set formula. While respecting the privacy and dignity of employees, handle each request on a case-by-case basis.</p>
                        <p>Accommodation can take many forms. Some examples include:</p>
                        <ul>
                          <li>Offering attendant services</li>
                          <li>Ensuring technology is accessible</li>
                          <li>Providing work-related information in accessible format</li>
                          <li>Offering flexible work arrangements</li>
                          <li>Providing a prayer room</li>
                          <li>Adapting the workspace</li>
                          <li>Adapting training programs to the needs of employees</li>
                        </ul>
                        <p>Your organization has policies and procedures that offer guidance in creating a workplace that is more equitable, diverse and inclusive and assistance in removing barriers, to ensure that all employees can participate equally in the work environment.</p>
                        <p><strong>[00:02:28 A “References: Workplace Accommodation” pop-up text box appears onscreen.]  </strong></p>
                        <p><strong>[00:02:31 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>3. Workplace Discrimination</h2>
                        <p>Did you know?</p>
                        <ol>
                          <li>Systemic racism in Canada is not new. It dates back to 1536, if not earlier, and still exists today.</li>
                          <li>Racism creates workplace barriers for Black, Indigenous, and other equity-seeking groups.</li>
                          <li>There is a spectrum of understanding of racism, from deniers and skeptics, minimizers and polarizers to those who see it but don’t know what to do about it, and those that see it (perhaps because they are living it) and are taking action.</li>
                          <li>Every employee has the right to a workplace free of racism and discrimination. There are recourse measures for those who feel that their rights, or the rights of others, are being infringed upon.</li>
                          <li>There are those who deny that racism exists and who actively work against efforts to dismantle racism.</li>
                        </ol>
                        <p>Given that the <i>Employment Equity Act</i> is law and The Canadian Charter of Rights and Freedoms is part of the <i>Constitution Act</i>, it is illegal to discriminate based on race. In addition, the <i>Canadian Human Rights Act</i> specifies all of the prohibited grounds of discrimination.</p>
                        <p><strong>[00:03:38 A “References: Workplace Discrimination” pop-up text box appears onscreen.]  </strong></p>
                        <p><strong>[00:03:40 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>4. Levelling the Playing Field</h2>
                        <p>Identifying, removing and preventing conditions of disadvantage faced by racialized groups and persons with disabilities is key to ensuring an equitable environment where individuals have equal access to opportunities and services.</p>
                        <p><strong>[00:04:00 A pop-up box with “Activity: Levelling the Playing Field” appears onscreen.] </strong></p>
                        <p><strong>[00:04:02 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>5. Unconscious Biases</h2>
                        <p>Everyone holds unconscious beliefs about various social and identity groups, which stem from our tendency to organize social worlds into categories.</p>
                        <p>A bias is an attitude or belief, conscious or unconscious, positive or negative, about something in particular, including groups of people, while an unconscious bias is an attitude or belief we hold but are unaware of.</p>
                        <p>The brain has learned to take shortcuts based on our own personal experiences. Although we may be unaware of it, the brain makes generalizations, leading to stereotypes of people based on characteristics such as age, gender, ethnicity, religion and sexual orientation.</p>
                        <p>Biases, both conscious and unconscious, affect our attitudes, behaviours and decisions. Become familiar with your own unconscious biases and how these may affect your behaviour toward current and potential employees, whether regarding staffing processes, accommodation requests, performance evaluations or other situations.</p>
                        <p>Remember, biases are learned and can be unlearned.</p>
                        <p><strong>[00:05:14 A “References: Unconscious Bias” pop-up text box appears onscreen.]  </strong></p>
                        <p><strong>[00:05:16 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things.</p>
                        <p>Take time out from the course to familiarize yourself with your organization’s policies and procedures, as well as the scope of possible accommodations, to help you address where barriers exist, and to help build a more inclusive workplace. You should also consider employment equity, diversity and inclusion as part of your HR planning, to support the organization’s employment equity commitments.</p>
                        <p><strong>[00:05:48 An “In Real Life” pop-up text box appears onscreen.] </strong></p>
                        <p><strong>[00:05:50 Title is shown onscreen.] </strong></p>
                        <hr>

                        <h2>7. Quiz</h2>
                        <p>Test your knowledge by answering the following questions. <strong>Select “Submit” when you are done.</strong></p>
                        <p><strong>[00:05:59 Text is shown onscreen that reads “Take the quiz”.]  </strong></p>
                        <p><strong>[00:06:01 A "Take the Quiz" pop-up box text box appears onscreen.] </strong></p>
                        <p><strong>[00:06:01 Text showing “You have completed this section” appears onscreen.] </strong></p>
                        

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Introduction</h2>
                        <p>Tout le monde tire avantage de l’équité en matière d’emploi, de la diversité et de l’inclusion, car elles permettent aux employés actuels et futurs d’avoir des chances égales d’être embauchés et promus grâce à leurs compétences et à leurs habiletés.</p>
                        <p>Votre organisation et votre équipe en profitent également, car un effectif diversifié peut apporter un éventail plus large d’idées et de points de vue ainsi qu’une meilleure résilience.</p>
                        <p>Dans cette section, vous apprendrez à : </p>
                        <ul>
                          <li>reconnaître l’étendue des responsabilités relatives à l’équité en matière d’emploi, à la diversité, à l’inclusion et aux mesures d’adaptation.</li>
                        </ul>
                        <p>Au bout du compte, l’équité en matière d’emploi consiste à éliminer les obstacles, tandis que la diversité, l’équité et l’inclusion consistent à accepter les différences pour que les employés aient un bon rendement et qu’ils contribuent pleinement à l’organisation.</p>
                        <p>Il vous faudra environ 20 minutes pour parcourir cette section.</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>2. Mesures d’adaptation en milieu de travail</h2>
                        <p>En tant que gestionnaire, il est de votre responsabilité de garantir un accès aux possibilités qui soit égal et exempt de discrimination. Vous devez aussi éliminer les obstacles qui empêchent ou entravent la participation entière et égale à l’emploi dans l’administration publique centrale.</p>
                        <p>Assurez-vous d’informer vos employés de leur droit de demander des mesures d’adaptation liées à leur travail. Ces dernières visent à répondre à leurs besoins et à remédier aux contraintes qui nuisent à leur capacité de donner le meilleur d’eux-mêmes.</p>
                        <p>Il n’existe pas de formule établie quand vient le temps d’offrir des mesures d’adaptation. Chaque demande doit être gérée au cas par cas, et la vie privée et la dignité des employés doivent être respectées.</p>
                        <p>Les mesures d’adaptation peuvent prendre diverses formes. En voici quelques-unes : </p>
                        <ul>
                          <li>offrir des services auxiliaires;</li>
                          <li>veiller à ce que la technologie soit accessible;</li>
                          <li>offrir des renseignements liés au travail sous une forme accessible;</li>
                          <li>offrir des horaires de travail flexibles;</li>
                          <li>donner accès à une salle de prière;</li>
                          <li>adapter le milieu de travail;</li>
                          <li>adapter les programmes de formation aux besoins des employés.</li>
                        </ul>
                        <p>Les politiques et les procédures de votre organisation vous aident à créer un milieu de travail plus équitable, diversifié et inclusif, et à éliminer les obstacles, ce qui permet à tous les employés de participer de manière égale à l’environnement de travail.</p>
                        <p>[Une boîte de texte de référence de Mesures d’adaptation en milieu de travail apparaît.]</p>
                        <hr>

                        <h2>3. Discrimination en milieu de travail</h2>
                        <p>Saviez-vous que…</p>
                        <ol>
                          <li>Le racisme systémique au Canada n’a rien de nouveau; il remonte au moins à 1536, et il existe encore aujourd’hui.</li>
                          <li>Le racisme crée des obstacles en milieu de travail pour les Noirs, les Autochtones et d’autres groupes en quête d’équité.</li>
                          <li>Il existe un spectre de conceptions du racisme : certains nient le concept même de racisme, sont sceptiques, minimisent le phénomène ou se radicalisent, alors que d’autres le remarquent, mais y réagissent différemment : en effet, certains ne savent pas quoi faire pour y réagir, alors que d’autres, peut-être parce qu’ils en font l’expérience, agissent.</li>
                          <li>Tous les employés ont le droit de travailler dans un milieu exempt de racisme et de discrimination. Les personnes qui estiment qu’on porte atteinte à leurs droits ou à ceux des autres ont des recours.</li>
                          <li>Il y a des gens qui nient l’existence du racisme et qui s’opposent activement aux efforts de lutte contre le racisme.</li>
                        </ol>
                        <p>Étant donné que la <i>Loi sur l’équité en matière d’emploi</i> est en vigueur et que la Charte canadienne des droits et libertés fait partie de la <i>Loi constitutionnelle</i>, la discrimination fondée sur la race est illégale. De plus, la <i>Loi canadienne sur les droits de la personne</i> énonce tous les motifs de distinction illicites.</p>
                        <p>[Une boîte de texte de référence de Discrimination en milieu de travail apparaît.]</p>
                        <hr>

                        <h2>4. Égalité des chances</h2>
                        <p>Repérer, éliminer et prévenir les conditions qui désavantagent les groupes racisés et les personnes handicapées est essentiel à la mise en place d’un environnement équitable où tout le monde peut accéder de manière égale aux possibilités et aux services.</p>
                        <p>[Une boîte de texte de l’activité Égalité des chances apparaît.]</p>
                        <hr>

                        <h2>5. Préjugés inconscients</h2>
                        <p>Nous avons tous des préjugés inconscients à propos de divers groupes sociaux et identitaires, et ces préjugés émanent de notre tendance à catégoriser les mondes sociaux.</p>
                        <p>Un préjugé est une attitude ou une croyance, consciente ou inconsciente, positive ou négative, à propos de quelque chose de précis, y compris des groupes de personnes. Un préjugé inconscient est une attitude ou une croyance que nous avons sans nous en rendre compte.</p>
                        <p>Notre cerveau a appris à prendre des raccourcis fondés sur nos expériences personnelles. Même si nous n’en sommes pas conscients, notre cerveau fait des généralisations, ce qui crée des stéréotypes à l’égard des gens selon des caractéristiques comme l’âge, le genre, l’origine ethnique, la religion et l’orientation sexuelle.</p>
                        <p>Les préjugés, qu’ils soient conscients ou inconscients, agissent sur nos attitudes, nos comportements et nos décisions. Familiarisiez-vous avec vos propres préjugés inconscients et la manière dont ils peuvent influencer votre comportement envers les employés actuels et futurs, qu’il soit question de processus de dotation, de demandes de mesures d’adaptation, d’évaluations de rendement ou d’autres situations.</p>
                        <p>Rappelez-vous que les préjugés sont des croyances que vous avez apprises, et que vous pouvez donc vous en défaire.</p>
                        <p>[Une boîte de texte de référence de Préjugés inconscients apparaît.]</p>
                        <hr>

                        <h2>6. Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris - dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses.</p>
                        <p>Prenez le temps pour vous familiariser avec les politiques et les procédures de votre organisation de même qu’avec la portée des mesures d’adaptation possibles pour mieux déterminer où sont les obstacles et pour bâtir un milieu de travail plus inclusif. Vous devez aussi intégrer l’équité en matière d’emploi, la diversité et l’inclusion à votre planification des RH afin de soutenir les engagements de votre organisation concernant l’équité en matière d’emploi.</p>
                        <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                        <hr>

                        <h2>7. Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>
                        <p>[Une boîte de texte de l’activité Répondez au quiz apparaît.]</p>
                        <hr>

                        <h2>8. Section complétée</h2>
                        <p>[Texte à l’écran indiquant l’instruction Section complétée.]</p>
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
        <b-modal no-stacking id="EquityDiversityInclusion" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('EmploymentEquityTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
              <div v-if="$i18n.locale=='en'">
                <p>Here is a list of resources referred to in this section.</p>
                <ul>
                  <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32634&section=html" target="_blank" alt="Link to the Directive on Duty to Accommodate web page">Directive on Duty to Accommodate</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/A-0.6/" target="_blank" alt="Link to the Accessible Canada Act web page">Accessible Canada Act</a></li>
                  <li><a href="https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/diversity-inclusion-public-service/accessibility-public-service/accessibility-strategy-public-service-toc.html" target="_blank" alt="Link to the Accessibility Strategy for the Public Service of Canada web page">Accessibility Strategy for the Public Service of Canada</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/e-5.401/page-1.html" target="_blank" alt="Link to the Employment Equity Act web page">Employment Equity Act</a></li>
                  <li><a href="https://www.justice.gc.ca/eng/csj-sjc/rfc-dlc/ccrf-ccdl/" target="_blank" alt="Link to the The Canadian Charter of Rights and Freedoms web page">The Canadian Charter of Rights and Freedoms</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/const/page-1.html" target="_blank" alt="Link to the Constitution Act web page">Constitution Act</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/h-6/" target="_blank" alt="Link to the Canadian Human Rights Act web page">Canadian Human Rights Act</a></li>
                  <li><a href="https://www.canada.ca/en/privy-council/corporate/clerk/call-to-action-anti-racism-equity-inclusion-federal-public-service.html" target="_blank" alt="Link to the Call to action on anti-racism, equity, and inclusion in the Federal Public Service web page">Call to action on anti-racism, equity, and inclusion in the Federal Public Service</a></li>
                  <li><a href="https://www.csps-efpc.gc.ca/anti-racism-eng.aspx" target="_blank" alt="Link to the Anti-Racism Learning Series web page">Anti-Racism Learning Series</a></li>
                </ul>
              </div>
              <div v-if="$i18n.locale=='fr'">
                <p>Voici une liste des ressources auxquelles on fait référence dans cette section. </p>
                <ul>
                  <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32634&section=html" target="_blank" alt="Lien vers la page web de la directive sur l'obligation de prendre des mesures d’adaptation">Directive sur l’obligation de prendre des mesures d’adaptation </a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/a-0.6/" target="_blank" alt="Lien vers la page Web de la Loi sur l'accessibilité du Canada">Loi canadienne sur l’accessibilité</a></li>
                  <li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/diversite-equite-matiere-emploi/accessibilite-fonction-publique/strategie-accessibilite-fonction-publique-tdm.html" target="_blank" alt="Lien vers la page Web de la Stratégie d'accessibilité pour la fonction publique du Canada">Stratégie sur l’accessibilité au sein de la fonction publique du Canada</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/h-6/" target="_blank" alt="Lien vers la page web de la loi sur l'équité en matière d'emploi">Loi canadienne sur les droits de la personne</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/page-1.html" target="_blank" alt="Lien vers la page Web de la Loi sur l’équité en matière d’emplois">Loi sur l’équité en matière d’emploi</a></li>
                  <li><a href="https://www.justice.gc.ca/fra/sjc-csj/dlc-rfc/ccdl-ccrf/index.html" target="_blank" alt="Lien vers la page web de la Charte canadienne des droits et libertés">Charte canadienne des droits et libertés</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/const/page-1.html" target="_blank" alt="Lien vers la page web de la loi constitutionnelle">Loi constitutionnelle</a></li>
                  <li><a href="https://www.canada.ca/fr/conseil-prive/organisation/greffier/appel-action-faveur-lutte-contre-racisme-equite-inclusion-fonction-publique-federale.html" target="_blank" alt="Lien vers la page web de l'appel à l'action sur l'antiracisme, l'équité et l'inclusion dans la fonction publique fédérale">Appel à l’action en faveur de la lutte contre le racisme, de l’équité et de l’inclusion dans la fonction publique fédérale </a></li>
                  <li><a href="https://www.csps-efpc.gc.ca/anti-racism-fra.aspx" target="_blank" alt="Lien vers la page web de la Série d’apprentissage contre le racisme">Série d’apprentissage contre le racisme</a></li>
                </ul>
              </div>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="WorkplaceAccommodation" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('WorkplaceAccommodationTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <div v-if="$i18n.locale=='en'">
                <p>Watch this short video on how to make hiring more accessible:<br />
                <a href=" https://www.csps-efpc.gc.ca/video/disability-inclusion-psc-intro-eng.aspx" target="_blank" alt="Link to the Disability and Inclusion video">Disability Inclusion in the Public Service of Canada: An Introduction</a>.</p>
                <p>Be sure to apply legislation, government policies and your organization’s procedures in your role as manager.</p>
                <ul>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/e-5.401/page-1.html" target="_blank" alt="Link to the Employment Equity Act web page">Employment Equity Act</a></li>
                  <li><a href="https://www.justice.gc.ca/eng/csj-sjc/rfc-dlc/ccrf-ccdl/" target="_blank" alt="Link to the The Canadian Charter of Rights and Freedoms web page">The Canadian Charter of Rights and Freedoms</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/Const/page-1.html" target="_blank" alt="Link to the Constitution Act web page">Constitution Act</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/h-6/" target="_blank" alt="Link to the Canadian Human Rights Act web page">Canadian Human Rights Act</a></li>
                  <li><a href="https://www.canada.ca/en/privy-council/corporate/clerk/call-to-action-anti-racism-equity-inclusion-federal-public-service.html" target="_blank" alt="Link to the Call to action on anti-racism, equity, and inclusion in the Federal Public Service web page">Call to action on anti-racism, equity, and inclusion in the Federal Public Service</a></li>
                  <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32634&section=html" target="_blank" alt="Link to the Directive on Duty to Accommodate web page">Directive on Duty to Accommodate</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/eng/acts/A-0.6/" target="_blank" alt="Link to the Accessible Canada Act web page">Accessible Canada Act</a></li>
                  <li><a href="https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/diversity-inclusion-public-service/accessibility-public-service/accessibility-strategy-public-service-toc.html" target="_blank" alt="Link to the Accessibility Strategy for the Public Service of Canada web page">Accessibility Strategy for the Public Service of Canada</a></li>
                </ul>
              </div>
              <div v-if="$i18n.locale=='fr'">
                <p>Regardez la courte vidéo ci-dessous qui explique comment rendre l’embauche plus accessible : <a href="https://www.csps-efpc.gc.ca/video/disability-inclusion-psc-intro-fra.aspx" target="_blank">L'inclusion des personnes en situation de handicap dans la fonction publique du Canada : une introduction</a>.</p>
                <p>Assurez-vous d’appliquer les lois et règlements, les politiques gouvernementales et les procédures de votre organisation à votre rôle de gestionnaire. </p>
                <ul>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/h-6/" target="_blank" alt="Lien vers la page web de la loi sur l'équité en matière d'emploi">Loi canadienne sur les droits de la personne</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/page-1.html" target="_blank" alt="Lien vers la page Web de la Charte canadienne des droits et libertés">Loi sur l’équité en matière d’emploi</a></li>
                  <li><a href="https://www.justice.gc.ca/fra/sjc-csj/dlc-rfc/ccdl-ccrf/index.html" target="_blank" alt="Lien vers la page web de la Charte canadienne des droits et libertés">Charte canadienne des droits et libertés</a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/const/page-1.html" target="_blank" alt="Lien vers la page web de la loi constitutionnelle">Loi constitutionnelle</a></li>
                  <li><a href="https://www.canada.ca/fr/conseil-prive/organisation/greffier/appel-action-faveur-lutte-contre-racisme-equite-inclusion-fonction-publique-federale.html" target="_blank" alt="Lien vers la page web de l'appel à l'action sur l'antiracisme, l'équité et l'inclusion dans la fonction publique fédérale">Appel à l’action en faveur de la lutte contre le racisme, de l’équité et de l’inclusion dans la fonction publique fédérale </a></li>
                  <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32634&section=html" target="_blank" alt="Lien vers la page web de la directive sur l'obligation de prendre des mesures d’adaptation">Directive sur l’obligation de prendre des mesures d’adaptation </a></li>
                  <li><a href="https://laws-lois.justice.gc.ca/fra/lois/a-0.6/" target="_blank" alt="Lien vers la page Web de la Loi sur l'accessibilité du Canada">Loi canadienne sur l’accessibilité</a></li>
                  <li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/diversite-equite-matiere-emploi/accessibilite-fonction-publique/strategie-accessibilite-fonction-publique-tdm.html" target="_blank" alt="Lien vers la page Web de la Stratégie d'accessibilité pour la fonction publique du Canada">Stratégie sur l’accessibilité au sein de la fonction publique du Canada</a></li>
                </ul>
              </div>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="WorkplaceDiscrimination" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('WorkplaceDiscriminationTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <div v-if="$i18n.locale=='en'">
              <p>The Clerk of the Privy Council issued a <a href="https://www.canada.ca/en/privy-council/corporate/clerk/call-to-action-anti-racism-equity-inclusion-federal-public-service.html" target="_blank" alt="Link to the Call to action on anti-racism, equity, and inclusion in the Federal Public Service web page">Call to action on anti-racism, equity, and inclusion in the Federal Public Service</a> in 2020. Take time out of this course to review this call to action and reflect on the role that you can play as a manager in leading change in the public service.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <p>En 2020, le greffier du Conseil privé a lancé un <a href="https://www.canada.ca/fr/conseil-prive/organisation/greffier/appel-action-faveur-lutte-contre-racisme-equite-inclusion-fonction-publique-federale.html" target="_blank" alt="Lien vers la page web de l'appel à l'action sur l'antiracisme, l'équité et l'inclusion dans la fonction publique fédérale">Appel à l’action en faveur de la lutte contre le racisme, de l’équité et de l’inclusion dans la fonction publique fédérale </a>. Après ce cours, prenez le temps d’examiner cet appel à l’action et de réfléchir au rôle que vous pouvez jouer en tant que gestionnaire pour ouvrir la voie au changement dans la fonction publique.</p>
            </div>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="LevellingPlayingField" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('LevellingPlayingFieldTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <LevellingPlayingField />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="UnconsciousBiases" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('UnconsciousBiasesTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <div v-if="$i18n.locale=='en'">
              <p>Refer to the School’s <a href="https://www.csps-efpc.gc.ca/anti-racism-eng.aspx" target="_blank" alt="Link to the Anti-Racism Learning Series">Anti-Racism Learning Series</a> for courses, videos, podcasts and other tools to improve your understanding of racism and other systemic barriers.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <p>Consultez la <a href="https://www.csps-efpc.gc.ca/anti-racism-fra.aspx" target="_blank" alt="Lien vers la Série d'apprentissage contre le racisme">Série d'apprentissage contre le racisme</a> de l’École pour accéder à des cours, à des vidéos, à des balados et à d’autres outils qui vous permettront d’améliorer votre compréhension du racisme et des autres obstacles systémiques. </p>
            </div>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('IRLTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
            <div v-if="$i18n.locale=='en'">
              <p><b>To supplement the knowledge required to perform your employment equity, diversity, inclusion and accessibility functions, be sure to complete the courses</b></p>
              <ul>
                <li>Employment Equity Under the <i>Employment Equity Act</i></li>
                <li>Workplace Accommodation for Federal Public Service Employees</li>
              </ul>
              <p>These courses provide a more in-depth look at employment equity, inclusivity and accommodation to help you perform your duties in this area.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <p><b>Pour approfondir les connaissances nécessaires à l’exercice de vos fonctions relatives à l’équité en matière d’emploi, à la diversité, à l’inclusion et à l’accessibilité, suivez les cours suivants : </b></p>
              <ul>
                <li>L’équité en matière d’emploi en vertu de la <i>Loi sur l’équité en matière d’emploi</i></li>
                <li>Mesures d’adaptation en milieu de travail à l’intention des employés de la fonction publique fédérale</li>
              </ul>
              <p>Ces cours, qui examinent de manière approfondie l’équité en matière d’emploi, l’inclusion et les mesures d’adaptation,  visent à vous aider à accomplir vos fonctions dans ce domaine. </p>
            </div>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="Quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <Quiz />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="functionPart1" imagePath="FunctionPart1.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('organizationClassification')" type="video" />
      <microlearning youAreHere path="functionPart2"  imagePath="FunctionPart2.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="FunctionPart3.svg" :text="$t('Staffing')" type="video" />
      <microlearning path="functionKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="25" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
  import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import LevellingPlayingField from '~/components/slides/function/functionPart2PlayingField'
import Quiz from '~/components/slides/function/functionPart2Quiz'
export default {
  data() {
    return {
      modalArray: ["EquityDiversityInclusion", "WorkplaceAccommodation", "WorkplaceDiscrimination", "LevellingPlayingField", "UnconsciousBiases", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    LevellingPlayingField,
    Quiz
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart2
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
      this.$store.commit('currentPlaying/setSpendPart2_player',e)
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
  "EmploymentEquityTitle":"References: External Links  ",
  "WorkplaceAccommodationTitle":"References: Workplace Accommodation",
  "WorkplaceDiscriminationTitle":"References: Workplace Discrimination",
  "LevellingPlayingFieldTitle":"Activity: Levelling the Playing Field",
  "UnconsciousBiasesTitle":"References: Unconscious Bias",
  "IRLTitle":"In Real Life",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "FUNCTION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "CertAuthorityTitle":"Activité : Autorité de certification",
  "EmploymentEquityTitle":"Références : Liens externes ",
  "WorkplaceAccommodationTitle":"Références : Mesures d’adaptation en milieu de travail",
  "WorkplaceDiscriminationTitle":"Références : Discrimination en milieu de travail",
  "UnconsciousBiasesTitle":"Références : Préjugés inconscients",
  "LevellingPlayingFieldTitle":"Activité : Égalité des chances",
  "ProcessInvoiceTitle":"Activité : Traitement de la facture",
  "AccuracyInvoiceTitle":"Activité : Exactitude de la facture",
  "IRLTitle":"Dans la vraie vie",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "FONCTION"
  }
  }
</i18n>