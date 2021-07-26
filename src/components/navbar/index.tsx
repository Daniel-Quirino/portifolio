import Button from '@material-ui/core/Button';
import ContactMail from '@material-ui/icons/ContactMail';

import './styles.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <label className='navbar__user'>
        <span className='navbar__user-name--left'>{'{'}</span>
        <div className='navbar__user-name'>
          <span className='navbar__user-name--left'>{`Daniel`}</span>
          <span className='navbar__user-name--rigth'>{`Quirino`}</span>
        </div>
        <span className='navbar__user-name--rigth'>{'}'}</span>
      </label>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<ContactMail />}
      >
        Entrar em contato
      </Button>
    </div>
  )
}