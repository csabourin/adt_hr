<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Dépenses</h4>
        <ul>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32495">Politique sur la gestion financière</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32503">Directive sur la délégation des pouvoirs de dépenser et des pouvoirs financiers</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584&amp;section=html">Guide de délégation et de mise en &oelig;uvre des pouvoirs de dépenser et des pouvoirs financiers</externalLink></li>
              <li><externalLink link="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_fr.html">Tableau de délégation des pouvoirs de dépenser et de signer des documents financiers</externalLink> (Lien vers un graphique fictif)&nbsp;</li>
            </ul>
          </li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228">Directive sur les dépenses de voyages, d’accueil, de conférences et d’événements</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32553">Guide sur les dépenses de voyages, d’accueil, de conférences et d’événements</externalLink></li>
              <li><externalLink link="https://www.njc-cnm.gc.ca/directive/d10/fr">Directive sur les voyages du Conseil national mixte (CNM)</externalLink></li>
              <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Ensemble_de_politiques_sur_la_gestion_financi%C3%A8re/Conf%C3%A9rence_par_opposition_%C3%A0_formation">Conférence par opposition à formation</externalLink></li>
            </ul>
          </li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32504">Directive sur les paiements</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14662">Directive sur la réinstallation du CNM</externalLink></li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32502">Directive sur l’imputation et les autorisations financières spéciales</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32505">Directive sur la gestion des fonds publics et des comptes débiteurs</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Function</h4>
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
