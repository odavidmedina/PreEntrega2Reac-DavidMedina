import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ILC.css'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { categoria } = useParams()

  useEffect(() => {
    getProducts()
      .then(data => {
        const productosFiltrados = categoria ? data.filter(producto => producto.categoria === categoria) : data
        setProductos(productosFiltrados)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [categoria])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Cargando...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className='error'>
        <h2>{error.message}</h2>
      </div>
    )
  }

  return (
    <div>
      {
        productos.length > 0 && <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer
