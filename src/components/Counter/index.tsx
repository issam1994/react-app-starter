import { Count } from './Count';
import { IncreaseCount } from './IncreaseCount';

export const Counter = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            {/* count  */}
            <Count />
            <IncreaseCount />
        </div>
    );
};
