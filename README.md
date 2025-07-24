# sdk-js

## Introduction

SDK js/ts enables developers to efficiently manage files, instance. This toolkit is designed to streamline the integration of complex functionalities into js/ts-based
projects.

## Installation

To integrate the SDK into your project, include the SDK files in your project directory. Then, use the following require
statements in your project root directory:

```bash
npm install git@git@github.com:k-ai-Documentation/sdk-js-kaistudio.git --save
```

## Quick start

Here's a simple example to get you started with the SDK. This example demonstrates how to instantiate a new search and
perform basic operations:

```js
import {KaiStudio} from "sdk-js-kaistudio"

// for saas user
const kaiSearch = new KaiStudio({
    organizationId: process.env.VUE_APP_ORGANIZATION_ID,
    instanceId: process.env.VUE_APP_INSTANCE_ID,
    apiKey: process.env.VUE_APP_API_KEY
})
// for premise user
const kaiSearch = new KaiStudio({host: process.env.VUE_APP_HOST, apiKey: process.env.VUE_APP_HOST})

// send your request
const request = await kaiSearch.manageInstance().generateNewApiKey();
console.log(request)
```

## Usage Guide

There are two type of versions: SaaS version and Premise version.

SaaS version means you are using the service provided by Kai with cloud service. In this case, you will need 2 keys (instanceId, apiKey) to initialize kaiStudio. Please refer to the following code in [index.ts](index.ts):

```js
if (this.credentials.organizationId && this.credentials.instanceId && this.credentials.apiKey) {
    headers = {
        'organization-id': this.credentials.organizationId,
        'instance-id': this.credentials.instanceId,
        'api-key': this.credentials.apiKey
    }

    baseUrl = `https://app.kai-studio.ai/`
}
```

Premise version means you are using the service in your local server in your enterprise. In this case, you will need
host and api key (optional) to initialize kaiStudio. Please refer to the following code in [index.ts](index.ts):

```js
if (this.credentials.host) {
    baseUrl = this.credentials.host
    if (this.credentials.apiKey) {
        headers = {
            'api-key': this.credentials.apiKey
        }
    }
}
```


---

There are 2 modules in the SDK:

| [ManageInstance](#manageinstance) | [FileInstance](#fileinstance) |

---

### ManageInstance

[ManageInstance.ts](modules/ManageInstance.ts) provides methods for managing instances, including key management, deployment, and knowledge base operations.

- `generateNewApiKey`: Generate a new API key

- `updateName`: Update the instance name  
  > name: new name for the instance

- `deploy`: Deploy an instance

- `delete`: Delete an instance

- `addKb`: Add a knowledge base to the instance  
  > type: type of knowledge base  
  > options: configuration options for the KB entry  
  > searchGoal: search goal associated with the KB

- `setPlayground`: Set playground types for the instance  
  > typeList: array of playground types to configure

- `updateKb`: Update a knowledge base  
  > id: ID of the knowledge base to update  
  > options: updated configuration options  
  > searchGoal: updated search goal

- `removeKb`: Remove a knowledge base from the instance  
  > id: ID of the knowledge base to remove

Example:

```typescript
import { KaiStudio } from 'kai-studio-sdk';

const kaiStudio = new KaiStudio(credentials);
const manageInstance = kaiStudio.manageInstance();

// Deploy an instance
manageInstance.deploy().then(success => {
  console.log(`Deployment ${success ? 'successful' : 'failed'}`);
});

// Add a knowledge base
manageInstance.addKb('web', { url: 'https://example.com' }, { goal: 'Customer support' })
  .then(success => {
    console.log(`KB addition ${success ? 'successful' : 'failed'}`);
  });
```
---

### FileInstance

[FileInstance.ts](modules/FileInstance.ts) provides methods for handling file-related operations such as listing, downloading, uploading, and deleting files.

- `listFiles`: Retrieve a list of available files in Kai Studio
  > Returns an array of KaiStudioFileSignature objects with file details

- `downloadFile`: Download a file by its name
  > fileName: name of the file to download

- `uploadFiles`: Upload one or more files to Kai Studio
  > files: array of File objects to upload
  > Returns an array of KaiStudioFileUploadResponse objects

- `removeFile`: Delete a file by its name
  > fileName: name of the file to delete
  > Returns a boolean indicating success or failure

Example:

```typescript
import { KaiStudio } from 'kai-studio-sdk';

const kaiStudio = new KaiStudio(credentials);
const fileInstance = kaiStudio.fileInstance();

// List available files
fileInstance.listFiles().then(files => {
  console.log(`Found ${files.length} files:`);
  files.forEach(file => {
    console.log(`${file.name} (${file.size} bytes, modified: ${file.lastModified})`);
  });
});

// Upload files
const fileInput = document.getElementById('file-input') as HTMLInputElement;
if (fileInput.files && fileInput.files.length > 0) {
  fileInstance.uploadFiles(Array.from(fileInput.files))
    .then(results => {
      results.forEach(result => {
        console.log(`Upload ${result.result ? 'successful' : 'failed: ' + result.reason}`);
      });
    });
}
```

## Contributing

bxu@k-ai.ai

rmei@k-ai.ai

sngo@k-ai.ai
