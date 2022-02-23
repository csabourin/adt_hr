<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder style="display: inline-block">
      <fileIcon :title="$t('fileFolder')" width="44" />
    </a>
    <b-modal id="fileFolder" okOnly size="xl">
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          {{$t('fileFolder')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-1 class="fileHead" variant="light"><img :alt="$t('filesAlt')" src="~/assets/FilesIcon.svg" width="50" height="50"> {{$t('files')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-1" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col cols="12">
                    <h4>{{$t('plan')}}</h4>
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('authoritiesHeadDeputy')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '118' : '124'" name="authoritiesHeadDeputy" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('authoritiesPSC')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '15.9' : '17,5'" name="authoritiesPSC" />
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('psOrganizations')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '121' : '114'" name="psOrganizations" />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <h4>{{$t('report')}}</h4>
                  </b-col>
                  <b-col cols="6" md="4" lg="2" class="text-center">
                    <download :texts="$t('ourRoles')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '107' : '111'" name="ourRoles" />
                  </b-col>
                </b-row>
                <!-- <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" /> -->
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-2 variant="light"><img :alt="$t('linksAlt')" src="~/assets/LinksIcon.svg" width="50" height="50"> {{$t('links')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-2" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <planLinks />
                <spendLinks />
                <reportLinks />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img :alt="$t('glossaryAlt')" src="~/assets/GlossaryIcon.svg" width="50" height="50"> {{$t('glossary')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <dl>
                    <dt>apparent conflict of interest (conflit d’intérêts apparent)</dt>
                    <dd>A situation that could be perceived as a conflict of interest by a reasonable observer, whether or not it is the case.</dd>
                  </dl>
                  <dl>
                    <dt>barriers (obstacles)</dt>
                    <dd>Include physical, architectural, technological or attitudinal obstacles, policies, practices, systems, or procedures that exclude or hinder the full and equal participation of persons protected from discrimination by the <em>Canadian Human Rights Act</em>, in employment.</dd>
                  </dl>
                  <dl>
                    <dt>candidate (candidat(e))</dt>
                    <dd>For the purposes of the <em>Directive on the Duty to Accommodate</em>, a person who has applied for a position for which a bona fide occupational requirement has been established.</dd>
                  </dl>
                  <dl>
                    <dt>casual worker (travailleur occasionnel)</dt>
                    <dd>A person who is appointed pursuant to subsection 50(1) of the <em>Public Service Employment Act</em>.</dd>
                  </dl>
                  <dl>
                    <dt>classification conversion (conversion en matière de classification)</dt>
                    <dd>A change in the method of establishing the relative value of work for an occupational group or subgroup.</dd>
                  </dl>
                  <dl>
                    <dt>classification decision (décision de classification)</dt>
                    <dd>A decision made by the deputy head, a senior official designated by the deputy head for classification grievances purposes, or an accredited person exercising classification authority, which establishes or confirms the occupational group, subgroup (if applicable), level, or ratings assigned to a job.</dd>
                  </dl>
                  <dl>
                    <dt>classification grievance (grief de classification)</dt>
                    <dd>A budget made available for a particular purpose; for example, salary, operating, and capital.</dd>
                  </dl>
                  <dl>
                    <dt>conflict of interest (conflit d’intérêt)</dt>
                    <dd>A situation, whether real, apparent or potential, in which the person employed has private interests that could influence the performance of their official duties and responsibilities or in which the person employed uses their office for personal gain.</dd>
                  </dl>
                  <dl>
                    <dt>designated groups (groupes désignés)</dt>
                    <dd>Has the same meaning as in section 3 of the Employment Equity Act: means women, Aboriginal peoples, persons with disabilities and members of visible minorities.</dd>
                  </dl>
                  <dl>
                    <dt>diversity (diversité)</dt>
                    <dd>A workforce that comprises individuals who have an array of identities, abilities, backgrounds, cultures, skills, perspectives, and experiences that are representative of Canada’s current and evolving population. This includes but is not limited to differences in ethnicity or race, culture, religion, disability, sexual orientation, gender identity, age, educational background, region, and marital or parental status.</dd>
                  </dl>
                  <dl>
                    <dt>emergency (urgence)</dt>
                    <dd>An abnormal event or situation that requires prompt action, beyond normal procedures, in order to limit damage to persons, property, or the environment.</dd>
                  </dl>
                  <dl>
                    <dt>executive (cadre supérieur)</dt>
                    <dd>A person appointed or deployed to a position allocated to the Executive Group (EX01 to EX05). Unless specifically excluded in the application of the associated directives, standards, or mandatory procedures, this includes persons employed in the following excluded or unrepresented positions:
                      <ol>
                        <li>Defence Scientific Service (DS) Group, levels 7A, 7B, and 8;</li>
                        <li>Medical Officer (MDMOF) Group, levels 4 and 5; and</li>
                        <li>Medical Specialist (MDMSP) Group, level 3; or</li>
                        <li>Law Management (LC) Group, levels 1 to 4.</li>
                      </ol>
                    </dd>
                  </dl>
                  <dl>
                    <dt>flexible work arrangements (régimes de travail souples)</dt>
                    <dd>Includes measures that allow for flexibility in scheduling hours worked and in the place of work, including but not limited to, telework and compressed workweeks.</dd>
                  </dl>
                  <dl>
                    <dt>harassment and violence (harcèlement et violence)</dt>
                    <dd>Has the same meaning as subsection 122(1) of the <em>Canada Labour Code</em>, Part II: means any action, conduct or comment, including of a sexual nature, that can reasonably be expected to cause offence, humiliation or other physical or psychological injury or illness to an employee, including any prescribed action, conduct or comment.</dd>
                  </dl>
                  <dl>
                    <dt>inclusion (inclusion)</dt>
                    <dd>Refers to creating a workplace that is fair, equitable, supportive, welcoming and respectful of all. It recognizes, values and leverages differences in identities, abilities, backgrounds, cultures, skills, experiences, and perspectives that support and reinforce Canada’s evolving human rights framework.</dd>
                  </dl>
                  <dl>
                    <dt>occupational group (groupe professionnel)</dt>
                    <dd>A series of jobs or occupations related in broad terms by the nature of the functions performed.</dd>
                  </dl>
                  <dl>
                    <dt>occupational group structure (structure des groupes professionnels)</dt>
                    <dd>The suite of occupational groups established by the Treasury Board within the core public administration.</dd>
                  </dl>
                  <dl>
                    <dt>organizational chart (organigramme)</dt>
                    <dd>A depiction of the hierarchical arrangement of work and lines of authority.</dd>
                  </dl>
                  <dl>
                    <dt>people management (gestion des personnes)</dt>
                    <dd>Any of the powers or functions in relation to human resources management, including organization and job classification, collective bargaining, terms and conditions of employment, labour relations, official languages, employment equity, values and ethics, performance management, total compensation, workplace harassment or violence, and employment that the employer is authorized to exercise under the <em>Financial Administration Act</em>, <em>Employment Equity Act</em>, <em>Public Service Employment Act</em>, or <em>Federal Public Sector Labour Relations Act</em>.</dd>
                  </dl>
                  <dl>
                    <dt>position (poste)</dt>
                    <dd>A specific set of duties and responsibilities outlined in a job description, to be performed by one individual in a specific organizational context.</dd>
                  </dl>
                  <dl>
                    <dt>potential conflict of interest (conflit d’intérèts potentiel)</dt>
                    <dd>A conflict of interest situation that could reasonably be foreseen to happen in the future.</dd>
                  </dl>
                  <dl>
                    <dt>real conflict of interest (conflit d’intérêt réel)</dt>
                    <dd>A conflict of interest situation that exists at the present time.</dd>
                  </dl>
                  <dl>
                    <dt>relevant collective agreement (convention collective pertinente)</dt>
                    <dd>The collective agreement for the bargaining unit to which the person is assigned or would be assigned if the person’s position was represented or not excluded.</dd>
                  </dl>
                  <dl>
                    <dt>standardized job description (description d’emploi normalisée)</dt>
                    <dd>A document that describes a job applied to more than one position where all positions are classified at the same occupational group and level.</dd>
                  </dl>
                  <dl>
                    <dt>substantive position (poste de titularisation)</dt>
                    <dd>A position to or from which a person has been appointed or deployed in accordance with the <em>Public Service Employment Act</em>, other than an acting appointment.</dd>
                  </dl>
                  <dl>
                    <dt>term employee (fonctionnaire nommé pour une période déterminée)</dt>
                    <dd>A person appointed for a specified period in accordance with subsection 58(1) of the <em>Public Service Employment Act</em>.</dd>
                  </dl>
                  <dl>
                    <dt>workforce (effectif)</dt>
                    <dd>Comprises the persons employed in the core public administration regardless their status, tenure, or bargaining agent affiliation, other than persons appointed by the Governor in Council, members of the Canadian Armed Forces, or members of the RCMP.</dd>
                  </dl>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <dl>
                    <dt>cadre supérieur (executive)</dt>
                    <dd>Personne nommée ou mutée à un poste du groupe de la direction (de EX01 à EX05). Sauf exclusion explicite dans l’application des directives, normes ou procédures obligatoires associées, renvoie aux personnes employées dans les postes cidessous, exclus ou non représentés : 
                      <ol>
                        <li>le groupe Services scientifiques de la défense (DS), niveaux 7A, 7B et 8;</li>
                        <li>le sousgroupe des médecins fonctionnaires (MDMOF), niveaux 4 et 5;</li>
                        <li>le sousgroupe des médecins spécialistes (MDMSP), niveau 3;</li>
                        <li>le groupe Gestion du droit (LC), niveaux 1 à 4.</li>
                      </ol>
                    </dd>
                  </dl>
                  <dl>
                    <dt>candidat (candidate)</dt>
                    <dd>Dans le contexte de la <em>Directive sur l’obligation de prendre des mesures d’adaptation</em>, personne qui a posé sa candidature à un poste pour lequel une exigence professionnelle justifiée a été établie.</dd>
                  </dl>
                  <dl>
                    <dt>conflit d’intérêts (conflict of interest)</dt>
                    <dd>Situation, qu’elle soit réelle, apparente ou potentielle, dans laquelle la personne employée a des intérêts privés qui pourraient influer sur l’exécution de ses fonctions et de ses responsabilités officielles ou par laquelle la personne employée utilise ses fonctions officielles à des fins personnelles.</dd>
                  </dl>
                  <dl>
                    <dt>conflit d’intérêts apparent (apparent conflict of interest)</dt>
                    <dd>Situation qui pourrait être perçue comme un conflit d’intérêts par un observateur raisonnable, que ce soit ou non le cas.</dd>
                  </dl>
                  <dl>
                    <dt>conflit d’intérêts potentiel (potential conflict of interest)</dt>
                    <dd>Situation de conflit d’intérêts raisonnablement prévisible dans l’avenir.</dd>
                  </dl>
                  <dl>
                    <dt>conflit d’intérêt réel (real conflict of interest)</dt>
                    <dd>Situation de conflit d’intérêts qui existe actuellement.</dd>
                  </dl>
                  <dl>
                    <dt>convention collective pertinente (relevant collective agreement)</dt>
                    <dd>Convention collective de l’unité de négociation dans laquelle le poste de la personne est classifié ou serait classifié s’il était représenté ou non exclu.</dd>
                  </dl>
                  <dl>
                    <dt>conversion en matière de classification (classification conversion)</dt>
                    <dd>Changement dans la méthode d’établissement de la valeur relative du travail pour un groupe ou un sous-groupe professionnel.</dd>
                  </dl>
                  <dl>
                    <dt>description d’emploi normalisé (standardized job description)</dt>
                    <dd>Document qui décrit un travail qui s’applique à plus d’un poste, où tous les postes sont classifiés au même niveau et dans le même groupe professionnel.</dd>
                  </dl>
                  <dl>
                    <dt>décision de classification (classification decision)</dt>
                    <dd>Décision prise par l’administrateur général, par un haut fonctionnaire désigné par l’administrateur général à des fins de griefs de classification ou par une personne accréditée exerçant un pouvoir en matière de classification, qui établit ou confirme le groupe professionnel, le sous-groupe (le cas échéant), le niveau ou les cotes attribués à un travail.</dd>
                  </dl>
                  <dl>
                    <dt>diversité (diversity)</dt>
                    <dd>Effectif ayant un éventail d’identités, de capacités, d’origines, de cultures, de compétences, de points de vue et d’expériences qui sont représentatifs de la population actuelle et future du Canada. Ces caractéristiques comprennent, sans s’y limiter, les différences d’origine ethnique, de race, de culture, de religion, de handicap, d’orientation sexuelle, d’identité de genre, d’âge, de scolarité, de région et d’état matrimonial ou parental.</dd>
                  </dl>
                  <dl>
                    <dt>effectif (workforce)</dt>
                    <dd>Composition des personnes employées à l’administration publique centrale indépendamment de leur statut, de leur période d’emploi ou de leur affiliation à un agent négociateur, autres que celles nommées par le gouverneur en conseil, les membres des Forces armées canadiennes ou les membres de la Gendarmerie royale du Canada.</dd>
                  </dl>
                  <dl>
                    <dt>employé nommé pour une période déterminée (term employee)</dt>
                    <dd>Personne nommée pour une période précise conformément au paragraphe 58(1) de la <em>Loi sur l’emploi dans la fonction publique</em>.</dd>
                  </dl>
                  <dl>
                    <dt>gestion des personnes (people management)</dt>
                    <dd>Toute autorité ou fonction liée à la gestion des ressources humaines, y compris l’organisation et la classification des postes, la négociation collective, les conditions d’emploi, les relations de travail, les langues officielles, l’équité en matière d’emploi, les valeurs et l’éthique, la gestion du rendement, la rémunération totale, le harcèlement ou la violence en milieu de travail, et l’emploi que l’employeur est autorisé à exercer en vertu de la <em>Loi sur la gestion des finances publiques</em>, de la <em>Loi sur l’équité en matière d’emploi</em>, de la <em>Loi sur l’emploi dans la fonction publique</em> et de la <em>Loi sur les relations de travail dans le secteur public fédéral</em>.</dd>
                  </dl>
                  <dl>
                    <dt>grief de classification (classification grievance)</dt>
                    <dd>Plainte écrite par un employé à l’égard de la classification (c’est-à-dire, le groupe professionnel, le sous-groupe [le cas échéant], le niveau ou les cotes) du travail attribué par le gestionnaire responsable au poste occupé par le plaignant et décrit dans la description d’emploi, à l’exception des plaintes liées au contenu du travail ou à la date d’entrée en vigueur de la description d’emploi.</dd>
                  </dl>
                  <dl>
                    <dt>groupe professionnel (occupational group)</dt>
                    <dd>Ensemble de professions ou d’emplois liés de façon générale par la nature des fonctions accomplies.</dd>
                  </dl>
                  <dl>
                    <dt>groupes désignés (designated groups)</dt>
                    <dd>A la même signification qu’à l’article 3 de la <em>Loi sur l’équité en matière d’emploi</em> : Les femmes, les autochtones, les personnes handicapées et les personnes qui font partie des minorités visibles.</dd>
                  </dl>
                  <dl>
                    <dt>harcèlement et violence (harassment and violence)</dt>
                    <dd>A la même signification qu’au paragraphe 122(1) du <em>Code canadien du travail</em>, partie II : tout acte, comportement ou propos, notamment de nature sexuelle, qui pourrait vraisemblablement offenser ou humilier un employé ou lui causer toute autre blessure ou maladie, physique ou psychologique, y compris tout acte, comportement ou propos réglementaire.</dd>
                  </dl>
                  <dl>
                    <dt>inclusion (inclusion)</dt>
                    <dd>Création d’un milieu de travail juste, équitable, positif, accueillant et respectueux pour tous. L’inclusion reconnaît, valorise et met à profit les différences relatives aux identités, aux capacités, aux origines, aux cultures, aux compétences, aux expériences et aux points de vue qui appuient et renforcent l’évolution du cadre des droits de la personne du Canada.</dd>
                  </dl>
                  <dl>
                    <dt>obstacles (barriers)</dt>
                    <dd>Obstacles, physiques, architecturaux, technologiques ou comportementaux, politiques, pratiques, systèmes ou procédures, entre autres, qui excluent ou entravent la participation entière et égale à l’emploi des personnes protégées contre la discrimination par la <em>Loi canadienne sur les droits de la personne</em>.</dd>
                  </dl>
                  <dl>
                    <dt>organigramme (organizational chart)</dt>
                    <dd>Représentation de l’organisation hiérarchique du travail et des liens hiérarchiques.</dd>
                  </dl>
                  <dl>
                    <dt>poste (position)</dt>
                    <dd>Ensemble précis de fonctions et de responsabilités décrites dans une description d’emploi, qui doit être exécuté par une seule personne dans un contexte organisationnel précis.</dd>
                  </dl>
                  <dl>
                    <dt>poste de titularisation (substantive position)</dt>
                    <dd>Poste auquel une personne a été nommée ou duquel elle est mutée conformément à la <em>Loi sur l’emploi dans la fonction publique</em>, autre qu’une nomination intérimaire.</dd>
                  </dl>
                  <dl>
                    <dt>régimes de travail souples (flexible work arrangements)</dt>
                    <dd>Comprend des mesures permettant une certaine souplesse dans l’établissement de l’horaire de travail et du nombre d’heures passées sur le lieu de travail, y compris, sans toutefois s’y limiter, le télétravail et les semaines de travail comprimées.</dd>
                  </dl>
                  <dl>
                    <dt>structure des groupes professionnels (occupational group structure)</dt>
                    <dd>Ensemble de groupes professionnels établis par le Conseil du Trésor au sein de l’administration publique centrale.</dd>
                  </dl>
                  <dl>
                    <dt>travailleur temporaire (casual worker)</dt>
                    <dd>Personne qui est nommée en vertu du paragraphe 50 (1) de la <em>Loi sur l’emploi dans la fonction publique</em>.</dd>
                  </dl>
                  <dl>
                    <dt>urgence (emergency)</dt>
                    <dd>Situation ou événement anormal exigeant la prise de mesures immédiates, outre les procédures normales, pour limiter les dommages causés aux personnes, aux biens ou à l’environnement.</dd>
                  </dl>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-4 variant="light"><img :alt="$t('helpAlt')" src="~/assets/HelpIcon.svg" width="50" height="50"> {{$t('help')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-4" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <p>This course is organized into three sections: <strong>Foundation</strong>, <strong>Function and Process</strong> and <strong>Core Values and Standards</strong>.</p>
                  <p>You can choose where you want to start the course and how deep you wish to go into the content. Here are a few tips to help orient you.</p>
                  <ul>
                    <li>You can navigate through the sections of the course by using the <strong>menu icon</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">navigation menu icon example</span></span>) in the top left corner of the screen or by using the &ldquo;tiles&rdquo; found on each screen.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/en/nav-example.PNG" alt="&ldquo;tiles&rdquo; example" />
                  <ul>
                    <li>Select the <strong>key messages</strong> to review highlights, for a refresher on each topic.</li>
                    <li>If you’re learning the content for the first time, take the time to <strong>go through each section</strong>. Do the <strong>in-depth learning activities</strong> and review the tools and resources. Each section should take you around 10 to 30 minutes to complete. There are visual cues to show your progress as you move through the course.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/en/progression-example.PNG" alt="visual cues for progression example" />
                  <ul>
                    <li>Select the <strong>video icon</strong> (&nbsp;<img src="~/assets/VideoIcon.svg" alt="video icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to view the videos in each section, the <strong>pencil icon</strong> (&nbsp;<img src="~/assets/ActivityIcon.svg" alt="pencil icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to complete an activity, the <strong>letter i icon</strong> (&nbsp;<img src="~/assets/InfoIcon.svg" alt="letter i icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) for more information, the <strong>document icon</strong> (&nbsp;<img src="~/assets/ReferenceIcon.svg" alt="document icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) for reference materials, the <strong>checkmark icon</strong> (&nbsp;<img src="~/assets/QuizIcon.svg" alt="checkmark icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to jump to the quiz and the <strong>arrow icon</strong> (&nbsp;<img src="~/assets/ContinueIcon.svg" alt="arrow icon example" style="display: inline; width: 30px; height: 30px;" />&nbsp;) to go to the next section.</li>
                    <li>You can jump to the <strong>test</strong> for each section at any time or complete the tests for the <strong>Foundation</strong>, <strong>Function and Process</strong> and <strong>Core Values and Standards</strong> sections in order as you finish each lesson. The passing grade is <strong>80% for each section</strong>. You can access course materials during the test and retake the test as many times as you need to. </li>
                    <li>Access the <strong>home</strong> screen at any time by selecting the (<homebutton :iconWidth="50" iconTitle="home icon example" style="position: relative; top: -5px; left: 0px;" />) icon.</li>
                    <li>Access tools and templates by selecting the <strong>toolbox icon</strong> (&nbsp;<fileIcon title="example of the tool box icon" width="40" />&nbsp;) in the top right corner of your screen.</li>
                  </ul>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <p>Ce cours est organisé en 3 sections : <strong>Éléments de base</strong>, <strong>Fonction et processus</strong> et <strong>Valeurs et normes fondamentales</strong>. </p>
                  <p>Vous pouvez choisir là où commencer le cours, et décider jusqu'à quel point approfondir le contenu. Voici quelques conseils pour vous orienter&nbsp;:</p>
                  <ul>
                    <li>Vous pouvez naviguer dans les sections du cours en utilisant l’icône du <strong>menu</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">exemple de l'icône du menu de navigation</span></span>) en haut à gauche de l'écran ou en utilisant les «&nbsp;tuiles&nbsp;» sur chaque écran.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/fr/nav-example.PNG" alt="exemple de «&nbsp;tuiles&nbsp;»" />
                  <ul>
                    <li>Choisissez les <strong>messages clés</strong> pour réviser les points saillants, comme rappel sur chaque sujet.</li>
                    <li>Si le contenu est nouveau pour vous, prenez le temps de <strong>parcourir chaque section</strong>. Faites <strong>les activités d'apprentissage en profondeur</strong> et examinez les outils et les ressources. Chaque section devrait vous prendre de 10 à 30 minutes. Des repères visuels s’affichent pour indiquer vos progrès au fur et à mesure que vous avancez dans le cours.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/fr/progression-example.PNG" alt="exemple des indices visuels pour la progression" />
                  <ul></ul>
                  <li>Choisissez l'<strong>icône de la vidéo</strong> (&nbsp;<img src="~/assets/VideoIcon.svg" alt="exemple de l'icône de la vidéo" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour visionner les vidéos de chaque section, l'<strong>icône du crayon</strong> (&nbsp;<img src="~/assets/ActivityIcon.svg" alt="exemple de l'icône du crayon" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour réaliser une activité, l’<strong>icône de la lettre i</strong> (&nbsp;<img src="~/assets/InfoIcon.svg" alt="exemple de l'icône de la lettre i" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour plus d’information, l’<strong>icône des documents</strong> (&nbsp;<img src="~/assets/ReferenceIcon.svg" alt="exemple de l'icône des documents" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour les matériels de référence, l’<strong>icône du crochet</strong> (&nbsp;<img src="~/assets/QuizIcon.svg" alt="exemple de l'icône du crochet" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour sauter au quiz et l’<strong>icône de la flèche</strong> (&nbsp;<img src="~/assets/ContinueIcon.svg" alt="exemple de l'icône de la flèche" style="display: inline; width: 30px; height: 30px;" />&nbsp;) pour continuer à la section suivante.</li>
                  <li>Passez au <strong>test</strong> pour chaque section de <strong>Éléments de base</strong>, <strong>Fonction et processus</strong> et <strong>Valeurs et normes fondamentales</strong> à n'importe quel moment ou faites-les dans l'ordre au fur et à mesure que vous terminez chaque leçon. La note de passage est de <strong>80&nbsp;% pour chacune de ces sections</strong>. Vous pouvez accéder au matériel didactique pendant le test et vous pouvez le reprendre autant de fois que vous le souhaitez.</li>
                  <li>Accédez à l'écran d'<strong>accueil</strong> à n’importe quel moment en choisissant l'icône (<homebutton :iconWidth="50" iconTitle="exemple de l'icône de l'accueil" style="position: relative; top: -5px; left: 0px;" />).</li>
                  <li>Accédez aux outils et aux modèles en choisissant l'icône de la <strong>boîte à outils</strong> (&nbsp;<fileIcon title="exemple de l'icône de la boîte à outils" width="40" />&nbsp;) en haut à droite de l’écran.</li>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
  import fileIcon from '~/components/icons/FileIcon'
  import download from "~/components/fileDownload"
  import HTMLJobaidLink from "~/components/HTMLJobaidLink"
  import planLinks from "~/components/plan_links"
  import spendLinks from "~/components/spend_links"
  import reportLinks from "~/components/report_links"
  import homebutton from "~/components/icons/home_icon"
  export default {
    components: {
      fileIcon,
      download,
      planLinks,
      spendLinks,
      reportLinks,
      homebutton,
      HTMLJobaidLink
    }
  }

</script>
<style type="text/css" scoped>
  .card-header a.btn-light {
    text-transform: uppercase;
    color: #4d4d4d;
    font-weight: 500;
    font-size: 28px;
    text-align: left
  }

  .hamburger-example {
    top: 0em;
    width: 50px;
    height: 26px;
    border: none;
    position: relative;
    background: linear-gradient(to bottom, #4D4D4D, #4D4D4D);
    background-size: 100% 20%;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-size 0.2s 0.25s ease;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
  }

  .hamburger-example:before,
  .hamburger-example:after {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #4D4D4D;
    content: '';
    transition: transform 0.3s ease;
  }

  .hamburger-example:before {
    top: 0;
    transform-origin: 91% 150%;
  }

  .hamburger-example:after {
    bottom: 0;
    transform-origin: 84% -50%;
  }

  header .btn:hover,
  header .btn:focus {
    text-decoration: none;
  }

</style>
