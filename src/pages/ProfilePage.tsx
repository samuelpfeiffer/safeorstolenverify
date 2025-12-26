import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { useSecureProfileOperations } from "@/hooks/useSecureProfileOperations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const { user, loading: authLoading, isAuthenticated } = useUnifiedAuth();
  const { getSecureProfile, updateSecureProfile, loading: profileLoading } = useSecureProfileOperations();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [formData, setFormData] = useState({ full_name: '', email: '' });

  const loading = authLoading || profileLoading;

  useEffect(() => {
    if (isAuthenticated && user) {
      loadProfile();
    }
  }, [isAuthenticated, user]);

  const loadProfile = async () => {
    try {
      const profile = await getSecureProfile();
      setProfileData(profile);
      setFormData({
        full_name: profile?.full_name || '',
        email: profile?.email || user?.email || ''
      });
    } catch (error) {
      // Error is handled in the hook
    }
  };

  const handleSave = async () => {
    try {
      await updateSecureProfile(formData);
      await loadProfile(); // Reload profile data
      setIsEditing(false);
    } catch (error) {
      // Error is handled in the hook
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-lg">Please sign in to view your profile.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Profile | SafeOrStolen</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              User Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name</Label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <Input 
                  id="full_name" 
                  value={isEditing ? formData.full_name : (profileData?.full_name || 'Not set')}
                  onChange={(e) => isEditing && setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  disabled={!isEditing}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <Input 
                  id="email" 
                  value={isEditing ? formData.email : (profileData?.email || user?.email || '')}
                  onChange={(e) => isEditing && setFormData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="created">Member Since</Label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <Input 
                  id="created" 
                  value={profileData?.created_at ? new Date(profileData.created_at).toLocaleDateString() : (user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A')}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                onClick={() => setIsEditing(!isEditing)}
                variant="outline"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
              {isEditing && (
                <Button onClick={handleSave} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  );
};

export default ProfilePage;
