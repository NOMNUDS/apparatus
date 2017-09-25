# ASTo - Apparatus Software Tool
ASTo is security analysis tool for IoT networks. It is developed to support the Apparatus security framework. ASTo is based on
[electron](http://electron.atom.io/) and
[cytoscape.js](http://js.cytoscape.org/). The icons are provided by Google's [Material Design](https://material.io/icons/).

## SectroCloud - Cloud Security Analysis Module
SectroCloud is a module extending ASTo with cloud computing and security requirements engineering concepts. The module was developed to provide tool-support for cloud developers when applying the Secure Cloud Environment Framework(SCEF).

Configuring the properties of a cloud service
![](https://raw.githubusercontent.com/NOMNUDS/apparatus/master/assets/ASTo-Interface-Property-Edit.png)

Examining the properties of a cloud service
![](https://raw.githubusercontent.com/NOMNUDS/apparatus/master/assets/ASTo-Interface-Property-Relationship.png)

Cloud environment model 
![](https://raw.githubusercontent.com/NOMNUDS/apparatus/master/assets/VisionOverview.png)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. To download and install the app, type the following in your terminal:

```bash
# Clone this repository
git clone https://github.com/NOMNUDS/apparatus.git
# Go into the repository
cd apparatus
# Install dependencies
npm install
# to run the app
npm start
```

Because the app is still in prototype stage, it is best to keep up to date with the most recent commits. To do so, before starting the app, type:

```bash
# inside the apparatus directory

# update to latest
git pull
```

The first window (home screen) will ask you to choose which modeling phase would you like to perform analysis in. After you select a phase, a native dialog window will be displayed and ask you choose a file to load. By default, you can only choose `.js` or `.json` files.

You will find some example graphs in the `graphs` folder.


## Thanks

[@Or3stis](https://github.com/Or3stis) for the development and support of ASTo.


#### License [MIT](LICENSE.md)
