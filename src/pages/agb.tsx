import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {Field, PageConfig} from '@atsnek/jaen'
import {ContainerLayout} from '../components/ContainerLayout'
import {BreadcrumbsBanner} from '../components/molecules/BreadcrumbsBanner'

const AGBPage: React.FC<PageProps> = ({path}) => {
  return (
    <>
      <BreadcrumbsBanner title="AGB" path={path} />
      <ContainerLayout>
        <Field.Text
          name="content"
          defaultValue={`Allgemeine Geschäftsbedingungen der Firma AGT Gun Trade GmbH

          (§ 1) Geltung gegenüber Unternehmern und Begriffsdefinitionen
          
          (1) Die nachfolgenden allgemeinen Geschäftsbedingungen gelten für die gesamte Geschäftsbeziehung zwischen Verkäufer und Käufer in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
          
          AGT Gun Trade GmbH und der Kunde sind sich darüber einig, dass diese Allgemeinen Geschäftsbedingungen in ihrer jeweils gültigen Fassung nicht nur für den vorliegenden Geschäftsfall, sondern auch für alle künftigen Geschäftsfälle gelten, auch wenn im Einzellfall nicht ausdrücklich auf Sie Bezug genommen wird. Entgegenstehende, diese Allgemeinen Geschäftsbedingungen ergänzende oder von diesen AGB’s abweichende Bedingungen des Kunden, gelten selbst bei Kenntnis nicht als vereinbart und wird Ihnen hiermit ausdrücklich  widersprochen. Dies gilt selbst dann, wenn AGT Gun Trade GmbH in einer späteren Vertragsurkunde oder sonstigen Unterlagen, in denen der Kunde auf andere Geschäftsbedingungen verweist, diesen nicht ausdrücklich widerspricht.
          
          Diese AGB’s gelten auch für künftige Geschäfte des Kunden mit AGT Gun Trade GmbH im Ausland.
          
          (2) Verbraucher in Sinne dieser Geschäftsbedingungen ist jede natürliche Person, die ein Rechtsgeschäft zu einem Zwecke abschließt, der weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit sowie privaten Tätigkeit zugerechnet werden kann.
          
          (§ 2) Zustandekommen eines Vertrages
          
          (1) Vorvertragliche Mitteilungen, insbesondere Angebote, Beschreibungen, Kostenvoranschläge und dergleichen von AGT Gun Trade GmbH erfolgen freibleibend und unverbindlich. Die folgenden Regelungen über den Vertragsabschluss, gelten für Bestellungen über unsere
          Website: www.agt-guntrade.at
          
          (2) Im Falle des Vertragsschlusses kommt der Vertrag mit
          
          AGT Gun Trade GmbH
          Ressnig 20
          9170 Ferlach
          Telefonnummer: 0650 7201960 
          E-Mail: office@agt-guntrade.at
          
          sowie 
          
          AGT Gun Trade GmbH
          Wildfellnerstrasse 22/1
          4910 Ried im Innkreis
          Telefonnummer: 0676 6510977
          Email: info@agt-guntrade.at
          
          UID-Nummer: ATU79621214
          
          Steuernummer: 57 276/5907
          
          Firmenbuchnummer: FN 608296 d
          
          
          
          zustande.
          
          
          
          (3) Durch das Absenden einer Bestellung über den Warenkorb oder Email gibt der Käufer ein verbindliches Angebot zum Kauf der bestellten Waren ab. Der Käufer hat da jedoch noch das Recht ohne Angabe von Gründen Angebote zu ändern, abzulehnen oder auch zu akzeptieren.
          
          
          
          (§ 3) Preise, Versandkosten, Rücksendekosten
          
          Alle Preise sind Endpreise in Euro und enthalten die österreichische gesetzliche Umsatzsteuer. 
          
          Pro Bestellung fallen einmalige Versandkosten, wenn nicht mit dem Kunden anders vereinbart, die dann separat dem Kunden berechnet und in einer Rechnung extra ausgewiesen werden, an.
          
          Bei Teillieferungen fällt die Pauschale jeweils nur einmal an, wenn nicht anders vor dem Kauf vereinbart. Der Vertrag kommt mit der Absendung der Bestellbestätigung durch AGT Gun Trade GmbH an den Kunden zustande. Diese Auftragsbestätigung ist Grundlage des Vertrages und maßgeblich für Inhalt und Umfang der Lieferung.
          Bis zu drei Tagen nach Erhalt der Auftragsbestätigung kann der Kunde Änderungen des Vertrages schriftlich mitteilen, andernfalls Inhalt und Umfang der Auftragsbestätigung als angenommen gelten. Etwaige Änderungswünsche werden erst wirksam, wenn Sse von AGT Gun Trade GmbH bestätigt wurden.
          Spätere Änderungen werden grundsätzlich nicht berücksichtigt. Sollte AGT Gun Trade GmbH dennoch Lieferung nach verspäteten Änderungswünschen des Kunden durchführen, erfolgt dies nur aus Kulanzgründen, ohne dass AGT Gun Trade GmbH dazu verpflichtet ist. Änderungen und Ergänzungen des Kunden zu ihrer Wirksamkeit ausdrücklich der schriftlichen Bestätigung der AGT Gun Trade GmbH.
          
          Besteht ein Widerrufsrecht und wird von diesem Gebrauch gemacht, trägt der Kunde die Kosten der Rücksendung.
          
          (§3a.) Druckfehler, Schreibfehler
          
          Sollten wir nachträglich erkennen, das sich bei Produkt sowie Fotos, Beschreibung, Preise, Menge, Lieferzeit, Email oder sonstiges, ein Fehler eingeschlichen hat, werden wir Sie darüber umgehend informieren. Sie können dann den getätigten Auftrag unter den geänderten Konditionen bzw. Bedingungen akzeptieren und bestätigen oder selbigen zu stornieren. Ebenso sind wir berechtigt, ohne Angaben von Gründen, von diesem Kaufvertrag zurückzutreten.
          
          
          
          (§ 4) Zahlungsbedingungen
          
          Der Kunde hat ausschließlich folgende Möglichkeiten zur Zahlung:
          
          1.Vorabüberweisung nach Geldeingang wird die Bestellung für die Terminabholung beiseite gelegt.
          
          2.Vor Ort bei Abholung in Bar, mit Bankomat- oder Kreditkarte sowie Handyüberweisung (zB via Netbanking).
          
          3. Zahlung nach Erhalt der Rechnung ohne weiteren Abzug, wenn nicht auf der Rechnung anders ausgewiesen ist. (Ausstellungsdatum: Rechnung = Lieferdatum)Bei Zahlungsverzug werden je nach Mahnstufe, Mahngebühren und Verzugszinsen in Rechnung gestellt. Verzugszinsen werden zu dem Zeitpunkt aktuellen Zinssatz verrechnet.Der Käufer verpflichtet sich, alle dem Verkäufer durch Zahlungsverzug entstandenen Kosten der Rechtsverfolgung zu erstatten. 
          
          4. Weitere Zahlungsarten werden nicht angeboten und werden zurückgewiesen, wenn nicht mit dem                             Kunden vor dem Kauf, eine andere Zahlungsart schriftlich vereinbart wurde.
          
          5. Der Rechnungsbetrag ist nach Zugang der Vorausrechnung (nicht die mit der Bestellbestätigung kommt, sondern erst mit den Versandkosten individuell ausgefertigt wird), die alle Angaben für die Überweisung enthält und mit E-Mail verschickt wird, auf das dort angegebene Konto, vorab ohne
          Abzug, zu überweisen.
          
          (§ 5) Liefer- und Versandbedingung:
          
          1. Lieferung und Transport erfolgen, sofern nichts anderes vereinbart ist, ab Lieferort des Verkäufers. Die Lieferung erfolgt, wenn nicht vorher anders vereinbart, per DPD oder Post.
          
          Die Ware wird nach bestätigtem Zahlungseingang erst Versandfertig gemacht und die zum Zeitpunkt mögliche Versandzeit mitgeteilt und versendet. 
          
          
          
          2. Der Kunde wird über Verzögerungen wie Ausverkauft, Nachbestellungen oder Sonstiges umgehend informiert. Der Verkäufer bezieht sich auf sein Recht „Zwischenverkauf vorbehalten“.
          
          Hat der Anbieter ein dauerhaftes Lieferhindernis, insbesondere höhere Gewalt durch eigenen Lieferanten, obwohl rechtzeitig ein entsprechendes Deckungsgeschäft getätigt wurde, nicht zu vertreten, so hat der Anbieter das Recht, insoweit von einem Vertrag mit dem Kunden zurückzutreten. 
          
          
          
          3. Die Transportdauer beträgt in der Regel 1-4 Werktage in Österreich. In die restlichen weiter entfernten EU-Länder, je nach Vorgabe des Transporteurs, ist mit dem Verkäufer Vorabsprache zu halten.
          
          4. Bei Großartikel oder Sperr Güter wird die Firma AGT Gun Trade GmbH, nach vorheriger Absprache mit dem Käufer, eine Transportfirma/Spedition den Auftrag erteilen – die sich mit Ihnen direkt in Verbindung setzt – um einen Termin für die Zustellung zu vereinbaren.
          
          5. Bei Klein- Paketsendungen nehmen wir uns das Recht vor und wählen für Sie den kostengünstigsten Transporteur aus wie z.b. die Firma DPD oder Post.
          
          6. Wird die Ware auf Wunsch des Bestellers an diesen versandt, so geht mit der Absendung an den Besteller, spätestens mit Verlassen des Lagers/Räumlichkeiten vom Versender, die Gefahr des zufälligen Untergangs oder der zufälligen Verschlechterung der Ware, auf den Besteller über.
          
          7. Sofern wir dies in der Produktbeschreibung nicht deutlich anders angegeben haben, sind alle von uns angebotenen Artikel sofort Lieferbar. „ Zwischenverkauf vorbehalten “
          
          8. Hat der Verbraucher die Zahlung per Vorkasse gewählt, so versenden wir die Ware nicht vor Zahlungseingang.
          
          9. Zu Punkt 8 muss dazu noch folgendes festgehalten werden und der Kunde stimmt dies mit seinen Kauf zu: Waren welche gesetzlich in Österreich nicht versendet werden dürfen, nur von ihm persönlich abgeholt werden müssen, nach Terminvereinbarung. Sollte die Abholung nicht erfolgen,
          
          hat der Käufer die dadurch entstandenen Kosten/Schäden dem Verkäufer zu erstatten. Der Verkäufer 
          
          nimmt sich das Recht der AGB’s heraus, des vom Kunden überwiesenen Kaufbetrag abzuziehen und den Restbetrag dem Kunden zurück zu überweisen. Sollten die dadurch vom Käufer verursachten Kosten oder dadurch entstandenen Schäden oder Sonstiges, den Überweisungsbetrag überschreiten, verpflichtet sich der Käufer dafür aufzukommen.
          
          
          
          10. Transport sowie eigenen vereinbarten Transportkosten auch bei Umtausch, Reparatur oder Sonstiges, wenn nicht anders schriftlich mit dem Verkäufer vereinbart, trägt ausschließlich der Käufer selbst.
          
          
          
          11. Die angegebenen Preise verstehen sich zuzüglich Mehrwertsteuer und behält sich AGT Gun Trade GmbH das Recht vor, Preisanpassungen vorzunehmen, falls sich die Berechnungsgrundlagen geändert haben.
          
          
          
          (§ 6) Widerrufsbelehrung & Widerrufsrecht
          
          Sie haben das Recht, binnen vierzehn Tagen mit Angaben von Gründen diesen Vertrag zu widerrufen.
          
          Die Widerrufsfrist beträgt vierzehn Tage, ab dem Tag, wo Sie die Ware erhalten haben.
          
          Im Falle eines Kaufvertrags: An dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
          
          Im Falle eines Vertrages über mehrere Waren, die der Verbraucher im Rahmen einer einheitlichen Bestellung bestellt hat und die getrennt geliefert werden: an dem Sie oder ein von Ihnen benannter Dritter, der nicht Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
          
          Im Falle eines Vertrags über die Lieferung einer Ware in mehreren Teilsendungen oder Stücken: an dem Sie oder ein von Ihnen benannter Dritter, der nicht Beförderer ist, die letzte Teilsendung oder das letzte Stück in Besitz genommen haben bzw. hat.
          
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
          
          AGT Gun Trade GmbH
          Ressnig 20 
          9170 Ferlach
          Telefonnummer: 0650 7201960
          Email: office@agt-guntrade.at
          
          mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter eingeschriebener Brief oder per E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. 
          
          Sie können auch dafür das beigefügte Muster “Widerrufsformular” verwenden, das jedoch nicht vorgeschrieben ist.
          
          Widerrufsformular: https://www.wko.at/wien/gewerbe-handwerk/berufsfotografie/muster-widerrufsformular.pdf
          
          Machen Sie von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich (z. b. per E-Mail) eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. Folgen des Widerrufs den wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahmen der zusätzlichen Kosten, die sich daraus ergeben, dass Sie einer andere Art der Lieferung als die von uns angebotene, günstige Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          
          Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
          
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben.
          Die Frist ist gewährt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
          
          – Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. –
          
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf den Rücktransport einen Transportschaden, fehlende Teile bzw. die Ware bei uns nicht so zurück kommt wie sie Ausgeliefert wurde.
          
          — Ende der Widerrufsbelehrung —
          
          Das Widerrufsrecht besteht nicht bei Verträgen:
          
          – zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind,
          
          – zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde,
          
          – zur Lieferung von Waren, wenn diese nach der Lieferung auf Grund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden.
          
          ( § 7) Eigentumsvorbehalt
          
          (1) Wir behalten uns das Eigentum an der gelieferten Sache bis zur vollständigen Zahlung sämtlicher Forderungen aus dem Liefervertrag vor. Dies gilt auch für alle zukünftigen Lieferungen, auch wenn wir uns nicht stets ausdrücklich hierauf berufen. Wir sind berechtigt, die Kaufsache zurückzunehmen, wenn der Besteller sich vertragswidrig verhält.
          
          (2) Der Besteller ist verpflichtet, die Kaufsache pfleglich zu behandeln. Insbesondere ist er verpflichtet, egal ob eigen Transport oder bei Versand, die Gesetzlichen Bestimmungen einzuhalten und diese auf eigene Kosten gegen Bruch, Diebstahl-, Feuer- und Wasserschäden oder sonstige ausreichend zum Neuwert und bei gebrauchten Waren zu den derzeitigen Zeitpunkt des Wertes zu versichern. Muss in diesem Fall ein Gerichtlich Vereidigter Sachverständiger Hinzugezogen werden, auch bei Streitigkeiten. Verpflichtet sich der Käufer alle anfallenden Kosten dafür zutragen.
          
          (3) Der Besteller ist zur Weiterveräußerung der Vorbehalts Ware im normalen Geschäftsverkehr nicht berechtigt. Die Forderungen des Abnehmers aus der Weiterveräußerung der Vorbehalts Ware tritt der Besteller schon jetzt an uns in Höhe des mit uns vereinbarten Faktura Endbetrages (einschließlich Mehrwertsteuer) ab.
          
          Diese Abtretung gilt unabhängig davon, ob die Kaufsache ohne oder nach Verarbeitung weiterverkauft worden ist. Der Besteller bleibt zur Einziehung der Forderung auch nach der Abtretung ermächtigt. Unsere Befugnis, die Forderung selbst einzuziehen, bleibt davon unberührt. Wir werden jedoch die Forderung nicht einziehen, solange der Besteller seinen Zahlungsverpflichtungen aus den vereinnahmten Erlösen nachkommt, nicht in Zahlungsverzug ist und insbesondere kein Antrag auf Eröffnung eines Insolvenzverfahrens gestellt ist oder Zahlungseinstellung vorliegt.
          
          (4) Die Be- und Verarbeitung oder Umbildung der Kaufsache durch den Besteller erfolgt stets Namens und im Auftrag für uns. In diesem Fall setzt sich das Anwartschaftsrecht des Bestellers an der Kaufsache an der umgebildeten Sache fort. Sofern die Kaufsache mit anderen, uns nicht gehörenden Gegenständen verarbeitet wird, erwerben wir das Miteigentum an der neuen Sache im Verhältnis des objektiven Wertes unserer Kaufsache zu den anderen bearbeiteten Gegenständen zur Zeit der Verarbeitung. Dasselbe gilt für den Fall der Vermischung. Sofern die Vermischung in der Weise erfolgt, dass die Sache des Bestellers als Hauptsache anzusehen ist, gilt als vereinbart, dass der Besteller uns anteilmäßig Miteigentum überträgt und das so entstandene Alleineigentum oder Miteigentum für uns verwahrt. Zur Sicherung unserer Forderungen gegen den Besteller tritt der Besteller auch solche Forderungen an uns ab, die ihm durch die Verbindung der Vorbehalts Ware mit einem Grundstück gegen einen Dritten erwachsen; wir nehmen diese Abtretung schon jetzt an.
          
          (§ 8) Überlassene Unterlagen bei Warendokumente und Dienstleistungen, wo Dokumente angewendet werden usw.
          
          An allen in Zusammenhang mit der Auftragserteilung dem Besteller überlassenen Unterlagen, wie z. B. Kalkulationen, Verträge, Zeichnungen, Angebotslisten etc., behalten wir uns Eigentums- und Urheberrechte vor. Diese Unterlagen dürfen Dritten nicht zugänglich gemacht werden, es sei denn, wir erteilen dazu dem Besteller unsere ausdrückliche schriftliche Zustimmung. Soweit wir das Angebot des Bestellers nicht innerhalb der Frist von 14 Tagen annehmen, sind diese Unterlagen uns unverzüglich zurückzusenden.
          
          (§ 9) Gewährleistung, Nachbesserung, Haftung, Sicherstellung, Garantieansprüche
          
          1: Sämtliche Angaben der Lieferdaten seitens AGT Gun Trade GmbH sind unverbindlich. Schadenersatzansprüche des Kunden wegen verspäteter Erfüllung sind ausgeschlossen. Bei Eintritt von Hindernissen, insbesondere aufgrund höherer Gewalt, verlängert sich die Lieferfrist. Hierzu zählen auch Maßnahmen im Rahmen von Arbeitskämpfen, insbesondere Streik und Aussperrung, sowie die Nichterteilung entsprechender Ein-/Ausfuhrgenehmigungen. Die Verlängerung der Lieferfrist gilt auch bei unvorhergesehenen Hindernissen und Umständen bei einem Unterlieferanten. AGT Gun Trade GmbH ist berechtigt, die Herstellung und Lieferung um die Dauer der Behinderung zuzüglich einer angemessenen Anlauffrist hinauszuschieben oder vom Vertrag zurückzutreten.
          Die ursprünglich von AGT Gun Trade GmbH angegebenen Lieferfristen können sich auch aufgrund verspäteter und/oder geänderter Bestellungen des Kunden ändern. Teillieferungen und vorzeitige Lieferungen seitens AGT Gun Trade GmbH sind zulässig, wobei jede Teillieferung gesondert in 
          Rechnungen gestellt werden kann.
          Weiters wird hingewiesen, das Lieferung und Transport aus Sicherheitsgründen, sofern nichts anderes vereinbart, von der AGT Gun Trade GmbH organisiert wird und das die Transportkosten zu Lasten des Kunden ergehen und ihm gesondert in Rechnung gestellt wird.
          Unverzüglich nach der Übergabe hat der Kunde die Ware mit der in den § 377,378 HGB vorgeschriebenen Sorgfalt zu untersuchen. Dabei festgestellte Störungen sind der AGT Gun Trade GmbH unverzüglich, unter Angabe von Art und Umfang der Störung, anzuzeigen.
          
          2: Der Verkäufer gewährleistet, dass die gelieferten Waren wie in der Artikelbeschreibung geliefert werden.
          
          Der Verkäufer behält sich des weiteren vor, das minimale Abweichungen vom Zustand des angebotenen Artikels in der Beschreibung, vorkommen können, da es sich nicht immer um Neuware handelt. Die Gewährleistungsfrist beträgt je nach Vereinbarung mit dem Käufer, jedoch nur dann, wenn sie vor dem Kauf schriftlich vereinbart wurde und beginnt somit mit dem Lieferdatum=Rechnungsdatum.
          
          3: Für den Fall, dass die gelieferte Ware fehlerhaft ist, hat der Verkäufer das Recht zur Nachbesserung oder wahlweise Lieferung eines einwandfreien Stücks nach eigenem Ermessen. Schlägt die Nachbesserung nach angemessener Frist fehl, kann der Verkäufer nach seiner Wahl Herabsetzung des Preises oder Rückgängigmachung des Vertrages verlangen. Weitergehende Schadensersatzsprüche sind ausgeschlossen, ebenso eine Haftung für normale Abnutzung. Gewährleistungsansprüche gegen den Verkäufer stehen nur dem unmittelbaren Käufer zu und sind nicht abtretbar.
          
          a: Verbrauchsmaterialien/Garantie:
          
          1: Sollten Sie jedoch sofort nach Erhalt bemerken – dass ein Verbrauchsartikel eines Produkts defekt ist oder eine Leistung nicht korrekt ausgeführt wird – so erhalten Sie umgehend ein Ersatz, falls vorhanden. Spätere Reklamationen, Forderung oder ähnliches werden nicht mehr anerkannt.
          
          2: (Rückporto muss der Kunde tragen – Austauschware kommt Versandkostenfrei)
          
          3: Es gelten grundsätzlich die Garantiebestimmungen des Lieferanten.
          
          4: Der Käufer muss dem Verkäufer Mängel unverzüglich nach Erhalt des Liefergegenstandes schriftlich per Mail oder Brief, eingeschrieben, mitteilen. Mängel, die auch bei sorgfältiger Prüfung innerhalb dieser Frist nicht entdeckt werden und später dem Verkäufer mitgeteilt wurde, werden vom Verkäufer nicht mehr akzeptiert. Versteckte Mängel sind unverzüglich nach dem entdecken zu rügen. Erfolgt die Mängelrüge nicht oder nicht rechtzeitig, gilt die Ware als genehmigt. Die Geltendmachung von Gewährleistungs- und Schadenersatzansprüchen, das Rücktrittsrecht wegen Irrtum sowie ähnliche Rechtsbehelfe wegen Mängel sind in diesem Fall ausgeschlossen. § 933b ABGB findet keine Anwendung.
          
          5: Umtausch oder Wandlung von Produkten erfolgt nur bei Waren, die als fehlerhaft vom Verkäufer/Hersteller anerkannt wurden und die ordnungsgemäß zurückgesandt wurden.
          
          6: Die Haftung beschränkt sich auf den Ersatz der fehlerhaften Ware. Eine Haftung für weitere Schäden und insbesondere für entgangenen Gewinn oder Wiederbeschaffungskosten sind ausgeschlossen, wenn Nachbesserung oder Ersatz der Ware fehlschlagen. Eine Haftung ist in jedem Falle dann ausgeschlossen, wenn ein Schaden durch unvorschriftsmäßige und unsachgemäßen Gebrauch oder Veränderung lt. Hersteller (nicht mehr Original) der gelieferten Ware entstanden ist.
          
          6a: Es wird auch laut Produkthaftungsgesetz keinerlei Haftung der AGT Gun Trade GmbH übernommen, wenn durch Personenschäden, grobe Fahrlässigkeit oder Vorsatz, Ersatz entgangenen Gewinns, sonstiger Folgeschäden oder Vermögensschäden, entgangener Ersparnisse, entgangener Zinsen und sonstiger Schäden aus Ansprüchen Dritter gegen den Kunden einvernehmlich 
          ausgeschlossen und nicht anerkannt wird. 
          
          6b: Die Haftung der AGT Gun Trade GmbH auf Schadenersatz, ist nur bis zur Höhe des für die Ware in Rechnung gestellten Betrages unter Ausschluss der Nebenkosten beschränkt. Etwaige Schadenersatzansprüche verjähren nach Ablauf der Garantieleistung des Herstellers.
          
          
          
          7: Der Käufer ist auf Verlangen des Verkäufers verpflichtet, die gelieferte Ware sofort an den Verkäufer oder an einen von diesem beauftragten Dritten zur Sicherstellung herauszugeben. Darüber hinaus ist der Verkäufer oder ein von ihm beauftragter Dritter berechtigt, die gelieferte Ware abzuholen und zu diesem Zweck auch die Geschäftsräume des Käufers bzw. den Standort der gelieferten Ware zu betreten.
          
          8: Defekte Ware (Hersteller Fehler) von uns übersehen bzw. nicht erkannt kann nur innerhalb von 2 Wochen nach Rechnungsstellung zurückgenommen und gutgeschrieben werden. Nach Ablauf der Frist werden defekte Waren nicht mehr angenommen, Umgetauscht oder Rückerstattet. 
          
          
          
          (§ 10) Datenschutz
          
          Im Zusammenhang mit der Anbahnung, Abschluss, Abwicklung und Rückabwicklung eines Kaufvertrages auf Grundlage dieser AGB werden vom Anbieter Daten erhoben, gespeichert und verarbeitet. Dies geschieht im Rahmen der gesetzlichen Bestimmungen. Der Anbieter gibt keine personenbezogenen Daten des Kunden an Dritte weiter, es sei denn, dass er hierzu gesetzlich verpflichtet wäre oder der Kunde vorher ausdrücklich eingewilligt hat. Die vom Kunden im Wege der Bestellung mitgeteilten Daten werden ausschließlich zur Kontaktaufnahme innerhalb des Rahmens der Vertragsabwicklung bzw. Kauf und nur zu dem Zweck verarbeitet, zu dem der Kunde die Daten zur Verfügung gestellt hat. Nach jeden kauf werden die Daten des Käufers gelöscht, außer der Käufer will das seine Daten für weiter Käufe gespeichert bleiben und dies selbst vor dem Kauf vorgenommen hat. Oder das österreichische Gesetz verlangt es die Kundendaten ewig zu speichern.
          
          
          
          (§ 11) Abtretungs- und Verpfändung Verbot
          
          Ansprüche oder Rechte des Kunden gegen den Anbieter dürfen ohne dessen Zustimmung nicht abgetreten oder verpfändet werden, es sei denn der Kunde hat ein berechtigtes Interesse an der Abtretung oder Verpfändung nachgewiesen. (siehe dazu auch §7 Eigentumsvorbehalt)
          
          
          
          (§ 12) Salvatorische Klausel
          
          Sollte eine oder mehrere Bestimmungen dieses Vertrages ganz oder teilweise rechtsunwirksam sein, so wird die Gültigkeit der übrigen Bestimmungen nicht berührt. An der Stelle der unwirksamen Bestimmungen tritt rückwirkend eine inhaltliche möglichst gleiche Regelung, die dem Zweck des gewollten Regelung am nächsten kommt. Sollte einzelne Bestimmungen des Vertrages einschließlich dieser Regelung ganz oder teilweise unwirksam sein und werden, oder sollte der Vertrag eine Regelungslücke enthalten, bleibt die Wirksamkeit der übrigen Bestimmungen oder Teile solcher Bestimmungen unberührt. Anstelle des unwirksamen und fehlenden Bestimmungen treten die jeweiligen gesetzlichen Regelungen ein. Sollte einzelne Bestimmungen dieses Vertrages unwirksam sein und werden, so berührt dies die Gültigkeit der übrigen Bestimmungen dieses Vertrages nicht. Die Parteien verpflichten sich, unwirksame Bestimmungen durch neu Bestimmungen zu ersetzen, die der in den unwirksamen Bestimmungen enthaltenen Regelungen in rechtlich zulässiger Weise gerecht werden. Entsprechendes gilt für im Vertrag enthaltene Regelungslücke. Zur Behebung der Lücke verpflichtet sich die Parteien auf eine Art und Weise hinzuwirken, die dem am nächsten kommt, was die Parteien nach dem Sinn und Zweck des Vertrages bestimmt hätte, wenn der Punkt von Ihnen bedacht worden wäre.
          
          
          
          (§ 13) Sprache, Gerichtsstand und anzuwendendes Recht
          
          1.Der Vertrag wird in Deutsch abgefAGBasst. 
          
          2. Die weitere Durchführung der Vertragsbeziehung erfolgt in Deutsch. 
          
          3. Es findet ausschließlich das Recht Österreich Anwendung.
          
          4. Gerichtsstand und Erfüllungsort ist bei Streitigkeiten der Hauptsitz der AGT Gun Trade GmbH.
          5. Es gilt das Recht Österreichs unter Ausschluss der Bestimmung des Übereinkommens der            Vereinten Nationen über Verträge des Internationalen Warenverkauf.
          6. Der Gerichtsstand ist das Landesgericht in Klagenfurt am Wörthersee.
          
          
          
          Stand: 2024 (Änderungen vorbehalten)
          
          
          `}
        />
      </ContainerLayout>
    </>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default AGBPage

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: 'AGB | AGT Gun Trade',
  childTemplates: []
}
