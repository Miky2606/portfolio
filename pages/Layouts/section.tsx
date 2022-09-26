import { FC } from "react";
import { LayoutProps } from "./layot";

const Section:FC<LayoutProps> = ({children})=>{
return<>
<section className="section d-flex  align-items-center">

{children}
</section>

</>
}

export default Section