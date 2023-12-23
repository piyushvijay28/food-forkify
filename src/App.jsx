import { Provider } from "react-redux"
import Body from "./Component/Body"
import { store } from "./Utils/store"

const App = () => {
  return(
    <>
    <div className="main-app-container">
      <Provider store={store}>
      <Body />
      </Provider>
    </div>
    </>
  )
}

export default App