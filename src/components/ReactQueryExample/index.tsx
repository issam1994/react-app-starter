import { useQuery } from '@tanstack/react-query';
import { Spin, Typography } from 'antd';

export const ReactQueryExample = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
                res.json(),
            ),
    });
    const result = isLoading ? (
        <Spin spinning />
    ) : error ? (
        <Typography.Text color="red">error</Typography.Text>
    ) : (
        <Typography.Text strong>{data?.subscribers_count}</Typography.Text>
    );
    return <div>{result}</div>;
};
