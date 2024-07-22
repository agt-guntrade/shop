import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {Field, PageConfig, useCookieConsentContext} from 'jaen'
import {Heading, Text, Button} from '@chakra-ui/react'
import {ContainerLayout} from '../components/ContainerLayout'
import {BreadcrumbsBanner} from '../components/molecules/BreadcrumbsBanner'

const PrivacyPage: React.FC<PageProps> = ({path}) => {
  const cc = useCookieConsentContext()

  return (
    <>
      <BreadcrumbsBanner path={path} title="Datenschutz" />
      <ContainerLayout>
        <Field.Text
          name="content"
          defaultValue={`Datenschutzerklärung

Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.

Datenspeicherung

Wir weisen darauf hin, dass zum Zweck des einfacheren Einkaufsvorganges und zur späteren Vertragsabwicklung von Webshop-Betreiber im Rahmen von Cookies die IP-Daten des Anschlussinhabers gespeichert werden, ebenso wie persönliche Daten des Käufers.

Darüber hinaus werden zum Zweck der Vertragsabwicklung folgende Daten auch bei uns gespeichert: Name, Anschrift, Email, Telefonnummer. Die von Ihnen bereit gestellten Daten sind zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen erforderlich. Ohne diese Daten können wir den Vertrag mit Ihnen nicht abschließen. Eine Datenübermittlung an Dritte erfolgt nicht, mit Ausnahme der Übermittlung an Transportunternehmen sowie an unseren Steuerberater zur Erfüllung unserer steuerrechtlichen Verpflichtungen.

Nach Abbruch des Einkaufsvorganges werden die bei uns gespeicherten Daten gelöscht. Im Falle eines Vertragsabschlusses werden sämtliche Daten aus dem Vertragsverhältnis bis zum Ablauf der steuerrechtlichen Aufbewahrungsfrist (7 Jahre) gespeichert.

Die Daten Name, Anschrift gekaufte Ware und Kaufdatum werden darüber hinaus gehend bis zum Ablauf der Produkthaftung (10 Jahre) gespeichert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des §96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit 2 (notwendig zur Vertragserfüllung) der DSGVO.

Cookies

Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.

Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.

Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.

Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.

Newsletter

Sie haben die Möglichkeit, über unsere Website unseren Newsletter zu abonnieren. Hierfür benötigen wir Ihre E-Mail-Adresse und Ihre Erklärung, dass Sie mit dem Bezug des Newsletters einverstanden sind.

Um Sie zielgerichtet mit Informationen zu versorgen, erheben und verarbeiten wir außerdem freiwillig gemachte Angaben zu Interessengebieten.

Das Abo des Newsletters können Sie jederzeit stornieren. Senden Sie Ihre Stornierung bitte an folgende E-Mail-Adresse: office@agt-guntrade.at

Wir löschen anschließend umgehend Ihre Daten im Zusammenhang mit dem Newsletter-Versand.

Ihre Rechte

Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.

Sie erreichen uns unter folgenden Kontaktdaten:

AGT Gun Trade GmbH Ressnig 20 9170 Ferlach /Austria Telefonnummer: 0650 720 19 60 E-Mail: office@agt-guntrade.at`}
        />

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

export {Head} from 'jaen'

export const pageConfig: PageConfig = {
  label: 'Datenschutz',
  childTemplates: []
}
