
import SignupForm from './components/SignupForm/SignupForm'
import Authenticate from './components/Authenticate/Authenticate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignupForm />
      <Authenticate />
    </>
  )
}

export default App
