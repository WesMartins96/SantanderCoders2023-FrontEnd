import MeuComponente from "./components/MeuComponente"

function App() {
  

  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>
      <MeuBotao conteudo='Salvar'/>
      <MeuBotao conteudo='Voltar'/>
      <MeuBotao conteudo='Deletar'/>
    </div>
  )
}



function MeuBotao(props){
  return(
    <button>{props.conteudo}</button>
  )
}


export default App
