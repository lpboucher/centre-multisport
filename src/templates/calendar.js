import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Container from '../structural/Container';
import Flex from '../structural/Flex';
import Heading from '../generic/Heading';
import Text from '../generic/Text';
import ImageWrapper from '../generic/ImageWrapper';
import LogoLine from '../components/LogoLine';

import dispos1 from '../assets/image/dispos1.png';
import dispos2 from '../assets/image/dispos2.png';
import dates from '../assets/image/datesimportantes.png';

const SectionHeading = styled(Heading)`
  margin-top: 20px;
`
const SectionSeparator = styled(Container)`
  width: ${props => props.width};
`
const WithStyle = styled(Text)`
  & > span {
    font-weight: bold;
  }

  & > a {
    font-weight: bold;
    text-decoration: underline;
  }
`

const SectionNavigation = styled(Heading)`
  margin: 10px 40px;
  cursor: pointer;
`

const scrollToSection = (yCoordinate) => {
  window.scrollTo({top: yCoordinate,behavior: 'smooth'});
}

const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
}

const CalendarPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <About {...data.contentfulCalendar}/>
        {/*<Container background="primaryDark">
          <SectionHeading>NAVIGUEZ VERS:</SectionHeading>
          <SectionNavigation onClick={() => scrollToSection(351)}>CALENDRIER EN LIGNE</SectionNavigation>
          <SectionNavigation onClick={() => scrollToSection(522)}>DISPONIBILITÉS ACTUELLES</SectionNavigation>
          <SectionNavigation onClick={() => scrollToSection(2200)}>ÉVÉNEMENTS SPÉCIAUX À VENIR</SectionNavigation>
          <SectionNavigation onClick={() => scrollToSection(2693)}>DATES IMPORTANTES À RETENIR EN 2020</SectionNavigation>
          <SectionHeading style={{marginTop: '40px'}}>CALENDRIER EN LIGNE</SectionHeading>
          <Text>
            {`Bientôt sur cette page apparaitra un lien PROLOC pour voir en ligne notre calendrier de réservations pour l’été 2020 et éventuellement la saison hiver 2020-2021.\n\nVous pourrez y voir les plages disponibles et faire des demandes de réservation en ligne.`}
          </Text>
          <SectionHeading>DISPONIBILITÉS ACTUELLES</SectionHeading>
          <WithStyle>
            {`Veuillez trouver ci-dessous nos disponibilités lors des fins de semaines jusqu’à la fin de notre session d’hiver le vendredi 1er mai. Ce calendrier est sujet à changements sans préavis. Pour faire une réservation et/ou vérifier la disponibilité de la période voulue, veuillez nous contacter par courriel au : `}<a href="mailto:multisportsrosemere@outlook.com">multisportsrosemere@outlook.com</a>
            {`\n\nPour nos disponibilités de semaine, n’hésitez pas à nous faire parvenir un courriel en nous spécifiant un premier et un deuxième choix de journée, et les heures que vous aimeriez.`}
          </WithStyle>
          <ImageWrapper width="100%" margin="20px auto">
              <img src={dispos1} alt="ext"/>
          </ImageWrapper>
          <ImageWrapper width="100%" margin="20px auto">
              <img src={dispos2} alt="ext"/>
          </ImageWrapper>
          <SectionHeading>ÉVÉNEMENTS SPÉCIAUX À VENIR</SectionHeading>
          <Flex>
            <SectionSeparator width="20%" fullVertical full>
            <SectionHeading>2-6 mars</SectionHeading>
            </SectionSeparator>
            <SectionSeparator width="80%" fullVertical full>
              <SectionHeading>Semaine de relâche / pick-up soccer / party d’anniversaire</SectionHeading>
              <WithStyle>
              <span>Party d’anniversaire</span>{` ou simplement un prétexte pour une `}<span>sortie différente avec les enfants et leurs amis</span>{`, profitez de la semaine de relâche pour amener les jeunes à venir brûler leur énergie sur un terrain de soccer du Centre multisports de Rosemère. Louez un terrain, amenez votre nourriture, puis un portable avec un film pour finir en beauté. Location du terrain : 145 $ taxes incluses.\n\nEt si vous êtes plus un fana du sport et voulez jouer un match amical avec des amis ou les gens rencontrés sur place, payez à l’heure et participez à notre activité de `}<span>pick-up soccer</span>{`. 10 $ l’heure. Souliers de soccer et protèges tibias sont de mise.`}
              </WithStyle>
            </SectionSeparator>
          </Flex>
          <Flex>
            <SectionSeparator width="20%" fullVertical full>
            <SectionHeading>17-20 mars</SectionHeading>
            </SectionSeparator>
            <SectionSeparator width="80%" fullVertical full>
              <SectionHeading>« Le 1000 à Gilles ».</SectionHeading>
              <WithStyle>
              {`Venez encourager Gille Gosselin, co-propriétaire du Studio Xollox du Centre multisports de Rosemère, alors qu’il tentera de pédaler pendant 48 heures pour amasser des fonds pour la maison de soins palliatifs située à St-Eustache. Encore mieux, venez pédaler avec lui pour un don de 10 $ l’heure. Jour ou nuit, le Centre multisports sera ouvert pour accueillir les gens qui veulent encourager ce feu du vélo, et de la cause qu’est Sercan. Pour plus d’information visitez : `}<a target="_blank" href="https://www.facebook.com/studioxollox">facebook.com/studioxollox</a>
              </WithStyle>
            </SectionSeparator>
          </Flex>
          <SectionHeading>DATES IMPORTANTES À RETENIR EN 2020</SectionHeading>
          <ImageWrapper width="100%" margin="20px auto">
              <img src={dates} alt="ext"/>
          </ImageWrapper>
</Container>*/}
    <LogoLine background="primaryDark" header="partners"/>
    </Layout>
);

export const query = graphql`
  query ($slug: String!, $locale: String!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    contentfulCalendar(slug: {eq: $slug}, node_locale: {eq: $locale}) {
        title
        slug
        content {
            json
        }
        seoKeywords
        scrollLinks
        node_locale
    }
  }
`;
export default CalendarPage;
