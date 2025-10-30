"use client";

import { useEffect, useState } from "react";
import type { StoreApi } from "zustand";

interface PersistStoreApi<T> extends StoreApi<T> {
  persist?: {
    hasHydrated: () => boolean;
    onFinishHydration: (callback: () => void) => () => void;
  };
}

// This Hook for checking if store is hydrated.
export function useHydratedStore<T>(store: PersistStoreApi<T>): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const persist = store.persist;

    if (!persist) {
      setHydrated(true);
      return;
    }

    // wait until store finish hydrated
    const unsub = persist.onFinishHydration(() => setHydrated(true));

    if (persist.hasHydrated()) {
      setHydrated(true);
    }

    return () => {
      unsub?.();
    };
  }, [store]);

  return hydrated;
}
