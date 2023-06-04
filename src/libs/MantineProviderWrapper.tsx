"use client";

import { MantineProvider } from '@mantine/core';

interface Props {
    children: React.ReactNode;
}
/**
 * ManinteのProvider
 * "use client"を使用するようにと、warningが出るのでラップしている。
 */
export const MantineProviderWrapper = ({ children }: Props) => {
    return (
        <MantineProvider>
            {children}
        </MantineProvider>
    )
}