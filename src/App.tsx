import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async () => { // fetchData es una promesa
    setLoading(true)
    try{
      const response = await fetch('https://api.github.com/users')
      if (!response.ok){
        throw new Error("error al obtener datos")
      }
      const jsonData = await response.json()
      setData(jsonData)
    }
    catch (err) {
      setError(err as string)
    } finally {
      setLoading(false)
    }
  }
  
  // comunicarnos con un endpoint para traer data
  // un endpoint es una entidad externa al componente

  //vamos a usar un hook, useEffect, para hacer una llamada a un endpoint
  // useEffect es un hook que se ejecuta cuando el componente se monta
  // si dice use... es porque es un hook
  // useEffect recibe dos argumentos, el primero es una funcion y el segundo es un array de dependencias
  // el array de dependencias es un array de variables que si cambian, se vuelve a ejecutar el useEffect
  // su uso es para syncroizar el estado del componente con el de la API
  
  useEffect(() => {
    // logica ? cual ? cuando se ejecuta?
    fetchData()
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return <div>UPS! hay un error: {error}</div>
  }
  return (
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
