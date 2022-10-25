import { Loader, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

export const ReactQueryExample = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
                res.json(),
            ),
    });
    const result = isLoading ? (
        <Loader />
    ) : error ? (
        <Text color="red">error</Text>
    ) : (
        <Text weight="bold">{data?.subscribers_count}</Text>
    );
    return <div>{result}</div>;
};
