// CSS style for the graphs

const config = require(`./config.js`)

const graphStyle = {}

graphStyle.style = [{
  selector: 'node',
  style: {
    shape: 'ellipse',
<<<<<<< HEAD
    'background-color': config.white,
    // 'text-wrap': 'wrap',
    // 'text-max-width': '100px'
=======
    'background-color': config.white
    // 'text-wrap': 'wrap',
    // 'text-max-width': '50px'
>>>>>>> a5b7c2ef936252967a3578a680e3cf67bddd5055
  }
}, {
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    'line-color': config.white,
    'width': 2
  }
}, {
  selector: '.faded',
  style: {
    'opacity': 0.25,
    'text-opacity': 0
  }
}, {
  selector: '.selection',
  style: {
    'font-weight': 'bold',
    'text-transform': 'uppercase',
    'color': config.blue,
    'overlay-color': config.blue,
    'text-outline-width': 5,
    'text-outline-color': config.blue,
    'text-background-color': config.blue
    // // 'border-color': config.blue,
    // label: 'data(label)',
    // 'text-valign': 'center',
    // 'color': config.blue,
    // 'text-outline-width': 2,
    // 'text-outline-color': config.background
    // // 'line-color': config.blue
  }
}, {
  selector: '.old-selection',
  style: {
    //'font-weight': 'bold',
    'font-style': 'oblique',
    'text-transform': 'uppercase',
    'color': config.orange,
    'overlay-color': config.orange,
    'text-outline-width': 5,
    'text-outline-color': config.orange,
    'text-background-color': config.orange

    // label: 'data(label)',
    // 'text-valign': 'center',
    // 'color': config.orange,
    // 'text-outline-width': 2,
    // 'text-outline-color': config.background
    // //'border-color': config.orange
  }
}, {
  selector: '.attention',
  style: {
    'background-color': config.yellow
  }
}, {
  selector: '.protect',
  style: {
    'background-color': config.cyan
  }
}, {
  selector: '.label-nodes',
  style: {
    //label: 'data(info.description)',
    label: 'data(label)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-edges',
  style: {
    label: 'data(label)',
    'target-arrow-shape': 'triangle',
    'target-arrow-color': config.white,
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
  selector: '.label-id',
  style: {
    label: 'data(id)',
    'text-valign': 'center',
    'color': config.white,
    'text-outline-width': 2,
    'text-outline-color': config.background
  }
}, {
    // Selector to display the description on labels
    selector: '.show-node-description',
    style: {
      label: 'data(info.description)',
      'text-valign': 'center',
      'color': config.white,
      'text-outline-width': 2,
      'text-outline-color': config.background
    }



  // Old cloud shit
}, {
    selector: '.actor',
    style: {
      shape: 'ellipse',
      width: '60',
      height: '60',
      padding: '10px',
      'border-width': '3',
      'background-color': config.pink
    }
  }, {
    selector: '.goal',
    style: {
      shape: 'roundrectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      'background-color': config.green,
      // 'text-wrap': 'wrap',
      // 'text-max-width': '10px'
    }
  }, {
    selector: '.plan',
    style: {
      shape: 'vee',
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      'background-color': config.blue
    }
  }, {
    selector: '.resource',
    style: {
      shape: 'rectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      'background-color': config.yellow
    }
  }, {
    selector: '.cloud-actor',
    style: {
      shape: 'ellipse',
      width: '60',
      height: '60',
      padding: '10px',
      'border-width': '3',
      'background-color': config.pink
    }
  }, {
    selector: '.cloud-service',
    style: {
      shape: 'roundrectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      'background-color': config.darkgreen
    }
  }, {
    selector: '.virtual-resource',
    style: {
      shape: 'rectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'background-color': config.yellow,
      'border-width': '6',
      'border-style': 'dotted'
    }
  }, {
    selector: '.physical-infrastructure',
    style: {
      shape: 'rectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'background-color': config.yellow,
      'border-width': '6',
      'border-style': 'solid'
    }
  }, {
    selector: '.infrastructure-node',
    style: {
      width: 'label',
      height: 'label',
      padding: '10px',
      shape: 'rectangle',
      'background-color': config.yellow,
      'border-width': '6',
      'border-style': 'dashed'
    }
  }, {
    selector: '.malicious-actor',
    style: {
      width: '60',
      height: '60',
      padding: '10px',
      'border-width': '3',
      shape: 'ellipse',
      'background-color': config.pink
    }
  }, {
    selector: '.security-mechanism',
    style: {
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      shape: 'rectangle',
      'background-color': config.green
    }
  }, {
    selector: '.security-constraint',
    style: {
      width: '70',
      height: '70',
      padding: '10px',
      shape: 'octagon',
      'border-width': '3',
      'background-color': config.red
    }
  }, {
    selector: '.security-objective',
    style: {
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      shape: 'rectangle',
      'background-color': config.lightBlue

    }
  }, {
    selector: '.threat',
    style: {
      shape: 'triangle',
      width: 'label',
      height: 'label',
      padding: '30px',
      'border-width': '3',
      'background-color': config.orange
    }
  }, {
    selector: '.vulnerability',
    style: {
      shape: 'roundrectangle',
      width: 'label',
      height: 'label',
      padding: '10px',
      'border-width': '3',
      'background-color': config.darkred
    }
  }, {
    selector: '.and',
    style: {
      shape: 'diamond',
      'background-color': config.blue
    }
  }, {
    selector: '.or',
    style: {
      shape: 'diamond',
      'background-color': config.blue
    }
  },
  // declare edge shapes
  {
    selector: '.creates',
    style: {
      //'line-style': 'dashed'
      label: 'creates'
    }
  }, {
    selector: '.requires',
    style: {
      //'line-style': 'dashed'
      label: 'requires'
    }
  }, {
    selector: '.restricts',
    style: {
      //'line-style': 'dashed'
       label: 'restricts',
      // 'text-valign': 'bottom',
      // 'source-arrow-color': config.gray,
      // 'source-arrow-shape': 'triangle',
      // 'source-arrow-fill': 'filled'
    }
  }, {
    selector: '.manages',
    style: {
      //'line-style': 'dashed'
      label: 'manages'
    }
  }, {
    selector: '.owns',
    style: {
      //'line-style': 'dashed'
      label: 'owns'
    }
  }, {
    selector: '.impacts',
    style: {
      //'line-style': 'dashed'
      label: 'impacts'
    }
  }, {
    selector: '.satisfies',
    style: {
      //'line-style': 'dashed'
      label: 'satisfies'
    }
  }, {
    selector: '.implements',
    style: {
      //'line-style': 'dashed'
      label: 'implements'
    }
  }, {
    selector: '.protects',
    style: {
      //'line-style': 'dashed'
      label: 'protects'
    }
  }, {
    selector: '.permeates',
    style: {
      //'line-style': 'dashed'
      label: 'permeates'
    }
  }, {
    selector: '.mitigates',
    style: {
      //'line-style': 'dashed'
      label: 'mitigates'
    }
  }, {
    selector: '.exploits',
    style: {
      //'line-style': 'dashed'
      label: 'exploits'
    }
  }, {
    selector: '.depends',
    style: {
      //'line-style': 'dashed'
      label: 'depends'
    }
  }, {
    selector: '.affects',
    style: {
      //'line-style': 'dashed'
      label: 'affects'
    }
  }, {
    selector: '.composition',
    style: {
      //'line-style': 'dashed'
      label: 'composition'
    }
  }






]

module.exports = graphStyle
