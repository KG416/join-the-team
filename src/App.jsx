import ComponentTemplate from './components/ComponentTemplate'
import Container from './components/Container'
import Register from './views/Register'

const App = () => {
  return (
    <div>
      <Container>
        <Register />
        <ComponentTemplate />
      </Container>
    </div>
  )
}

export default App
