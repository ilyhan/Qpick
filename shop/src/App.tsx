import RoutesProvider from "@/router/RoutesProvider"
import { GlobalStyles } from "./common/styles/GlobalStyle"
import { Provider } from "react-redux"
import { store, persistor } from "@/store/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <RoutesProvider />
      </PersistGate>
    </Provider>
  )
}

export default App
