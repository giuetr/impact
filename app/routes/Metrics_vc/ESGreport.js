import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const ESGreport = () => (
  <Document>
    <Page style={styles.body}>
      
      <View style={styles.container}>
        <View style={styles.leftColumn}>
        <Image
          src={require("./seguros.png")} 
          style={styles.image1}
      />
        </View>
        <View style={styles.rightColumn}>
        <Text style={styles.lg1}>IMPACT</Text>

        </View>
      </View>
      
      <Text style={styles.title}>ESG Report</Text>
      <Text style={styles.author}>March 2021</Text>

      <Text style={styles.maintext}>
        FUND NAME
      </Text>
      <Text style={styles.other}>
        Iberian Fund Tracker Equity US
      </Text>

      <Image
          src={require("./Esgscore.png")} 
          style={styles.image}
      />
      <Text style={styles.subtitle}>
        Total GHG Emissions
      </Text>
      <Text style={styles.text}>
        39,301,294 CO2e (Units of metric tons of carbon dioxide)
      </Text>
      <Text style={styles.subtitle}>
		    Minimum ESG Asset Allocation
      </Text>
      <Image
          src={require("./sctr_2.png")} 
          style={styles.image2}
      />
      <Text style={styles.text}>
        The fund invests in direct holdings. In order to meet the environmental or social characteristics promoted, the fund generally invests at least 85% of its total assets in the securities comprising the TRXI World Fossil Fuel Free Index. Hence, 85% of the investments are aligned with the environmental characteristic.
      </Text>
      <Text style={styles.subtitle}>
		    Economic sectors exposure
      </Text>
      <Text style={styles.text}>
        The fund is mostly exposed to the Technology and Agriculture sectors.
      </Text>
      <Image
          src={require("./sctr_1.png")} 
          style={styles.image3}
      />
      <Text style={styles.subtitle}>
        Environmental and/or social characteristics
      </Text>
      <Text style={styles.text}>
        This financial product promotes environmental or social characteristics, but does not have as its objective a sustainable investment. It might invest partially in assets that have a sustainable objective, for instance qualified as sustainable according to the EU classification.
      </Text>
      <Text style={styles.subtitle}>
        Environmental and/or social characteristics promoted by the financial product
      </Text>
      <Text style={styles.text}>
        The characteristic promoted by this financial product consist in the exclusion of investments in companies that own fossil fuel reserves.
      </Text>
      <Text style={styles.subtitle}>
        Investment strategy followed to meet the E/S characteristics
      </Text>
      <Text style={styles.text}>
        The investment strategy aims at tracking an index (the TRXI World Fossil Fuel Free Index) that is primarily designed to exclude companies based on the specific ESG criterion of ownership of fossil fuel reserves. It serves as a potential replacement for current TRXI World index exposure for investors interested in eliminating fossil fuel reserves from their portfolio.
      </Text>
      <Text style={styles.subtitle}>
        Binding elements for the investment selection
      </Text>
      <Text style={styles.text}>
        The exclusion of investments in companies that own fossil fuel reserves related to fossil fuel reserves is the binding element.
      </Text>
      <Text style={styles.subtitle}>
        Strategy implementation on a continuous basis
      </Text>
      <Text style={styles.text}>
        The investment seeks to provide investment results that, before fees and expenses, correspond generally to the total return performance of the TRXI World Fossil Fuel Free Index. Normally, the fund generally invests substantially all, but at least 95%, of its total assets in the securities comprising the index. In addition, it may invest in equity securities that are not included in the index, cash and cash equivalents or money market instruments. The index is designed to measure the performance of companies in the TRXI World Index that are “fossil fuel free”, which are defined as companies that do not own fossil fuel reserves. The fund is non-diversified. The compliance with the “fossil fuels free” characteristics is monitored on a regular basis.
      </Text>
      <Text style={styles.subtitle}>
        Amount of potential investments excluded
      </Text>
      <Text style={styles.text}>
        The implementation of the selection criteria leads to the exclusion of at least 15% of potential investments. The strategy eliminates companies that own fossil fuel reserves from the TRXI World index.
      </Text>
      <Text style={styles.subtitle}>
		    Policy to assess good governance practices of the investee companies
      </Text>
      <Text style={styles.text}>
        The investee companies are rated for governance aspects using the IMPACT Proprietary Rating Suite.
      </Text>
      <Text style={styles.subtitle}>
		Key Assets
      </Text>
      <Text style={styles.text}>
        The fund may invest in equity securities that are not included in the index, cash and cash equivalents or money market instruments.
      </Text>
      <Text style={styles.subtitle}>
		Impact of the sustainable investments of the financial product to a sustainable objective
      </Text>
      <Text style={styles.text}>
        Investments in solar photovoltaic energy production are considered as significantly contributing to climate change mitigation under the EU Taxonomy. The investments in companies supplying water contribute to climate change adaptation. The activity of the company supplying water has a substantial contribution to GHG emissions savings through low specific energy consumption in the water supply system measured in kWh per cubic meter of water. Nonetheless, all of the selected companies supplying water might not be compliant with EU Taxonomy energy consumption thresholds for substantial contribution to climate change adaptation.
      </Text>
      <Text style={styles.subtitle}>
      	Principal adverse impacts on sustainability
      </Text>
      <Text style={styles.text}>
        Upon investment and over the life of the product, we assess and monitor indicators that are deemed to indicate the presence of a principal adverse impact as per EU law, except for all biodiversity-related indicators, for which we are unable to collect data. More details can be found under the prospectus section on Adverse Impact. We address adverse impacts by engaging with investee companies. We use research from proxy voting companies to help us decide how to vote.
      </Text>




      <Text style={styles.subtitle}>
        Top ESG Assets and Allocation
      </Text>
      <Image
          src={require("./scn2.png")} 
          style={styles.image}
      />
      

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 27,
    textAlign: 'center',
  },
  lg1: {
    color: '#33AE9A',
    fontSize: 17,
    textAlign: 'right',
    marginTop: 5,
  },
  author: {
    color: '#33AE9A',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  other: {
    fontSize: 15,
    marginLeft: 12,
    marginBottom: 12,
  },
  maintext: {
    color: '#33AE9A',
    textTransform: 'uppercase',
    fontSize: 17,
    marginTop: 7,
    marginLeft:12,
    marginBottom: 15,
  },
  subtitle: {
    color: '#33AE9A',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 12,
  },
  text: {
    marginTop: 8,
    marginLeft:12,
    marginBottom: 15,
    fontSize: 12,
    textAlign: 'justify',
  },
  image2:{
    maxWidth: '230px',
  },  
  image1: {
    width: '130px',
  },
  image3: {
    width: '330px',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  header: {
    fontSize: 29,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  leftColumn: {
    flexDirection: 'row',
    width: '50%',
  },
  rightColumn: {
    flexDirection: 'row',
    width: '50%',
  },
});

export { ESGreport };
