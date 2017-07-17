'use strict'

const sectrocloudMetamodel = require('./sectrocloudSchema.js')
const printChat = require('../core/printChat.js')
// checks if the instance is correct

module.exports = function moduleValidation (cy) {
  // valid component connections
  // const thingArray = sectrocloudMetamodel.thingArray
  // const micronetArray = sectrocloudMetamodel.micronetArray
  // const netArray = sectrocloudMetamodel.netArray
  // const informationArray = sectrocloudMetamodel.informationArray
  // const actorArray = sectrocloudMetamodel.actorArray
  // const maliciousActorArray = sectrocloudMetamodel.maliciousActorArray
  // const assetArray = sectrocloudMetamodel.assetArray
  // const constraintArray = sectrocloudMetamodel.constraintArray
  // const threatArray = sectrocloudMetamodel.threatArray
  // const sensorArray = sectrocloudMetamodel.sensorArray
  const goalArray = sectrocloudMetamodel.goalArray
  const actorArray = sectrocloudMetamodel.actorArray

  // decleration of arrays
  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().info.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neigborObject = neighborNodes.data().info.concept
        Object.keys(neigborObject).map(() => {
          // every neighbor node is added to the array arrWrong
          arrWrong.push(neigborObject)
          // if the neighbor is a valid connection it is removed from the array
          if (componentArray.includes(neigborObject) === true) {
            arrWrong.pop(neigborObject)
          }
        })
      }
    })

    result = `${arrWrong}`
    // if the string is empty, the module is correct
    if (result === '') {
      result = 'model instance is valid\n👍'
    } else {
      printChat(result)
    }
  }

  // componentValidation(cy, 'thing', thingArray)
  // componentValidation(cy, 'micronet', micronetArray)
  // componentValidation(cy, 'net', netArray)
  // componentValidation(cy, 'information', informationArray)
  // componentValidation(cy, 'malicious actor', maliciousActorArray)
  // componentValidation(cy, 'asset', assetArray)
  // componentValidation(cy, 'constraint', constraintArray)
  // componentValidation(cy, 'threat', threatArray)
  // componentValidation(cy, 'sensor', sensorArray)
  componentValidation(cy, 'goal', goalArray)
  componentValidation(cy, 'actor', actorArray)

  printChat(result)
}
