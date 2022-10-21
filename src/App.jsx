import AppLetras from './components/AppLetras'
import { LetrasProvider } from './context/LetrasProvider'

const App = () => {
    return (
        <LetrasProvider>
            <AppLetras/>
        </LetrasProvider>
    )
}

export default App
