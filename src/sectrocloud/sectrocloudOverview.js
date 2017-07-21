'use strict'

const printChat = require('../core/printChat.js')
const sectrocloudMetamodel = require('./sectrocloudSchema.js')

module.exports = function overview (cy) {
  // const orgnanisationalArray = sectrocloudMetamodel.orgnanisational
  // const securityArray = sectrocloudMetamodel.security
  // const socialArray = sectrocloudMetamodel.social
  // const sensingArray = sectrocloudMetamodel.sensing
  const organisationalArray = sectrocloudMetamodel.organisational
  const applicationArray = sectrocloudMetamodel.application
  const infrastructureArray = sectrocloudMetamodel.infrastructure
  const cloudsecurityArray = sectrocloudMetamodel.cloudsecurity
  const managementArray = sectrocloudMetamodel.management

  let result = ''

  const totalNodes = cy.elements().nodes().length
  result = `• total nodes: ${totalNodes}\n`

  let orgNode = 0
  let appNode = 0
  let infraNode = 0
  let cloudsecurityNode = 0
  let managementNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (organisationalArray.includes(nodeConcept) === true) {
      orgNode += 1
    } else if (applicationArray.includes(nodeConcept) === true) {
      appNode += 1
    } else if (infrastructureArray.includes(nodeConcept) === true) {
      infraNode += 1
    } else if (cloudsecurityArray.includes(nodeConcept) === true) {
      cloudsecurityNode += 1
    } else if (managementArray.includes(nodeConcept) === true) {
      managementNode += 1
    }
  })
  result = `${result}• orgnanisational nodes: ${orgNode}\n`
  result = `${result}• application nodes: ${appNode}\n`
  result = `${result}• infrastructure nodes: ${infraNode}\n`
  result = `${result}• cloud security nodes: ${cloudsecurityNode}\n`
  result = `${result}• management nodes: ${managementNode}\n`


  let actorNode = 0
  let cloudactorNode = 0
  let maliciousactorNode = 0
  let goalNode = 0
  let cloudserviceNode = 0
  let resourceNode = 0
  let virtualNode = 0
  let infranNode = 0
  let physicalNode = 0
  let securityconstraintNode = 0
  let securityobjectiveNode = 0
  let securitymechanismNode = 0
  let threatNode = 0
  let vulnerabilityNode = 0

  cy.nodes().map(node => {
    const nodeConcept = node.data().info.concept
    if (nodeConcept === 'actor') {
      actorNode += 1
    } else if (nodeConcept === 'cloud actor') {
      cloudactorNode += 1
    } else if (nodeConcept === 'malicious actor') {
      maliciousactorNode += 1
    } else if (nodeConcept === 'goal') {
      goalNode += 1
    } else if (nodeConcept === 'cloud service') {
      cloudserviceNode += 1
    } else if (nodeConcept === 'resource') {
      resourceNode += 1
    } else if (nodeConcept === 'virtual resource') {
      virtualNode += 1
    } else if (nodeConcept === 'infrastructure node') {
      infranNode += 1
    } else if (nodeConcept === 'physical infrastructure') {
      physicalNode += 1
    } else if (nodeConcept === 'security constraint') {
      securityconstraintNode += 1
    } else if (nodeConcept === 'security objective') {
      securityobjectiveNode += 1
    } else if (nodeConcept === 'security mechanism') {
      securitymechanismNode += 1
    } else if (nodeConcept === 'threat') {
      threatNode += 1
    } else if (nodeConcept === 'vulnerability') {
      vulnerabilityNode += 1
    }
  })

  result = `${result}• actor nodes: ${actorNode}\n`
  result = `${result}• cloud actor nodes: ${cloudactorNode}\n`
  result = `${result}• malicious actor nodes: ${maliciousactorNode}\n`
  result = `${result}• goal nodes: ${goalNode}\n`
  result = `${result}• cloud service nodes: ${cloudserviceNode}\n`
  result = `${result}• resource nodes: ${resourceNode}\n`
  result = `${result}• virtual resource nodes: ${virtualNode}\n`
  result = `${result}• infrastructure node nodes: ${infranNode}\n`
  result = `${result}• phyisical infrastructure nodes: ${physicalNode}\n`
  result = `${result}• security constraint nodes: ${securityconstraintNode}\n`
  result = `${result}• security objective nodes: ${securityobjectiveNode}\n`
  result = `${result}• security mechanism nodes: ${securitymechanismNode}\n`
  result = `${result}• threat nodes: ${threatNode}\n`
  result = `${result}• vulnerability nodes: ${vulnerabilityNode}\n`

  printChat(result)
}
