'use strict'

const cytoscape = require('cytoscape')
const path = require('path')

// require keybindings
const keybindings = require('./src/keybindings.js')

const printChat = require('./src/core/printChat.js')

// require core modules
// const nodeInfo = require('./src/core/nodeInfo.js')
const core = require('./src/core/core.js')
const hoverNodeInfo = require('./src/core/hoverNodeInfo.js')
const editNode = require('./src/core/editNode.js')
const totalNodes = require('./src/core/totalNodes.js')
// require design modules
const dgn = require('./src/design/design.js')
// require design-state Models
const dgnState = require('./src/design-state/dgnState.js')
// reguire implementation modules
const imp = require('./src/implementation/implementation.js')
// require implementation-state modules
const impState = require('./src/implementation-state/impState.js')
// require sectropcloud-state modules
const sectrocloud = require('./src/sectrocloud/sectrocloud.js')
// configuration for the graphs style
const graphStyle = require(`./config/graphStyle.js`)

// require the initial graph file
// const graphModel = require(`./graphs/implementation/smartHome.js`)
const graphModel = require(`./graphs/implementation/cloudScenario.js`)

// setting up the graph container
const cy = cytoscape({
  container: document.getElementById('graph-container'),
  autounselectify: true,
  elements: graphModel.elements, // loads the elements object of the graph
  style: graphStyle.style
})
// graph layout
cy.layout({
  name: 'cose'
})

// initial label render
cy.nodes().addClass('label-nodes')
cy.edges().addClass('label-edges')

// global variables, used in cy.on
let selectedNode = {}
let selectedEdge = {}
let srcNode = {}
let trgNode = {}
let srcNodeCpt = {}
let trgNodeCpt = {}

// cy.on does stuff when intrecting with the graph
// do stuff when tapping on node
cy.on('tap', 'node', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selectedNode.out = selection.target[0]
  selectedNode.out.addClass('selection')
  srcNode.out = trgNode.out // second selection
  trgNode.out = selectedNode.out.data().id
  srcNodeCpt.out = trgNodeCpt.out // second selection
  trgNodeCpt.out = selectedNode.out.data().info.concept
  selectedEdge.out = {} // clear token
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping on an edge
cy.on('tap', 'edge', selection => {
  // removes previous selections
  cy.elements().removeClass('selection')
  cy.elements().removeClass('attention')
  cy.elements().removeClass('protect')
  selection.target.addClass('selection')
  selectedNode.out = {} // clear token
  selectedEdge.out = selection.target[0]
  totalNodes(cy) // global module
  editNode.removeElement() // remove the edit node element
})
// do stuff when tapping the stage
cy.on('tap', selection => {
  // checks if only the stage was clicked
  if (selection.target === cy) {
    // removes previous selections
    cy.elements().removeClass('faded')
    cy.elements().removeClass('selection')
    cy.elements().removeClass('attention')
    cy.elements().removeClass('protect')
    // clear tokens
    selectedNode.out = {}
    selectedEdge.out = {}
    totalNodes(cy) // global module
    editNode.removeElement() // remove the edit node element
  }
})
// right clicking
cy.on('cxttapend', 'node', selection => {
  selectedNode = selection.target[0]
  editNode.formNode(selectedNode) // global module
})
// do stuff when hovering over a node
cy.on('mouseover', 'node', event => {
  hoverNodeInfo(event.target[0]) // global module
})
// do stuff when hovering out of a node
cy.on('mouseout', 'node', event => {
  // hides the hover container
  document.getElementById('container-node-id').style.display = 'none'
})

// create the paths of each phase
const dgnPath = 'design.html'
const dgnStatePath = 'design-state.html'
const impPath = 'implementation.html'
const impStatePath = 'implementation-state.html'
const sectrocloudPath = 'sectrocloud.html'
// store the last word of the window path to make it cross plaform
// blame chromium and its Posix paths on windows for this ugliness
const pathLocation = window.location.pathname.split('/').pop()

// load the buttons for each phase

// load design phase buttons
if (pathLocation === dgnPath) {
  dgn.addNode(cy)
  dgn.threatVerify(cy)
  dgn.overview(cy)
  dgn.validate(cy)
  dgn.moduleGroup(cy)
  dgn.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  // load design-state buttons
} else if (pathLocation === dgnStatePath) {
  dgnState.addNode(cy)
  dgnState.overview(cy)
  dgnState.validate(cy)
  dgnState.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  // loads implementation phase buttons
} else if (pathLocation === impPath) {
  imp.addNode(cy)
  imp.overview(cy)
  imp.validate(cy)
  imp.threatVerify(cy)
  imp.vulnVerify(cy)
  imp.findVulnerabilities(cy)
  imp.findPattern(cy)
  imp.moduleGroup(cy)
  imp.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  // loads implementation-state buttons
} else if (pathLocation === impStatePath) {
  impState.addNode(cy)
  impState.overview(cy)
  impState.validate(cy)
  impState.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
}
  // Sectro stuff TO CJHANGE
  else if (pathLocation === sectrocloudPath) {
  sectrocloud.addNode(cy)
  sectrocloud.addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt)
  sectrocloud.threatVerify(cy)
  sectrocloud.overview(cy)
  sectrocloud.validate(cy)
  sectrocloud.moduleGroup(cy)
  sectrocloud.vulnVerify(cy)
  sectrocloud.findVulnerabilities(cy)
}
// declaration of global buttons

// highlights only the selected node class
core.selectionNode(cy)
// cose layout
core.layout(cy)
// enable label buttons
core.labels(cy)
// save graph
core.saveGraph(cy, path)
// load graph - TODO doesn't work properly
core.loadGraph(cy, graphStyle)
// show the neighbors of a tapped node
core.showNeighbor(cy, selectedNode)
// delete elements
core.deleteButton(cy, selectedNode, selectedEdge)
// initial node count
totalNodes(cy)
// enable keybindings
keybindings(cy, selectedNode, selectedEdge)

// test function
const buttonTest = document.getElementById('test-button')
buttonTest.addEventListener('click', () => {
  // test code goes here
  printChat('test function\nused for debugging')
})

// toggles side panels
// const toggleUI = () => {
//   const sidebarStatus = document.getElementById('sidebar-id')
//   const actionBarStatus = document.getElementById('action-bar-id')
//   if (sidebarStatus.style.display === 'block') {
//     sidebarStatus.style.display = 'none'
//     actionBarStatus.style.display = 'none'
//   } else {
//     sidebarStatus.style.display = 'block'
//     actionBarStatus.style.display = 'block'
//   }
// }
