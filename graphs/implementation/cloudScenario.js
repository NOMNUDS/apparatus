const graphModel = {}

graphModel.elements = [
  // nodes
  {
    data: {
      id: '1',
      label: 'Amazon',
      info: {
        description: 'CSP Amazon',
        Type:'CSP',
        concept: 'cloud actor'
      }
    }
  }, {
    data: {
      id: '2',
      label: 'Dropbox',
      info: {
        description:'Dropbox Cloud Service',
        Capability: 'Back-end for Dropbox data backup',
        DeploymentModel: 'private',
        ServiceModel: 'IaaS',
        concept: 'cloud service'
      }
    }
  }, {
    data: {
      id: '3',
      label: 'user data',
      info: {
        description: 'User data',
        Value: '9.5',
        SecurityProperty: 'CI',
        Type: '',
        Vendor: '',
        Version: '',
        ResourceType: 'Data',
        visibility: 'Private',
        concept: 'virtual resource'
      }
    }
  },

  // edges
  {
    data: {
      id: 'e1',
      source: '1',
      target: '2',
      label: 'owns',
      info: {
        description: 'User data',
        Value: '9.5',
        SecurityProperty: 'CI',
        Type: '',
        Vendor: '',
        Version: '',
        ResourceType: 'Data',
        visibility: 'Private',
        concept: 'virtual resource'
      }
    }
  }, {
    data: {
      id: 'e2',
      source: '3',
      target: '2',
      label: 'permeates'
    }
  }
]

module.exports = graphModel
