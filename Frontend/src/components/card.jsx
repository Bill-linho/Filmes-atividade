import { useState, useEffect } from "react"
import axios from 'axios'

function Cardfilm() {
    const [imagem, setImagem] = useState("wadwa")
    const [nome, setNome] = useState("wadwad")
    const [nominee,setNominee] = useState([])
    const [year, setYear] = useState(1975)
    const [category, setCategory] = useState("best-picture")

    useEffect(()=>{
        const getFilms = async() => {
            try{
                const response = await axios.get('6abe989ac4d5ac5483029d7b.mockapi.io/years')

                setNominee(response.data.nominees)
            }
            catch(erro){
                console.error(erro)
            }
        }
    },[year,category])

    return (
        <div>
            <img></img>
            <h2></h2>
        </div>
    )
}

export default Cardfilm