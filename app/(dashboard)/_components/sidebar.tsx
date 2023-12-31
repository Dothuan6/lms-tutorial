import SidebarRoutes from './Sidebar-routes';
import {Logo} from './logo'
export const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-auto shadow-sm bg-white">
            <div className="p-6">
                <Logo />
            </div>
            <div className='flex flex-col w-full'>
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;