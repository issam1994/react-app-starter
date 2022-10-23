import { useCounterStore } from '../../../store/useCounterStore';

export const IncreaseCount = () => {
    const increase = useCounterStore((state) => state.increase);
    return (
        <div className="">
            <button onClick={() => increase(1)} className="px-4 py-2 bg-gray-200 rounded">
                increase
            </button>
        </div>
    );
};
