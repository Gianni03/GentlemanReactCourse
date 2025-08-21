import { useFetch} from './hooks';
import './App.css'

const url = 'https://api.example.com/data'

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {

const {data, loading, error} = useFetch<Data>(url);


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>UPS! hay un error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
