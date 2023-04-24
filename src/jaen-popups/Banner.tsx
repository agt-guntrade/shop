import {connectPopup} from '@snek-at/jaen'
import {FiInfo} from '@react-icons/all-files/fi/FiInfo'
import {NotificationBanner} from '../components/organisms/notifications'

export default connectPopup(NotificationBanner, {
  label: 'Benachrichtigungs-Banner',
  description:
    'Dies ist ein Banner, das angezeigt wird, wenn ein Benutzer eine Seite für die erste Mal besucht.',
  conditions: {
    entireSite: true
  },
  triggers: {
    onPageLoad: 1
  },
  advanced: {
    showUntilXPageViews: 10
  },
  modalProps: {},
  modalContentProps: {
    maxH: 'fit-content',
    maxW: '70%',
    borderRadius: '0.5rem',
    boxShadow: 'sm',
    p: '1rem'
  },
  logo: FiInfo,
  imageURL:
    'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png'
})
