import css_card from './Card.module.css'

import batman from '../../assets/batman.jpg'

export default function Card( {name, homepage, html_url, description} ) {
  return (
    <>
      <section className={css_card.card}>
        <img src={batman} alt="Imagem do projeto"/>
        <h2>{name}</h2>
        <p>{description}</p>
        <nav>
          <a href={html_url} target='_blank'><button>Repositório <i class="bi bi-github"></i></button></a>
          <a href={homepage} target='_blank'><button className={css_card.homepage_button}>Ver projeto<i class="bi bi-arrow-right"></i></button></a>
        </nav>
      </section>
    </>
  )
}