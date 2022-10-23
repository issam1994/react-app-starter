import { useCounterStore } from '../../../store/useCounterStore';

export const Count = () => {
    const count = useCounterStore((state) => state.count);
    return <div className="bg-gray-100 p-3 text-4xl text-black">{count}</div>;
};
