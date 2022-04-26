const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

// Create google client

const gclient = new SecretManagerServiceClient(); 


function createSecretContainer(parent, secretId, parentTwo, payload) {
    createSecret(parent, secretId); 
}

// Function to create a secret
async function createSecret(parent, secretId, parentTwo, payload) {
    const [secret] = await gclient.createSecret({
        parent: "projects/1013762403522",
        secretId: secretId,
        secret: {
            replication: {
                automatic: {},
            },
        },
    })
    console.log(`Created secret ${secret.name}`);
    addSecretVersion(parentTwo, payload)
}

// Function to create a secrete version
async function addSecretVersion(parentTwo, payload) {
    const parent = "projects/1013762403522/secrets/newSecret"
    const [version] = await gclient.addSecretVersion({
        parent: parent, 
        payload: {
            data: Buffer.from('my super secret data', 'utf8'), 
        },
    }); 
    console.log("Added secret Version " + version.name); 
}



module.exports = {
    createSecretContainer,
    addSecretVersion, 
}
