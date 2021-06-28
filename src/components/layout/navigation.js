import { Link } from 'react-router-dom';

function NavigationBar() {
    return <header>
        <div>Header</div>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/todo">Todos</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavigationBar;