import About from "./component/about"
import Header from "./component/header"
import Service from "./component/service"
import Social from "./component/social/social"
import Mywork from "./component/work"

export default function Home() {
return(
<div className="contiainer mx-auto">
<Header/>
<Service/>
<Mywork/>
<About/>
<Social/>
</div>
)
}
