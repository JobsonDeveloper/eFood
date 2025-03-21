import Logo from '../../assets/icons/logo.png'
import ImageInstagram from '../../assets/icons/instagram.png'
import ImageFacebook from '../../assets/icons/facebook.png'
import ImageTwitter from '../../assets/icons/twitter.png'

import { LogoComp, TextComp } from '../../Styles'
import * as S from './Styles'

const Footer = () => {
  return (
    <S.FooterComp>
      <LogoComp src={Logo} alt="Logo" />

      <S.SocialLinksComp>
        <li>
          <img src={ImageInstagram} alt="Instagram" />
        </li>
        <li>
          <img src={ImageFacebook} alt="Facebook" />
        </li>
        <li>
          <img src={ImageTwitter} alt="Twitter" />
        </li>
      </S.SocialLinksComp>

      <TextComp fontSize={10}>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </TextComp>
    </S.FooterComp>
  )
}

export default Footer
