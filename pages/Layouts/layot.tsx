import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import NavbarCustom from "./navbar"

export type LayoutProps = {
    children:React.ReactNode
}

const Layout: FC<LayoutProps> = ({children})=>{
return(
<>

<main>

        
            {children}
        

    
</main>

</>
)

}

export default Layout