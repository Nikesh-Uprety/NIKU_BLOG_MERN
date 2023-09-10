import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../Css/Menu.css";


const Menu = () => {
    const [startAnimate, setStartAnimate] = React.useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = React.useState(0);
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setStartAnimate(false);
        setCurrCount(count);
        setStateHighlightTopPosition(count * 52);

        setTimeout(() => {
            setStartAnimate(true);
        }, 100);
    }

    useEffect(() => {

        setTimeout(() => {
            setStartAnimate(true);
        }, 500);

        return () => {

        }
    }, []);

    return (
        <div className="container">
            <div className="sidebar">
                <div style={{ top: `${highlightTopPosition}px` }} className={`sidebar__highlight ${startAnimate && 'sidebar__highlight__animate'}`}></div>

                <Link to="/" className={currCount === 0 && 'active'} onClick={() => onClickTab(0)}>
                    <span className={currCount === 0 && 'text-active'}><i class="fas fa-arrow-right"></i> Home</span>
                </Link>
                <Link to="/tools" className={currCount === 1 && 'active'} onClick={() => onClickTab(1)}>
                    <span className={currCount === 1 && 'text-active'}><i class="fas fa-arrow-right"></i> Tools</span>
                </Link>
                <Link to="/profile" className={currCount === 2 && 'active'} onClick={() => onClickTab(2)}>
                    <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i> Profile</span>
                </Link>
                <Link to="/" className={currCount === 3 && 'active'} onClick={() => onClickTab(3)}>
                    <span className={currCount === 3 && 'text-active'}><i class="fas fa-arrow-right"></i> About</span>
                </Link>
            </div>
        </div>
    )
}


export default Menu;