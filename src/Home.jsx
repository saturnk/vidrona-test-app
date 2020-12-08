import React from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents/dist/icons/customer-briefing.js";
import "@ui5/webcomponents/dist/icons/add.js";
import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart,
} from 'recharts';
import {
  Card,
  Text,
  List,
  StandardListItem,
  ValueState,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Avatar,
  AnalyticalCard,
  AnalyticalCardHeader
} from "@ui5/webcomponents-react";


export function Home(props) {
 
 
  
const data = [
  {
    name: 'Jan', critical: 400, healthy: 240, amt: 240,
  },
  {
    name: 'Feb', critical: 300, healthy: 138, amt: 220,
  },
  {
    name: 'Mar', critical: 200, healthy: 980, amt: 229,
  },
  {
    name: 'Apr', critical: 280, healthy: 308, amt: 200,
  },
  {
    name: 'May', critical: 180, healthy: 480, amt: 281,
  }
];

  return (
  
  <>
    
    
   <FlexBox style={{...spacing.sapUiLargeMarginBegin }}>
    
       <Grid  style={{ width: "500px", ...spacing.sapUiContentPadding , ...spacing.sapUiLargeMargin, ...spacing.sapUiLargeMarginBegin}} position="Center">
  <div>
    <Avatar  image="customer.png" style={spacing.sapUiContentPadding} size="M" /><Text style={spacing.sapUiContentPadding} >Client Info</Text>
  </div> 
  <div>
    <Avatar backgroundColor="Accent3" image="project.png" style={spacing.sapUiContentPadding} size="M" /><Text style={spacing.sapUiContentPadding} >All Projects</Text>
  </div> 
  <div>
    <Avatar image="currentproject.png" style={spacing.sapUiContentPadding} size="M" /><Text style={{...spacing.sapUiContentPadding, marginLeft: '0.5em' }}>Project</Text>
  </div>
  <div>
    <Avatar image="QA.png" style={spacing.sapUiContentPadding} size="M" /><Text style={{...spacing.sapUiContentPadding, marginLeft: '0.5em' }} >Quality</Text>
  </div>
 <div>
    <Avatar image="plants.png" style={spacing.sapUiContentPadding} size="M" /><Text style={spacing.sapUiContentPadding} >Veg. Health</Text>
  </div>
  
  <div>
    <Avatar image="data.png" style={spacing.sapUiContentPadding} size="M" /><Text style={spacing.sapUiContentPadding} >Analytics</Text>
  </div>
  <div>
    <Avatar image="maintenance.png" style={spacing.sapUiContentPadding} size="M" /><Text style={{...spacing.sapUiContentPadding, marginLeft: '-0.5em' }} >Maintenance</Text>
  </div>
   <div>
    <Avatar image="weather.png" style={spacing.sapUiContentPadding} size="M" /><Text style={{...spacing.sapUiContentPadding, marginLeft: '0.5em' }} >Weather</Text>
  </div>
</Grid>

<Card
        heading="Detected Fault Trend"
        style={{ width: "500px", ...spacing.sapUiContentPadding , ...spacing.sapUiMediumMargin}}
        headerInteractive
      
    
      >
        
    <LineChart width={500} height={300} data={data}
  margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
        <Line type="monotone" dataKey="critical" stackId="a" stroke="#f44336" />
        <Line type="monotone" dataKey="healthy" stackId="a" stroke=" #4caf50" />
</LineChart>
      </Card>  
      </FlexBox>
      
      
      
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}    
    >
    
    
     
    
      
  
<AnalyticalCard   style={{ width: "500px" ,...spacing.sapUiLargeMarginEnd}} header={<AnalyticalCardHeader arrowIndicator="Up" counterState="Success" description="MENA Region" deviation="+65.44%" indicatorState="Success"   title="Asset Health" unit="Unit" value="10" valueState="Success"/>}>
  
  
      <BarChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1 " />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar barSize={25} dataKey="critical" stackId="a" fill="#f44336" />
        <Bar dataKey="healthy" stackId="a" fill=" #4caf50" />
      </BarChart>

      </AnalyticalCard>

      <Card
        heading="Fault ID"
        subtitle="List"
        style={{ width: "400px", height: "350px", ...spacing.sapUiContentPadding, ...spacing.sapUiMediumMargin }}
        headerInteractive
        
      >
        <List>
          <StandardListItem info="T&D Lines Mohindengarg" infoState={ValueState.Error}>
            FID: 20392_VID_07
          </StandardListItem>
          <StandardListItem info="Rusting of frames" infoState={ValueState.Error}>
            FID: 20392_VID_06
          </StandardListItem>
           <StandardListItem info="Loose Connectors" infoState={ValueState.Error}>
            FID: 20392_VID_05
          </StandardListItem>
       
         
        
        </List>
      </Card>
     
    </FlexBox>
    
    
    
    </>
  );
}
