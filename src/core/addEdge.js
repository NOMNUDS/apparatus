'use strict'

module.exports = function addEdge (
  cy,
  srcNode,
  trgNode,
  srcNodeCpt,
  trgNodeCp,
  label
  //info: 'data(info.description)',
) {  switch (label) {
    case ('requires'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                security_property_filter: ''
              }
            }
          }).addClass('requires')
          break
    case ('impacts'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                impact_metric: ''
              }
            }
          }).addClass('impacts')
          break
    case ('permeates'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                data: `${srcNode}`
              }
            }
          }).addClass('permeates')
          break
    case ('owns'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                responsibility: ''
              }
            }
          }).addClass('owns')
          break
    case ('exploits'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                preventable: ''
              }
            }
          }).addClass('exploits')
          break
    case ('manages'):
          cy.add({
            group: 'edges',
            data: {
              id: `e${srcNode}${trgNode}`,
              source: `${srcNode}`,
              target: `${trgNode}`,
              label: `${label}`,
              info: {
                cloud_service: 'CS',
                deployment_model: 'public',
                service_model: 'SaaS',
                manager: 'ACtor'
              }
            }
          }).addClass('manages')
          break
    default:
    cy.add({
      group: 'edges',
      data: {
        id: `e${srcNode}${trgNode}`,
        source: `${srcNode}`,
        target: `${trgNode}`,
        label: `${label}`,
        info: {
            // description: ''
        }
      }
    })
  }
}
