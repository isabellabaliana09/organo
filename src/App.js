import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Análise e Desenvolvimento de Sistemas',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Suporte',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },

    {
      nome: 'Suporte Técnico',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },

    {
      nome: 'Infraestrutura',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    },

    {
      nome: 'Comercial',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },

    {
      nome: 'RH',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
      <Rodape/>
    </div>
  );
}

export default App;