import css_projetos from './Projetos.module.css'

import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import { useEffect, useState } from 'react';
import Card from '../../components/Card';


export default function Projetos() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscaDados = async () => {
      const armazenaApi = await fetch('https://api.github.com/users/Paulo-developer/repos')
      const apiArmazenada = await armazenaApi.json();
      setDados(apiArmazenada);
    }
    buscaDados()
  }, [])

  return (
    <>
      <Header />
      <h1>Projetos<span>.</span></h1>
      <section className={css_projetos.section_cards}>
        {
          dados.length > 0 ? (
            dados.map((datas) => <Card
              key={datas.key}
              name={datas.name}
              html_url={datas.html_url}
              homepage={datas.homepage}
              description={datas.description}
            />)
          ) : (
            <p>Buscando dados...</p>
          )

        }
      </section>
      <Footer />
    </>
  )
}