import React from 'react'
import Link from 'gatsby-link'
import {Grid, Cell, Paper, Media, Divider, Avatar, FontIcon, InfoIcon} from 'react-md'
import ProfilePhoto from '../../public/eomateus.jpeg'
import ContactList from '../components/contact_list'

const GitHubLink = <a href="https://github.com/MTRecouso" ></a>

const contactListOptions = {
  listClass: "no-bg",
  listTextClass: "black-text",
  elements: [
    {
      text: "GitHub",
      avatar: "fab fa-github",
      link: "https://github.com/MTRecouso"
    },
    {
      text: "Linkedin",
      avatar: "fab fa-linkedin",
      link: "https://br.linkedin.com/in/mateus-recouso-cardoso-075922127"
    },
    {
      text: "Email: mateus.recouso@hotmail.com",
      avatar: "fas fa-envelope",
      link: "mailto:mateus.recouso@hotmail.com"
    },
  ]
}

const IndexPage = () => (
  <div>
  <div className="title-container">
  <Grid>
      <Cell desktopSize={12} phoneSize={4}>
        <h1 className="page-title">Mateus Recouso <Avatar icon={<FontIcon iconClassName="fas fa-code" />} /> </h1> 
      </Cell>
  </Grid>
  </div>
  <Paper className="white-bg md-cell md-cell--12 md-grid">
    <section className="md-cell md-cell--3-tablet md-cell--4-desktop">
      <Media aspectRatio="1-1">
        <img src={ProfilePhoto} alt="Foto de perfil" />
      </Media>
    </section>
    <section className="md-cell md-cell--5-tablet md-cell--8-desktop">
      <h2 className="intro-title black-text">Sobre mim</h2>
      <p className="black-text">
        Sou um desenvolvedor Full-Stack em processo de formação. Estou no último semestre
        da minha graduação em Análise e Desenvolvimento de Sistemas pala Fatec Rubens Lara e já trabalhei/realizei projetos
        em PHP e Javascript(Meteor), desenvolvendo tanto para back-end quanto para front-end. 
      </p>
      <p className="black-text">
        Ao desenvolver, gosto de entender 
        o funcionamento de uma aplicação por completo e tomar decisões avaliando os impactos que elas podem causar. Também busco
        sempre aprender tecnologias novas. Atualmente tenho estudado Node.js, React e Haskell.
      </p>
      <ContactList options= {contactListOptions} />
    </section>
  </Paper>
  </div>
)

export default IndexPage
