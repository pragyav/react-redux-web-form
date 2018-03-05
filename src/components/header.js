import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import IBM from "../images/IBM.png";
import styles from "../styles/components/header.scss";

console.log("styles: ",styles);

const Header = () => {
    return (        
        <div className={styles.menu}>
            <div>
                <img src={IBM} alt="IBM" />
            </div>
            <ul className={styles["flex-container"]} >
                <li className={styles["flex-item"]}>
                    <NavLink exact to="/home/info-form"
                        isActive={(match, location) => {              
                            return location.pathname === "/home" ||
                location.pathname === "/home/info-form";
                        }
                        }
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#047cc0"
                        }}>
            Information
                    </NavLink>
                </li>
                <li className={styles["flex-item"]}>
                    <NavLink to="/home/skills-form"
                        isActive={(match, location) => {              
                            return location.pathname === "/home/skills-form";
                        }
                        }
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#047cc0"
                        }}>
            Skills
                    </NavLink>
                </li>
                <li className={styles["flex-item"]}>
                    <NavLink to="/home/portfolio-form"
                        isActive={(match, location) => {              
                            return location.pathname === "/home/portfolio-form";
                        }
                        }
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#047cc0"
                        }}>
            Portfolio
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Header);