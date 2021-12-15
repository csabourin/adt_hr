<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Fonction et processus</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination.html">Cadre de nomination de la Commission de la fonction publique </externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/lignes-directrices-matiere-nomination.html">Politique de nomination de la Commission de la fonction publique </externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-fra.aspx?id=32621">Politique sur la gestion des personnes </externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/e-5.401/"><i>Loi sur l’équité en matière d’emploi</i></externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/a-0.6/"><i>Loi canadienne sur l’accessibilité </i></externalLink></li>
          <li><externalLink link="https://lois-laws.justice.gc.ca/fra/lois/p-33.01/TexteComplet.html"><i>Loi sur l’emploi dans la fonction publique </i></externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/f-11/"><i>Loi sur la gestion des finances publiques </i></externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/delegation/instrument-delegation-responsabilisation.html">Instrument de délégation et de responsabilisation en matière de nomination</externalLink></li>
          <li>Commission de la fonction publique – <externalLink link="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/guides-outils.html">Guides et outils</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Function and Process</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.canada.ca/en/public-service-commission/services/appointment-framework.html">Public Service Commission’s Appointment Framework</externalLink></li>
          <li><externalLink link="https://www.canada.ca/en/public-service-commission/services/appointment-framework/appointment-policy.html">Public Service Commission’s Appointment Policy</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/(S(e021jvamqbhco5551teiyz55))/doc-eng.aspx?id=32621">Policy on People Management</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/eng/acts/e-5.401/"><i>Employment Equity Act</i></externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/eng/acts/A-0.6/"><i>Accessible Canada Act</i></externalLink></li>
          <li><externalLink link="https://lois-laws.justice.gc.ca/eng/acts/P-33.01/FullText.html"><i>Public Service Employment Act</i></externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/eng/acts/f-11/"><i>Financial Administration Act</i></externalLink></li>
          <li><externalLink link="https://www.canada.ca/en/public-service-commission/services/appointment-framework/delegation-overview/appointment-delegation-accountability-instrument.html">Appointment Delegation and Accountability Instrument</externalLink></li>
          <li>Public Service Commission – <externalLink link="https://www.canada.ca/en/public-service-commission/services/appointment-framework/guides-tools-appointment-framework.html">Guides and Tools</externalLink></li>
        </ul>
      </div>
    </div>
  </span>
</template>

<script>

  import externalLink from "~/components/externalLink"
  export default{
    components:{
      externalLink
    }
  }

</script>

<style scoped>
  p {
    font-weight: bold;
  }
</style>
