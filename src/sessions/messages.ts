export default {
  sessions: {
    title: "Sessions",
    sessionExplain: "Some description about sessions",
    searchForSession: "Search session",
    subject: "Subject",
    lastAccess: "Last access",
    startDate: "Start date",
    accessedClients: "Accessed clients",
    sessionsType: {
      allSessions: "All session types",
      regularSSO: "Regular SSO",
      offline: "Offline",
      directGrant: "Direct grant",
      serviceAccount: "Service account",
    },
    revocation: "Revocation",
    revocationDescription:
      "This is a way to revoke all active sessions and access tokens. Not before means you can revoke any tokens issued before the date.",
    notBefore: "Not before",
    notBeforeSuccess: 'Success! "Not before" set for realm',
    notBeforeError: 'Error clearing "Not Before" for realm: {{error}}',
    notBeforeClearedSuccess: 'Success! "Not Before" cleared for realm.',
    signOutAllActiveSessions: "Sign out all active sessions",
    signOutAllActiveSessionsQuestion: "Sign out all active sessions?",
    setToNow: "Set to now",
    logoutAllDescription:
      "If you sign out all active sessions, active subjects in this realm will be signed out.",
    logoutAllSessionsError:
      "Error! Failed to log out of all sessions: {{error}}.",
    setToNowError: "Error! Failed to set notBefore to current date and time.",
    clear: "Clear",
    push: "Push",
    none: "None",
    noSessions: "No sessions",
    noSessionsDescription:
      "There are currently no active sessions in this realm.",
  },
};
