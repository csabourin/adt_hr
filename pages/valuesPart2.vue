<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ValuesEthics')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_f566an19/flavorId/0_cy2ysany/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_sryvnufu/flavorId/0_w6vfp4u5/name/a.mp4" chapters chapterFile="ReportPart2.vtt" ccFile="" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <h2>Values and Ethics</h2>
                        <p>Values and ethics guide managers in responsible decision making and in exercising due diligence in their responsibilities and accountabilities.</p>
                        <p>The Values and Ethics Code for the Public Sector and the  Directive on Conflict of Interest, issued under the Policy on People Management, guide all public servants in their professional duties. The code and the directive are a condition of employment, which means that all employees must read and agree to them in order to be employed in the public service.</p>
                        <p>Values and ethics at the core</p>
                        <p>The values and expected behaviours outlined in the Values and Ethics Code for the Public Sector are at the foundation of good management and leadership, and they are a key element in upholding integrity and respect.</p>
                        <p>When considering a values and ethics decision, ask yourself these questions:</p>
                        <ul>
                          <li>Do I have the authority to make this decision?</li>
                          <li>Have I considered my options?</li>
                          <li>Have I consulted my resources?</li>
                        </ul>
                        <p>A public servant who acts in a manner that violates the Values and Ethics Code for the Public Sector or the Directive on Conflict of Interest may be subject to disciplinary measures, up to and including termination of employment.</p>
                        <p>In certain circumstances, public servants could even be charged under Canada’s Criminal Code for breaches of conduct.</p>
                        <p>In this section you will learn to:</p>
                        <ul>
                          <li>Identify key elements involved in values and ethics</li>
                          <li>Recognize harassment and violence</li>
                          <li>Recognize the steps in the harassment and violence complaint process</li>
                          <li>Identify acts of wrongdoing as defined by the <i>Public Servants Disclosure Protection Act</i></li>
                        </ul>
                        <p>This section should take you approximately 30 minutes to complete.</p>
                        <hr>

                        <h2>Respect for People</h2>
                        <p>Respect for people is one value that must be emphasized among all others.</p>
                        <p>Fostering a safe, healthy work environment, including protecting employees from harassment and violence, is a key requirement of employers (or deputy heads), as outlined in the Directive on the Prevention and Resolution of Workplace Harassment and Violence and the Work Place Harassment and Violence Prevention Regulations.</p>
                        <p>As a manager you are in a position of influence and authority. You have a responsibility to:</p>
                        <ul>
                          <li>explain and guide your staff in acting ethically</li>
                          <li>be a role model to your team, and</li>
                          <li>apply a values-and-ethics filter in executing your responsibilities</li>
                        </ul>
                        <p>To help you assess whether the behaviour (an act, comment or display) constitutes harassment and violence, ask yourself the following questions:</p>
                        <ul>
                          <li>Did I experience or witness unwelcome or offensive behaviour?</li>
                          <li>Did it demean, belittle or cause personal humiliation or embarrassment?</li>
                        </ul>
                        <p>For a definition of workplace harassment and violence and a full list of examples, please consult the web page Requirements for employers to prevent harassment and violence in federally regulated workplaces.</p>
                        <p>Harassment and violence can be one severe incident that has a lasting impact on the individual, or it can be a series of objectionable actions, conduct or comments against a person because of, for example, that person’s race, national or ethnic origin, religion, age, sexual orientation, gender identity or expression, genetic characteristics, disability or any of the other prohibited grounds listed in the <i>Canadian Human Rights Act</i>. In addition, the United Nations Declaration on the Rights of Indigenous Peoples expands the scope of discrimination to include culture, identity, religion, language, health, education and community.</p>
                        <p>When assessing a situation, consider the severity and impropriety of the act, the circumstances and context of the situation, and whether the behaviour is prohibited under the <i>Canadian Human Rights Act</i>.</p>
                        <hr>

                        <h2>Harassment and Violence</h2>
                        <p>A formal process is initiated when an employee files a written complaint with the individual or unit responsible for managing harassment and violence complaints.</p>
                        <p>For more information on the formal process, please refer to the Work Place Harassment and Violence Prevention Regulations.</p>
                        <p>Harassment and violence is serious and needs to be addressed promptly, with sensitivity, competence and discretion.</p>
                        <p>The primary goal is to resolve allegations of harassment and violence with the least disruption to the work environment. To accomplish this, follow the eight steps detailed on this website: Resolve a workplace harassment and violence complaint.  The steps include:</p>
                        <ul>
                          <li>Acknowledging receipt of the complaint and notifying the employee who is the object of the complaint</li>
                          <li>Informing the principle party of the resources available to them</li>
                          <li>Making every reasonable effort to resolve the occurrence, and</li>
                          <li>Recording  all occurrences of harassment and violence that have been reported to you</li>
                        </ul>
                        <hr>

                        <h2>Directive on Conflict of Interest</h2>
                        <p>During your career in the public service, you may be required to address conflicts of interest between your private and professional activities outside of work and your official duties and responsibilities.</p>
                        <p>Compliance with the Policy on People Management and the Directive on Conflict of Interest is a condition of employment. The directive details requirements for public servants to prevent and deal with any real, apparent or potential conflict of interest during their employment and post-employment.</p>
                        <p>In essence, the directive states that all public servants must serve the public interest by taking all possible steps to prevent and resolve, in favour of the public interest, any real, apparent or potential conflicts of interest between their official responsibilities and their private affairs.</p>
                        <p>For example, employment outside of the public service could be seen as a conflict of interest. So, if an employee informs you that they are self-employed or are considering a position outside the federal public service, it is your responsibility to:</p>
                        <ul>
                          <li>ask the employee to review the requirements outlined in the directive, and</li>
                          <li>write a report to inform the deputy head to determine whether the situation could place the employee in a real, apparent or potential conflict of interest</li>
                        </ul>
                        <hr>

                        <h2>Defining Wrongdoing</h2>
                        <p>The Public Servants Disclosure Protection Act (PSDPA) establishes a process for public sector employees to come forward if they believe that wrongdoing has occurred or is about to occur in the workplace.</p>
                        <p>Wrongdoing is defined under the PSDPA as any of the following:</p>
                        <ul>
                          <li>breaking laws or regulations</li>
                          <li>misusing public funds or assets</li>
                          <li>gross mismanagement</li>
                          <li>an act or omission that endangers the life, health and safety of Canadians or the environment</li>
                          <li>a serious breach of the public sector or organizational code of conduct, or</li>
                          <li>directing or counselling a person to do any of these things</li>
                        </ul>
                        <p>The legislation protects public servants’ confidentiality when disclosing suspected wrongdoing and protects them from possible reprisals. As a manager, you have an important role to play in modelling values-based leadership and informing your employees of their rights and options under the PSDPA.</p>
                        <p>You may encounter situations where employees disclose wrongdoing to you. It is your role to receive the disclosure, inform your organization’s senior officer for internal disclosure, and protect the identity of those involved in the disclosure process. Employees may also choose to approach the senior officer for internal disclosure or the Public Sector Integrity Commissioner directly.</p>
                        <hr>

                        <h2>In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to do several things.</p>
                        <hr>

                        <h2>Quiz</h2>
                        <p>Test your knowledge by answering the following questions. Select “Submit” when you are done.</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>Introduction</h2>
                        <p>Les valeurs et l’éthique guident les gestionnaires vers une prise de décisions responsable et vers l’exercice d’une diligence raisonnable dans le cadre de leurs responsabilités et de leurs obligations.</p>
                        <p>Le Code de valeurs et d’éthique du secteur public et la Directive sur les conflits d’intérêts, qui a été élaborée conformément à la Politique sur la gestion des personnes, orientent les fonctionnaires dans l’exercice de leurs fonctions. Le respect du Code et de la Directive constitue une condition d’emploi, ce qui signifie que tous les employés doivent les lire et les accepter pour travailler dans la fonction publique.</p>
                        <p>Les valeurs et les comportements attendus qui sont présentés dans le <i>Code de valeurs et d’éthique du secteur public</i> sont au cœur d’une bonne gestion et d’un bon leadership. Ils constituent un élément incontournable du maintien de l’intégrité et du respect.</p>
                        <p>Lorsque vous devez prendre une décision qui concerne les valeurs et l’éthique, posez-vous les questions suivantes : </p>
                        <ul>
                          <li>Ai-je le pouvoir de prendre cette décision?</li>
                          <li>Ai-je envisagé mes options?</li>
                          <li>Ai-je consulté mes ressources?</li>
                        </ul>
                        <p>Les fonctionnaires qui enfreignent le <i>Code de valeurs et d’éthique du secteur public</i> ou la Directive sur les conflits d’intérêts peuvent faire l’objet de mesures disciplinaires pouvant aller jusqu’au congédiement.</p>
                        <p>Dans certaines circonstances, les fonctionnaires pourraient même être accusés en vertu du <i>Code criminel</i> du Canada pour écarts de conduite.</p>
                        <p>Dans cette section, vous apprendrez à : </p>
                        <ul>
                          <li>cerner les éléments clés entourant les valeurs et l’éthique;</li>
                          <li>reconnaître le harcèlement et la violence.</li>
                        </ul>
                        <p>Il vous faudra environ 30 minutes pour compléter cette section.</p>
                        <hr>

                        <h2>Respecter les gens</h2>
                        <p>Le respect envers les gens est l’une des valeurs sur laquelle il faut insister.</p>
                        <p>Les employeurs (ou les administrateurs généraux) doivent mettre un point d’honneur à favoriser un environnement de travail sain et sécuritaire, notamment en protégeant les employés contre le harcèlement et la violence, comme le soulignent la Directive sur la Prévention et la résolution du harcèlement et de la violence dans le lieu de travail et le Règlement sur la prévention du harcèlement et de la violence dans le lieu de travail.</p>
                        <p>En tant que gestionnaire, vous êtes en position d’influence et d’autorité. Il vous incombe : </p>
                        <ul>
                          <li>d’expliquer aux membres de votre personnel comment agir de manière éthique et de les guider en ce sens;</li>
                          <li>d’agir comme modèle pour votre équipe;</li>
                          <li>d’appliquer un filtre de valeurs et d’éthique lorsque vous vous acquittez de vos responsabilités.</li>
                        </ul>
                        <p>Pour déterminer si le comportement (acte, commentaire ou geste) constitue du harcèlement et de la violence, posez-vous les questions suivantes : </p>
                        <ul>
                          <li>Ai-je été victime ou témoin d’un comportement déplacé ou offensant?</li>
                          <li>Est-ce que le comportement a rabaissé, diminué, humilié ou embarrassé la personne visée?</li>
                        </ul>
                        <p>Pour connaître la définition du harcèlement et de la violence au travail et consulter une liste exhaustive d’exemples, rendez-vous sur la page Web Obligations des employeurs pour prévenir le harcèlement et la violence en milieu de travail sous réglementation fédérale.</p>
                        <p>Le harcèlement et la violence peuvent consister en un seul incident grave ayant des conséquences durables sur la personne visée ou en une série de gestes, de comportements ou de commentaires répréhensibles à l’égard d’une personne en raison, par exemple, de sa race, de son origine nationale ou ethnique, de sa religion, de son âge, de son orientation sexuelle, de son identité ou de son expression de genre, de ses caractéristiques génétiques, d’une déficience ou d’un autre motif de distinction illicite mentionnée dans la <i>Loi canadienne sur les droits de la personne</i>. Par ailleurs, la Déclaration des Nations Unies sur les Droits des Peuples Autochtones redéfinit la discrimination pour que soient prises en compte la culture, l’identité, la religion, la langue, la santé, l’éducation et la communauté.</p>
                        <p>Au moment d’évaluer une situation, il faut examiner la gravité et le caractère inopportun du geste, les circonstances et le contexte, et il faut déterminer si le comportement est interdit aux termes de la <i>Loi canadienne sur les droits de la personne</i>.</p>
                        <hr>

                        <h2>Harcèlement et violence</h2>
                        <p>Un processus formel est amorcé lorsqu’un employé dépose une plainte écrite auprès de la personne ou de l’unité responsable de la gestion des plaintes pour harcèlement et violence.</p>
                        <p>Pour en savoir plus sur le processus officiel, consultez le Règlement sur la prévention du harcèlement et de la violence dans le lieu de travail.</p>
                        <p>Les situations de harcèlement et de violence sont sérieuses et doivent être réglées sans délai, avec doigté, compétence et discrétion.</p>
                        <p>L’objectif principal est de résoudre les allégations de harcèlement et de violence en perturbant le moins possible le milieu de travail. Pour y parvenir, suivez les huit étapes détaillées sur ce site Web : Régler une plainte de harcèlement ou de violence en milieu de travail. En voici une liste non exhaustive : </p>
                        <ul>
                          <li>accuser réception de la plainte et informer l’employé visé par la plainte;</li>
                          <li>informer la partie principale des ressources dont elle dispose;</li>
                          <li>faire tous les efforts raisonnables pour régler l’incident;</li>
                          <li>consigner toutes les situations de harcèlement et de violence qui vous ont été signalées.</li>
                        </ul>
                        <hr>

                        <h2>Directive sur les conflits d’intérêts</h2>
                        <p>Au cours de votre carrière dans la fonction publique, vous pourriez vous retrouver dans une situation de conflits d’intérêts entre vos activités personnelles et professionnelles en dehors du travail et vos fonctions et responsabilités officielles.</p>
                        <p>La conformité à la Politique sur la gestion des personnes et à la Directive sur les conflits d’intérêts est une condition d’emploi. La Directive énonce en détail les exigences auxquelles doivent se soumettre les fonctionnaires pour prévenir et traiter tout conflit d’intérêts réel, apparent ou potentiel pendant et après leur emploi.</p>
                        <p>La Directive indique essentiellement que tous les fonctionnaires doivent servir l’intérêt public en prenant toutes les mesures possibles pour prévenir et résoudre tout conflit d’intérêts réel, apparent ou potentiel entre leurs responsabilités officielles et leurs intérêts personnels.</p>
                        <p>Par exemple, le fait d’occuper un emploi à l’extérieur de la fonction publique peut être perçu comme un conflit d’intérêts. Ainsi, si un employé vous informe qu’il est travailleur autonome ou envisage d’accepter un emploi à l’extérieur de la fonction publique, vous devez :</p>
                        <ul>
                          <li>demander à l’employé de revoir les exigences présentées dans la Directive;</li>
                          <li>rédiger un rapport pour informer l’administrateur général afin qu’il détermine si l’employé pourrait se retrouver en situation de conflit d’intérêts réel, apparent ou potentiel.</li>
                        </ul>
                        <hr>

                        <h2>Définition d’un acte répréhensible</h2>
                        <p>La <i>Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles</i> (LPFDAR) énonce le processus que les employés du secteur public doivent suivre pour dénoncer tout acte répréhensible qui est commis ou sur le point d’être commis en milieu de travail.</p>
                        <p>Selon la LPFDAR, un acte répréhensible s’entend de ce qui suit : </p>
                        <ul>
                          <li>la contravention d’une loi ou d’un règlement;</li>
                          <li>un usage abusif des fonds ou des biens publics;</li>
                          <li>un cas grave de mauvaise gestion;</li>
                          <li>un geste ou une omission qui met en péril la vie, la santé ou la sécurité humaine ou l’environnement;</li>
                          <li>la contravention grave du code de conduite du secteur public ou d’une organisation;</li>
                          <li>le fait d’ordonner ou de conseiller à une personne de poser l’un de ces gestes.</li>
                        </ul>
                        <p>La loi préserve la confidentialité des fonctionnaires qui révèlent des actes répréhensibles présumés et les protège contre d’éventuelles représailles. En tant que gestionnaire, vous jouez un rôle important en montrant l’exemple d’un leadership fondé sur des valeurs et en informant vos employés sur leurs droits [et] des options qui s’offrent à eux aux termes de la LPFDAR.</p>
                        <p>Il pourrait arriver que des employés vous révèlent des actes répréhensibles. Vous avez la responsabilité de recevoir la divulgation, d’informer l’agent principal chargé de la divulgation à l’interne et de protéger l’identité des personnes visées par le processus de divulgation. Les employés peuvent également s’adresser directement à l’agent principal chargé de la divulgation à l’interne ou au commissaire à l’intégrité du secteur public.</p>
                        <hr>

                        <h2>Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris - dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour faire ce que l’on vous propose ci-dessous.</p>
                        <hr>

                        <h2>Quiz</h2>
                        <p>Évaluez vos connaissances en répondant aux questions suivantes. Cliquez sur « Soumettre » lorsque vous avez terminé.</p>                        
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
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('introductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Here is a list of resources referred to in this section.</p>
          <p><b>Legislation</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/p-31.9/" target="_blank" alt="Link to the Public Servants Disclosure Protection Act web page">Public Servants Disclosure Protection Act</a></li>
            <li><a href="http://gazette.gc.ca/rp-pr/p2/2020/2020-06-24/html/sor-dors130-eng.html" target="_blank" alt="Link to the Work Place Harassment and Violence Prevention Regulations web page">Work Place Harassment and Violence Prevention Regulations</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/eng/acts/H-6/index.html/" target="_blank" alt="Link to the Canadian Human Rights Act web page">Canadian Human Rights Act</a></li>
            <li><a href="https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html" target="_blank" alt="Link to the United Nations Declaration on the Rights of Indigenous Peoples web page">United Nations Declaration on the Rights of Indigenous Peoples</a></li>
          </ul>
          <p><b>Policy Instruments</b></p>
          <ul>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32627" target="_blank" alt="Link to the Directive on Conflict of Interest web page">Directive on Conflict of Interest</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32671" target="_blank" alt="Link to the	Directive on the Prevention and Resolution of Workplace Harassment and Violence web page">Directive on the Prevention and Resolution of Workplace Harassment and Violence</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-eng.aspx?id=32621" target="_blank" alt="Link to the Policy on People Management web page">Policy on People Management</a></li>
            <li><a href="https://sencanada.ca/content/sen/committee/432/CIBA/reports/CIBA_RTP5_POL_HVP_E.pdf" target="_blank" alt="Link to the Senate Harassment and Violence Prevention Policy web page">Senate Harassment and Violence Prevention Policy</a></li>
          </ul>
          <p><b>Other Resources</b></p>
          <ul>
            <li><a href="https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention.html#Examples_of_harassment" target="_blank" alt="Link to the Examples of harassment and violence web page">Examples of harassment and violence</a></li>
            <li><a href="https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention.html" target="_blank" alt="Link to the Requirements for employers to prevent harassment and violence in federally regulated workplaces web page">Requirements for employers to prevent harassment and violence in federally regulated workplaces</a></li>
            <li><a href="https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention/complaints/resolve.html" target="_blank" alt="Link to the Resolve a workplace harassment and violence complaint web page">Resolve a workplace harassment and violence complaint</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=25049" target="_blank" alt="Link to the Values and Ethics Code for the Public Sector web page">Values and Ethics Code for the Public Sector</a></li>
            <li><a href="https://www.canada.ca/en/employment-social-development/programs/workplace-health-safety/harassment-violence-prevention.html#What_is_not" target="_blank" alt="Link to the What is not harassment and violence web page">What is not harassment and violence</a></li>
          </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Voici une liste des ressources auxquelles on fait référence dans cette section. </p>
          <p><b>Législation</b></p>
          <ul>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/p-31.9/" target="_blank" alt="Lien vers la page web de la Loi sur la protection des fonctionnaires divulgateurs d'actes répréhensibles">Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles</a></li>
            <li><a href="https://canadagazette.gc.ca/rp-pr/p2/2020/2020-06-24/html/sor-dors130-fra.html" target="_blank" alt="Lien vers la page web du Règlement sur le harcèlement et la prévention de la violence dans le lieu de travail">Règlement sur la prévention du harcèlement et de la violence dans le lieu de travail</a></li>
            <li><a href="https://laws-lois.justice.gc.ca/fra/lois/h-6/index.html/" target="_blank" alt="Lien vers la page web de la Loi canadienne sur les droits de la personne">Loi canadienne sur les droits de la personne</a></li>
            <li><a href="https://www.un.org/development/desa/indigenous-peoples-fr/" target="_blank" alt="Lien vers la page web de la Déclaration des Nations Unies sur les Droits des Peuples Autochtones">Déclaration des Nations Unies sur les Droits des Peuples Autochtones</a></li>
          </ul>
          <p><b>Instruments de politique </b></p>
          <ul>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32627" target="_blank" alt="Lien vers la page web de la directive sur les conflits d'intérêts">Directive sur les conflits d’intérêts </a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32671" target="_blank" alt="Lien vers la page web de la directive sur la prévention et la résolution du harcèlement et de la violence au travail">Directive sur la prévention et la résolution du harcèlement et de la violence sur le lieu de travail</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-fra.aspx?id=32621" target="_blank" alt="Lien vers la page web de la politique de gestion du personnel">Politique sur la gestion des personnes </a></li>
            <li><a href="https://sencanada.ca/content/sen/committee/431/CIBA/Reports/CIBA_RPT4_f.pdf" target="_blank" alt="Lien vers la page web de la Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat">Politique sur la prévention et la résolution du harcèlement en milieu de travail au Sénat</a></li>
          </ul>
          <p><b>Autres ressources </b></p>
          <ul>
            <li><a href="https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence.html#Exemples-harcelement" target="_blank" alt="Lien vers la page web Exemples de harcèlement et de violence">Exemples de harcèlement et de violence</a></li>
            <li><a href="https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence.html" target="_blank" alt="Lien vers la page web Exigences imposées aux employeurs pour prévenir le harcèlement et la violence dans les lieux de travail sous réglementation fédérale">Obligations des employeurs pour prévenir le harcèlement et la violence en milieu de travail sous réglementation fédérale </a></li>
            <li><a href="https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence/plaintes/regler.html" target="_blank" alt="Lien vers la page web Résoudre une plainte pour harcèlement et violence au travail">Régler une plainte de harcèlement ou de violence en milieu de travail</a></li>
            <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=25049" target="_blank" alt="Lien vers la page web du Code de valeurs et d'éthique pour le secteur public">Code de valeurs et d’éthique du secteur public </a></li>
            <li><a href="https://www.canada.ca/fr/emploi-developpement-social/programmes/sante-securite-travail/prevenir-harcelement-violence.html#Exemples-constitue-pas-harcelement" target="_blank" alt="Lien vers la page web Ce qui n'est pas du harcèlement et de la violence.">Ce que ne sont pas le harcèlement et la violence </a></li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="respectPeople" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('respectPeopleTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <respectPeople />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="harassmentViolence" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('harassmentViolenceTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <harassmentViolence />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="directiveConflictInterest" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('directiveConflictInterestTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p><b>To supplement the knowledge required to perform delegated HR responsibilities, be sure to complete this additional course:</b></p>
          <ul>
            <li>Values and Ethics Foundations for Managers (C355)</li>
          </ul>
          <p>This course provides a more in-depth look at values and ethics to help you perform your duties in this area.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p><b>Pour approfondir les connaissances nécessaires à l’exercice des responsabilités déléguées en matière de RH, suivez le cours suivant :</b></p>
          <ul>
            <li>Fondements des valeurs et de l’éthique pour les gestionnaires (C355).</li>
          </ul>
          <p>Ce cours, qui examine en profondeur les valeurs et l’éthique, vous aidera à exercer vos fonctions dans ce domaine. </p>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="definingWrongdoing" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('definingWrongdoingTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='en'">
          <p>Consult the following resources for more information about the <i>Public Servants Disclosure Protection Act</i> and tips for managers:</p>
          <ul>
            <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/values-ethics/disclosure-protection/public-servants-disclosure-protection-act-information-supervisors-all-levels.html" target="_blank" alt="Link to the Information for supervisors at all levels web page">Information for supervisors at all levels</a></li>
          </ul>
          <img src="~/assets/en/V+E_Graphics-en.png" alt="Image detailing the Roles of the different employees">
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Consultez les ressources suivantes pour en savoir plus sur la <i>Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles</i> et pour obtenir des conseils destinés aux gestionnaires : </p>
          <ul>
            <li><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/valeurs-ethique/protection-divulgateurs/loi-protection-fonctionnaires-divulgateurs-actes-reprehensibles-information-intention-superviseurs-tous-niveaux.html" target="_blank" alt="Lien vers la page web Informations pour les superviseurs à tous les niveaux">Information à l’intention des superviseurs de tous niveaux</a></li>
          </ul>
          <img src="~/assets/fr/V+E_Graphics-fr.png" alt="Image d'émontrant les rôles des employers">
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/R-Contribute.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
        <div v-if="$i18n.locale=='en'">
          <p>First, read the <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32671" target="_blank" alt="Link to the Directive on the Prevention and Resolution of Workplace Harassment and Violence web page">Directive on the Prevention and Resolution of Workplace Harassment and Violence</a>. It emphasizes the need for prevention and for creating a culture of respect founded on good relationships and good communication. This workplace culture in turn fosters an environment of trust, caring and respect. </p>
          <p>Second, find out who can guide you through conflict of interest considerations. Many organizations will have an office of values and ethics or an Ombud who can help. You can also refer to the <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32627" target="_blank" alt="Link to the Directive on Conflict of Interest web page">Directive on Conflict of Interest</a> </p>
          <p>Third, read your organization’s Workplace Harassment and Violence Prevention Policy. </p>
          <p>When people work together, misunderstandings and conflict are inevitable, but the escalation of issues can be prevented. You have a key role to play in promoting respectful working relationships and in helping to deal with conflict constructively. </p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Premièrement, lisez la<a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32671" target="_blank" alt="Lien vers la page web du Règlement sur le harcèlement et la prévention de la violence dans le lieu de travail">Directive sur la Prévention et la résolution du harcèlement et de la violence dans le lieu de travail</a>, qui met l’accent sur la nécessité d’assurer la prévention des employés et de créer une culture du respect fondée sur de bonnes relations et une bonne communication. Cette culture en milieu de travail favorise à son tour un environnement caractérisé par la confiance, la bienveillance et le respect. </p>
          <p>Deuxièmement, trouvez qui peut vous guider en ce qui a trait aux conflits d’intérêts. De nombreuses organisations comptent un bureau des valeurs et de l’éthique ou un ombudsman qui peut vous aider. Vous pouvez également consulter la <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32627" target="_blank" alt="Lien vers la page web de la directive sur les conflits d'intérêts">Directive sur les conflits d’intérêts </a>.</p>
          <p>Troisièmement, lisez la politique de votre organisation sur la prévention du harcèlement et de la violence dans le lieu de travail. </p>
          <p>Lorsque des collègues travaillent ensemble, les malentendus et les conflits sont inévitables; toutefois, l’accumulation des problèmes, elle, peut être évitée. Vous jouez un rôle important dans la promotion de relations de travail respectueuses et pouvez contribuer à la résolution des conflits d’une manière constructive. </p>
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
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart2" imagePath="ValuesPart2.svg" size="140" time="20" :text="$t('ValuesEthics')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart3" imagePath="ValuesPart3.svg" size="140" time="20" :text="$t('OfficialLanguages')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="valuesPart4" imagePath="ValuesPart4.svg" size="140" time="20" :text="$t('PoliticalActivities')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="valuesKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import respectPeople from '~/components/slides/values/valuesPart2RespectPeople'
import harassmentViolence from '~/components/slides/values/valuesPart2HarassmentViolence'
import Quiz from '~/components/slides/values/valuesPart2Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction", "respectPeople", "harassmentViolence", "directiveConflictInterest", "definingWrongdoing", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    respectPeople,
    harassmentViolence,
    Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart2
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
      this.$store.commit('currentPlaying/setReportPart2_player', e)
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
  "introductionTitle": "References: External Links  ",
  "respectPeopleTitle": "Activity: Respect for People",
  "harassmentViolenceTitle": "Activity: Harassment and Violence",
  "directiveConflictInterestTitle": "References: Additional Course",
  "definingWrongdoingTitle": "References: Defining Wrongdoing",
  "inRealLifeTitle":"In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "VALUES"
  },
  "fr":{
  "introductionTitle": "Références : Liens externes ",
  "respectPeopleTitle": "Activité : Respecter les gens",
  "harassmentViolenceTitle": "Activité : Harcèlement et violence ",
  "directiveConflictInterestTitle": "Références : Cours supplémentaire ",
  "definingWrongdoingTitle": "Références : Définir un acte répréhensible",
  "inRealLifeTitle":"Dans la vraie vie",
  "TakeTheQuiz":"Répondez au quiz",
  "transcriptText":"",
  "reportSectionBar": "VALEURS"
  }
  }
</i18n>
