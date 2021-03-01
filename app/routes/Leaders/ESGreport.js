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
        Sustainability Overview
      </Text>
      <Text style={styles.text}>
      Building and maintaining trust in businesses and governments is fundamental to achieving a sustainable economy and world. Every day, decisions are made by businesses and governments which have direct impacts on their stakeholders, such as financial institutions, labor organizations, civil society and citizens, and the level of trust they have with them. These decisions are rarely based on financial information alone. They are based on an assessment of risk and opportunity using information on a wide variety of immediate and future issues. The value of the sustainability reporting process is that it ensures organizations consider their impacts on these sustainability issues, and enables them to be transparent about the risks and opportunities they face. Stakeholders also play a crucial role in identifying these risks and opportunities for organizations, particularly those that are non-financial. This increased transparency leads to better decision making, which helps build and maintain trust in businesses and governments.
      </Text>
      <Text style={styles.subtitle}>
        Principal adverse sustainability impacts statement
      </Text>
      <Text style={styles.text}>
      Increased understanding of risks and opportunities
      Emphasizing the link between financial and non-financial performance
      Influencing long term management strategy and policy, and business plans
      Streamlining processes, reducing costs and improving efficiency
      Benchmarking and assessing sustainability performance with respect to laws, norms, codes, performance standards, and voluntary initiatives
      Avoiding being implicated in publicized environmental, social and governance failures
      Comparing performance internally, and between organizations and sectors
      </Text>
      <Text style={styles.subtitle}>
        Top ESG Assets and Allocation
      </Text>
      <Image
          src={require("./scn2.png")} 
          style={styles.image}
      />
      <Text style={styles.subtitle}>
        Portfolio vs. Benchmark
      </Text>
      <Text style={styles.text}>
        We recognise the potential impact of climate change and have set out an ambition to align our financing portfolio to the Paris Agreement goals. Our aim is to accelerate the transition to a thriving low-carbon global economy through finance. Find out how we plan to help build a thriving low-carbon economy. We are proud to have won recognition as an industry leader for these efforts, including being named the World’s Best Bank for Sustainable Finance by Euromoney magazine for two consecutive years. But we also know that meeting the Paris Agreement goals will require even more effort and pace to ensure environmentally and socially responsible growth. That’s why we have an ambitious plan to prioritise financing and investment that supports the transition to a net zero global economy – and helps to build a thriving, resilient future for society and businesses.
        As we look ahead to 2014, we continue our work on
        nuclear plant life extensions. The next station being
        considered for further life extension is Dungeness B.
        We have been working hard on this and expect to
        make a final decision on life extension for Dungeness
        by the end of 2014. Our life extension programme will
        ensure the existing nuclear plants continue to generate
        the low carbon electricity the UK needs for as long as
        practical.
      </Text>
      <Text style={styles.subtitle}>
        Key Sectors
      </Text>
      <Text style={styles.text}>
      The importance of rebuilding trust with customers
      became even more important last year. After
      maintaining our standard variable prices throughout
      the year, we took the difficult decision to increase them
      from 3rd January 2014. However we knew that rising
      costs were hurting customers, and we knew that doing
      nothing was not an option. So we held back the full
      impact of rising costs: our increase was less than half
      the size of those that had been announced by some
      of our competitors.
      We were the first company to take action. We did
      so because we were confident that, working with
      the industry, the Government would find ways to bear
      down on costs. We chose to pass on the benefit of
      that in anticipation of the decision we were expecting
      from the Government. After our move, the Government
      announced changes to the roll-out of various schemes
      to reduce their cost for customers. As a result our main
      competitors have followed our lead.
      </Text>
      <Text style={styles.text}>
      We have embarked on our programme to deliver
      smart meters. The benefits to customers of smart
      meters are clear: real-time energy use will be recorded
      allowing customers to see exactly how much energy
      they are using, ending the need for estimated bills.
      It is another way we are working to rebuild trust
      with customers. We are building our smart metering
      team in preparation for the full rollout. This includes
      a new smart meter apprenticeship scheme to train
      up the people we will need to deliver this ambitious
      programme. We are committed to making this
      beneficial programme as cost-effective as possible,
      and this will always be a priority.
      Into 2014, the new structure of our company
      demonstrates our commitment to stand on the side
      of customers. We have simplified our business around
      the fundamental role that we play: generating electricity,
      supplying electricity and gas to customers, and
      delivering nuclear new build for the future. 
      </Text>
      <Text style={styles.text}>
      There is a critical need for more STEM skills to help
      support the transition to a low-carbon economy. 2013
      saw more progress in our attempts to inspire and train
      the next generation of engineers. The total number of
      schools registered to the Pod, EDF Energy’s sustainable
      schools programme, is now over 18,000, with almost
      27,500 individual users (typically teachers) signed up
      and nearly 52,000 resources downloaded since August
      2013. More than 10 million children have been engaged
      through the programme, and over 50 per cent of UK
      schools are registered.
      </Text>
      <Text style={styles.text}>
      As we look ahead to 2014, we continue our work on
      nuclear plant life extensions. The next station being
      considered for further life extension is Dungeness B.
      We have been working hard on this and expect to
      make a final decision on life extension for Dungeness
      by the end of 2014. Our life extension programme will
      ensure the existing nuclear plants continue to generate
      the low carbon electricity the UK needs for as long as
      practical.
      </Text>
      <Text style={styles.text}>
      It used to be the case that most of the existing
      nuclear stations were expected to close by 2023. In
      fact, through the investments made in the life extension
      programme most will now operate beyond that date.
      We have continued to deliver on the commitments we
      made following the events at Fukushima in 2011. In
      December 2013 I opened our new Emergency Response
      Centre at Sizewell which is designed to provide further,
      robust back-up for our safety systems. It is another
      key milestone of our £180 million safety and resilience
      programme, which was completed in March this year. 
      </Text>
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
    marginLeft: 12,
    marginBottom: 3,
  },
  subtitle: {
    color: '#33AE9A',
    textTransform: 'uppercase',
    fontSize: 17,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 12,
    textAlign: 'justify',
  },
  image1: {
    width: '130px',
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
