import { NavLink } from "react-router-dom"

interface InavItem {
    title: string;
    link: string
}

export const NavigationItem = ({ title, link }: InavItem) => {
  return (
    <NavLink to={link} className={({isActive}) => isActive ? "menu__item active" : "menu__item"}>{title}</NavLink>
  )
}
