<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Éléments de base</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone/2020/discours-du-trone.html">Discours du Trône</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/commission-fonction-publique/services/cadre-nomination/delegation/instrument-delegation-responsabilisation.html#toc1.2">Instrument de délégation et de responsabilisation en matière de nomination</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/f-11/">Loi sur la gestion des finances publiques</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/p-33.01/">Loi sur l’emploi dans la fonction publique</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32621&section=html">Politique sur la gestion des personnes</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/conseil-prive/organisation/rapports-publications.html">Rapport annuel du greffier du Conseil privé</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <h4>Foundation</h4>
      <ul class="list-unstyled">
        <li><externalLink link="https://www.canada.ca/en/public-service-commission/services/appointment-framework/delegation-overview/appointment-delegation-accountability-instrument.html#toc1.2">Appointment Delegation and Accountability Instrument</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/privy-council/corporate/reports-publications.html">Annual report from the Clerk of the Privy Council</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></li>
        <li><externalLink link="https://laws-lois.justice.gc.ca/eng/acts/F-11/">Financial Administration Act</externalLink></li>
        <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32621&section=html">Policy on People Management</externalLink></li>
        <li><externalLink link="https://laws-lois.justice.gc.ca/eng/acts/p-33.01/">Public Service Employment Act</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/privy-council/campaigns/speech-throne/2020/speech-from-the-throne.html">Speech from the Throne</externalLink></li>
      </ul>
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
