import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { aiDatabaseService, type AIAnalysisSession } from '@/services/aiDatabaseService';
import { useAuth } from '@/lib/auth';
import { 
  History, 
  Search, 
  Filter, 
  Eye, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Star,
  MessageSquare
} from 'lucide-react';

export const AISessionHistory: React.FC = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<AIAnalysisSession[]>([]);
  const [filteredSessions, setFilteredSessions] = useState<AIAnalysisSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<AIAnalysisSession | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadSessions();
    }
  }, [user]);

  useEffect(() => {
    filterSessions();
  }, [sessions, searchQuery, filterType]);

  const loadSessions = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const userSessions = await aiDatabaseService.getUserAnalysisSessions(user.id, 50);
      setSessions(userSessions);
    } catch (error) {
      console.error('Failed to load sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterSessions = () => {
    let filtered = sessions;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(session => 
        session.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.analysis_type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter
    if (filterType !== 'all') {
      if (filterType === 'completed') {
        filtered = filtered.filter(session => session.status === 'completed');
      } else if (filterType === 'failed') {
        filtered = filtered.filter(session => session.status === 'failed');
      } else if (filterType === 'processing') {
        filtered = filtered.filter(session => session.status === 'processing');
      } else {
        filtered = filtered.filter(session => session.analysis_type === filterType);
      }
    }

    setFilteredSessions(filtered);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'processing':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'failed':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDuration = (ms?: number) => {
    if (!ms) return 'N/A';
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${(ms / 60000).toFixed(1)}m`;
  };

  const analysisTypes = ['all', 'completed', 'failed', 'processing', 'comprehensive', 'security', 'market', 'risk', 'pattern'];

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Analysis History</h2>
        </div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Analysis History</h2>
          <Badge variant="outline">{sessions.length} sessions</Badge>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search analyses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background text-sm"
          >
            {analysisTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sessions List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium text-muted-foreground">
            Sessions ({filteredSessions.length})
          </h3>
          
          {filteredSessions.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <History className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">
                  {sessions.length === 0 ? 'No analysis sessions yet' : 'No sessions match your filters'}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {sessions.length === 0 ? 'Start using AI analysis to see your history here' : 'Try adjusting your search or filters'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filteredSessions.map((session) => (
                <Card 
                  key={session.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedSession?.id === session.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedSession(session)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{session.query}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="capitalize text-xs">
                            {session.analysis_type}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(session.priority)}`} />
                            <span className="text-xs text-muted-foreground capitalize">
                              {session.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        {getStatusIcon(session.status)}
                        {session.confidence && (
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-xs">{Math.round(session.confidence * 100)}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(session.created_at).toLocaleDateString()}</span>
                      <span>{formatDuration(session.processing_time_ms)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Session Details */}
        <div>
          <h3 className="font-medium text-muted-foreground mb-3">Session Details</h3>
          
          {selectedSession ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{selectedSession.query}</CardTitle>
                    <CardDescription>
                      {new Date(selectedSession.created_at).toLocaleString()}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(selectedSession.status)}>
                    {selectedSession.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="font-medium capitalize">{selectedSession.analysis_type}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Priority:</span>
                    <p className="font-medium capitalize">{selectedSession.priority}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Processing Time:</span>
                    <p className="font-medium">{formatDuration(selectedSession.processing_time_ms)}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Confidence:</span>
                    <p className="font-medium">
                      {selectedSession.confidence ? `${Math.round(selectedSession.confidence * 100)}%` : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Models Used */}
                {selectedSession.models_used && selectedSession.models_used.length > 0 && (
                  <div>
                    <span className="text-sm text-muted-foreground">Models Used:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedSession.models_used.map((model, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sources */}
                {selectedSession.sources && selectedSession.sources.length > 0 && (
                  <div>
                    <span className="text-sm text-muted-foreground">Sources:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedSession.sources.map((source, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Result */}
                {selectedSession.result && (
                  <div>
                    <span className="text-sm text-muted-foreground">Analysis Result:</span>
                    <Textarea
                      value={selectedSession.result}
                      readOnly
                      className="mt-1 min-h-[200px] text-sm"
                    />
                  </div>
                )}

                {/* Recommendations */}
                {selectedSession.recommendations && selectedSession.recommendations.length > 0 && (
                  <div>
                    <span className="text-sm text-muted-foreground">Recommendations:</span>
                    <ul className="mt-1 space-y-1">
                      {selectedSession.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-muted-foreground">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    Feedback
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    View Full Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">Select a session to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};