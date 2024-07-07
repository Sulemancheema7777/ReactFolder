import {Provider} from 'react-redux'
import Addtodo from './components/Addtodo/Addtodo'
import Itemtodo from './components/Itemtodo/Itemtodo'
import { todoStore } from './app/store'


function App() {
  return (
    <Provider store={todoStore}>
      <div className='text-center sm:4/4 md:w-2/4 ml-auto mr-auto mt-10 p-6'>
        <Addtodo/>
        <Itemtodo/>
      </div>
    </Provider>
  )
}

export default App
