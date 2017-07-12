'use strict'

const printChat = require('../core/printChat.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCpt,
  e
  // console.log
) {
  if (e === 'connection') {
    switch (true) {
      /*
      * Sectro shit
      */
      //  dependency(A|G,A|G)
      case ((srcNodeCpt === 'actor' || srcNodeCpt === 'cloud actor' ||
       srcNodeCpt === 'malicious actor') &&
      (trgNodeCpt === 'goal' || trgNodeCpt === 'cloud service')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'dependency')
        break
      //  requires(G|R,R|CS)
      case ((srcNodeCpt === 'goal' || srcNodeCpt === 'cloud service') &&
      (trgNodeCpt === 'actor' || trgNodeCpt === 'cloud actor' ||
      trgNodeCpt === 'malicious actor')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'dependency')
        break
      // impacts(T,R|G)
      case (srcNodeCpt === 'threat' && (trgNodeCpt === 'resource' ||
      trgNodeCpt === 'goal' || trgNodeCpt === 'virtual resource' ||
      trgNodeCpt === 'infrastructure node' || trgNodeCpt === 'physical infrastructure' ||
      trgNodeCpt === 'cloud service')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'impacts')
        break
      // mitigates(SC,T)
      case (srcNodeCpt === 'security constraint' && trgNodeCpt === 'threat'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'mitigates')
        break
      //  exploits(T,V)
      case (srcNodeCpt === 'threat' &&  trgNodeCpt === 'vulnerability'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'exploits')
        break
      //  restricts(SC,R|G|VR|PI|IN|CS)
      case (srcNodeCpt === 'security constraint' && (trgNodeCpt === 'resource' ||
      trgNodeCpt === 'goal' || trgNodeCpt === 'virtual resource' ||
      trgNodeCpt === 'infrastructure node' || trgNodeCpt === 'physical infrastructure' ||
      trgNodeCpt === 'cloud service')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'restricts')
        break
      //  implements(SO,SM)
      case (srcNodeCpt === 'security objective' && trgNodeCpt === 'security mechanism'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'implements')
        break
      //  satisfies(SO,SC)
      case (srcNodeCpt === 'security objective' && trgNodeCpt === 'security constraint'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'satisfies')
        break
      //  protects(SM,V)
      case (srcNodeCpt === 'security mechanism' && trgNodeCpt === 'vulnerability'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'protects')
        break
      //  poses(MA,T)
      case (srcNodeCpt === 'malicious actor' && trgNodeCpt === 'threat'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'poses')
        break
      /*
      * Cloud shit
      */
      //permeates(VR|IN, VR|PI|IN)
      case (srcNodeCpt === 'virtural resource' && (trgNodeCpt === 'infrastructure node' ||
      trgNodeCpt === 'virtural resource' || trgNodeCpt === 'physical infrastructure')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'permeates')
        break
      case (srcNodeCpt === 'infrastructure node' && (trgNodeCpt === 'infrastructure node' ||
      trgNodeCpt === 'virtural resource' || trgNodeCpt === 'physical infrastructure')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'permeates')
        break
      //  requires(CS,CS|R|VR|IN|PI)
      case (srcNodeCpt === 'cloud service' && (trgNodeCpt === 'resource' ||
      trgNodeCpt === 'cloud service' || trgNodeCpt === 'virtual resource' ||
      trgNodeCpt === 'physical infrastructure' || trgNodeCpt === 'infrastructure node')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
        break
      //  requires(R|VR|PI|IN,CS|R|VR|IN|PI)
      case ((srcNodeCpt === 'resource' || srcNodeCpt === 'virtual resource' ||
      srcNodeCpt === 'physical infrastructure' || srcNodeCpt === 'infrastructure node') &&
      (trgNodeCpt === 'resource' || trgNodeCpt === 'cloud service' ||
      trgNodeCpt === 'virtual resource' || trgNodeCpt === 'physical infrastructure' ||
      trgNodeCpt === 'infrastructure node')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'requires')
        break

      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  else if (e === 'owns') {
    switch (true) {
      //  owns(CA,CS|R)
      case (srcNodeCpt === 'cloud actor' && (trgNodeCpt === 'cloud service' ||
      trgNodeCpt === 'resource')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'owns')
        break
      case (srcNodeCpt === 'cloud actor' && (trgNodeCpt === 'virtual resource' ||
      trgNodeCpt === 'physical infrastructure' || trgNodeCpt === 'infrastructure node')):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'owns')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
  else if (e === 'manages') {
    switch (true) {
      //  manages(CA,CS)
      case (srcNodeCpt === 'cloud actor' && trgNodeCpt === 'cloud service'):
        addEdge(cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt, 'manages')
        break
      default:
        printChat(`${srcNodeCpt} -> ${trgNodeCpt}\nnot allowed 😔`)
    }
  }
}
