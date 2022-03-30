<template>
  <div>
    <h2 class="pageTitle" v-html="$t('OfficialLanguages')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_iz5t6fjp/flavorId/0_bntbbwu2/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_vcb9sqo1/flavorId/0_ubu3e765/name/a.mp4" chapters chapterFile="valuesPart3.vtt" ccFile="ValuesPart3_captions.vtt" posterFile="m8.jpg" :restartAt="parseInt(thatPoint)" toResume="setValuesPart3" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <p>The federal government’s official languages programs not only ensure that services are delivered to Canadians in both English and French. They also protect the official language rights of all public servants and promote the use of both official languages in the workplace in bilingual regions.</p>
                        <p>To accomplish this, the official languages programs ensure that organizations comply with the requirements of the <i>Official Languages Act</i> and the Treasury Board’s official languages policy instruments.</p>
                        <p>In this section you will learn to:</p>
                        <ul>
                          <li>Identify manager and employee responsibilities related to official languages</li>
                          <li>Recognize responsibilities regarding employee rights related to language of work</li>
                        </ul>
                        <p>This section should take you approximately 30 minutes to complete.</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Legal Framework</h2>
                        <p>Did you know that the <i>Official Languages Act</i> is based on the Constitution Act of 1867 and the Canadian Charter of Rights and Freedoms. The Act has a quasi-constitutional status that is recognized by the Canadian courts.</p>
                        <p>The Policy on Official Languages exists to facilitate the effective implementation of the <i>Official Languages Act</i> and its Official Languages (Communications with and Services to the Public) Regulations by government institutions.</p>
                        <p>The policy sets out the following expected results:</p>
                        <ul>
                          <li>The public can communicate with and receive services from federal government institutions in English or French</li>
                          <li>Employees can use the official language of their choice and work in an environment that is conducive to the use of both official languages</li>
                          <li>English-speaking and French-speaking Canadians have equal opportunities for employment and advancement in institutions, taking into account the institutions’ mandate, location, and the public they serve, and</li>
                          <li>Appropriate governance structures, mechanisms, and resources are in place to ensure coherent management of the institution’s official languages responsibilities</li>
                        </ul>
                        <p>[A Legal Framework activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Directive on Official Languages for Communications and Services</h2>
                        <p>Did you know that there is a difference between a bilingual region and a designated bilingual office. Some offices are designated bilingual for the purpose of communications and services to the public even if they are located in a unilingual region for language-of-work purposes. To identify such regions, consult the Burolis database.</p>
                        <p>Let’s look at how the requirements apply in bilingual or unilingual offices for language-of-work purposes.</p>
                        <p>The Directive on Official Languages for Communications and Services applies to all communications involving the public or public service employees.</p>
                        <p>Regarding communications with and services to the public, managers of designated bilingual offices are responsible for ensuring that:</p>
                        <ul>
                          <li>communications and services in their offices are actively offered in English and French</li>
                          <li>the necessary capacity is in place to communicate with and provide services to members of the public in both official languages</li>
                          <li>communications with and services to the public from a designated office are in both official languages or in the preferred language of the recipient, if known</li>
                          <li>when a designated office uses the media to communicate with the public (in circumstances other than those covered by section 11 of the Official Languages Act), communications to the public are in both official languages or in the official language of the media to reach its target audience</li>
                        </ul>
                        <p>The managerial responsibilities linked to your institution’s obligations regarding communications with public service employees can vary depending on whether your office is located in a unilingual region or a bilingual region.</p>
                        <p>To find out whether your organization is located in a bilingual region, you can refer to the List of Bilingual Regions of Canada for Language-of-Work Purposes.</p>
                        <p>[A Regions designated bilingual for language-of-work purposes activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Managers’ Official Languages Responsibilities for People Management</h2>
                        <p>The Directive on Official Languages for People Management supports the Policy on Official Languages by identifying requirements related to:</p>
                        <ul>
                          <li>the linguistic identification of a position</li>
                          <li>the staffing of bilingual positions, and</li>
                          <li>the equitable participation of English-speaking and French-speaking Canadians in federal institutions</li>
                        </ul>
                        <p>In bilingual regions, managers and supervisors are responsible for:</p>
                        <ul>
                          <li>providing employees with regularly and widely used work instruments and electronic systems in both official languages</li>
                          <li>supervising employees in the official language of the employee's choice when they occupy bilingual or either/or positions</li>
                          <li>supervising employees in the language of the position when they occupy unilingual positions</li>
                          <li>taking all necessary measures to enable employees to use the official language of their choice in meetings, regardless of the linguistic identification of their position</li>
                          <li>ensuring that training and professional development is available to employees in the official language of their choice</li>
                          <li>ensuring that annual performance reviews and appraisal ratings reflect compliance with the Directive on Official Languages for People Management in institutions for which the Treasury Board is the employer, and</li>
                          <li>maintaining a work environment that allows employees to use the official language of their choice for both oral and written communication purposes</li>
                        </ul>
                        <p>Note: Managers and supervisors who occupy bilingual positions supervise each employee in the language chosen by that employee regardless of the linguistic identification of the employee's position.</p>
                        <p>In unilingual regions (for language-of-work purposes), managers and supervisors are responsible for:</p>
                        <ul>
                          <li>providing employees with regularly and widely used work instruments and electronic systems in both official languages, if they are required to communicate or provide services to the public or employees in English and French</li>
                        </ul>
                        <p>Using the Leadership Competencies Profile for Official Languages can help individuals self-assess their level of functionality in their second language.</p>
                        <p>[A Managers’ official languages responsibilities for people management activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Identifying Language Requirements</h2>
                        <p>Managers in various federal organizations are responsible for ensuring that the positions they manage reflect the level of language proficiency required to perform the duties and tasks of the positions.</p>
                        <p>If you are a manager in an institution listed in Schedules I or IV of the <i>Financial Administration Act</i>, you can identify a language profile using the following definitions:</p>
                        <ul>
                          <li>English essential: The functions and duties of the position will require only the use of English (unilingual English position)</li>
                          <li>French essential: The functions and duties of the position will require only the use of French (unilingual French position)</li>
                          <li>Bilingual: The functions and duties of the position will require the use of both English and French (bilingual position)</li>
                          <li>Either/or position: The functions and duties of the position will require only the use of one official language, and the incumbent chooses which language they will use. The language of the position is the one chosen by the incumbent for as long as they remain in this position (either/or position).</li>
                        </ul>
                        <p>[An Identifying language requirements reference pop-up text box appears.]</p>
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to consult the course tool box for a list of the persons responsible for official languages and the official languages champions in institutions subject to the <i>Official Languages Act</i>.</p>
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
                        <p>Les programmes des langues officielles du gouvernement fédéral ne garantissent pas seulement des services en français et en anglais aux Canadiens. Ils protègent aussi les droits de tous les fonctionnaires en matière de langues officielles et favorisent l’utilisation des deux langues officielles dans les milieux de travail situés dans les régions bilingues.</p>
                        <p>Les programmes des langues officielles doivent donc veiller à ce que les organisations se conforment aux exigences de la <i>Loi sur les langues officielles</i> et aux instruments de politique en matière de langues officielles du Conseil du Trésor.</p>
                        <p>Dans cette section, vous apprendrez à : </p>
                        <ul>
                          <li>cerner les responsabilités des gestionnaires et des employés en matière de langues officielles;</li>
                          <li>reconnaître les responsabilités liées aux droits des employés quant à la langue de travail.</li>
                        </ul>
                        <p>Il vous faudra environ 30 minutes pour compléter cette section.</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>2. Cadre juridique</h2>
                        <p>Saviez-vous que la <i>Loi sur les langues officielles</i> se fonde sur la <i>Loi constitutionnelle de 1867</i> et la Charte canadienne des droits et libertés? Son statut quasi constitutionnel est reconnu par les tribunaux canadiens.</p>
                        <p>La Politique sur les langues officielles facilite la mise en œuvre efficace de la <i>Loi sur les langues officielles</i> et du Règlement sur les langues officielles – communications avec le public et prestation des services par les institutions gouvernementales.</p>
                        <p>La politique énonce les résultats attendus suivants : </p>
                        <ul>
                          <li>le public peut communiquer avec les institutions fédérales et recevoir des services en français ou en anglais;</li>
                          <li>les employés peuvent utiliser la langue officielle de leur choix et travailler dans un milieu de travail propice à l’usage des deux langues officielles;</li>
                          <li>les Canadiens d’expression française et ceux d’expression anglaise ont des chances égales d’emploi et d’avancement au sein des institutions – le mandat des institutions, leur emplacement et leur public doivent être pris en compte;</li>
                          <li>des structures de gouvernance, des mécanismes adéquats et des ressources sont en place pour assurer une gestion cohérente des obligations de l’institution en matière de langues officielles.</li>
                        </ul>
                        <p>[Une boîte de texte de l’activité Cadre juridique apparaît.]</p>
                        <hr>

                        <h2>3. Directive sur les langues officielles pour les communications et services</h2>
                        <p>Saviez-vous qu’il y a une différence entre une région bilingue et un bureau désigné bilingue? Certains bureaux sont désignés bilingues aux fins des communications avec le public et de la prestation des services, même si ces bureaux sont situés dans des régions unilingues aux fins de la langue de travail. Pour trouver ces régions, consultez la base de données Burolis.</p>
                        <p>Observons comment les exigences s’appliquent aux bureaux bilingues ou unilingues aux fins de la langue de travail.</p>
                        <p>La Directive sur les langues officielles pour les communications et services s’applique à toutes les communications avec le public ou les employés de la fonction publique.</p>
                        <p>En ce qui concerne les communications avec le public et la prestation des services, les gestionnaires des bureaux désignés bilingues ont la responsabilité de veiller à ce que : </p>
                        <ul>
                          <li>les communications et les services de leurs bureaux soient activement offerts en français et en anglais;</li>
                          <li>la capacité nécessaire soit en place pour qu’il soit possible de communiquer avec le public et de lui offrir les services dans les deux langues officielles;</li>
                          <li>les communications avec le public et la prestation des services dans les bureaux désignés se fassent dans les deux langues officielles ou dans la langue de préférence du destinataire, si celle-ci est connue;</li>
                          <li>un bureau désigné bilingue qui communique avec le public par l’intermédiaire des médias (à d’autres fins que celles visées par l’article 11 de la <i>Loi sur les langues officielles</i>) s’assure que les communications avec le public sont dans les deux langues officielles ou dans la langue officielle que la média utilise pour joindre son public cible.</li>
                        </ul>
                        <p>Les responsabilités de la direction de votre organisation découlant des obligations en matière de communication avec les employés de la fonction publique pourraient varier selon que votre bureau est situé dans une région bilingue ou unilingue.</p>
                        <p>Pour savoir si votre organisation se trouve dans une région bilingue, consultez la Liste des régions bilingues du Canada aux fins de la langue de travail.</p>
                        <p>[Une boîte de texte de l’activité Régions désignées bilingues aux fins de la langue de travail apparaît.]</p>
                        <hr>

                        <h2>4. Responsabilités des gestionnaires en matière de langues officielles pour la gestion des personnes</h2>
                        <p>La Directive sur les langues officielles pour la gestion des personnes appuie la Politique sur les langues officielles en établissant les exigences relatives à : </p>
                        <ul>
                          <li>l’identification linguistique des postes;</li>
                          <li>la dotation des postes bilingues;</li>
                          <li>la participation équitable des Canadiens d’expression française et de ceux d’expression anglaise dans les institutions fédérales.</li>
                        </ul>
                        <p>Dans les régions bilingues, les gestionnaires et les superviseurs ont la responsabilité de : </p>
                        <ul>
                          <li>mettre à la disposition des employés des instruments de travail et des systèmes informatiques d’usage courant et généralisé dans les deux langues officielles;</li>
                          <li>superviser les employés dans la langue officielle de leur choix quand ceux-ci occupent des postes bilingues ou réversibles;</li>
                          <li>superviser les employés dans la langue officielle du poste quand ceux-ci occupent des postes unilingues;</li>
                          <li>prendre toutes les mesures nécessaires pour permettre aux employés d’utiliser la langue officielle de leur choix durant les réunions, peu importe l’identification linguistique de leur poste;</li>
                          <li>s’assurer que la formation et le perfectionnement professionnel sont disponibles dans la langue officielle choisie par l’employé;</li>
                          <li>s’assurer que, dans les institutions dont le Conseil du Trésor est l’employeur, les examens annuels de rendement et les cotes d’évaluation sont conformes à la Directive sur les langues officielles pour la gestion des personnes;</li>
                          <li>maintenir un milieu de travail qui permet aux employés d’utiliser la langue officielle de leur choix pour toute communication orale ou écrite.</li>
                        </ul>
                        <p>Note : Les gestionnaires et les superviseurs occupant des postes bilingues supervisent chaque employé dans la langue officielle de son choix, peu importe l’identification linguistique de son poste.</p>
                        <p>Dans les régions unilingues (aux fins de la langue de travail), les gestionnaires et les superviseurs ont la responsabilité de : </p>
                        <ul>
                          <li>mettre à la disposition des employés qui communiquent ou fournissent des services en français et en anglais au public ou aux employés des instruments de travail et des systèmes informatiques d’usage courant et généralisé dans les deux langues officielles.</li>
                        </ul>
                        <p>Le Profil de compétences en leadership axé sur les langues officielles peut permettre aux personnes d’autoévaluer leurs compétences en langue seconde.</p>
                        <p>[Une boîte de texte de l’activité Responsabilités des gestionnaires en matière de langues officielles pour la gestion des personnes apparaît.]</p>
                        <hr>

                        <h2>5. Établir les exigences linguistiques</h2>
                        <p>Les gestionnaires des différentes organisations fédérales doivent faire en sorte que le profil des postes sous leur supervision correspond aux compétences linguistiques nécessaires à l’exercice des fonctions et des tâches de ces postes.</p>
                        <p>Si vous êtes gestionnaire dans l’une des institutions énumérées dans les annexes I ou IV de la <i>Loi sur la gestion des finances publiques</i>, vous pouvez établir un profil linguistique selon les définitions suivantes : </p>
                        <ul>
                          <li>français essentiel : les fonctions et les tâches du poste requièrent l’utilisation du français uniquement (poste unilingue français);</li>
                          <li>anglais essentiel : les fonctions et les tâches du poste requièrent l’utilisation de l’anglais uniquement (poste unilingue anglais);</li>
                          <li>bilingue : les fonctions et les tâches du poste requièrent l’utilisation du français et de l’anglais (poste bilingue);</li>
                          <li>réversible : les fonctions et les tâches du poste requièrent l’utilisation d’une seule langue officielle, et le titulaire du poste choisit laquelle utiliser. La langue du poste est celle qui est choisie par le titulaire aussi longtemps que celui-ci y demeure (poste réversible).</li>
                        </ul>
                        <p>[Une boîte de texte de référence Établir les exigences linguistiques apparaît.]</p>
                        <hr>

                        <h2>6. Dans la vraie vie</h2>
                        <p>Appliquer ce que vous avez appris - dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour consulter la boîte à outils du cours, où vous trouverez la liste des personnes responsables des langues officielles et des champions des langues officielles dans les institutions assujetties à la <i>Loi sur les langues officielles</i>.</p>
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
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('introductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Here is a list of resources referred to in this section. </p>
          <p><b>Legislation</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/eng/const/page-1.html" target="_blank" alt="Link to the Constitution Act, 1867">Constitution Act, 1867</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/Const/page-12.html" target="_blank" alt="Link to the Constitution Act, 1982, Part 1: Canadian Charter of Rights and Freedoms">Constitution Act, 1982, Part 1: Canadian Charter of Rights and Freedoms</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/o-3.01/" target="_blank" alt="Link to the Official Languages Act web page">Official Languages Act</a></li>
            <li><a href="https://laws.justice.gc.ca/eng/regulations/sor-92-48/index.html" target="_blank" alt="Link to the Official Languages (Communications with and Services to the Public) Regulations web page">Official Languages (Communications with and Services to the Public) Regulations</a></li>
          </ul>
          <p><b>Treasury Board Policy Instruments</b></p>
          <ul>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26163" target="_blank" alt="Link to the Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations web page">Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164" target="_blank" alt="Link to the Directive on Official Languages for Communications and Services web page">Directive on Official Languages for Communications and Services</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168" target="_blank" alt="Link to the Directive on Official Languages for People Management web page">Directive on Official Languages for People Management</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26160" target="_blank" alt="Link to the Policy on Official Languages web page">Policy on Official Languages</a></li>
          </ul>
          <p><b>Other Resources</b></p>
          <ul>
            <li><a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/assessment-official-languages-appointment-process.html" target="_blank" alt="Link to the Assessment of official languages in the appointment process web page">Assessment of official languages in the appointment process</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/burolis/search-recherche/search-recherche-eng.aspx" target="_blank" alt="Link to the Burolis database web page">Burolis database</a></li>
            <li><a href="https://www.clo-ocol.gc.ca/html/stu_etu_032011_p7_e.php" target="_blank" alt="Link to the Leadership Competencies Profile for Official Languages web page">Leadership Competencies Profile for Official Languages</a></li>
            <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/values-ethics/official-languages/list-bilingual-regions-canada-language-of-work-purposes.html" target="_blank" alt="Link to the •	List of Bilingual Regions of Canada for Language-of-Work Purposes web page">List of Bilingual Regions of Canada for Language-of-Work Purposes</a></li>
          </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Voici une liste des ressources auxquelles on fait référence dans cette section. </p>
          <p><b>Législation</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/fra/const/page-1.html" target="_blank" alt="Lien vers la Loi constitutionnelle de 1867">Loi constitutionnelle de 1867</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/Const/page-12.html" target="_blank" alt="Lien vers la Loi constitutionnelle de 1982, partie 1 : Charte canadienne des droits et libertés">Loi constitutionnelle de 1982, partie 1 : Charte canadienne des droits et libertés </a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/o-3.01/" target="_blank" alt="Lien vers la page web de la Loi sur les langues officielles">Loi sur les langues officielles</a></li>
            <li><a href="https://laws.justice.gc.ca/fra/reglements/DORS-92-48/index.html" target="_blank" alt="Lien vers la page web du Règlement sur les langues officielles - communications avec le public et prestation des services">Règlement sur les langues officielles – communications avec le public et prestation des services </a></li>
          </ul>
          <p><b>Instruments de politique du Conseil du Trésor</b></p>
          <ul>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26163" target="_blank" alt="Lien vers la page Web de la directive sur la mise en œuvre du Règlement sur les langues officielles (communications avec le public et prestation des services)">Directive sur l’application du Règlement sur les langues officielles – communications avec le public et prestation des services </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26164" target="_blank" alt="Lien vers la page web de la directive sur les langues officielles pour les communications et les services">Directive sur les langues officielles pour les communications et services</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26168" target="_blank" alt="Lien vers la page web de la Directive sur les langues officielles pour la gestion des personnes">Directive sur les langues officielles pour la gestion des personnes </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26160" target="_blank" alt="Lien vers la page web de la Politique sur les langues officielles">Politique sur les langues officielles </a></li>
          </ul>
          <p><b>Autres ressources</b></p>
          <ul>
            <li><a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils/evaluation-langues-officielles-cadre-dun-processus-nomination.html" target="_blank" alt="Lien vers la page web Évaluation des langues officielles dans le processus de nomination">Évaluation des langues officielles dans le cadre d’un processus de nomination</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/burolis/search-recherche/search-recherche-eng.aspx?GoCTemplateCulture=fr-CA" target="_blank" alt="Lien vers la page web de la base de données Burolis">Base de données Burolis</a></li>
            <li><a href="https://www.clo-ocol.gc.ca/html/stu_etu_032011_p7_f.php" target="_blank" alt="Lien vers la page web du profil de compétences en leadership pour les langues officielles">Profil de compétences en leadership axé sur les langues officielles </a></li>
            <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/valeurs-ethique/langues-officielles/liste-regions-bilingues-canada-fins-langue-travail.html" target="_blank" alt="Lien vers la page Web Liste des régions bilingues du Canada aux fins de la langue de travail">Liste des régions bilingues du Canada aux fins de la langue de travail </a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="legalFramework" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('legalFrameworkTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
            <p>The specific responsibilities of managers are defined in the related directives, listed in the policy’s supporting tools:</p>
            <ul>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26163" target="_blank" alt="Link to the Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations web page">Directive on the Implementation of the Official Languages (Communications with and Services to the Public) Regulations</a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26164" target="_blank" alt="Link to the Directive on Official Languages for Communications and Services web page">Directive on Official Languages for Communications and Services</a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26168" target="_blank" alt="Link to the Directive on Official Languages for People Management web page">Directive on Official Languages for People Management</a></li>
            </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
            <p>Les responsabilités précises des gestionnaires sont définies dans les directives pertinentes, qui font partie des instruments de politique : </p>
            <ul>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26163" target="_blank" alt="Lien vers la page Web de la directive sur la mise en œuvre du Règlement sur les langues officielles (communications avec le public et prestation des services)">Directive sur l’application du Règlement sur les langues officielles – communications avec le public et prestation des services </a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26164" target="_blank" alt="Lien vers la page web de la directive sur les langues officielles pour les communications et les services">Directive sur les langues officielles pour les communications et services</a></li>
                <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26168" target="_blank" alt="Lien vers la page web de la Directive sur les langues officielles pour la gestion des personnes">Directive sur les langues officielles pour la gestion des personnes </a></li>
            </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="officialLanguages" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('officialLanguagesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <officialLanguages />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="languagesResponsibilities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('languagesResponsibilitiesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <languagesResponsibilities />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="languageRequirements" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('languageRequirementsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>To gain a better understanding of how to perform your duties in this area, consult the web page <a href="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework/assessment-official-languages-appointment-process.html" target="_blank" alt="Link to the Assessment of official languages in the appointment process web page">Assessment of official languages in the appointment process</a> for guidance.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Pour mieux comprendre comment accomplir vos fonctions dans ce domaine, consultez la page Web <a href="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils/evaluation-langues-officielles-cadre-dun-processus-nomination.html" target="_blank" alt="Lien vers la page web Évaluation des langues officielles dans le processus de nomination">Évaluation des langues officielles dans le cadre d’un processus de nomination</a>.</p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('InfoIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/R-Contribute.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p>Take what you have learned into real life!</p>
          <p>Your organization will have its own ways of doing things. Take a time out from the course to consult the course tool box for a list of the persons responsible for official languages and the official languages champions in institutions subject to the <i>Official Languages Act</i>.  </p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Appliquer ce que vous avez appris - dans la vraie vie! </p>
          <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour consulter la boîte à outils du cours, où vous trouverez la liste des personnes responsables des langues officielles et des champions des langues officielles dans les institutions assujetties à la <i>Loi sur les langues officielles</i>. </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
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
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="valuesPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('LabourRelations')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="ValuesPart2.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.valuesPart3_player" path="valuesPart3" imagePath="ValuesPart3.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.valuesPart4_player" path="valuesPart4" imagePath="ValuesPart4.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import officialLanguages from '~/components/slides/values/valuesPart3OfficialLanguages'
import languagesResponsibilities from '~/components/slides/values/valuesPart3LanguagesResponsibilities'
import Quiz from '~/components/slides/values/valuesPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction", "legalFramework", "officialLanguages", "languagesResponsibilities", "languageRequirements", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    officialLanguages,
    languagesResponsibilities,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.valuesPart3
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
    updatePercent(e) {
      this.$store.commit('currentPlaying/setValuesPart3_player', e)
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

.img-real_Life{
  width:265px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<i18n>{
  "en":{
  "introductionTitle": "References: External Links",
  "legalFrameworkTitle": "Activity: Legal Framework",
  "officialLanguagesTitle": "Activity: Regions designated bilingual for language-of-work purposes",
  "languagesResponsibilitiesTitle": "Activity: Managers’ official languages responsibilities for people management",
  "languageRequirementsTitle": "References: Identifying language requirements",
  "inRealLifeTitle":"In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "VALUES"
  },
  "fr":{
  "introductionTitle": "Références : Liens externes",
  "legalFrameworkTitle": "Activité : Cadre juridique",
  "officialLanguagesTitle": "Activité : Régions désignées bilingues aux fins de la langue de travail",
  "languagesResponsibilitiesTitle": "Activité : Responsabilités des gestionnaires en matière de langues officielles pour la gestion des personnes ",
  "languageRequirementsTitle": "Références : Établir les exigences linguistiques",
  "inRealLifeTitle":"Dans la vraie vie",
  "TakeTheQuiz":"Répondez au quiz",
  "transcriptText":"",
  "reportSectionBar": "VALEURS"
  }
  }
</i18n>
