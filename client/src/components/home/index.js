import Container from '../../components/container';
import Footer from '../../components/footer';
import Copyright from '../../components/footer/copyright';
import Header from '../../components/header'

export default function ({Component}) {
    return (
            Component ? 
            <div id="app">
            <Header />
            <Component/>
            <Footer />
            <Copyright />
        </div> 
            :
            <div id="app">
            <Header />
            <Footer />
            <Copyright />
        </div>
        )
}