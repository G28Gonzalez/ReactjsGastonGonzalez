import { AppBar, Button, Toolbar} from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar title className='toolbar-title'>
            <h1 className='title'>Tassano Socks</h1>
        </Toolbar>
        <Toolbar className='toolbar-navbar'>
            <div>  
                <Button sx={{ color: 'black' }}>
                    Inicio
                </Button>
                <Button sx={{ color: 'black' }}>
                    Catalogo
                </Button>
                <Button sx={{ color: 'black' }}>
                    Sobre Nosotros
                </Button>
            </div>
            <div className='cartwidget'>
                <CartWidget />
                
            </div>
        </Toolbar>
    </AppBar>);
}

export default Navbar;