import { HomeOutlined, RiseOutlined, UserSwitchOutlined } from "@ant-design/icons";

export const routes = [
    {
        name: 'Dashboard',
        icon: HomeOutlined,
        routeURL: '/'
    },
    {
        name: 'Suppliers',
        icon: UserSwitchOutlined,
        routeURL: '/suppliers'
    }, {
        name: 'Purchases',
        icon: RiseOutlined,
        routeURL: '/purchases'
    },

];