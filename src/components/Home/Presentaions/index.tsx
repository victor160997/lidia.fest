import {
  BackgroundImage,
  BackgroundImage2,
  Container,
  DescriptionGraySquare,
  DescriptionGraySquare2,
  GraySquare,
  GraySquare2,
  ItemsSection,
  ItemsSection2,
  MainTitle,
  SubContainer,
  SubTitle,
} from "./index.styles"

export default function Presentations() {
  return (
    <Container>
      <SubContainer>
        <MainTitle>BEM-VINDO(A) AO ATELIÊ LIDIA FESTAS E DECORAÇÕES</MainTitle>
        <SubTitle>
          Aqui você realiza sua festa ou evento com decorações lindas e modernas
          que vão tornar o seu momento muito mais especial.
        </SubTitle>
        <ItemsSection>
          <BackgroundImage></BackgroundImage>
          <GraySquare></GraySquare>
          <DescriptionGraySquare>
            <p>
              Nós oferecemos decorações completas para o vários tipos de festas
              e ventos. Contamos com a experiência de profissionais
              especializados e dedicados a deixar o seu dia mais especial. Aqui,
              cada detalhe importa e além do cuidado na escolha dos melhores
              items, todos as festas por aqui são únicoa e personalizadas.
            </p>
          </DescriptionGraySquare>
        </ItemsSection>
        <ItemsSection2>
          <BackgroundImage2></BackgroundImage2>
          <GraySquare2></GraySquare2>
          <DescriptionGraySquare2>
            <h1>POSSUÍMOS TAMBÉM NOSSO ESPAÇO PRÓPRIO</h1>
            <p>
              Possuímos um espaço próprio no Salão de Festas Leblon. Nosso local
              possui tudo que seu evento precisa: mesas e cadeiras, brinquedos
              para festas infantis, cozinha com freezer e fogão, banheiros
              amplos e um amplo espaço possibilitando várias formatações e
              configurações de decoração para o seu evento.
            </p>
          </DescriptionGraySquare2>
        </ItemsSection2>
      </SubContainer>
    </Container>
  )
}
