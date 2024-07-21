import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { CallComposite, DEFAULT_COMPONENT_ICONS, onResolveVideoEffectDependencyLazy, useAzureCommunicationCallAdapter } from '@azure/communication-react';
import { initializeIcons, registerIcons } from '@fluentui/react';
import { useMemo } from 'react';

initializeIcons();
registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

const App = (): JSX.Element => {
    const userId = { communicationUserId: '<<TODO USER ID>>' };
    const token = '<<TODO ACCESS TOKEN>>';
    const groupId = '37f87ba9-6910-4f02-b163-7b41921402d8';

    const args = useMemo(() => {
        return {
            userId,
            credential: new AzureCommunicationTokenCredential(token),
            displayName: 'Test User',
            locator: {
                groupId,
            },
            options: {
                videoBackgroundOptions: {
                    onResolveDependency: onResolveVideoEffectDependencyLazy,
                },
            },
        };
    }, []);

    const adapter = useAzureCommunicationCallAdapter(args);

    return (
        <div>
            {adapter ? <CallComposite adapter={adapter} /> : <>Initializing</>}
        </div>
    );
};

export default App;