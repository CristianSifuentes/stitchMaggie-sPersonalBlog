export function useFeatureFlags() {
  return {
    writingEnabled: true,
    gardenEnabled: true,
    notesEnabled: true,
    libraryEnabled: true,
  } as const;
}
