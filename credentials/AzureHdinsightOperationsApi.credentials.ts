import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureHdinsightOperationsApi implements ICredentialType {
        name = 'N8nDevAzureHdinsightOperationsApi';

        displayName = 'Azure Hdinsight Operations API';

        icon: Icon = { light: 'file:../nodes/AzureHdinsightOperations/azure-hdinsight-operations.png', dark: 'file:../nodes/AzureHdinsightOperations/azure-hdinsight-operations.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Hdinsight Operations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
