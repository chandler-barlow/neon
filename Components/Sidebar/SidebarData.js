import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa'

const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'side-text'
    },
    {
        title: 'Learn',
        path: '/Learn',
        icon: <FaIcons.FaBook />,
        cName: 'side-text'
    },
    {
        title: 'Settings',
        path: '/',
        icon: <FaIcons.FaCog />,
        cName: 'side-text'
    }
]

export { SidebarData }