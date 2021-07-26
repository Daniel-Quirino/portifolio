import { Instagram, LinkedIn, GitHub } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

import Wave1 from '../../assets/footer-waves/wave1.svg';
import Wave2 from '../../assets/footer-waves/wave2.svg';
import Wave3 from '../../assets/footer-waves/wave3.svg';

import './styles.scss';

const links = [
  {
    name: 'Instagram',
    icon: <Instagram />,
    href: 'https://www.instagram.com/daniel_pquirino/'
  },
  {
    name: 'Linkedin',
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/danielpiresquirino/'
  },
  {
    name: 'GitHub',
    icon: <GitHub />,
    href: 'https://github.com/Daniel-Quirino'
  },
]

export default function Footer() {
  return (
    <div className='footer'>
      <img className='footer__wave footer__wave--1' src={Wave1} />
      <img className='footer__wave footer__wave--2' src={Wave2} />
      <img className='footer__wave footer__wave--3' src={Wave3} />

      <div className='footer__icons'>
        {links.map((link) => {
          return (
            <Tooltip arrow placement="top" title={link.name} >
              <a href={link.href} className='footer__link' target='_blank'>
                {link.icon}
              </a>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}