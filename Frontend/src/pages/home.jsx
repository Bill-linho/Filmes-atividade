import Aside from "../components/aside.jsx"
import Header from "../components/header.jsx"
import MainContent from "../components/mainContent.jsx"


function Home(){
    return(
        <div>  
            <Aside />
            <Header />
            <MainContent />
        </div>
    )    
}

export default Home