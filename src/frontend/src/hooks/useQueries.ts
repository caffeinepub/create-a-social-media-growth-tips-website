import { useActor } from './useActor';

// This file is ready for backend integration
// Payment click tracking is handled by usePaymentClickCounts.ts

export function useBackendQueries() {
  const { actor, isFetching } = useActor();

  // Placeholder for future backend queries
  return {
    actor,
    isFetching
  };
}
