<template>
  <div>
    <h2 class="pageTitle" v-html="$t('organizationClassification')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_6uhhd0pp/flavorId/0_nwjpdprg/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_vk23wtwj/flavorId/0_pyarm1gf/name/a.mp4" chapters chapterFile="SpendPart1.vtt" ccFile="FunctionPart1_captions.vtt" posterFile="m3.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
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
                        <p>Your organization and classification (or OC) responsibilities have an impact on every other HR discipline and may also have cost implications. It is therefore important to understand how organization and classification work, both independently and together.</p>
                        <p>Job and position management are common responsibilities in this area of HR. They are associated with the <i>Financial Administration Act</i>, the <i>Canadian Human Rights Act</i>, and several HR policies. We will look at all of these in this course.</p>
                        <p>In this section, you will learn to:</p>
                        <ul>
                          <li>Explain the connection between organization and classification</li>
                          <li>Recall the manager’s responsibilities regarding organizational design</li>
                          <li>Define the role of specific legislation and policies in OC authorities</li>
                          <li>Match organization and classification responsibilities to their appropriate management level</li>
                          <li>Recall the roles of organization and classification in HR management</li>
                        </ul>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Organization and Classification</h2>
                        <p>What is Organization and Classification?</p>
                        <p>In the core public administration, “organization” refers to the alignment of a group’s activities with the roles and responsibilities mandated by Parliament and the government’s priorities. It is achieved through a process of review, research and modelling that is called “organizational design.”</p>
                        <p>“Classification” is the process of determining the relative value of work at each occupational group and level. It is the basis for the compensation of all public service employees.</p>
                        <p>Positions are classified by analyzing the organizational context, job evaluation standard, and relativity of a job description, in accordance with Treasury Board policy instruments.</p>
                        <p>Classification underpins coherent organizational structures and work relationships. It also forms the framework for effective resourcing, labour relations, training, performance management, and effective management, planning and use of human resources within an organization.</p>
                        <p>Organization and classification decisions go hand in hand.</p>
                        <p>The structure of the organization is designed with the assistance of an HR advisor, who also helps define the duties to be performed in achieving the mandate.</p>
                        <p>Based on the duties of a position (or job), the HR advisor or classification evaluation committee determines the group and level of the positions within the organization’s structure. Rates of pay are then matched to each occupational group and level, and employees are paid based on the group and level of the position they occupy.</p>
                        <p>Pay and benefits are negotiated outside of classification through the collective bargaining process.</p>
                        <p>[An Organizational and Classification activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Organizational Design</h2>
                        <p>As previously mentioned, organizational design is a formal process for developing an organizational structure based on its mandate, business objectives, budget, resources, etc.</p>
                        <p>There are different types of organizational structures; in the core public administration, most are hierarchical. Hierarchical structures can be organized according to different models: centralized versus decentralized; functional versus program oriented. In consultation with an HR advisor, you will design an optimal structure such as the ones shown here.</p>
                        <p>Eventually, each box will be assigned a group and level and will reflect the name of the incumbent.</p>
                        <p>In the creation and maintenance of an organizational structure, accountabilities, roles and responsibilities are discussed, defined and reflected. The work associated with each role is then defined in a written job description and classified accordingly.</p>
                        <p>Consult with your OC-accredited HR advisor to confirm your organizational structure and to plan the review or creation of positions to meet your operational needs.</p>
                        <p>[An Organizational Design activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Roles and Responsibilities</h2>
                        <p>Managers at all levels have organization and classification responsibilities for their organizational structures.</p>
                        <p>As outlined in the Policy on People Management, deputy heads are responsible for determining the department’s organizational structure and executive resourcing requirements.</p>
                        <p>Managers are responsible for ensuring their organizational structure is in line with the organization’s mandate and business objectives and determining the work assigned to a position and described in the job description.</p>
                        <p>An OC-accredited HR advisor uses the organizational structure and the job descriptions approved by the delegated manager to evaluate and render a classification decision on the occupational group, subgroup if applicable, and level to a position. The classification of the position will link the rate of pay as well as benefits information, enabling the hiring manager to ensure that sufficient funds are available to staff the position.</p>
                        <p>[A Roles and Responsibilities reference pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Authorities</h2>
                        <p>Depending on your Departmental Human Resources Delegation Instrument, you may also have the authority to approve organizational structures and job description content, including effective dates.</p>
                        <p>It is important that you and your HR advisors make organization and classification decisions that are relevant to your areas of responsibility, in accordance with the Policy on People Management and its related instruments.</p>
                        <p>The FAA identifies the Treasury Board as the employer and authorizes deputy heads to make classification decisions or to sub-delegate authority under sections 6 and 11.  The specific requirement pertaining to organization and classification is detailed in various policy instruments.</p>
                        <p>The Policy on People Management provides deputy heads with the parameters to manage their classification authorities within their areas of jurisdiction.</p>
                        <p>This policy authorizes deputy heads to delegate classification authority only to persons who are accredited in organization design and classification. Note that the authority to decide and respond to classification grievances remains with the deputy head.</p>
                        <p>The <i>Canadian Human Rights Act</i> protects people in Canada from discrimination when they are employed by or receive services from the federal government. The elements included in the job description are aligned with section 11(2), which states that there is a requirement for employees under federal jurisdiction to consider skill, effort, responsibility and working conditions in assessing the value of work performed.</p>
                        <p>The Treasury Board of Canada Secretariat is responsible for all terms and conditions of employment, collective bargaining negotiations, collective agreements and rates of pay within the core public administration.</p>
                        <p>For more information, consult the Directive on Terms and Conditions of Employment and the Directive on Classification, which can also be found in the toolbox.</p>
                        <p>As mentioned, most organizations have an HR delegation instrument that indicates to whom organization and classification authorities and responsibilities are sub-delegated. Some key delegated responsibilities include approving organizational structures, job descriptions, effective dates, classification actions or requests, as well as rendering classification decisions.</p>
                        <p>[An Authorities activity pop-up text box appears.]</p>
                        <hr>

                        <h2>6. The Role of Organization and Classification in Human Resources Management</h2>

                        <p>To get a better understanding of the role of organization and classification within HR management, picture a seven-level pyramid representing the sequence in which the organization operates.</p>
                        <p>The organization needs a mandate and a budget. Mandates are found in the acts, regulations and charters governing the organization. A budget forecast is used to construct a model of how the organization might perform financially if certain strategies, events and plans are carried out to meet the mandates.</p>
                        <p>Duties and responsibilities are divided among the positions within an organizational structure. An organizational chart reveals the structure as well as the roles, responsibilities and relationships between positions within the organization. Managers should consult an experienced HR advisor to receive valuable advice on possible design options and their impact on the classification of positions.</p>
                        <p>All data relevant to a position is collected. Normally, the collection and organization of information is the manager’s responsibility, but it is always necessary to consult an HR advisor for a job analysis. The end result of the analysis is a job description that aligns with the mandate of your organization.</p>
                        <p>Jobs are evaluated to determine their relative value in relation to other positions. This function is performed by an accredited HR advisor or by a classification evaluation committee.</p>
                        <p>Salary and benefits (including pensions) are determined for particular groups of positions. Once the group, subgroups (if applicable), and level are determined for a position, they are linked to the terms and conditions associated with that occupational group.</p>
                        <p>With the assistance of an HR advisor you can staff vacant positions by first establishing the relevant merit and asset criteria required for the successful performance of the work.</p>
                        <p>Managers at all levels set performance and learning objectives that are reviewed semi-annually with employees.</p>
                        <p>[A The Role of Organization and Classification in HR Management reference pop-up text box appears.]</p>
                        <hr>

                        <h2>7. In Real Life</h2>
                        <p>Making the link between organization and classification and other HR disciplines will guide you in:</p>
                        <ul>
                          <li>creating or classifying a position in line with the organization’s mandate so that you can deliver your product or service</li>
                          <li>planning positions according to the organization’s future needs so you can help meet the organization’s objectives (and mandate)</li>
                          <li>validating the job description before staffing a position to ensure the current classification decision is still applicable for each position</li>
                          <li>ensuring that job descriptions are accurate and up to date, thus helping avoid grievances</li>
                          <li>appropriately identifying the official languages requirements of a position to ensure that the employee can deliver the product or service effectively</li>
                          <li>ensuring that a classification decision is rendered for new and revised job descriptions before hiring is done</li>
                        </ul>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things.</p>
                        <p>To supplement the knowledge required to perform your organization and classification functions, be sure to complete the course Introduction to Organization and Classification (P930).</p>
                        <p>This mandatory course is the first step in the training and accreditation of public servants working and specializing in classification.</p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>
                        <hr>

                        <h2>8. Quiz</h2>
                        <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>

                        <h2>9. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>Introduction</h2>
                        <p>Vos responsabilités en matière d’organisation et de classification (OC) ont une incidence sur toutes les autres disciplines des RH et peuvent avoir des répercussions sur le plan des coûts. Dans ce contexte, il est important de comprendre comment l’organisation et la classification fonctionnent, à la fois indépendamment et ensemble.</p>
                        <p>La gestion des emplois et des postes est une responsabilité courante dans ce domaine des RH. Elle découle de la <i>Loi sur la gestion des finances publiques</i>, de la <i>Loi canadienne sur les droits de la personne</i> et de plusieurs politiques des RH. Nous allons en étudier certaines dans ce cours.</p>
                        <p>Dans cette section, vous apprendrez comment :</p>
                        <ul>
                          <li>expliquer le lien existant entre l’organisation et la classification;</li>
                          <li>mémoriser les responsabilités du gestionnaire en matière de conception organisationnelle;</li>
                          <li>définir le rôle de la législation et des politiques applicables aux responsabilités en matière d’OC;</li>
                          <li>cerner les responsabilités en matière d’organisation et de classification et les faire correspondre à l’échelon approprié de la direction;</li>
                          <li>se rappeler / énumérer les rôles en matière d’organisation et de classification dans le contexte de la gestion des RH.</li>
                        </ul>
                        <p> Il vous faudra environ 20 minutes pour parcourir cette section.</p>

                        <hr>

                        <h2>Organisation et classification</h2>
                        <p>Qu’est-ce que l’organisation et la classification?</p>
                        <p>Au sein de l’administration publique centrale, l’organisation désigne l’harmonisation des activités d’un groupe avec les rôles et responsabilités qui lui ont été confiés par le Parlement et de même qu’avec les priorités du gouvernement. On utilise un processus d’examen, de recherche et de modélisation appelé « conception organisationnelle ».</p>
                        <p>La classification est un processus permettant de déterminer la valeur relative du travail au sein de chaque groupe et niveau professionnels. Elle sert de fondement à la rémunération de tous les fonctionnaires.</p>
                        <p>On classifie les postes en analysant le contexte organisationnel, les normes d’évaluation des emplois et la relativité des descriptions de travail, conformément aux instruments de politique du Conseil du Trésor.</p>
                        <p>La classification appuie l’établissement de structures organisationnelles et de relations de travail cohérentes. Elle constitue ainsi un cadre permettant d’assurer l’efficacité du ressourcement, des relations de travail, de la formation, de la gestion du rendement ainsi que de la gestion, de la planification et de l’utilisation des ressources humaines au sein d’une organisation.</p>
                        <p>Les décisions en matière d’organisation et en matière de classification vont de pair.</p>
                        <p>La structure de l’organisation est conçue avec l’aide du conseiller en RH, qui participe également à la définition des tâches à exécuter aux fins de la réalisation du mandat.</p>
                        <p>Selon les tâches d’un poste (ou d’un emploi), le conseiller en RH ou le comité d’évaluation de la classification détermine le groupe et le niveau du poste au sein de la structure organisationnelle. Les taux de rémunération sont ensuite mis en correspondance avec chaque groupe et niveau professionnels, et les employés sont payés en fonction du groupe et du niveau du poste qu’ils occupent.</p>
                        <p>La rémunération et les avantages sociaux sont négociés dans le cadre du processus de négociation collective et non dans le cadre du processus de classification.</p>

                        <hr>

                        <h2>Conception organisationnelle</h2>
                        <p>Comme il a été mentionné auparavant, la conception organisationnelle est un processus officiel visant à établir une structure organisationnelle en fonction notamment du mandat, des objectifs opérationnels, du budget et des ressources de l’organisation.</p>
                        <p>On compte différents types de structures organisationnelles; dans l’administration publique centrale, la plupart des structures sont hiérarchiques. Les structures hiérarchiques peuvent être organisées selon différents modèles : centralisé ou décentralisé, fonctionnel ou axé sur les programmes. En consultation avec un conseiller en RH, vous concevrez une structure optimale, à l’image de celles qui sont présentées ci-contre.</p>
                        <p>Par la suite, un groupe et un niveau seront inscrits dans chaque case, qui contiendra le nom de la personne titulaire du poste.</p>
                        <p>Lors de la création [et] de la mise à jour d’une structure organisationnelle, on discute des obligations de rendre compte, des rôles et des responsabilités, on les définit et on en tient compte. Les fonctions associées à chaque rôle sont ensuite définies dans une description de travail écrite, puis classifiées en conséquence.</p>
                        <p>Consultez votre conseiller en RH accrédité en OC pour confirmer la structure organisationnelle et planifier l’examen ou la création des postes requis pour répondre aux besoins opérationnels.</p>

                        <hr>

                        <h2>Rôles et responsabilités</h2>
                        <p>Les gestionnaires de tous les niveaux exercent des responsabilités en matière d’organisation et de classification au sein de leur structure organisationnelle.</p>
                        <p>Comme il est énoncé dans la Politique sur la gestion des personnes, les administrateurs généraux sont responsables de l’établissement de la structure organisationnelle du ministère et des exigences en matière de ressources à l’échelon de la direction.</p>
                        <p>Les gestionnaires doivent s’assurer que leur structure organisationnelle est conforme au mandat et aux objectifs opérationnels de l’organisation et déterminer le travail qui est attribué à un poste et détaillé dans la description de travail.</p>
                        <p>Un conseiller en RH accrédité en OC se réfère à la structure organisationnelle et aux descriptions de travail approuvées par le gestionnaire délégué pour évaluer le groupe professionnel, le sous-groupe (le cas échéant) et le niveau d’un poste et prendre une décision en matière de classification. La classification du poste viendra établir un lien avec le taux de rémunération et les renseignements au sujet des avantages sociaux, ce qui permettra au gestionnaire d’embauche de s’assurer qu’il y a suffisamment de fonds pour doter le poste.</p>

                        <hr>

                        <h2>Pouvoirs</h2>
                        <p>Selon l’instrument de délégation ministériel des pouvoirs en matière de ressources humaines, vous avez peut-être le pouvoir d’approuver les structures organisationnelles et le contenu des descriptions de travail, y compris les dates d’entrée en vigueur.</p>
                        <p>Il est important que vos conseillers en RH et vous preniez des décisions en matière d’organisation et de classification qui s’appliquent à vos domaines de responsabilité, conformément à la Politique sur la gestion des personnes et aux instruments connexes.</p>
                        <p>La <i>Loi sur la gestion des finances publiques</i> désigne le Conseil du Trésor comme employeur et autorise les administrateurs généraux à prendre des décisions en matière de classification ou à subdéléguer les pouvoirs connexes en vertu des articles 6 et 11. L’exigence précise concernant l’organisation et la classification est énoncée dans différents instruments de politique.</p>
                        <p>La Politique sur la gestion des personnes fournit aux administrateurs généraux les paramètres leur permettant de gérer leurs pouvoirs en matière de classification dans leurs domaines de responsabilité.</p>
                        <p>Cette politique autorise les administrateurs généraux à déléguer le pouvoir de classification uniquement aux personnes accréditées en matière de conception organisationnelle et de classification. Il est à noter que l’administrateur général conserve le pouvoir de prendre les décisions concernant les griefs liés à la classification et d’y répondre.</p>
                        <p>La <i>Loi canadienne sur les droits de la personne</i> protège les Canadiens contre la discrimination lorsqu’ils sont des employés du gouvernement fédéral ou reçoivent des services de celui-ci. Les éléments inclus dans la description de travail sont conformes au paragraphe 11(2), selon lequel il faut tenir compte des compétences, de l’effort, de la responsabilité et des conditions de travail au moment d’évaluer la valeur du travail effectué par les employés relevant de la compétence fédérale.</p>
                        <p>Le Secrétariat du Conseil du Trésor du Canada est responsable de toutes les conditions d’emploi, des négociations collectives, des conventions collectives et des taux de rémunération au sein de l’administration publique centrale.</p>
                        <p>Pour plus d’informations, consultez la Directive sur les conditions d’emploi et la Directive sur la classification, qui se trouvent également dans la boîte à outils.</p>
                        <p>Comme il a déjà été mentionné, la plupart des organisations disposent d’un instrument de délégation des pouvoirs en matière de RH qui précise à qui sont subdélégués les pouvoirs et les responsabilités en matière d’organisation et de classification. Parmi les principales responsabilités déléguées figurent l’approbation des structures organisationnelles, des descriptions de travail, des dates d’entrée en vigueur et des mesures ou des demandes de classification ainsi que la prise des décisions en matière de classification.</p>
                        <hr>
                        <h2>Rôle de l’organisation et de la classification dans le contexte de la gestion des ressources humaines</h2>

                        <p>Pour mieux comprendre le rôle de l’organisation et de la classification dans le contexte de la gestion des ressources humaines, imaginez une pyramide de sept étages représentant l’ordre de fonctionnement de l’organisation.</p>
                        <p>Une organisation a besoin d’un mandat et d’un budget. Les mandats sont prévus dans les lois, les règlements et les chartes régissant l’organisation. Les prévisions budgétaires permettent d’établir un modèle quant au rendement financier possible de l’organisation si certaines stratégies et activités ainsi que certains plans sont réalisés aux fins de l’exécution des mandats.</p>
                        <p>Les tâches et les responsabilités sont réparties entre les postes faisant partie d’une structure organisationnelle. Un organigramme présente la structure ainsi que les rôles et les responsabilités associés aux postes au sein de l’organisation de même que les liens existant entre ceux-ci. Les gestionnaires devraient consulter un conseiller en RH expérimenté pour obtenir des conseils utiles au sujet des options de conception possibles et de leur incidence sur la classification des postes.</p>
                        <p>Toutes les données pertinentes liées à un poste sont recueillies. La collecte et l’organisation de l’information relèvent généralement du gestionnaire, mais il est toujours nécessaire de consulter un conseiller en RH pour une analyse de l’emploi. La description de travail est le résultat final de l’analyse des emplois, et elle correspond au mandat de votre organisation.</p>
                        <p>Les emplois sont évalués pour que soit déterminée leur valeur relative par rapport aux autres postes. Il s’agit d’une fonction qui est exercée par un conseiller en RH accrédité ou par un comité d’évaluation de la classification.</p>
                        <p>La rémunération et les avantages sociaux (y compris les pensions) sont déterminés pour des groupes de postes en particulier. Une fois que le groupe, le sous-groupe (le cas échéant) et le niveau d’un poste ont été établis, ils sont associés aux conditions de travail de ce groupe professionnel.</p>
                        <p>Avec l’aide d’un conseiller en RH, vous pouvez pourvoir les postes vacants en déterminant en premier lieu les critères de mérite et les qualifications constituant un atout nécessaire à l’accomplissement du travail.</p>
                        <p>Les gestionnaires de tous les niveaux fixent des objectifs de rendement et d’apprentissage; ceux-ci sont passés en revue deux fois par an avec les employés.</p>

                        <hr>

                        <h2>Dans la vraie vie</h2>
                        <p>Établir des liens entre l’organisation et la classification et d’autres disciplines en RH vous aidera à : </p>
                        <ul>
                          <li>créer ou classifier un poste en conformité avec le mandat de l’organisation, afin de pouvoir fournir votre produit ou votre service;</li>
                          <li>assurer la planification des postes en fonction des besoins futurs de l’organisation, pour atteindre les objectifs (et remplir le mandat) de l’organisation;</li>
                          <li>confirmer la description de travail avant de pourvoir un poste, pour vous assurer que la décision en matière de classification actuelle s’applique toujours au poste;</li>
                          <li>veiller à ce que les descriptions de travail soient exactes et à jour, ce qui contribue à éviter les griefs;</li>
                          <li>déterminer de manière appropriée les exigences en matière de langues officielles d’un poste, pour faire en sorte que l’employé puisse fournir le produit ou le service de manière efficace;</li>
                          <li>veiller à ce qu’une décision en matière de classification soit prise pour les descriptions de travail nouvelles ou révisées avant de procéder à l’embauche.</li>
                        </ul>

                        <hr>

                        <h2>Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>

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
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
          {{ $t('activityLinks') }}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
        <p>Voici une liste des ressources auxquelles on fait référence dans cette section.</p>
        <ul>
          <li><a href="https://laws-lois.justice.gc.ca/fra/lois/f-11/" target="_blank" alt="Loi sur la gestion des finances publiques (LGFP)">Loi sur la gestion des finances publiques (LGFP)</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/fra/lois/h-6/" target="_blank" alt="Loi canadienne sur les droits de la personne">Loi canadienne sur les droits de la personne</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/topic-sujet-fra.aspx?ta=40" target="_blank" alt="Politique sur la gestion des personnes">Politique sur la gestion des personnes</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28700" target="_blank" alt="Directive sur la classification">Directive sur la classification</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28699" target="_blank" alt="Directive sur la surveillance de la classification">Directive sur la surveillance de la classification</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28698" target="_blank" alt="Directive sur les griefs de classification">Directive sur les griefs de classification</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15772" target="_blank" alt="Directive sur les conditions d’emploi">Directive sur les conditions d’emploi</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/fra/acts/o-3.01/" target="_blank" alt="Loi sur les langues officielles">Loi sur les langues officielles</a></li>
          <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/conventions-collectives/groupes-professionnels/groupes-professionnels-representation-agents-negociateurs.html" target="_blank" alt="Groupes professionnels par représentation d’agents négociateurs">Groupes professionnels par représentation d’agents négociateurs</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26160" target="_blank" alt="Politique sur les langues officielles">Politique sur les langues officielles</a></li>
        </ul>
      </div>
      <div v-if="$i18n.locale=='en'">
        <p>Here is a list of resources referred to in this section.</p>
        <ul>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/F-11/" target="_blank" alt="Financial Administration Act (FAA)">Financial Administration Act (FAA)</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/h-6/" target="_blank" alt="Canadian Human Rights Act">Canadian Human Rights Act</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/topic-sujet-eng.aspx?ta=40" target="_blank" alt="Policy on People Management">Policy on People Management</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28700" target="_blank" alt="Directive on Classification">Directive on Classification</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28699" target="_blank" alt="Directive on Classification Oversight">Directive on Classification Oversight</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28698" target="_blank" alt="Directive on Classification Grievances">Directive on Classification Grievances</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15772" target="_blank" alt="Directive on Terms and Conditions of Employment">Directive on Terms and Conditions of Employment</a></li>
          <li><a href="https://laws-lois.justice.gc.ca/eng/acts/o-3.01/" target="_blank" alt="Official Languages Act">Official Languages Act</a></li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/collective-agreements/occupational-groups/occupational-groups-bargaining-agent-representation.html" target="_blank" alt="Occupational groups by bargaining agent representation">Occupational groups by bargaining agent representation</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26160" target="_blank" alt="Policy on Official Languages">Policy on Official Languages</a></li>
        </ul>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="organizationClassification" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('organizationClassificationTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='en'">
        <p><b>Occupational Group Structure</b></p>
        <p>Most represented employees are governed by one of three main unions.</p>
        <ul>
          <li>Public Service Alliance of Canada (PSAC)</li>
          <li>Professional Institute of the Public Service of Canada (PIPSC)</li>
          <li>Canadian Association of Professional Employees (CAPE)</li>
        </ul>
        <p>Some specific trades are governed by other unions, as indicated on the occupational group structure chart, while a small number of classifications are unrepresented.</p>
        <p><strong>Take a look at the Occupational Group Structure for a visual representation of the occupational groups and bargaining agents.</strong></p>
        <img src="~/assets/en/jobEvaluation_en.png" title="Visual of the Occupational Group Structure" alt="Visual of the Occupational Group Structure">
        <p><strong>For an accessible web version, see <a href="https://www.canada.ca/en/treasury-board-secretariat/services/collective-agreements/occupational-groups/occupational-groups-bargaining-agent-representation.html" target="_blank" alt="Link to accessible web version of the Occupational groups by bargaining agent representation page">Occupational groups by bargaining agent representation</a></strong></p>
      </div>
      <div v-if="$i18n.locale=='fr'">
        <p><b>Structure des groupes professionnels</b></p>
        <p>La plupart des employés sont représentés par l’un des trois grands syndicats suivants :</p>
        <ul>
          <li>l’Alliance de la Fonction publique du Canada (AFPC); </li>
          <li>l’Institut professionnel de la fonction publique du Canada (IPFPC); </li>
          <li>l’Association canadienne des employés professionnels (ACEP). </li>
        </ul>
        <p>Les employés de certains métiers sont représentés par d’autres syndicats, comme l’indique le tableau de la structure des groupes professionnels, tandis que d’autres, qui appartiennent à un petit nombre de groupes (classifications) ne sont pas représentés. </p>
        <p><strong>Consultez la structure des groupes professionnels pour obtenir un aperçu visuel des groupes professionnels et des agents négociateurs.  </strong></p>
        <img src="~/assets/fr/jobEvaluation_fr.png" title="Aperçu visuel de la structure des groupes professionnels" alt="Aperçu visuel de la structure des groupes professionnels">
        <p><strong>Pour une version Web accessible, voir la page <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/conventions-collectives/groupes-professionnels/groupes-professionnels-representation-agents-negociateurs.html" target="_blank" alt="Lien ver Groupes professionnels par représentation d’agents négociateurs">Groupes professionnels par représentation d’agents négociateurs</a></strong></p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="organizationalDesign" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('activityIcon')" width="32" height="32"> {{$t('organizationalDesignTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <organizationalDesign />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="rolesResponsibilities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('rolesResponsibilitiesTitle')}}
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
      <div v-if="$i18n.locale=='fr'">
        <p>Plusieurs responsabilités clés en matière d’organisation et de classification sont assumées par le gestionnaire, dont les suivantes :</p>
        <ul>
          <li>suivre avec succès la formation requise avant d’exercer les responsabilités de conception organisationnelle et de classification;</li>
          <li>obtenir des conseils des personnes accréditées en conception organisationnelle et en classification lorsqu’il propose des changements liés à l’organisation et à la classification, y compris des modifications aux descriptions de travail; </li>
          <li>tenir à jour les structures organisationnelles et les descriptions de travail dans son secteur de responsabilité; </li>
          <li>veiller à ce que les employés soient avisés chaque fois qu’une décision de classification est prise pour le poste qu’ils occupent. </li>
        </ul>
        <p>Consultez la <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28700" target="_blank" alt="Lien vers la page web de la Directive sur la classification">Directive sur la classification</a> pour bien comprendre vos tâches en tant que gestionnaire délégué.</p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="Authorities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('authoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <authorities />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="roleofOrganizationHR" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('roleOrganizationTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
       <div v-if="$i18n.locale=='en'">
        <p>Organization and classification decisions have implications for every other HR discipline, as well as your budget.</p>
        <img src="~/assets/en/organizationHR_en.png" title="Visual chart of every other HR discipline" alt="Circles labeled with HR disciplines: Resourcing, Training, Integrated Planning, Official Languages, Performance Management, Labour Relations, Pay and Benefits, surrounding and connected to center circle labeled: Organization and Classification">
        <p>Resourcing begins with writing or revising a job description. The HR advisor will review and evaluate the job description to render a classification decision. Then, Resourcing (staffing) will work with you to create a statement of merit criteria.</p>
        <p>Pay and Benefits covers collective agreements, rates of pay, and associated benefits that are associated with each position.</p>
        <p>Labour Relations may be implicated if an employee disagrees with their job description, assigned work activities or the effective date of the classification decision.</p>
        <p>Performance Management covers an employee’s performance objectives, which are tied to the activities determined by their superior. These objectives are linked to the job description and evaluated regularly. </p>
        <p>The type of training associated with a position should be recommended in light of the duties of the position as set out in the job description. </p>
        <p>Official languages as described in the <a href="https://laws-lois.justice.gc.ca/eng/acts/o-3.01/" target="_blank" alt="Link to the official language act web page">Official Languages Act</a> and the Treasury Board of Canada Secretariat’s <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26160" target="_blank" alt="Link to the Policy on Official Languages web page">Policy on Official Languages</a> govern a public servant’s obligation to provide communications and services to the public in both official languages and to respect language-of-work rights. </p>
        <p>The identification of bilingual positions is based on the organization’s official languages obligations, its official languages strategy, as well as an objective assessment of the work to be performed.</p>
        <p>Integrated HR planning is the foundation for assessing and understanding your current and future needs. As such, it is a key tool for making HR decisions efficiently and effectively.  </p>
        <p>Organizational design organizes work in a way to carry out a mandate or achieve business objectives. It is the process of configuring organizational structures to align an organization’s processes, systems, technology, culture and people with its ultimate goals. It is part of integrated planning and provides an opportunity to review and revise various components of the work, to ensure the organization is able to meet its mandate and carry out its business objectives successfully.</p>
      </div>
      <div v-if="$i18n.locale=='fr'">
        <p>Les décisions en matière d’organisation et de classification ont des répercussions sur toutes les autres disciplines des RH ainsi que sur votre budget.</p>

        <img src="~/assets/fr/organizationHR_fr.png" title="Aperçu visuel des autres disciplines des RH" alt="Les cercles illustrent les disciplines des RH et se rapportent au cercle du milieu (organisation et classification) : ressourcement, formation, planification intégrée, langues officielles, gestion du rendement, relations de travail et rémunération et avantages sociaux.">
        
        <p>Le processus de ressourcement commence par la rédaction ou la révision d’une description de travail. Le conseiller en RH examine et évalue la description de travail pour prendre une décision en matière de classification. Le service de ressourcement (dotation) établit ensuite avec vous un énoncé des critères de mérite. </p>
        
        <p>Les responsables de la rémunération et des avantages sociaux s’occupent des conventions collectives, des taux de rémunération et des avantages sociaux associés à chaque poste.</p>
       
        <p>Il est possible de faire appel aux responsables des relations de travail si un employé conteste sa description de travail, les tâches qui lui sont assignées ou la date d’entrée en vigueur de la décision de classification.</p>
        
        <p>La gestion du rendement englobe les objectifs de rendement d’un employé, qui sont en lien avec les activités déterminées par son superviseur. Ces objectifs sont liés à la description de travail et sont régulièrement passés en revue. </p>
        
        <p>Le type de formation associé à un poste devrait être proposé à la lumière des fonctions du poste telles qu’elles sont définies dans la description de travail. </p>

        <p>Les langues officielles,conformément à la <a href="https://laws-lois.justice.gc.ca/fra/lois/o-3.01/" target="_blank" alt="Lien vers la page web de la loi sur les langues officielles">Loi sur les langues officielles</a> et à la <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26160" target="_blank" alt="Lien vers la page web de la Politique sur les langues officielles">Politique sur les langues officielles</a>  du Secrétariat du Conseil du Trésor du Canada, régissent l’obligation d’un fonctionnaire de transmettre des communications et de fournir des services au public dans les deux langues officielles et de respecter les droits relatifs à la langue de travail.</p>
        
        <p>La désignation des postes bilingues repose sur les obligations de l’organisation en matière de langues officielles et sur sa stratégie à cet égard ainsi que sur une évaluation objective du travail à exécuter.  </p>
        
        <p>La planification intégrée des RH est le fondement de l’évaluation et de la compréhension de vos besoins actuels et futurs. C’est donc un outil essentiel pour la prise de décisions efficientes et efficaces en matière de RH.  </p>
        
        <p>La conception organisationnelle structure le travail de manière à ce qu’il soit possible de réaliser un mandat ou d’atteindre des objectifs opérationnels. Il s’agit du processus de configuration des structures organisationnelles visant à harmoniser les processus, les systèmes, la technologie, la culture et les employés de l’organisation avec les objectifs finaux de celle-ci. La conception organisationnelle fait partie de la planification intégrée et permet d’examiner et de réviser divers aspects du travail pour veiller à ce que l’organisation soit en mesure de réaliser son mandat et d’atteindre ses objectifs opérationnels.  </p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
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
            <p>Your organization will have its own ways of doing things.</p>
            <p>To supplement the knowledge required to perform your organization and classification functions, be sure to complete the course Introduction to Organization and Classification.</p>
            <p>This mandatory course is the first step in the training and accreditation of public servants working and specializing in classification.</p>
          </div>
          <div v-if="$i18n.locale=='fr'">
            <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>
            <p>Votre organisation aura sa propre façon de faire les choses.</p>
            <p>Pour approfondir les connaissances nécessaires à l’exercice de vos fonctions en matière d’organisation et de classification, suivez le cours « Introduction à l’organisation et à la classification ».</p>
            <p>Ce cours obligatoire représente la première étape de la formation et de l’accréditation des fonctionnaires travaillant et se spécialisant dans le domaine de la classification.</p>
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
      <microlearning youAreHere path="functionPart1" imagePath="FunctionPart1.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('organizationClassification')" type="video" />
      <microlearning path="functionPart2"  imagePath="FunctionPart2.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="FunctionPart3.svg" :text="$t('Staffing')" type="video" />
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
  "activityLinks":"References: External Links",
  "organizationClassificationTitle": "Activity: Organizational and Classification",
  "organizationalDesignTitle": "Activity: Organizational Design",
  "rolesResponsibilitiesTitle": "References: Roles and Responsibilities",
  "roleOrganizationTitle": "Reference: The Role of Organization and Classification in HR Management",
  "authoritiesTitle": "Activity: Authorities",
  "hrManagementTitle": "Activity: The Role of Organization and Classification in HR Management",
  "InRealLife":"In Real Life",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "FUNCTION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "activityLinks":"Références : Liens externes",
  "delegateAuthority":"Activité : Délégation des pouvoirs",
  "organizationClassificationTitle": "Activité : Organisation et classification",
  "organizationalDesignTitle": "Activité : Conception organisationnelle",
  "rolesResponsibilitiesTitle": "Références : Rôles et responsabilités",
  "roleOrganizationTitle": "Références : Le rôle de l’organisation et de la classification dans le contexte de la gestion des RH",
  "authoritiesTitle": "Activité : Pouvoirs",
  "InRealLife": "Dans la vraie vie",
  "checkBudget":"Activité : Vérifiez votre budget",
  "tryItTitle":"Activité : Essayons-le!",
  "forecastBudgetTitle":"Activité : Prévoyez vos besoins budgétaires",
  "RecordingTitle":"Activité : Enregistrement dans le système financier",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "FONCTION"
  }
  }
</i18n>