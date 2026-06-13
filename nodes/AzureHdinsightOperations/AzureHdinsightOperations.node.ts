import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHdinsightOperations implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Hdinsight Operations',
                name: 'N8nDevAzureHdinsightOperations',
                icon: { light: 'file:./azure-hdinsight-operations.png', dark: 'file:./azure-hdinsight-operations.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'HDInsight Management Client.',
                defaults: { name: 'Azure Hdinsight Operations' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHdinsightOperationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
