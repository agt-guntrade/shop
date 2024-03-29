import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {PageConfig, useCookieConsentContext} from '@atsnek/jaen'
import {Heading, Text, Button} from '@chakra-ui/react'
import {ContainerLayout} from '../components/ContainerLayout'
import {BreadcrumbsBanner} from '../components/molecules/BreadcrumbsBanner'

const PrivacyPage: React.FC<PageProps> = ({path}) => {
  const cc = useCookieConsentContext()

  return (
    <>
      <BreadcrumbsBanner path={path} title="Datenschutz" />
      <ContainerLayout>
        <Heading as="h1" size="lg" fontWeight="extrabold" pb={4}>
          Datenschutz
        </Heading>
        <Heading as="h4" size="md" mt="4">
          Ihrer Einwilligung zur Datenverarbeitung
        </Heading>

        <Text>
          Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
          Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
          Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
          formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </Text>

        <Heading as="h4" size="md" mt="4">
          Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
        </Heading>

        <Text>
          Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
          Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen
          ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
          Sitz unseres Unternehmens befindet. Der folgende Link stellt eine
          Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{' '}
          <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">
            https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
          </a>
          .
        </Text>

        <Heading as="h4" size="md" mt="4">
          Recht auf Datenübertragbarkeit
        </Heading>

        <Text>
          Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
          Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
          die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </Text>

        <Heading as="h4" size="md" mt="4">
          Recht auf Auskunft, Berichtigung, Sperrung, Löschung
        </Heading>

        <Text>
          Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an
          uns wenden.
        </Text>

        <Heading as="h4" size="md" mt="4">
          SSL- bzw. TLS-Verschlüsselung
        </Heading>

        <Text>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
          Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
          über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
          erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile
          Ihres Browsers und am Schloss-Symbol in der Browserzeile.
        </Text>

        <Heading as="h4" size="md" mt="4">
          Cookies
        </Heading>

        <Text>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
          Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei,
          unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </Text>

        <Text>
          Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende
          Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere
          Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
          Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website
          wiederzuerkennen.
        </Text>

        <Text>
          Mit einem modernen Webbrowser können Sie das Setzen von Cookies
          überwachen, einschränken oder unterbinden. Viele Webbrowser lassen
          sich so konfigurieren, dass Cookies mit dem Schließen des Programms
          von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
          eingeschränkte Funktionalität unserer Website zur Folge haben.
        </Text>

        <Text>
          Das Setzen von Cookies, die zur Ausübung elektronischer
          Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
          haben wir ein berechtigtes Interesse an der Speicherung von Cookies
          zur technisch fehlerfreien und reibungslosen Bereitstellung unserer
          Dienste. Sofern die Setzung anderer Cookies (z.B. für
          Analyse-Funktionen) erfolgt, werden diese in dieser
          Datenschutzerklärung separat behandelt.
        </Text>

        <Heading as="h4" size="md" mt="4">
          Cloudflare
        </Heading>

        <Text>
          Unsere Website verwendet das Content Delivery Network Cloudflare. Der
          Sinn eines Content Delivery Networks ist es, Ladezeiten zu verkürzen
          und Ausfällen vorzubeugen. Dies ist ein US-amerikanischer Dienst.
          Verwendet werden dafür von uns ausschließlich technisch notwendige
          Cookies. Verarbeitet werden hierbei Daten wie z.B.: IP-Adresse,
          Kontakt- und Protokollinfos, Sicherheitsfingerabdrücke und
          Leistungsdaten für Websites. Die Verarbeitung erfolgt unter Einhaltung
          der DSGVO und diese Daten werden in der Regel nach 24 Stunden wieder
          gelöscht, sollte es zu keinen Auffälligkeiten kommen. Für mehr
          Informationen besuchen Sie bitte:{' '}
          <a href="https://www.cloudflare.com/de-de/learning/what-is-cloudflare/">
            https://www.cloudflare.com/de-de/learning/what-is-cloudflare/
          </a>
          .
        </Text>
        {cc?.validConsent() ? (
          <>
            <Button
              variant="link"
              mt="4"
              mb="2"
              color="green"
              onClick={() => {
                cc?.showSettings(200)
              }}>
              Sie haben Cookies akzeptiert.
            </Button>
          </>
        ) : (
          <Button
            variant="link"
            mt="4"
            mb="2"
            onClick={() => {
              cc?.showSettings(200)
            }}>
            Sie haben die Cookies nicht akzeptiert.
          </Button>
        )}
      </ContainerLayout>
    </>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default PrivacyPage

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: 'Datenschutz',
  childTemplates: []
}
