
import { useNavigate } from 'react-router-dom';
import { User, ShoppingBag, Search, Receipt, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/lib/auth';

export const UserDropdown = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-sos-orange text-sos-orange hover:bg-sos-orange/10">
          <User size={18} className="mr-2" />
          {isAuthenticated ? 'Account' : 'Sign In'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800 text-white w-56 z-50">
        {isAuthenticated ? (
          <>
            <DropdownMenuLabel className="text-white">
              {user?.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuItem 
              className="hover:bg-gray-800 cursor-pointer text-white focus:bg-gray-800 focus:text-white" 
              onClick={() => navigate('/dashboard')}
            >
              <Search size={16} className="mr-2" />
              Search History
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="hover:bg-gray-800 cursor-pointer text-white focus:bg-gray-800 focus:text-white" 
              onClick={() => navigate('/dashboard')}
            >
              <ShoppingBag size={16} className="mr-2" />
              Purchase History
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="hover:bg-gray-800 cursor-pointer text-white focus:bg-gray-800 focus:text-white" 
              onClick={() => navigate('/dashboard')}
            >
              <Receipt size={16} className="mr-2" />
              Saved Receipts
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuItem 
              className="hover:bg-gray-800 cursor-pointer text-white focus:bg-gray-800 focus:text-white"
              onClick={() => signOut()}
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
            <DropdownMenuItem 
              className="hover:bg-gray-800 cursor-pointer text-white focus:bg-gray-800 focus:text-white"
              onClick={() => navigate('/auth?tab=signin')}
            >
              <LogIn size={16} className="mr-2" />
              Login
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
