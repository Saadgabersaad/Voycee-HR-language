import { Flex } from '@/modules/core/components/flex'
import { Navigation } from './Navigation'

export const Main = ({
                         children
                     }: {
    children: React.ReactNode
}) => {
    return (
        <Flex flexGrow={1} bgcolor={'grey.100'}>
            <Navigation />
            <Flex
                flexGrow={1}
                height={'95vh'}
                flexDirection='column'
                overflow={'scroll'}
            >
                {children}
            </Flex>
        </Flex>
    )
}