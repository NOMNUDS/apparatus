'use strict'

// add components in the graph

// TODO needs refactoring
module.exports = function addsectrocloudComponent (cy, component, nodeCounter) {
  //let nodeCounter = cy.nodes().length + 1
  // let nodeInfo = {}

  switch (component) {
    case 'goal':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                concept: 'goal'
              },
              position: {
                x: 20000,
                y: 400000
              }
            }
          }).addClass('goal')
          break
        case 'actor':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                concept: 'actor'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('actor')
          break
        case 'cloud-actor':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                Type:'',
                concept: 'cloud actor'
              },

                // shape: TRIANGLE,

              // background: {
              //   background-color
              // }
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('cloud-actor')
          break

        case 'cloud-service':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description:'',
                Capability: '',
                DeploymentModel: '',
                ServiceModel: '',
                concept: 'cloud service'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('cloud-service')
          break

        case 'vulnerability':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                AttackMethod: '',
                VulnerabilityMetric: '',
                SecurityProperty: '',
                concept: 'vulnerability'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('vulnerability')
          break

        case 'security-objective':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                ObjectiveMetric: '',
                SecurityProperty: '',
                concept: 'security objective'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('security-objective')
          break

        case 'virtual-resource':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                Value: '',
                SecurityProperty: '',
                Type: '',
                Vendor: '',
                Version: '',
                ResourceType: '',
                visibility: '',
                concept: 'virtual resource'
              },

              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('virtual-resource')
          break

        case 'physical-infrastructure':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                Value: '',
                SecurityProperty: '',
                Type: '',
                Vendor: '',
                Version: '',
                location: '',
                concept: 'physical infrastructure'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('physical-infrastructure')
          break

        case 'infrastructure-node':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                Value: '',
                SecurityProperty: '',
                Type: '',
                Vendor: '',
                Version: '',
                ResourceType: '',
                Tenancy: '',
                concept: 'infrastructure node'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('infrastructure-node')
          break
        case 'malicious-actor':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                concept: 'malicious actor'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('malicious-actor')
          break
        case 'resource':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                Value:'',
                SecurityProperty: '',
                Type: '',
                Vendor: '',
                Version: '',
                concept: 'resource'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('resource')
          break
        case 'security-constraint':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                SecurityProperty: '',
                SecurityRequirement: '',
                concept: 'security constraint'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('security-constraint')
          break
        case 'security-mechanism':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                MechanismMetric: '',
                SecurityProperty: '',
                concept: 'security mechanism'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('security-mechanism')
          break
        case 'threat':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                SecurityProperty: '',
                concept: 'threat'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('threat')
          break
        case 'and':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                concept: 'and'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('and')
          break
        case 'or':
          cy.add({
            group: 'nodes',
            data: {
              id: `n${nodeCounter}`,
              label: `${component}`,
              info: {
                description: '',
                concept: 'or'
              },
              position: {
                x: 200,
                y: 400
              }
            }
          }).addClass('or')
          break

    //
    // case 'thing':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         component: '',
    //         concept: 'thing'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'micronet':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         purpose: '',
    //         concept: 'micronet'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'information':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         concept: 'information'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'net':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         concept: 'net'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'actor':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         intent: '',
    //         concept: 'actor'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   }).addClass('selection')
    //   break
    // case 'malicious actor':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         intent: '',
    //         concept: 'malicious actor'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'asset':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         concept: 'asset'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'constraint':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         property: '',
    //         concept: 'constraint'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'threat':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         Type: '',
    //         concept: 'threat'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    // case 'sensor':
    //   cy.add({
    //     group: 'nodes',
    //     data: {
    //       id: `n${nodeCounter}`,
    //       label: `${component}`,
    //       info: {
    //         description: '',
    //         concept: 'sensor'
    //       },
    //       position: {
    //         x: 200,
    //         y: 400
    //       }
    //     }
    //   })
    //   break
    default:
      console.error('error in sectrocloudComponent.js')
  }
}
