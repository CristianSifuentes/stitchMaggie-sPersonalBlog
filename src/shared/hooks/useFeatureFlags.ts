export function useFeatureFlags() {
  return {
    gardenEnabled: true,
    writingEnabled: true,
  } as const;
}
