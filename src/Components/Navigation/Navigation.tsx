import { NavigationItem } from "../NavigationItem/NavigationItem"

const navItems = [{title: 'Главная', href: '/'},
                  {title: 'Дрифт-такси', href: '/drift'},
                  {title: 'Time Attack', href: '/timeattack'},
                  {title: 'Forza Karting', href: '/forza'}]

export const Navigation = () => {
  return (
    <nav className="menu">
        {navItems.map(item => <NavigationItem title={item.title} link={item.href} key={item.title}/>)}
    </nav>
  )
}
