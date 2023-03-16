<template>
  <div>
    <h1 class="pageTitle" v-html="$t('Staffing')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_vn9uu1vz/flavorId/0_wxwijp66/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_99dlrhrs/flavorId/0_rkorzsi8/name/a.mp4"  chapters chapterFile="SpendPart3.vtt" ccFile="FunctionPart3_captions.vtt" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" posterFile="m5.jpg" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
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
                        <p>Finding and recruiting employees is a key step in helping an organization achieve its goals.</p>
                        <p>As a sub-delegated manager, you will be asked to staff positions within your section or work unit by finding the skills and other attributes needed for the work.</p>
                        <p>Federal public service managers and human resources professionals must comply with a variety of policies and legislation governing how staffing processes are conducted. These laws, regulations and policies support and promote impartial appointments, based on merit, which help advance diversity and inclusion in the workplace.</p>
                        <p>In this module section you will learn to:</p>
                        <ul>
                          <li>Identify your staffing needs</li>
                          <li>Recall your staffing obligations, and</li>
                          <li>Recognize considerations for staffing a position</li>
                        </ul>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Identifying Your Staffing Needs</h2>
                        <p>In determining your staffing needs, consider various sources of information. A few good sources to begin with are your business objectives, your organizational goals and the public service workforce goals.</p>
                        <p>Considering your business objectives when staffing will help ensure that your programs and services are properly managed and delivered. For clarity on business objectives, consult documents such as business plans, performance agreements, Treasury Board submissions, and Cabinet documents.</p>
                        <p>When considering your business objectives, ask yourself the following questions:</p>
                        <ul>
                          <li>Do my objectives align with the higher-level priorities? and</li>
                          <li>What qualifications will contribute to meeting the business requirements?</li>
                        </ul>
                        <p>Business objectives are guided by organizational and public service workforce goals. These goals are set by the Clerk of the Privy Council, the Treasury Board, deputy heads and management. Here are some examples of priorities at this level:</p>
                        <ul>
                          <li>Building a diverse, equitable and inclusive public service</li>
                          <li>Correcting conditions of disadvantage in employment</li>
                          <li>Placing employees who are affected by workforce adjustment</li>
                          <li>Building organizational capacity and developing competencies</li>
                        </ul>
                        <p>Organizational and public service workforce goals are framed by:</p>
                        <ul>
                          <li>Legislation including <i>Public Service Employment Act</i>, <i>Accessible Canada Act</i>, <i>Employment Equity Act</i>, <i>Canadian Human Rights Act</i>, <i>Official Languages Act</i>, and the Constitution of Canada</li>
                          <li>Agreements like the Nunavut Land Claims Agreement and even the Canadian Free Trade Agreement, as well as</li>
                          <li>Your Minister's mandate, statements by the Clerk of the Privy Council, and the Speech from the Throne</li>
                        </ul>
                        <p>[An Identifying Your Staffing Needs activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Get Familiar With Your Staffing Obligations</h2>
                        <p>Before you initiate an appointment process, it’s important to be acquainted with the legislation, policies and guidelines that govern appointments. These include the Public Service Commission’s Appointment Framework and the Treasury Board’s policy framework, as well as your organizational staffing framework.</p>
                        <p>The purpose of the <i>Employment Equity Act</i> is to achieve equality in the workplace and to correct conditions of disadvantage in employment for such designated groups as: women, Aboriginal peoples, persons with disabilities and members of visible minorities.</p>
                        <p>The Act requires that every employer identify and eliminate employment barriers against persons in the identified groups. Employers must also institute positive policies and practices and make reasonable accommodations to ensure their workforce reflects the diversity of Canadians.</p>
                        <p>The <i>Accessible Canada Act</i> is intended to promote the full and equal participation of all persons, especially persons with disabilities, in society. This act strives to proactively eliminate and prevent barriers in seven areas under federal jurisdiction, including employment, in order to ensure greater opportunities for persons with disabilities.</p>
                        <p>The Public Service Commission’s Appointment Framework guides deputy heads in building their own staffing systems adapted to their needs and in ensuring that they comply with legislative and policy requirements. It is made up of</p>
                        <ol>
                          <li>The <i>Public Service Employment Act</i> and any applicable exclusion approval orders and regulations. The full list of List of Acts, Regulations and Orders can be found online</li>
                          <li>The Public Service Commission’s Appointment Policy</li>
                          <li>Appointment Delegation and Accountability Instrument</li>
                        </ol>
                        <p>Components of the Treasury Board’s policy framework also have a role to play in the staffing process. It refers to the following documents: (links available in the toolkit)</p>
                        <ol>
                          <li>The Values and Ethics Code for the Public Sector, which guides managers in their staffing thinking and decision making.</li>
                          <li>The <i>Financial Administration Act</i>, in particular the Human Resources Management section.</li>
                          <li>The Policy on People Management and directives which cover deployments, assignments, secondments, reclassifications, official languages in relation to staffing, and the duty to accommodate which outlines how to make staffing processes as inclusive and accessible as possible.</li>
                          <li>Programs such as: employment equity, diversity and inclusion, student programs, and the Interchange Canada program.</li>
                          <li>Qualification standards in relation to education, occupational certification, official languages and other requirements to qualify for employment in the core public service.</li>
                        </ol>
                        <p>[A Staffing Obligations reference pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Inclusive Hiring</h2>
                        <p>Watch this video on inclusive hiring, which offers five tips on diversifying your workforce.</p>
                        <p>[An Inclusive Hiring activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Staffing Your Position</h2>
                        <p>As a sub-delegated manager, you are responsible for making decisions that are subdelegated to you and for working in partnership with HR. There are three lenses to apply when staffing a position: diversity, equity and inclusion; business objectives and the judicious management of resources; and integrity and ethics.</p>
                        <p>In order to conduct a fair and inclusive process and to hire qualified individuals to form a diverse workforce that reflects the Canadian population and meets your organizational needs, the following must be done:</p>
                        <ul>
                          <li>Take into account employment equity objectives and adopt inclusive practices.</li>
                          <li>Ensure that hiring processes are conducted in good faith, are free from bias and are impartial in a manner that is supportive of an individual’s right to accommodation.</li>
                          <li>Establish effective merit criteria that reflect the requirements of the position or work unit and consider the organization's business needs. For example, equity-seeking groups.</li>
                          <li>Select a process type (appointment or administrative, advertised or non-advertised, internal or external).</li>
                          <li>Determine who will be eligible to apply by establishing the area of selection or recourse.</li>
                          <li>Identify and seek to reduce unconscious biases (recruitment, assessment, selection).</li>
                          <li>Conduct an objective assessment of each candidate’s qualifications and:   
                            <ul>
                              <li>assess the candidate in their official language of choice without regard to the location of the official languages requirements of the position;</li>
                              <li>provide accommodations by being proactive and responsive to requests;</li>
                              <li>gather enough information from each candidate to make a fair decision;</li>
                              <li>use a variety of complementary sources and assessment tools to increase the validity and reliability of the assessment;</li>
                              <li>apply to each candidate the same standard for a qualification, that is the same definition or indicators) established for the process</li>
                              <li>ensure the quality of the assessment by consulting with experts and stakeholders on the selection process and the development of tools and their use in the assessment of candidates.</li>
                            </ul>
                          </li>
                          <li>Ensure appointments are based on merit and respect the order of precedence   
                            <ul>
                              <li>Consider priority entitlement provisions, preference for veterans, Canadian citizens, permanent residents, and obligations set out in claim agreements such as the Nunavut Land Claims Agreement, Canadian Free Trade Agreement</li>
                            </ul>
                          </li>
                        </ul>
                        <p>For more details, please consult the Appointment Delegation and Accountability Instrument and the Appointment Policy.</p>
                        <p>To conduct an effective process that achieves business objectives through the judicious management of resources, consider:</p>
                        <ul>
                          <li>Keeping your staffing objectives in mind throughout the process</li>
                          <li>Planning and preparing the staffing process prior to launching it</li>
                          <li>Using flexibilities provided in the Public Service Employment Act and make reasonable adaptations as the circumstances evolve</li>
                          <li>Promoting engagement and retention by being transparent with applicants and employees</li>
                        </ul>
                        <p>To conduct a process based on integrity and ethics these 5 steps are necessary:</p>
                        <ul>
                          <li>Comply with the requirements of the staffing framework (public service and departmental) and exercise flexibility by suggesting solutions and adaptations for the assessment tools and approach in order to ensure a fair assessment of each candidate’s qualifications.</li>
                          <li>Use one of the flexibilities provided for in the Public Service Employment Act. For example: 
                            <ul>
                              <li>Focus exclusively on members of designated employment equity groups or expand the area of selection that applies to these groups.</li>
                              <li>Establish an organizational need to select individuals who have declared that they belong to a designated group that is currently or is expected to be under-represented. In a non-advertised process, appoint a person belonging to one of the designated groups.</li>
                            </ul>
                          </li>
                          <li>Make reasonable decisions based on valid and reliable information related to each candidate and for each process.</li>
                          <li>Focus on merit rather than on likeability or other sources of bias.</li>
                          <li>Be able to clearly explain decisions and document appointment information including your decisions and considerations.</li>
                        </ul>
                        <p>[A Staffing Your Position reference pop-up text box appears.]</p>
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things.</p>
                        <p>As a last step, locate some essential resources to assist you in staffing effectively.</p>
                        <ul>
                          <li>Your organizational staffing framework</li>
                          <li>The mandate of your organization (enabling legislation)</li>
                          <li>Your departmental instrument of sub-delegation</li>
                          <li>Staffing policies, direction from the Deputy Head and practices of your organization</li>
                          <li>Identify and meet your HR advisors and consult them before making decisions.</li>
                        </ul>
                        <p>As a sub-delegated manager, you have many different options.  Remember to consult your HR advisor.</p>
                        <p>Take time out from the course to consult the Public Service Commission’s Guides and Tools web page. These tools are designed to assist managers involved in the appointment process.</p>
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
                        <p><strong>[00:00:01 : Un titre apparaît à l'écran.]</strong></p>
                        <h2>Module 5 : Dotation</h2>
                        <p><strong>[00:00:06 : Un titre apparaît à l'écran.]</strong></p>
                        <h2>1. Introduction</h2>
                        <p>La recherche et le recrutement d’employés constituent des étapes clés qui permettent à une organisation d’atteindre ses objectifs.</p>
                        <p>Si vous êtes gestionnaire subdélégué, on vous demandera de pourvoir des postes dans votre section ou unité de travail en établissant les compétences et les autres capacités nécessaires au travail.</p>
                        <p>Les gestionnaires et les professionnels de ressources humaines de la fonction publique fédérale doivent se conformer à une multitude de politiques et de textes législatifs régissant le processus de dotation. Ces lois, règlements et politiques soutiennent et favorisent les nominations impartiales et fondées sur le mérite, et encouragent ainsi la diversité et l’inclusion dans le milieu de travail.</p>
                        <p>Dans cette section, vous apprendrez à : </p>
                        <ul>
                          <li>déterminer vos besoins en matière de dotation;</li>
                          <li>retenir vos obligations en matière de dotation;</li>
                          <li>reconnaître les éléments à prendre en considération pour la dotation d’un poste.</li>
                        </ul>
                        <p>Il vous faudra environ 20 minutes pour parcourir cette section.</p>
                        <p><strong>[00:01:11 : Une fenêtre contextuelle Références : Liens externes apparaît à l'écran.]</strong></p>
                        <p><strong>[00:01:13 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>2. Détermination de vos besoins en matière de dotation</h2>
                        <p>Lorsque vous déterminez vos besoins en matière de dotation, prenez en considération diverses sources d’information. Les objectifs opérationnels, les buts de votre organisation et les buts de l’effectif de la fonction publique constituent de bonnes sources de départ.</p>
                        <p>Le fait de prendre en considération les objectifs opérationnels au moment de pourvoir des postes vous aidera à faire en sorte que les programmes et les services sont gérés [et] exécutés correctement. Pour obtenir des précisions sur les objectifs opérationnels, consultez des documents comme les plans d’activités, les ententes de rendement, les présentations au Conseil du Trésor et les documents du Cabinet.</p>
                        <p>Lorsque vous prenez en considération les objectifs opérationnels, posez-vous les questions suivantes : </p>
                        <ul>
                          <li>Est-ce que mes objectifs s’harmonisent avec les priorités des échelons supérieurs?</li>
                          <li>Quelles qualifications contribueront à satisfaire aux exigences opérationnelles?</li>
                        </ul>
                        <p>Les objectifs opérationnels suivent le buts de l’organisation et de l’effectif de la fonction publique. Ces buts sont établis par le greffier du Conseil privé, le Conseil du Trésor, les administrateurs généraux et la direction. Voici quelques exemples de priorités de ces échelons : </p>
                        <ul>
                          <li>bâtir une fonction publique diversifiée, équitable et inclusive;</li>
                          <li>corriger les conditions qui désavantagent certaines personnes dans le domaine de l’emploi;</li>
                          <li>trouver un poste aux employés touchés par le réaménagement des effectifs;</li>
                          <li>renforcer la capacité organisationnelle et perfectionner les compétences.</li>
                        </ul>
                        <p>Les buts de l’organisation et de l’effectif de la fonction publique sont encadrés par : </p>
                        <ul>
                          <li>des lois comme la <i>Loi sur l’emploi dans la fonction publique</i>, la <i>Loi canadienne sur l’accessibilité</i>, la <i>Loi sur l’équité en matière d’emploi</i>, la <i>Loi canadienne sur les droits de la personne</i>, la <i>Loi sur les langues officielles</i> et la Constitution du Canada;</li>
                          <li>des accords comme l’Accord sur les revendications territoriales du Nunavut et même l’Accord de libre-échange canadien;</li>
                          <li>le mandat de votre ministre, les déclarations du greffier du Conseil privé et le discours du Trône.</li>
                        </ul>
                        <p><strong>[00:03:24 : Une fenêtre contextuelle Activité : Détermination de vos besoins en matière de dotation apparaît à l'écran.]</strong></p>
                        <p><strong>[00:03:27 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>3. Familiarisez-vous avec vos obligations en matière de dotation</h2>
                        <p>Avant de commencer un processus de nomination, il est important de connaître les lois, les politiques et les lignes directrices qui régissent les nominations. Le Cadre de nomination de la Commission de la fonction publique, le Cadre principal des politiques du Conseil du Trésor et le cadre de dotation de votre organisation en sont des exemples.</p>
                        <p>La <i>Loi sur l’équité en matière d’emploi</i> vise à atteindre l’égalité en milieu de travail et à corriger les conditions qui désavantagent les groupes désignés suivants dans le domaine de l’emploi : les femmes, les Autochtones, les personnes handicapées et les membres de minorités visibles.</p>
                        <p>La <i>Loi</i> nécessite que chaque employeur cerne et élimine les obstacles à l’emploi rencontrés par les groupes désignés. Les employeurs doivent aussi mettre en œuvre des pratiques et des politiques positives et prendre des mesures d’adaptation raisonnables de façon à ce que leur milieu de travail reflète la diversité de la population canadienne.</p>
                        <p>La <i>Loi canadienne sur l’accessibilité</i> a pour objectif de favoriser la participation entière et égale de toutes les personnes, en particulier des personnes handicapées, à la société canadienne. Elle vise à éliminer et à prévenir de manière proactive les obstacles dans sept domaines relevant de la compétence fédérale, dont l’emploi, afin d’assurer de meilleures chances aux personnes handicapées.</p>
                        <p>Cadre de nomination de la Commission de la fonction publique</p>
                        <p>Le Cadre de nomination de la Commission de la fonction publique aide les administrateurs généraux à élaborer leurs propres systèmes de dotation, lesquels sont adaptés à leurs besoins, et à s’assurer que ceux-ci respectent les exigences législatives et politiques. Il est composé des éléments suivants : </p>
                        <ol>
                          <li>la <i>Loi sur l’emploi dans la fonction publique</i> et tout décret d’exemption et règlement applicables; la liste complète des lois, des règlements et des décrets est disponible en ligne;</li>
                          <li>la Politique de nomination de la Commission de la fonction publique;</li>
                          <li>l’Instrument de délégation et de responsabilisation en matière de nomination.</li>
                        </ol>
                        <p>Les composantes du Cadre principal des politiques du Conseil du Trésor ont également un rôle à jouer dans le processus de dotation. Il s’agit en fait des documents suivants (les liens figurent dans la boîte à outils) : </p>
                        <ol>
                          <li>le Code de valeurs et d’éthique du secteur public, qui oriente les gestionnaires dans le processus de réflexion et la prise de décisions en matière de dotation;</li>
                          <li>la Loi sur la gestion des finances publiques, et en particulier la section sur la gestion des ressources humaines;</li>
                          <li>la Politique sur la gestion des personnes et les directives relatives aux mutations, aux affectations, aux détachements, aux reclassifications, aux langues officielles en matière de dotation et à l’obligation de prendre des mesures d’adaptation, qui énoncent comment rendre les processus de dotation aussi inclusifs et accessibles que possible;</li>
                          <li>des programmes comme ceux qui sont destinés aux étudiants ou qui concernent l’équité en matière d’emploi, la diversité et l’inclusion, ou encore Échanges Canada;</li>
                          <li>les normes de qualification en matière d’études, d’attestation professionnelle et de langues officielles et d’autres exigences permettant à une personne d’obtenir un emploi dans la fonction publique centrale.</li>
                        </ol>
                        <p><strong>[00:06:44 : Une fenêtre contextuelle Références : Obligations en matière de dotation apparaît à l'écran.]</strong></p>
                        <p><strong>[00:06:45 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>4. Embauche inclusive</h2>
                        <p>Regardez la vidéo suivante sur l’embauche inclusive. Vous vous verrez présenter cinq conseils qui vous permettront de diversifier votre effectif.</p>
                        <p><strong>[00:06:54 : Un lien vidéo apparaît à l’écran : Savoir Faire / Embauche inclusive : cinq conseils pour diversifier votre effectif.]</strong></p>
                        <p><strong>[00:06:56 : Un lien d’une page web apparaît à l’écran : https://www.csps-efpc.gc.ca/video/inclusive-hiring-five-tips-fra.aspx.]</strong></p>
                        <p><strong>[00:07:07 : Une fenêtre contextuelle Activité – Embauche inclusive apparaît à l'écran.]</strong></p>
                        <p><strong>[00:07:08 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>5. Dotation d’un poste</h2>>
                        <p>Si vous êtes gestionnaire subdélégué, vous êtes responsable de prendre les décisions qui relèvent des pouvoirs qui vous ont été subdélégués et de travailler en partenariat avec les RH. La dotation d’un poste doit être considérée selon trois optiques : la diversité, l’équité et l’inclusion; les objectifs opérationnels et la gestion judicieuse des ressources; et l’intégrité et l’éthique.</p>
                        <p><strong>[00:07:42 : Un texte indiquant : 1. Diversité, équité et inclusion apparaît à l'écran.]</strong></p>
                        <p>Les éléments suivants vous permettront de mener un processus juste et inclusif et d’embaucher des personnes qualifiées pour former un effectif diversifié qui est représentatif de la population canadienne et répond à vos besoins organisationnels : </p>
                        <ul>
                          <li>tenir compte des objectifs d’équité en matière d’emploi et adopter des pratiques inclusives;</li>
                          <li>veiller à ce que les processus d’embauche soient menés de bonne foi, à ce qu’ils soient exempts de tout parti pris et à ce qu’ils soient impartiaux et permettant ainsi de respecter le droit d’une personne d’obtenir des mesures d’adaptation;</li>
                          <li>établir des critères de mérite efficaces qui reflètent les exigences liées au poste ou l’unité de travail et tiennent compte des besoins de l’organisation, p. ex. la représentation des groupes en quête d’équité;</li>
                          <li>choisir un type de processus (nomination ou administratif, annoncé ou non annoncé, interne ou externe);</li>
                          <li>déterminer qui pourra présenter une demande en établissant la zone de sélection ou de recours;</li>
                          <li>repérer les préjugés inconscients et chercher à les atténuer (recrutement, évaluation et sélection);</li>
                          <li>évaluer de manière objective les qualifications de tous les candidats et faire ce qui suit :  
                            <ul>
                              <li>évaluer les candidats dans la langue officielle de leur choix, quel que soit l’emplacement associé aux exigences linguistiques du poste;</li>
                              <li>fournir des mesures d’adaptation en adoptant une approche proactive et adaptée aux besoins;</li>
                              <li>recueillir suffisamment de renseignements à propos de chaque personne pour prendre une décision juste;</li>
                              <li>utiliser une variété de sources et d’outils d’évaluation complémentaires pour augmenter la validité et la fiabilité de l’évaluation;</li>
                              <li>appliquer à chaque personne les mêmes normes de qualification – celles qui ont été établies pour le processus (c’est-à-dire [la] même définition ou les mêmes indicateurs) établies pour le processus;</li>
                              <li>veiller à la qualité de l’évaluation en consultant des experts et des intervenants à propos du processus de sélection ainsi que de l’élaboration d’outils et de l’utilisation de ceux-ci dans l’évaluation des candidats;</li>
                            </ul>
                          </li>
                          <li>veiller à ce que les nominations soient fondées sur le mérite et à ce qu’elles respectent l’ordre de priorité. Il faudra notamment faire ce qui suit :  
                            <ul>
                              <li>prendre en considération les dispositions relatives aux droits de priorité, la préférence à accorder aux anciens combattants, aux citoyens canadiens et aux résidents permanents ainsi que les obligations énoncées dans les accords de revendication (comme l’Accord sur les revendications territoriales du Nunavut et l’Accord de libre-échange canadien).</li>
                            </ul>
                          </li>
                        </ul>
                        <p>Pour plus de renseignements, consultez l’Instrument de délégation et de responsabilisation en matière de nomination et la Politique de nomination.</p>
                        <p><strong>[00:10:27 : Un texte indiquant : 2. Objectifs opérationnels et la gestion judicieuse des ressources apparaît à l'écran.]</strong></p>
                        <p>Afin de mener un processus efficace permettant d’atteindre les objectifs opérationnels au moyen d’une gestion judicieuse des ressources, pensez à : </p>
                        <ul>
                          <li>garder en tête les objectifs de dotation tout au long du processus;</li>
                          <li>planifier et préparer le processus de dotation avant de le lancer;</li>
                          <li>tirer parti de la souplesse qu’offre la <em>Loi sur l’emploi dans la fonction publique</em> et prendre des mesures d’adaptation raisonnables à mesure que les circonstances évoluent;</li>
                          <li>promouvoir la mobilisation et le maintien en poste en faisant preuve de transparence auprès des postulants et des employés.</li>
                        </ul>
                        <p><strong>[00:11:04 : Un texte indiquant : 3. L’intégrité et l’éthique apparaît à l'écran.]</strong></p>
                        <p>Les cinq étapes suivantes permettent de mener un processus fondé sur l’intégrité et l’éthique : </p>
                        <ul>
                          <li>satisfaire aux exigences du cadre de dotation (de la fonction publique et du ministère) et faire preuve de souplesse en proposant des solutions et des mesures d’adaptation pour les outils et approches d’évaluation afin d’assurer une évaluation juste des qualifications de tous les candidats;</li>
                          <li>utiliser l’un des assouplissements prévus dans la <em>Loi sur l’emploi dans la fonction publique</em>, par exemple :  
                            <ul>
                              <li>cibler exclusivement les membres des groupes visés par l’équité en matière d’emploi ou élargir la zone de sélection pour inclure ces groupes;</li>
                              <li>définir un besoin organisationnel afin de sélectionner des personnes ayant déclaré leur appartenance à un groupe désigné pour lequel il existe ou pourrait bientôt exister une sous-représentation; dans un processus non annoncé, nommer une personne appartenant à l’un des groupes désignés;</li>
                            </ul>
                          </li>
                          <li>prendre des décisions raisonnables fondées sur des renseignements valides et fiables par rapport à chaque personne et dans le cadre de chaque processus;</li>
                          <li>mettre l’accent sur le mérite plutôt que sur les affinités ou d’autres sources de préjugés;</li>
                          <li>être capable d’expliquer clairement les décisions et consigner les renseignements sur la nomination, y compris vos décisions et les facteurs que vous avez pris en considération.</li>
                        </ul>
                        <p><strong>[00:12:17 : Une fenêtre contextuelle Références : Dotation d’un poste apparaît à l'écran.]</strong></p>
                        <p><strong>[00:12:20 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>6. Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris - dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses.</p>
                        <p>En dernier lieu, trouvez certaines ressources essentielles qui vous aideront à doter des postes de manière efficace, par exemple : </p>
                        <ul>
                          <li>le cadre de dotation de votre organisation;</li>
                          <li>le mandat de votre organisation (loi habilitante);</li>
                          <li>l’instrument de subdélégation de votre ministère;</li>
                          <li>les politiques de dotation, les directives de l’administrateur général et les pratiques de votre organisation;</li>
                          <li>vos conseillers en RH, que vous pouvez identifier, rencontrer et consulter avant de prendre des décisions.</li>
                        </ul>
                        <p>En tant que gestionnaire subdélégué, vous avez de nombreuses options. N’oubliez pas de consulter vos conseillers en RH.</p>
                        <p>Prenez le temps pour consulter les guides et les outils de la Commission de la fonction publique sur le Web de l’organisation. Ces outils visent à aider les gestionnaires qui mènent les processus de nomination.</p>
                        <p><strong>[00:13:20 : Une fenêtre contextuelle Dans la vraie vie apparaît à l'écran.]</strong></p>
                        <p><strong>[00:13:21 : Un titre apparaît à l'écran.]</strong></p>
                        <hr>

                        <h2>7. Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>
                        <p><strong>[00:13:26 : Texte indiquant l'instruction Répondez au quiz! apparaît à l’écran.]</strong></p>
                        <p><strong>[00:13:38 : Une fenêtre contextuelle Répondez au quiz apparaît à l’écran.]</strong></p>
                        <p><strong>[00:13:39 : Texte indiquant Vous avez complété cette section apparaît à l’écran.]</strong></p>
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
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('IntroductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <p>{{$t('IntroductionText')}}</p>
        <div v-if="$i18n.locale=='en'">
          <ul>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework.html" target="_blank">Public Service Commission’s Appointment Framework</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/appointment-policy.html#:~:text=The%20Public%20Service%20Commission%E2%80%99s%20%28PSC%29%20Appointment%20Policy%20applies,based%20on%20merit%20and%20free%20from%20political%20influence." target="_blank">Public Service Commission’s Appointment Policy</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-eng.aspx?id=32621" target="_blank">Policy on People Management</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/e-5.401/" target="_blank">Employment Equity Act</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/A-0.6/" target="_blank">Accessible Canada Act</a></li>
            <li><a href="https://lois-laws.justice.gc.ca/eng/acts/P-33.01/FullText.html" target="_blank">Public Service Employment Act</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/f-11/" target="_blank">Financial Administration Act</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/delegation-overview/appointment-delegation-accountability-instrument.html" target="_blank">Appointment Delegation and Accountability Instrument</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework.html" target="_blank">Public Service Commission – Guides and Tools</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=13616" target="_blank">Treasury Board’s policy framework</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=25049" target="_blank">Values and Ethics Code for the Public Sector</a></li>
            <li><a href="https://www.csps-efpc.gc.ca/video/inclusive-hiring-five-tips-eng.aspx" target="_blank">Five Tips on Diversifying your Workforce</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32635&section=html" target="_blank">Directive on Employment Equity, Diversity and Inclusion</a></li>
            <li><a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.canada.ca%2Fen%2Fpublic-service-commission%2Fservices%2Fappointment-framework%2Ffederal-public-service-inclusive-appointment-lens.html&data=04%7C01%7CEECCC-CCPEE%40tbs-sct.gc.ca%7C40b8cdede4a649ec9bf208d8fb6874ad%7C6397df10459540479c4f03311282152b%7C0%7C0%7C637535773344495625%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=bv1DmMxZ82FcXqUldLAlWls7Zjg5YiKrVpC04RJrfwQ%3D&reserved=0" target="_blank">Federal Public Service Inclusive Appointment Lens</a></li>
            <li><a href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.canada.ca%2Fen%2Fpublic-service-commission%2Fservices%2Fappointment-framework%2Fguides-tools-appointment-framework%2Fqa-staffing-options-support-ee-di-under-psac.html&data=04%7C01%7CEECCC-CCPEE%40tbs-sct.gc.ca%7C40b8cdede4a649ec9bf208d8fb6874ad%7C6397df10459540479c4f03311282152b%7C0%7C0%7C637535773344495625%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=fYuLVkLpS%2BAuZUPoHNdXpkhvXYL8pJVW8gDFVnx7Apw%3D&reserved=0" target="_blank">Staffing options to support employment equity, and diversity and inclusion, under the Public Service Employment Act – Questions and answers</a></li>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/appointment-policy.html#toc5" target="_blank">Appointment Policy</a></li>
          </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <ul>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination.html" target="_blank">Cadre de nomination de la Commission de la fonction publique</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/lignes-directrices-matiere-nomination.html#:~:text=mati%C3%A8re%20de%20renseignements-,Application,fond%C3%A9es%20sur%20le%20m%C3%A9rite%20et%20ind%C3%A9pendantes%20de%20toute%20influence%20politique.,-R%C3%A9sultats%20attendus" target="_blank">Politique de nomination de la Commission de la fonction publique</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-fra.aspx?id=32621" target="_blank">Politique sur la gestion des personnes</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/" target="_blank">Loi sur l’équité en matière d’emploi</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/a-0.6/" target="_blank">Loi canadienne sur l’accessibilité</a></li>
            <li><a href="https://lois-laws.justice.gc.ca/fra/lois/p-33.01/TexteComplet.html" target="_blank">Loi sur l’emploi dans la fonction publique</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/f-11/" target="_blank">Loi sur la gestion des finances publiques</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/delegation/instrument-delegation-responsabilisation.html" target="_blank">Instrument de délégation et de responsabilisation en matière de nomination</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils.html" target="_blank">Commission de la fonction publique – Guides et outils</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=13616" target="_blank">Cadre principal des politiques du Conseil du Trésor</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=25049" target="_blank">Code de valeurs et d’éthique du secteur public</a></li>
            <li><a href="https://www.csps-efpc.gc.ca/video/inclusive-hiring-five-tips-fra.aspx" target="_blank">Cinq conseils pour diversifier votre effectif</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32635&section=html" target="_blank">Directive sur l’équité en matière d’emploi, la diversité et l’inclusion</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/optique-nomination-inclusive-fonction-publique-federale.html" target="_blank">Optique de nomination inclusive dans la fonction publique fédérale</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils/faq-options-dotation-appuyer-eme-di-vertu-lefp.html" target="_blank">Options de dotation pour appuyer l’équité en matière d’emploi, la diversité et l’inclusion en vertu de la Loi sur l’emploi dans la fonction publique – Foire aux questions</a></li>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/lignes-directrices-matiere-nomination.html#toc5" target="_blank">Politique de nomination</a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingNeeds" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('StaffingNeedsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <staffingNeeds />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingObligations" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('StaffingObligationsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Watch this video, which provides an overview of hiring decisions in the public service</p>
          <p><a href="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_a99j37rq/flavorId/0_43vicyi5/name/a.mp4" target="_blank">Who Makes Hiring Decisions in the Public Service?</a></p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Regardez la vidéo suivante, qui donne un aperçu des décisions d’embauche dans la fonction publique. </p>
          <p><a href="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u97ukui1/flavorId/0_0we3ci6t/name/a.mp4" target="_blank">Qui prend des décisions d’embauche dans la fonction publique? </a></p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InclusiveHiring" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('InclusiveHiringTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <inclusiveHiring />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="StaffingPosition" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('StaffingPositionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>To ensure that you understand certain terms in this section, have a look at the following definitions:</p>
          <p><b>Bias</b></p>
          <p>A preconceived and often erroneous opinion, idea or feeling formed without knowledge, thought or reason, either favourable or unfavourable, which prevents objective consideration of a situation, person or issue.</p>
          <p><b>Unconscious bias</b></p>
          <p>Subtle, unintentional thoughts, ideas and beliefs.</p>
          <p><b>Discrimination</b></p>
          <p>The behavioural manifestation of a conscious or unconscious bias or prejudice</p>
          <p><b>Appointment based on merit</b></p>
          <p>An appointment is made on the basis of merit when the hiring manager performs an assessment process and is satisfied that the candidate meets each of the essential qualifications and other merit criteria for the work to be performed.</p>
          <p><b>Area of selection</b></p>
          <p>An area of selection establishes who is eligible for an appointment process. The area can be geographic, organizational, occupational or can identify persons belonging to any of the designated employment equity groups identified in the <a href="https://laws-lois.justice.gc.ca/eng/acts/E-5.401" target="_blank" alt="Link to the web page">Employment Equity Act</a>.</p>
          <p><b>Priority entitlement</b></p>
          <p>Persons entitled to a priority for appointment are appointed to vacant positions ahead of all others if they meet the essential qualifications.</p>
          <p><b>Duty to accommodate</b></p>
          <p>The <a href="https://laws-lois.justice.gc.ca/eng/acts/h-6/" target="_blank">Canadian Human Rights Act</a> requires employers and service providers to accommodate people’s needs when those needs relate to one of the 11 grounds of discrimination.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Lisez les définitions suivantes pour vous assurer de bien comprendre les termes utilisés dans cette section : </p>
          <p><b>Préjugé </b></p>
          <p>Opinion, idée ou sentiment préconçu et souvent erroné, favorable ou défavorable, ne découlant d’aucune connaissance, réflexion ou raison, qui empêche l’examen objectif d’une situation, d’une personne ou d’une question. </p>
          <p><b>Préjugé inconscient </b></p>
          <p>Pensées, idées et croyances subtiles et involontaires. </p>
          <p><b>Discrimination </b></p>
          <p>Manifestation comportementale d’un préjugé conscient ou inconscient, ou d’un préjudice.</p>
          <p><b>Nomination fondée sur le mérite </b></p>
          <p>Une nomination est faite selon le mérite lorsqu’un gestionnaire d’embauche mène un processus d’évaluation et est convaincu que la personne choisie possède toutes les qualifications essentielles et satisfait aux autres critères de mérite établis pour le travail à accomplir.</p>
          <p><b>Zone de sélection </b></p>
          <p>La zone de sélection définit qui peut participer au processus de nomination. La zone peut être géographique, organisationnelle ou professionnelle, ou encore cibler les personnes appartenant à un des groupes visés par l’équité en matière d’emploi définis dans la <a href="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/" target="_blank" alt="Lien vers la page web">Loi sur l’équité en matière d’emploi</a>.</p>
          <p><b>Droit de priorité </b></p>
          <p>Les personnes bénéficiant d’un droit de priorité sont nommées aux postes vacants avant tous les autres candidats si elles possèdent les qualifications essentielles. </p>
          <p><b>Obligation de prendre des mesures d’adaptation </b></p>
          <p>La <a href="https://laws-lois.justice.gc.ca/fra/lois/h-6/" target="_blank">Loi canadienne sur les droits de la personne</a> oblige les employeurs et les fournisseurs de services à prendre des mesures d’adaptation pour répondre aux besoins des personnes, quand ces besoins sont liés à un des 11 motifs de discrimination. </p>
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
        <div v-if="$i18n.locale=='fr'">
          <p><b>Pour approfondir les connaissances nécessaires à l’exercice de vos fonctions de dotation, suivez le cours supplémentaire suivant : </b></p>
          <ul><li>Les fondements de la dotation dans la fonction publique.</li></ul>
          <p>Ce cours, qui examine de manière approfondie la dotation, vise à vous aider à accomplir vos fonctions dans ce domaine.</p>
        </div>
        <div v-if="$i18n.locale=='en'">
          <p><b>To supplement the knowledge required to perform your staffing functions, be sure to complete this additional course:</b></p>
          <ul><li>Basics of Staffing in the Public Service</li></ul>
          <p>This course will provide a more in-depth look at staffing to help you perform your duties in this area.</p>
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
      <microlearning path="functionPart2"  imagePath="FunctionPart2.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('DiversityInclusion')" type="video" />
      <microlearning youAreHere path="functionPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="FunctionPart3.svg" :text="$t('Staffing')" type="video" />
      <microlearning path="functionKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="25" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import functionLinks from '~/components/spend_links'
import externalLink from "~/components/externalLink"
import staffingNeeds from '~/components/slides/function/functionPart3StaffingNeeds'
import inclusiveHiring from '~/components/slides/function/functionPart3InclusiveHiring'
import Quiz from '~/components/slides/function/functionPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction","StaffingNeeds","StaffingObligations","InclusiveHiring","StaffingPosition","InRealLife","Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    functionLinks,
    externalLink,
    staffingNeeds,
    inclusiveHiring,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
      this.$store.commit('currentPlaying/setSpendPart3_player',e)
    }
  }
}

</script>
<style scoped>
.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
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

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "IntroductionTitle": "References: External Links",
  "IntroductionText": "Here is a list of resources referred to in this section.",
  "StaffingNeedsTitle":"Activity:  Identifying Your Staffing Needs",
  "StaffingObligationsTitle": "References: Staffing Obligations",
  "InclusiveHiringTitle": "Activity: Inclusive Hiring",
  "StaffingPositionTitle": "References: Staffing Your Position",
  "IRLTitle": "In Real Life",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "FUNCTION"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "IntroductionTitle": "Références : Liens externes",
  "IntroductionText": "Voici une liste des ressources auxquelles on fait référence dans cette section.",
  "StaffingNeedsTitle":"Activité : Détermination de vos besoins en matière de dotation ",
  "StaffingObligationsTitle": "Références : Obligations en matière de dotation ",
  "InclusiveHiringTitle": "Activité – Embauche inclusive",
  "StaffingPositionTitle": "Références : Dotation d’un poste",
  "IRLTitle":"Dans la vraie vie",
  "DataComparisonTitle":"Activité : Comparaison des données",
  "ContinuousMonitoringTitle":"Activité : Suivi continu",
  "YearEndProceduresTitle":"Activité : Procédures de fin d’année",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "FONCTION"
  }
  }
</i18n>
