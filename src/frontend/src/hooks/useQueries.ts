import { useActor } from './useActor';

// This file is ready for future backend integration
// Currently, the app uses static content from growthGuidance.ts

export function useBackendQueries() {
  const { actor, isFetching } = useActor();

  // Placeholder for future backend queries
  return {
    actor,
    isFetching
  };
}
