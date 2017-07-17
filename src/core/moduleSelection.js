'use strict'

// when buton class is clicked the corresponing nodes are highlighted
module.exports = function moduleSelection (cy, input) {
  // grouping of the module components
  let groupArray = []
  const networkArray = [
    'device',
    'network connection',
    'micronet',
    'net',
    'unidentified node',
    'information',
    'thing'
  ]
  const securityArray = [
    'asset',
    'threat',
    'vulnerability',
    'mechanism',
    'constraint',
    'malicious actor'
  ]
  const socialArray = ['actor']
  const sensingArray = [
    'sensor',
    'event sensor',
    'report sensor',
    'control sensor'
  ]

  const goalArray = ['goal', 'actor', 'cloud actor', 'malicious actor',
    'plan', 'resource', 'threat', 'security constraint', 'and', 'or', 'cloud service']
  const actorArray = ['goal', 'cloud service', 'cloud actor', 'malicious actor']
  const organisational = ['actor', 'cloud actor', 'malicious actor', 'goal',
  'cloud service', 'security constraint' , 'resource', 'security objective']
  const application = ['cloud service', 'virtual resource', 'infrastructure node',
   'threat', 'vulnerability', 'security objective']
  const infrastructure = ['infrastructure node', 'physical infrastructure', 'security mechanism', 'vulnerability',
  'threat']
  const cloudsecurity = ['cloud service', 'cloud actor', 'malicious actor', 'vulnerability',
  'threat', 'security constraint', 'security objective', 'security mechanism', 'infrastructure node', 'virtual resource']
  const management = ['cloud service', 'cloud actor', 'malicious actor', 'security constraint',
   'security objective', 'security mechanism']


  const condition = input
  switch (condition) {
    case 'network':
      groupArray = networkArray
      break
    case 'security':
      groupArray = securityArray
      break
    case 'social':
      groupArray = socialArray
      break
    case 'sensing':
      groupArray = sensingArray
      break
    case 'network-security':
      groupArray = networkArray.concat(securityArray)
      break
    case 'network-sensing':
      groupArray = networkArray.concat(sensingArray)
      break
    case 'security-sensing':
      groupArray = securityArray.concat(sensingArray)
      break
    case 'network-social':
      groupArray = networkArray.concat(socialArray)
      break

    // sectrocloud shit
    case 'goal':
      groupArray = goalArray
      break
    case 'actor':
      groupArray = actorArray
      break
    case 'organisational':
      groupArray = organisational
      break
    case 'application':
      groupArray = application
      break
    case 'infrastructure':
      groupArray = infrastructure
      break
    case 'cloudsecurity':
      groupArray = cloudsecurity
      break
    case 'management':
      groupArray = management
      break

    default:
      groupArray = []
      console.error('error in moduleSelection.js')
  }

  cy.elements().addClass('faded')

  let totalNodes = 0
  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (groupArray.includes(nodeConcept) === true) {
      node.removeClass('faded')
      totalNodes += 1
    }
  })

  const htmlElement = document.getElementById('legend-id')
  htmlElement.textContent = `${condition} nodes: ${totalNodes}`
}
