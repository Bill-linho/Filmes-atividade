import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function loading(){

    const navigate = useNavigate()
    
    useEffect(()=>{
        navigate(`/year/2025/category/best-picture`)
    },[])

    return(
        <div>
            <h1>Carregando...</h1>
        </div>
    )
}

export default loading