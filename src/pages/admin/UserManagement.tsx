import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  Shield,
  Mail,
  Calendar
} from 'lucide-react';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      status: 'active',
      joinedAt: '2024-01-15',
      lastActive: '2024-01-20'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'premium',
      status: 'active',
      joinedAt: '2024-01-10',
      lastActive: '2024-01-19'
    },
    {
      id: 3,
      name: 'Admin User',
      email: 'admin@safeorstolen.com',
      role: 'admin',
      status: 'active',
      joinedAt: '2023-12-01',
      lastActive: '2024-01-20'
    }
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500 text-white';
      case 'premium': return 'bg-sos-orange text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white';
      case 'inactive': return 'bg-gray-500 text-white';
      case 'suspended': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-sos text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">User Management</h1>
            <p className="text-gray-300 mt-2">Manage user accounts and permissions</p>
          </div>
          <Button className="bg-sos-orange hover:bg-sos-orange/80">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sos-orange/20 rounded-lg">
                  <Users className="h-6 w-6 text-sos-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1,247</p>
                  <p className="text-gray-400 text-sm">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1,189</p>
                  <p className="text-gray-400 text-sm">Active Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sos-orange/20 rounded-lg">
                  <Shield className="h-6 w-6 text-sos-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">89</p>
                  <p className="text-gray-400 text-sm">Premium Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sos-dark border-sos-orange/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <UserPlus className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">42</p>
                  <p className="text-gray-400 text-sm">New This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-sos-dark border-sos-orange/20 mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-sos border-sos-orange/20 text-white"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="bg-sos-dark border-sos-orange/20">
          <CardHeader>
            <CardTitle className="text-white">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-sos-orange/20">
                    <th className="text-left text-gray-300 p-4">User</th>
                    <th className="text-left text-gray-300 p-4">Role</th>
                    <th className="text-left text-gray-300 p-4">Status</th>
                    <th className="text-left text-gray-300 p-4">Joined</th>
                    <th className="text-left text-gray-300 p-4">Last Active</th>
                    <th className="text-right text-gray-300 p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-sos-orange/10 hover:bg-sos/30">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-sos-orange/20 rounded-full flex items-center justify-center">
                            <span className="text-sos-orange font-semibold">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={getRoleBadgeColor(user.role)}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusBadgeColor(user.status)}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-gray-300">
                          <Calendar className="h-3 w-3" />
                          {user.joinedAt}
                        </div>
                      </td>
                      <td className="p-4 text-gray-300">{user.lastActive}</td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;