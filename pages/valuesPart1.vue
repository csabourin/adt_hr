<template>
  <div>
    <h2 class="pageTitle" v-html="$t('LabourRelations')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_e17fqv08/flavorId/0_s1fb25jz/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_uqypilv0/flavorId/0_dcb0y2tt/name/a.mp4" chapters chapterFile="ReportPart1.vtt" ccFile="ValuesPart1_captions.vtt" posterFile="m6.jpg" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <h2>1. Introduction</h2>
                        <p>Good labour relations are essential to good human resources management. It is your responsibility to contribute to effective labour relations in your organization and to ensure that the <i>Federal Public Sector Labour Relations Act</i>, labour relations policies and collective agreements, and National Joint Council directives are respected and applied in a consistent manner.</p>
                        <p>The <i>Federal Public Sector Labour Relations Act</i> provides for dialogue, joint problem solving, mutually agreed-upon solutions, and effective collective bargaining. The preamble of the Act outlines key values and principles, such as:</p>
                        <ul>
                          <li>the importance of mutual respect and harmonious labour-management relations to support a healthy and productive workplace</li>
                          <li>serving and protecting the public interest, and</li>
                          <li>fair, credible and efficient resolution of workplace issues</li>
                        </ul>
                        <p>Under the <i>Federal Public Sector Labour Relations Act</i>, deputy heads must establish labour-management consultation committees and informal conflict management systems (or ICMS).</p>
                        <p>In this section you will: </p>
                        <ul>
                          <li>Become familiar with the basic process for determining a managerial or confidential position</li>
                          <li>Learn how to use collective agreements to make decisions, and</li>
                          <li>Discover the resources available to help you manage workplace conflict</li>
                        </ul>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Types of Positions</h2>
                        <p>Essential positions are defined as jobs that maintain the services, facilities and activities of the federal public service and that are or will be necessary for the safety or security of the public.</p>
                        <p>Under the Federal Public Sector Labour Relations Act (Division 8), the employer holds the authority and responsibility for determining essential positions.</p>
                        <p>As a delegated manager, you are responsible for: </p>
                        <ul>
                          <li>identifying the positions that include duties which are necessary to providing essential services</li>
                          <li>providing rationales and supporting documentation (such as organizational charts and work descriptions) in support of designations to your labour relations organizational advisor, and</li>
                          <li>after a position has been designated, notifying the incumbent about the related implications - a notice that may be sent by email</li>
                        </ul>
                        <p>For more information, see the Guidelines for Essential Services Designations.</p>
                        <p>Having managerial or confidential duties means that these positions are excluded from a bargaining unit. Section 59 of the Federal Public Sector Labour Relations Act lists the grounds for declaring a position managerial or confidential, but departments play a key role in identifying and justifying these positions to the Treasury Board of Canada Secretariat.</p>
                        <p>For more information, see the Guidelines on Managerial or Confidential Exclusions.</p>
                        <p>[A Types of Positions activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Collective Agreements</h2>
                        <p>Collective agreements specify the terms and conditions governing employee and employer rights and entitlements. They also address key elements such as leave entitlements, hours of work, remuneration, and so forth.</p>
                        <p>Different collective agreements may appear to be quite similar, but they contain important differences in entitlements that you must recognize.</p>
                        <p>In your new role as manager, it is quite possible that you will manage employees under more than one collective agreement. Make sure you read them and are able to answer questions that may arise among your employees.</p>
                        <p>You should also be aware that directives developed by the National Joint Council affect collective agreements. National Joint Council provisions form part of the collective agreements of the participating parties under the bylaws of the National Joint Council. The provisions also apply to individuals not covered by collective agreements, as specified in the directive or by employer policy.</p>
                        <p>[A Collective Agreements activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Managing Disciplinary Measures</h2>
                        <p>The <i>Financial Administration Act</i> authorizes every deputy head in the core public administration to establish standards of conduct and to set penalties as disciplinary measures.</p>
                        <p>Penalties that may be applied for misconduct include:</p>
                        <ul>
                          <li>suspension or termination of employment</li>
                          <li>oral or written reprimands</li>
                          <li>demotion to a position at a lower maximum rate of pay, or</li>
                          <li>other financial penalties</li>
                        </ul>
                        <p>Disciplinary measures, as opposed to performance management measures, may be the appropriate response to an employee’s willful breach of rules or standards in the workplace.</p>
                        <p>[A Managing Disciplinary Measures activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Managing Workplace Conflict</h2>
                        <p>A grievance is a formal administrative process that employees can use to seek the resolution of disputes regarding the terms and conditions of their employment. The <i>Federal Public Sector Labour Relations Act</i> gives all employees the right to present grievances, unless there is an administrative alternative.</p>
                        <p>Employees are entitled to present a grievance if they feel aggrieved:</p>
                        <ul>
                          <li>by the interpretation or application of statutes, regulations, directions or other instruments that deal with terms and conditions of employment</li>
                          <li>by a provision of a collective agreement or an arbitral award, or</li>
                          <li>as a result of any occurrence or matter affecting their terms and conditions of employment</li>
                        </ul>
                        <p>When you receive a grievance from an employee, it is your responsibility as a supervisor or manager to acknowledge receipt to the employee and send the grievance form to the person in your organization who is authorized to deal with the grievance.</p>
                        <p>According to the <i>Federal Public Sector Labour Relations Act</i>,  all organizations in the core public administration must have an informal conflict management system in place. The purpose of an ICMS is to resolve workplace conflict by offering alternative dispute resolution methods.</p>
                        <p>[A Managing Workplace Conflict reference pop-up text box appears.]</p>
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to find out who in your department is the labour relations advisor.  They can offer excellent support.  As well, find out which positions are designated managerial or confidential in your team or organization.</p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>
                        <hr>

                        <h2>7. Quiz</h2>
                        <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>

                        <h2>8. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Introduction</h2>
                        <p>De bonnes relations de travail sont essentielles à une saine gestion des ressources humaines. Il vous incombe de contribuer à maintenir des relations de travail efficaces dans votre organisation, et de veiller au respect et à l’application uniforme de la Loi sur les relations de travail dans le secteur public fédéral, des politiques sur les relations de travail, des conventions collectives et des directives du Conseil national mixte (CNM).</p>
                        <p>La Loi sur les relations de travail dans le secteur public fédéral favorise le dialogue, la résolution conjointe des problèmes, les solutions convenues d’un commun accord et les négociations collectives efficaces. Le préambule de la Loi décrit les valeurs et les principes clés, tels que : </p>
                        <ul>
                          <li>l’importance du respect mutuel et de relations patronales-syndicales harmonieuses pour le maintien d’un milieu de travail sain et productif;</li>
                          <li>le mandat de servir et de protéger l’intérêt public;</li>
                          <li>la résolution juste, crédible et efficace des conflits en milieu de travail.</li>
                        </ul>
                        <p>En vertu de la <i>Loi sur les relations de travail dans le secteur public fédéral</i>, les administrateurs généraux doivent créer des comités de consultation patronale-syndicale et des systèmes de gestion informelle des conflits (ou SGIC).</p>
                        <p>Dans la présente section : </p>
                        <ul>
                          <li>vous vous familiariserez avec le processus de base visant à déterminer la nature d’un poste (poste de direction ou de confiance);</li>
                          <li>vous apprendrez à utiliser les conventions collectives en vue de prendre des décisions;</li>
                          <li>vous découvrirez les ressources disponibles pour vous aider à gérer les conflits au travail.</li>
                        </ul>
                        <p>Il vous faudra environ 20 minutes pour parcourir cette section.</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>2. Types de postes</h2>
                        <p>Les postes essentiels s’entendent d’emplois qui permettent de maintenir les services, les installations et les activités de la fonction publique fédérale et qui sont ou seront nécessaires à la sécurité du public.</p>
                        <p>En vertu de la <i>Loi sur les relations de travail dans le secteur public fédéral</i> (section 8), l’employeur détient le pouvoir et la responsabilité de déterminer quels sont les postes essentiels.</p>
                        <p>À titre de gestionnaire délégué, il vous incombe : </p>
                        <ul>
                          <li>d'identifier les postes comportant des responsabilités qui sont nécessaires à la prestation de services essentiels;</li>
                          <li>de fournir à votre conseiller en relations de travail les justifications et les documents (p. ex. les organigrammes et les descriptions de travail) étayant les désignations;</li>
                          <li>après la désignation d’un poste, d’informer le titulaire des répercussions – avis qui peut être envoyé par courriel.</li>
                        </ul>
                        <p>Pour en savoir plus, consultez les Lignes directrices pour la désignation des services essentiels.</p>
                        <p>Les fonctions de direction ou de confiance signifient que les postes concernés sont exclus d’une unité de négociation. L’article 59 de la Loi sur les relations de travail dans le secteur public fédéral dresse la liste des motifs pour lesquels un poste peut être désigné « poste de direction » ou « poste de confiance », mais les ministères jouent un rôle clé dans la désignation de ces postes et la justification de la décision auprès du Secrétariat du Conseil du Trésor du Canada.</p>
                        <p>Pour obtenir de plus amples renseignements, consultez les Lignes directrices sur les postes de direction ou de confiance exclus.</p>
                        <p>[Une boîte de texte de l’activité Types de postes apparaît.]</p>
                        <hr>

                        <h2>3. Conventions collectives</h2>
                        <p>Les conventions collectives précisent les modalités qui régissent les droits et les obligations des employés et de l’employeur. Elles traitent des éléments essentiels comme les droits aux congés, les heures de travail et la rémunération.</p>
                        <p>Certaines conventions collectives peuvent sembler très similaires, mais elles comportent d’importantes différences dans les droits évoqués que vous devez reconnaître.</p>
                        <p>Dans votre nouveau rôle de gestionnaire, il est tout à fait possible que vous gériez des employés assujettis à plus d’une convention collective. Assurez-vous de lire les conventions collectives et de pouvoir répondre aux questions que pourraient se poser vos employés.</p>
                        <p>Vous devriez également savoir que les directives élaborées par le Conseil national mixte ont une incidence sur les conventions collectives. Les dispositions du Conseil national mixte font partie des conventions collectives des parties concernées en vertu du <i>Règlement du Conseil national mixte</i>. Ces dispositions s’appliquent aussi aux personnes qui ne sont pas visées par les conventions collectives, comme l’indique la directive ou la politique de l’employeur.</p>
                        <p>[Une boîte de texte de l’activité Conventions collectives apparaît.]</p>
                        <hr>

                        <h2>4. Gestion des mesures disciplinaires</h2>
                        <p>La <i>Loi sur la gestion des finances publiques</i> autorise chaque administrateur général de l’administration publique centrale à déterminer des normes de conduite et à fixer des sanctions comme mesures disciplinaires.</p>
                        <p>Voici les sanctions qui peuvent s’appliquer en cas de mauvaise conduite : </p>
                        <ul>
                          <li>la suspension de l’employé ou la cessation d’emploi;</li>
                          <li>des réprimandes orales ou écrites;</li>
                          <li>la rétrogradation à un poste ayant un taux de rémunération maximale inférieur;</li>
                          <li>des sanctions pécuniaires.</li>
                        </ul>
                        <p>Les mesures disciplinaires, contrairement aux mesures de gestion du rendement, peuvent être une intervention appropriée en cas de violation délibérée par un employé des règles ou des normes en milieu de travail.</p>
                        <p>[Une boîte de texte de l’activité Gestion des mesures disciplinaires apparaît.]</p>
                        <hr>

                        <h2>5. Gérer les conflits en milieu de travail</h2>
                        <p>Un grief est une procédure administrative formelle à laquelle les employés peuvent avoir recours pour résoudre des conflits concernant leurs conditions d’emploi.</p>
                        <p>La <i>Loi sur les relations de travail dans le secteur public fédéral</i> confère aux employés le droit de présenter des griefs, à moins qu’il existe une autre solution administrative.</p>
                        <p>Les employés ont le droit de déposer un grief s’ils se sentent lésés : </p>
                        <ul>
                          <li>par l’interprétation ou l’application des lois, des règlements, des directives ou d’autres instruments qui traitent des conditions d’emploi;</li>
                          <li>par une disposition d’une convention collective ou d’une décision arbitrale;</li>
                          <li>à la suite d’une situation ou d’une affaire qui porte atteinte à leurs conditions d’emploi.</li>
                        </ul>
                        <p>Lorsque vous recevez un grief d’un employé, il vous incombe, en tant que superviseur ou encore de gestionnaire, d’en accuser réception, puis d’envoyer le formulaire correspondant à la personne de votre organisation autorisée à traiter le grief.</p>
                        <p>Selon la <i>Loi sur les relations de travail dans le secteur public fédéral</i>, toutes les organisations de l’administration publique centrale doivent avoir mis en place un système de gestion informelle des conflits (SGIC). Le but d’un tel système est de résoudre les conflits au travail en offrant d’autres modes de résolution des conflits.</p>
                        <p>[Une boîte de texte de référence de Gérer les conflits en milieu de travail apparaît.]</p>
                        <hr>

                        <h2>6. Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris – dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour découvrir qui dans votre ministère est le conseiller en relations de travail. Cette personne peut vous offrir un excellent soutien. Déterminez également quels sont les postes de direction ou de confiance dans votre équipe ou dans votre organisation.</p>
                        <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                        <hr>

                        <h2>7. Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>
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
      <b-modal no-stacking id="labourRelations" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('IntroductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p><b>Here is a list of resources referred to in this section.</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/p-33.3/FullText.html" target="_blank" alt="Link to the Federal Public Sector Labour Relations Act web page">Federal Public Sector Labour Relations Act</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27987" target="_blank" alt="Link to the Guidelines for Essential Services Designations web page">Guidelines for Essential Services Designations</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12602" target="_blank" alt="Link to the Guidelines for Essential Services Designations web page">Guidelines on Managerial or Confidential Exclusions</a></li>
            <li><a href="https://www.njc-cnm.gc.ca/en" target="_blank" alt="Link to the National Joint Council web page">National Joint Council</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27146" target="_blank" alt="Link to the Directive on Performance Management web page">Directive on Performance Management</a></li>
            <li><a href="https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/harassment-conflict-resolution/informal-conflict-management-system/guide-key-elements-icms-core-public-administration.html" target="_blank" alt="Link to the Guide to the key elements of an ICMS in the core public administration web page">A guide to the key elements of an ICMS in the core public administration</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=22370" target="_blank" alt="Link to the Guidelines for Discipline web page">Guidelines for Discipline</a></li>
            <li><a href="https://www.njc-cnm.gc.ca/directive/d7/v23/s252/en%22%20/l%20%22s252-tc-tm_3" target="_blank" alt="Link to the Occupational Health and Safety Directive web page">Occupational Health and Safety Directive</a></li>
          </ul>
        </div>
         <div v-if="$i18n.locale=='fr'">
          <p><b>Voici une liste des ressources auxquelles on fait référence dans cette section.</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/p-33.3/TexteComplet.html" target="_blank" alt="Lien vers la page Web de la Loi sur les relations de travail dans le secteur public fédéral">Loi sur les relations de travail dans le secteur public fédéral</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27987" target="_blank" alt="Lien vers la page web des lignes directrices pour la désignation des services essentiels">Lignes directrices pour la désignation des services essentiels </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12602" target="_blank" alt="Lien vers la page web des Lignes directrices sur les postes de direction ou de confiance exclus. ">Lignes directrices sur les postes de direction ou de confiance exclus.</a></li>
            <li><a href="https://www.njc-cnm.gc.ca/fr" target="_blank" alt="Lien vers la page web du conseil national mixte">Conseil national mixte </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27146" target="_blank" alt="Lien vers la page web sur les directives sur la gestion du rendement">Directive sur la gestion du rendement </a></li>
            <li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/prevention-resolution-harcelement/systeme-gestion-informelle-conflits/guide-principaux-elements-sgic-administration-publique-centrale.html" target="_blank" alt="Lien vers la page web du Guide des principaux éléments d’un SGIC dans l’administration publique centrale ">Guide des principaux éléments d’un SGIC dans l’administration publique centrale </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=22370" target="_blank" alt="Lien vers la page web des Lignes directrices concernant la discipline">Lignes directrices concernant la discipline</a></li>
            <li><a href="https://www.njc-cnm.gc.ca/directive/d7/v23/s252/fr" target="_blank" alt="Lien vers la page web de l'Utilisation et occupation des bâtiments">Utilisation et occupation des bâtiments</a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="typesPositions" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('TypesPositionsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <typesPositions />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="collectiveAgreements" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CollectiveAgreementsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <collectiveAgreements />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="managingDisciplinaryMeasures" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('ManagingDisciplinaryMeasuresTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <disciplinaryMeasures />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="managingWorkplaceConflict" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('ManagingWorkplaceConflictTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Find out what resources are available in your organization to address workplace conflict and find out who your ICMS champion or first point of contact is.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Découvrez quelles sont les ressources mises à votre disposition pour le règlement d’un conflit en milieu de travail et qui est le champion du SGIC ou le premier point de contact au sein de votre organisation.  </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('IRLTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/R-Contribute.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p><b>To supplement the knowledge required to perform your labour relations functions, be sure to complete this additional course:</b></p>
          <ul>
            <li>Labour Relations in the Federal Public Sector</li>
          </ul>
          <p>This course will provide a more in-depth look at labour relations to help you perform your duties.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p><b>Pour approfondir les connaissances nécessaires à l’exercice de vos fonctions liées aux relations de travail, suivez le cours supplémentaire suivant : </b></p>
          <ul>
            <li>Relations de travail dans le secteur public fédéral. </li>
          </ul>
          <p>Ce cours, qui examine de plus près les relations de travail, vise à vous aider à accomplir vos fonctions dans ce domaine. </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="Quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('QuizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <Quiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>

    </div>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart1_player" path="valuesPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('LabourRelations')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="ValuesPart2.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.valuesPart3_player" path="valuesPart3" imagePath="ValuesPart3.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.valuesPart4_player" path="valuesPart4" imagePath="ValuesPart4.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" time="5" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import typesPositions from '~/components/slides/values/valuesPart1TypesPositions'
import collectiveAgreements from '~/components/slides/values/valuesPart1CollectiveAgreements'
import disciplinaryMeasures from '~/components/slides/values/valuesPart1ManagingDiscMeasures'
import Quiz from '~/components/slides/values/valuesPart1Quiz'
export default {
  data() {
    return {
      modalArray: ["labourRelations", "typesPositions", "collectiveAgreements", "managingDisciplinaryMeasures", "managingWorkplaceConflict", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    typesPositions,
    collectiveAgreements,
    disciplinaryMeasures,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart1
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
      this.$store.commit('currentPlaying/setReportPart1_player',e)
    }
  }
}

</script>
<style scoped>
.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
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

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "IntroductionTitle": "References: External Links",
  "LabourRelationsTitle":"Activity: Labour Relations",
  "TypesPositionsTitle": "Activity: Types of Positions",
  "CollectiveAgreementsTitle": "Activity: Collective Agreements",
  "ManagingDisciplinaryMeasuresTitle": "Activity: Managing Disciplinary Measures",
  "ManagingWorkplaceConflictTitle": "References: Managing Workplace Conflict",
  "IRLTitle": "In Real Life",
  "transcriptText":"",
  "reportSectionBar": "VALUES"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "IntroductionTitle": "Références : Liens externes",
  "TypesPositionsTitle": "Activité : Types de postes",
  "KeyPeriodsFSRTitle":"Activité : Périodes clés pour les rapports sur la situation financière",
  "CollectiveAgreementsTitle": "Activité : Conventions collectives",
  "ManagingDisciplinaryMeasuresTitle": "Activité : Gestion des mesures disciplinaires",
  "ManagingWorkplaceConflictTitle": "Références : Gérer les conflits en milieu de travail ",
  "whatIsFSR":"Activité : Qu’est-ce qu’un rapport sur la situation financière?",
  "FSRActivitiesTitle":"Activité : Activités pour le rapport sur la situation financière",
  "UpdatingAnnualForecastTitle":"Activité : Mise à jour des prévisions annuelles",
  "IRLTitle": "Dans la vraie vie",
  "transcriptText":"",
  "reportSectionBar": "VALEURS"
  }
  }
</i18n>
