
<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">sql-editor</h3>

  <p align="center">
    Challenge submission for Atlan. 
    </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://i.postimg.cc/QxgtBXWx/normal.png"/>

SQL Editor for Data Analysts where they can perform SQL queries and see the results.(Only Front-end)




### Built With
* [React.js](https://reactjs.org/)
* [styled-components](https://styled-components.com/)
* [react-data-table-component](https://react-data-table-component.netlify.app/)


<!-- USAGE EXAMPLES -->
## Usage
The app is hosted for the public at [https://atlan-sql-editor-kapaman.netlify.app/](https://atlan-sql-editor-kapaman.netlify.app/)


<!-- ROADMAP -->
## Features
<img src="https://i.postimg.cc/QxgtBXWx/normal.png"/>

-  Tabbed Structure to access Results and Query Quickly.
-  Workspace tab to quickly access the tables already generated.
- Preview feature to check all the keys of a particular table without actually querying for it. Useful for data analysts as they don't need to query the entire table just to check the keys the table has. Also potential to add some more metadata regarding type of key (string,number etc) which can add to the overall User Experience.

	<img src="https://i.postimg.cc/0QJDMbSH/preview.png" width="200"/>
- Minimizing the Workspace tab when not in use to save space.
- Table generated using a light-weight react table library for performance gains.

	<img src="https://i.postimg.cc/SKpZNf8v/react-table-size.png" height="200" />

- Export Results in JSON format(can be extended to other formats based on user needs).
<img src="https://i.postimg.cc/jdY2dW2F/export.png"/>

<!-- ACKNOWLEDGMENTS -->
## Load Time
I calculated the Load time using various websites all of which indicate that on average the load time appears to be around 600-700ms.

### Google Page Insights:
Performance Score: 99 

First Contentful Paint : 0.7s
<img src="https://i.postimg.cc/0Qkc75VG/insights.png"/>

### gtMetrix: 
Latest Contentful Paint: 462ms
<img src="https://i.postimg.cc/nhmRJPsm/gtmetrix.png"/>

### tools.pingdom: 
Load Time: 633ms
<img src="https://i.postimg.cc/hj2MsFYk/loadtime.png"/>
