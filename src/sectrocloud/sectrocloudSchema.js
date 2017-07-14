const sectrocloudMetamodel = {}

// metamodel concepts grouping
sectrocloudMetamodel.organisational = ['actor', 'cloud actor', 'malicious actor', 'goal',
'cloud service', 'security constraint' , 'resource', 'security objective']
sectrocloudMetamodel.application = ['cloud service', 'virtual resource', 'infrastructure node',
 'threat', 'vulnerability', 'security objective']
sectrocloudMetamodel.infrastructure = ['infrastructure node', 'physical infrastructure', 'security mechanism', 'vulnerability',
'threat']
sectrocloudMetamodel.cloudsecurity = ['cloud service', 'cloud actor', 'malicious actor', 'vulnerability',
'threat', 'security constraint', 'security objective', 'security mechanism', 'infrastructure node', 'virtual resource']

// allowed concepts connections
sectrocloudMetamodel.goalArray = ['goal', 'actor', 'cloud actor', 'malicious actor',
  'plan', 'resource', 'threat', 'security constraint', 'and', 'or', 'cloud service']
sectrocloudMetamodel.actorArray = ['goal', 'cloud service', 'cloud actor', 'malicious actor']





// redo these for the validation
sectrocloudMetamodel.maliciousActorArray = sectrocloudMetamodel.actorArray.concat('threat')
sectrocloudMetamodel.planArray = ['resource', 'threat', 'goal', 'security constraint', 'and', 'or']
sectrocloudMetamodel.resourceArray = ['threat', 'security constraint',
  'plan', 'goal', 'and', 'or', 'virtual resource', 'physical infrastructure',
  'infrastructure node']
sectrocloudMetamodel.threatArray = ['resource', 'plan', 'goal', 'security constraint', 'threat']
sectrocloudMetamodel.vulnerabilityArray = ['resource', 'plan', 'goal', 'security constraint', 'vulnerability']
sectrocloudMetamodel.constraintArray = ['threat', 'resource', 'plan', 'goal', 'security mechanism', 'virtual resource', 'physical infrastructure',
'infrastructure node']
sectrocloudMetamodel.mechanismArray = ['security constraint']
sectrocloudMetamodel.andArray = ['goal', 'plan', 'resource', 'virtual resource', 'physical infrastructure',
'infrastructure node']
sectrocloudMetamodel.orArray = sectrocloudMetamodel.andArray


module.exports = sectrocloudMetamodel
