import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProductById(parseInt(id))
            .then(data => setProducto(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return (
            <div className='loading'>
                <h2>Cargando detalles del producto...</h2>
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
            {producto ? <ItemDetail producto={producto} /> : <h2>Producto no encontrado</h2>}
        </div>
    )
}

export default ItemDetailContainer
