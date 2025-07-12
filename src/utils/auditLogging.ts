
export const AUDIT_ACTIONS = {
  SIGN_IN_SUCCESS: 'sign_in_success',
  SIGN_IN_FAILED: 'sign_in_failed',
  SIGN_UP_SUCCESS: 'sign_up_success',
  SIGN_UP_FAILED: 'sign_up_failed',
  SIGN_OUT: 'sign_out',
  PASSWORD_CHANGE: 'password_change',
  PROFILE_UPDATE: 'profile_update',
  VERIFICATION_CREATED: 'verification_created',
  VERIFICATION_ACCESSED: 'verification_accessed',
  PAYMENT_INITIATED: 'payment_initiated',
  PAYMENT_FAILED: 'payment_failed',
} as const;

interface AuditEvent {
  action: string;
  tableName: string;
  recordId?: string;
  newValues?: Record<string, any>;
  oldValues?: Record<string, any>;
  userId?: string;
}

export const logAuditEvent = async (event: AuditEvent): Promise<void> => {
  try {
    console.log('Audit Event:', {
      timestamp: new Date().toISOString(),
      ...event,
    });
    
    // In a real implementation, you would save this to a database table
    // For now, we're just logging to console for debugging
  } catch (error) {
    console.error('Failed to log audit event:', error);
  }
};
