import { InstagramEmbed } from 'react-social-media-embed';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Area1Contact = () => {
  return (
    <section className='py-5'>
      <Container>
        <Row>
          <div className="col-md-6 text-center text-md-start mb-5 mb-mb-0">
            <h3 className="mb-5">Nossos Contatos</h3>
            <div className="row text-uppercase ">
              <ul className="">
                <li className="mb-3 fs-5 fw-semibold">redes sociais</li>
                <li className="mb-2 ">
                  <a href="" className='text-green fw-semibold nav-link'><AiOutlineInstagram />Construpaceucalipto</a>
                </li>
                <li className="mb-2"><a href="" className='text-green fw-semibold nav-link'><AiOutlineFacebook />Formaodeouro </a></li>
              </ul>
              <ul className="">
                <li className="mb-3 fs-5 fw-semibold">contato</li>
                <li className="mb-2 text-green fw-semibold"><a href="" className='text-green fw-semibold nav-link text-break'><AiOutlineMail /> vendas@Construpaceucalipto.com.br</a></li>
              </ul>
              <ul className="">
                <li className="mb-3 fs-5 fw-semibold">telefones</li>
                <li className="mb-2  text-green fw-semibold"><AiOutlinePhone /> (11)4786-2493</li>
                <li className="mb-2  text-green fw-semibold"><AiOutlineWhatsApp /> (11)91105-2709</li>
              </ul>
              <ul className="">
                <li className="mb-3 fs-5 fw-semibold">nosso endereço</li>
                <li className="mb-2  text-green fw-semibold"><FiMapPin /> Av. Felicio Baruti, 16 Cidade Intercap, Taboao da Serra - SP, 06757-000, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt"/>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Area1Contact
