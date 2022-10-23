import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterState {
    count: number;
    increase: (by: number) => void;
}

export const useCounterStore = create<CounterState>()(
    devtools(
        persist(
            (set) => ({
                count: 0,
                increase: (by) => set((state) => ({ count: state.count + by })),
            }),
            {
                name: 'counter-storage',
            },
        ),
    ),
);
