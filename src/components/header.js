/* @flow */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { I18n, translate } from "react-i18next";
import type { TFunction } from "react-i18next";
import IBM from "../images/IBM.png";
import styles from "../styles/components/header.scss";

type OwnProps = { i18n: Object }
type Props = OwnProps & { t: TFunction }

const Header = (props: Props) => {

    const handleChangeLang=(e)=>{
        props.i18n.changeLanguage(e.target.value);        
    };
   
    return (
        <I18n>
            {(t , { i18n }) => (
                <div className={styles.menu}>
                    <div>
                        <img src={IBM} alt="IBM" />
                    </div>
                    <ul className={styles["flex-container"]}>
                        <li className={styles["flex-item"]}>
                            <NavLink
                                exact
                                to="/home/info-form"
                                isActive={(match, location) => {
                                    return (
                                        location.pathname === "/home" ||
                    location.pathname === "/home/info-form"
                                    );
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#047cc0"
                                }}
                            >
                                {t("Information")}   
                            </NavLink>
                        </li>
                        <li className={styles["flex-item"]}>
                            <NavLink
                                to="/home/skills-form"
                                isActive={(match, location) => {
                                    return location.pathname === "/home/skills-form";
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#047cc0"
                                }}
                            >
                                {t("Skills")}
                            </NavLink>
                        </li>
                        <li className={styles["flex-item"]}>
                            <NavLink
                                to="/home/portfolio-form"
                                isActive={(match, location) => {
                                    return location.pathname === "/home/portfolio-form";
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#047cc0"
                                }}
                            >
                                {t("Portfolio")}
                            </NavLink>
                        </li>
                        <select
                            onChange={e=>handleChangeLang(e)}
                            className={styles["flex-item"]}>                           
                            <option value="en">English</option>
                            <option value="fi">Finnish</option>
                        </select>
                    </ul>
                </div>
            )}
        </I18n>
    );
};

export default translate()(withRouter(Header));
