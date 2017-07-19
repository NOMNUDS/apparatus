'use strict'

// design module

// require design-state modules
const sectrocloudModelValidation = require('./sectrocloudModelValidation.js')
const sectrocloudOverview = require('./sectrocloudOverview.js')
const addsectrocloudComponent = require('./addsectrocloudComponent.js')
const addsectrocloudEdge = require('./addsectrocloudEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')
const threatVerification = require('../core/threatVerification.js')
const moduleSelection = require('../core/moduleSelection.js')
const vulnVerification = require('./vulnVerification.js')
const findVulns = require('./findVulns.js')

// ADD SECTROCLOUD nodes
const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', e => {
    nodeCounter += 1
    addsectrocloudComponent(cy, e.target.textContent, nodeCounter)
    console.log(e.target.textContent)
    cy.nodes().addClass('label-nodes')
    // reset moduleGroup selection
    // document.getElementById('add-component-id').selectedIndex = ''
    totalNodes(cy) // global module
  })
}
// add design edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, e) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', e => {
    addsectrocloudEdge(cy, srcNode.out, trgNode.out, srcNodeCpt.out, trgNodeCpt.out, e.target.textContent)
    console.log(e.target.textContent)
    cy.edges().addClass('label-edges')
  })
}
// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    sectrocloudModelValidation(cy)
  })
}
// verify threats
const threatVerify = cy => {
  const buttonThreatVefiry = document.getElementById('threat-verify-button')
  buttonThreatVefiry.addEventListener('click', () => {
    threatVerification(cy) // global module
  })
}
// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    sectrocloudOverview(cy)
  })
}
// module selection
const moduleGroup = cy => {
  const group = document.getElementById('module-group')
  group.addEventListener('click', e => {
    moduleSelection(cy, e.target.textContent) // global module
  })
}
// verify vulnerabilities
const vulnVerify = cy => {
  const buttonVulnVefiry = document.getElementById('vuln-verify-button')
  buttonVulnVefiry.addEventListener('click', () => {
    vulnVerification(cy)
  })
}
// find vulnerabilities
const findVulnerabilities = cy => {
  const buttonFindVuln = document.getElementById('find-vuln-button')
  buttonFindVuln.addEventListener('click', () => {
    findVulns(cy)
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  threatVerify: threatVerify,
  vulnVerify: vulnVerify,
  findVulnerabilities: findVulnerabilities,
  validate: validate,
  overview: overview,
  moduleGroup: moduleGroup
}
