import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function usePaymentClickCounts() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  const clickCountsQuery = useQuery({
    queryKey: ['paymentClickCounts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllClickCounts();
    },
    enabled: !!actor && !isFetching,
    retry: 1,
    retryDelay: 1000,
  });

  const recordClickMutation = useMutation({
    mutationFn: async (buttonId: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.recordClick(buttonId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['paymentClickCounts'] });
    },
    retry: 1,
  });

  const getClickCount = (buttonId: string): number => {
    if (!clickCountsQuery.data) return 0;
    const entry = clickCountsQuery.data.find(([id]) => id === buttonId);
    return entry ? Number(entry[1]) : 0;
  };

  const recordClick = async (buttonId: string) => {
    try {
      await recordClickMutation.mutateAsync(buttonId);
    } catch (error) {
      console.error('Failed to record click:', error);
    }
  };

  return {
    getClickCount,
    recordClick,
    isLoading: clickCountsQuery.isLoading,
    isError: clickCountsQuery.isError,
    isRecording: recordClickMutation.isPending,
  };
}
