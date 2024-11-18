
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Learn_Explanations() {
  const [isStockMarketOpen, setStockMarketOpen] = useState(false);
  const [isStockOpen, setStockOpen] = useState(false);
  const [isStockPriceOpen, setStockPriceOpen ] = useState(false);
  const [isStockPriceDefOpen, setStockPriceDefOpen ] = useState(false);
  const [isFundamentalVsTechOpen, setFundamentalVsTechOpen] = useState(false);
  const [isFundamentalVsTechDefOpen, setFundamentalVsTechDefOpen] = useState(false);
  const [isRiskOpen, setRiskOpen] = useState(false);
  const [isRiskDefOpen, setRiskDefOpen] = useState(false);
  const [isLongTermOpen, setLongTermOpen] = useState(false);
  const [isLongTermDefOpen, setLongTermDefOpen] = useState(false);


  const toggleStockMarket = () => {
    setStockMarketOpen(!isStockMarketOpen); //opens the stock market basics table
  };
  const toggleStock = () => {
    setStockOpen(!isStockOpen); //opens the definitions
  };
  
  const toggleStockPrice = () => {
    setStockPriceOpen(!isStockPriceOpen);
  };
  const toggleStockPriceDef = () => {
    setStockPriceDefOpen(!isStockPriceDefOpen);
  };

  const toggleFundamentalVsTech = () => {
    setFundamentalVsTechOpen(!isFundamentalVsTechOpen);
  };
  const toggleFundamentalVsTechDef = () => {
    setFundamentalVsTechDefOpen(!isFundamentalVsTechDefOpen);
  };

  const toggleRisk = () => {
    setRiskOpen(!isRiskOpen);
  };
  const toggleRiskdef = () => {
    setRiskDefOpen(!isRiskDefOpen);
  };

  const toggleLongTerm = () => {
    setLongTermOpen(!isLongTermOpen);
  };

  const toggleLongTermDef = () => {
    setLongTermDefOpen(!isLongTermDefOpen);
  };

  


  return (
    <ScrollView>

    

      <View style={styles.Main}>
        <View style={styles.MainHeadingView}>
          <Text style={styles.MainHeadingText}>StocksNHuds</Text>
        </View>
        
        <View style={styles.AppPage}>
          <Text style={styles.WelcomeHeadingText}>Explanations</Text>
          <Text style={styles.ExplanationText}>
            The following tables provide explanations for various stock market concepts:
          </Text>

          <View style={styles.container}>
            <TouchableOpacity onPress={toggleStockMarket}>
              <Text style={styles.section}>Stock Market Basics</Text>
            </TouchableOpacity>

            {isStockMarketOpen && (
              <ScrollView style={styles.content}>
                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is the stock market?</Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    The stock market is a virtual marketplace where stocks, which represent ownership in companies, are bought and sold. It serves as a platform for investors to trade securities and for companies to raise capital by issuing stocks to the public.
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is a stock?</Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    A stock, also known as a share or equity, is a certificate representing ownership in a corporation. When you own a stock, you own a portion of the company and have a claim on its assets and earnings.
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What are dividends?</Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    Dividends are profits distributed to shareholders by companies. They are typically paid out regularly, usually quarterly, and represent a portion of the company's earnings. Dividend payments are one way for companies to share their profits with shareholders. 
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What does the term "bull market" refer to? </Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    A bull market is a market trend characterized by rising stock prices. It reflects investor optimism and confidence in the economy and is often accompanied by strong economic indicators such as low unemployment rates and increasing consumer spending.
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is the role of a stockbroker? </Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    A bull market is a market trend characterized by rising stock prices. It reflects investor optimism and confidence in the economy and is often accompanied by strong economic indicators such as low unemployment rates and increasing consumer spending.
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is the difference between a stock and a bond?</Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <View>
                    <Text style={styles.description}>
                      Stocks represent ownership in a company, while bonds represent debt. When you buy a stock, you become a part owner of the company and have the potential to earn returns through dividends and capital appreciation.
                    </Text>
                    <Text style={styles.description}>
                      Bonds, on the other hand, are debt securities issued by governments or corporations to raise capital. Bondholders receive fixed interest payments at regular intervals and are repaid the principal amount at maturity.
                    </Text>
                  </View>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is the significance of market indices like the S&P 500 or Dow Jones Industrial Average? </Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    Market indices such as the S&P 500 and Dow Jones Industrial Average measure the overall performance of the stock market. They track the price movements of a select group of stocks representing various sectors of the economy and provide investors with insights into market trends and sentiment.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStock}>
                  <Text style={styles.subSection}>What is the purpose of diversification in investing? </Text>
                </TouchableOpacity>
                {isStockOpen && (
                  <Text style={styles.description}>
                    Diversification is spreading investments across different asset classes to reduce risk. By diversifying your investment portfolio, you can minimize the impact of adverse events affecting any single investment and improve the overall risk-adjusted return of your portfolio.
                  </Text>
                )}



              </ScrollView>
            )}
          </View>


          <View style={styles.container}>
            <TouchableOpacity onPress={toggleStockPrice}>
              <Text style={styles.section}>Understanding Stock Prices and Market Trends</Text>
            </TouchableOpacity>
            
            {isStockPriceOpen && (
              <ScrollView style={styles.content}>
                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Factors Influencing Stock Prices</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    Economic indicators, company performance, and market sentiment influence stock prices. Indicators like GDP, inflation, and unemployment reflect economic health, affecting investor confidence. Company performance, including revenue and profit, impacts stock valuation. Market sentiment, driven by investor perceptions, also shapes prices.                  
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Understanding Market Volatility</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    Market volatility refers to the frequency and magnitude of price fluctuations in the market. It reflects the degree of uncertainty and risk in the market and can be influenced by various factors such as economic events, geopolitical tensions, and investor behavior. High volatility may indicate increased uncertainty and potential for significant price swings, while low volatility may suggest stability and predictability in stock prices                  
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Concept of Overvalued Stocks</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    When a stock is considered "overvalued," its current market price is higher than its intrinsic value. In other words, investors are paying more for the stock than its underlying fundamentals justify. Overvalued stocks may be driven by speculative buying, market hype, or irrational exuberance, and they pose risks of price corrections or downturns when market sentiment changes or when the stock's true value is recognized.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Technical Analysis in Stock Market</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    When a stock is considered "overvalued," its current market price is higher than its intrinsic value. In other words, investors are paying more for the stock than its underlying fundamentals justify. Overvalued stocks may be driven by speculative buying, market hype, or irrational exuberance, and they pose risks of price corrections or downturns when market sentiment changes or when the stock's true value is recognized.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Role of Fundamental Analysis in Investing</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    Fundamental analysis involves evaluating a company's financial health, performance, and growth prospects to determine its intrinsic value and investment potential. Investors use fundamental analysis to assess factors such as revenue, earnings, cash flow, profitability, competitive position, and industry trends to make informed investment decisions. Fundamental analysis focuses on the underlying fundamentals of a company rather than short-term price movements or market sentiment.
                 </Text>
                )}

                <TouchableOpacity onPress={toggleStockPriceDef}>
                  <Text style={styles.subSection}>Understanding Stock Splits</Text>
                </TouchableOpacity>
                {isStockPriceDefOpen && (
                  <Text style={styles.description}>
                    A stock split occurs when a company divides its existing shares into multiple shares, effectively increasing the number of outstanding shares while reducing the price per share. Stock splits are typically implemented to make shares more affordable to a broader range of investors and improve liquidity in the market. While stock splits do not change the overall value of an investor's holdings, they can impact trading activity, investor sentiment, and market perception of the company
                 </Text>
                )}






              </ScrollView>








            )}
          </View>  

          <View style={styles.container}>
            <TouchableOpacity onPress={toggleFundamentalVsTech}>
              <Text style={styles.section}>Fundamental Analysis vs. Technical Analysis</Text>
            </TouchableOpacity>
            
            {isFundamentalVsTechOpen && (
              <ScrollView style={styles.content}>
                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Understanding Fundamental Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Fundamental analysis involves evaluating a company's financial health, performance, and growth prospects to determine its intrinsic value and investment potential. Investors focus on factors such as revenue growth, profitability, cash flow, and competitive position to assess the long-term viability of a company and its stock.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Key Concepts in Technical Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Technical analysis relies on historical price data and market activity to forecast future price movements and identify trading opportunities. Traders use tools such as moving averages, chart patterns, and technical indicators to analyze price trends, support and resistance levels, and trading signals.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Differences Between Fundamental and Technical Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Fundamental analysis focuses on assessing the underlying fundamentals of a company, including its financials, management team, and industry dynamics, to determine its intrinsic value. In contrast, technical analysis relies on price charts and market data to identify patterns and trends and make short-term trading decisions.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Factors Considered in Fundamental Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Fundamental analysts consider factors such as revenue growth, earnings per share (EPS), profit margins, return on equity (ROE), and industry trends when evaluating stocks. They also examine qualitative factors such as company management, competitive advantage, and regulatory environment to assess the overall health and prospects of a company.                  
                  </Text>
                )}

                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Tools and Techniques in Technical Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Technical analysts use various tools and techniques, including moving averages, MACD (Moving Average Convergence Divergence), RSI (Relative Strength Index), and chart patterns such as head and shoulders, triangles, and flags, to analyze price movements and identify trading opportunities.                  
                  </Text>
                )}

                <TouchableOpacity onPress={toggleFundamentalVsTechDef}>
                  <Text style={styles.subSection}>Combining Fundamental and Technical Analysis</Text>
                </TouchableOpacity>
                {isFundamentalVsTechDefOpen && (
                  <Text style={styles.description}>
                    Some investors use a combination of fundamental and technical analysis to make investment decisions. By integrating both approaches, investors can gain a more comprehensive understanding of a stock's potential and reduce the risk of relying solely on one method. For example, fundamental analysis may inform long-term investment decisions, while technical analysis may guide short-term trading strategies.                   
                  </Text>
                )}
              </ScrollView>

            )}
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={toggleRisk}>
              <Text style={styles.section}>Risk Management and Portfolio Diversification</Text>
            </TouchableOpacity>
            
            {isRiskOpen && (
              <ScrollView style={styles.content}>
                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Understanding Risk Management</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Risk management in investing involves strategies and techniques aimed at minimizing potential losses and preserving capital. Investors assess various types of risk, including market risk, credit risk, and liquidity risk, and implement measures to mitigate these risks while maximizing potential returns.                    
                  </Text>
                )}

                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Significance of Portfolio Diversification</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Portfolio diversification is a key principle of risk management that involves spreading investments across different asset classes, industries, and securities to reduce exposure to any single asset or risk factor. By diversifying their portfolios, investors can minimize the impact of market volatility, unforeseen events, and individual asset performance on their overall investment returns.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Role of Asset Allocation</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Asset allocation is the process of distributing investments across different asset classes, such as stocks, bonds, cash, and real estate, based on an investor's risk tolerance, investment goals, and time horizon. By strategically allocating assets, investors can balance risk and return and optimize the performance of their portfolios over the long term.                   
                  </Text>
                )}

                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Types of Risk in Investing</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Investors face various types of risk, including systematic risk and unsystematic risk. Systematic risk, also known as market risk, is inherent to the overall market and cannot be diversified away. Unsystematic risk, on the other hand, is specific to individual assets or sectors and can be reduced through diversification.                    
                  </Text>
                )}

                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Benefits of Diversification</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Diversification offers several benefits to investors, including risk reduction, smoother portfolio performance, and improved risk-adjusted returns. By spreading investments across different asset classes, industries, and geographic regions, investors can minimize the impact of adverse events or market downturns on their portfolios while capturing opportunities for growth.                    
                  </Text>
                )}

                <TouchableOpacity onPress={toggleRiskdef}>
                  <Text style={styles.subSection}>Risk Management Strategies</Text>
                </TouchableOpacity>
                {isRiskDefOpen && (
                  <Text style={styles.description}>
                    Risk management strategies include asset allocation, diversification, hedging, and use of risk management tools such as stop-loss orders and options contracts. By combining these strategies, investors can build resilient portfolios that can withstand market fluctuations and achieve long-term financial success.                     
                  </Text>
                )}
              </ScrollView>
            )}
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={toggleLongTerm}>
              <Text style={styles.section}>Long-Term vs. Short-Term Investing Strategies</Text>
            </TouchableOpacity>
            
            {isLongTermOpen && (
              <ScrollView style={styles.content}>
                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Difference between Long-Term and Short-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Long-term investing involves holding investments for an extended period, typically years or decades, with the goal of building wealth over time. Short-term investing, on the other hand, involves buying and selling assets within a shorter time frame, often days, weeks, or months, to capitalize on short-term price fluctuations.                     
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Focus of Long-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Long-term investing focuses on achieving financial goals over an extended period by building a diversified portfolio of quality assets and allowing them to grow over time. Investors adopt a patient approach, emphasizing fundamental analysis and staying invested through market fluctuations.                    
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Advantages of Long-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Long-term investing offers several advantages, including the potential for compounding returns, lower transaction costs, reduced tax implications for long-term capital gains, and the ability to weather short-term market volatility with a diversified portfolio.                     
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Characteristics of Short-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Short-term investing involves buying and selling assets within a shorter time frame to capitalize on price movements and market trends. Short-term investors may use technical analysis, leverage, and speculation to generate quick profits, but they also face higher transaction costs and tax implications.                      
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Risk Tolerance Differences</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Short-term investing carries several risks, including timing risk, liquidity risk, and the potential for losses due to short-term market fluctuations. Short-term investors may also be more susceptible to emotional decision-making and may incur higher transaction costs from frequent trading.                        
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Risks Associated with Short-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Long-term investors typically have a higher risk tolerance than short-term investors, as they can withstand short-term market fluctuations and focus on achieving long-term financial goals. Short-term investors may have a lower risk tolerance and may be more sensitive to market volatility and short-term losses.                       
                  </Text>
                )}

                <TouchableOpacity onPress={toggleLongTermDef}>
                  <Text style={styles.subSection}>Impact of Compounding on Long-Term Investing</Text>
                </TouchableOpacity>
                {isLongTermDefOpen && (
                  <Text style={styles.description}>
                    Compounding allows investors to earn returns on their returns over time, leading to exponential growth in their investment portfolio. By reinvesting dividends and interest earnings, investors can accelerate wealth accumulation and achieve their long-term financial goals more effectively.                       
                  </Text>
                )}

              </ScrollView>
            )}
          </View>



        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  Main: 
  {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainHeadingView: 
  {
    width: '100%',
    backgroundColor: "#99ccff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainHeadingText: 
  {
    paddingTop: 15,
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
  },
  AppPage: 
  {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  WelcomeHeadingText: 
  {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ExplanationText: 
  {
    fontSize: 16,
    marginBottom: 10,
  },
  container: 
  {
    flex: 1,
    padding: 20,
    backgroundColor: "#99ccff",
    marginTop: 10,
    minHeight: 200,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: 
  {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subSection: 
  {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  content: 
  {
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    marginLeft: 10,
    
  },
});



/*
import { StatusBar } from 'react-native';
import { StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, FlatList, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';

//All information for these explanations was lovingly stolen from:
//https://www.finra.org/sites/default/files/2023-09/FINRA-Investing-Knowledge-Quiz.pdf

export default function Learn_Explanations() {    
    return (
      <ScrollView>
        <View style={styles.Main}>

          <View style={styles.AppPage}>
          
          <View style={styles.MainHeadingView}>

            <Text style={styles.MainHeadingText}>StocksNHudds</Text>

          </View>


          <Text style={styles.WelcomeHeadingText}>Explanations</Text>

          <Text style = {styles.StocksText}> 
            The following paragraphs explain the stocks, shares and 
            investments basics in a brief and easy to understand way.
          </Text>

          <br></br>

          <Text style = {styles.StocksText}> 
            You can then take the multiple choice question quiz    afterwards to test your knowledge on each of the topics. 
          </Text>

          <Text style={styles.SecondaryHeadingText}>Equities</Text>

            <Text style = {styles.StocksText}> 
              Stocks are known as “equities” because each stock
              share represents a small percentage of ownership in the
              company.
            </Text>

            <br></br>

            <Text style = {styles.StocksText}>
              This usually entitles the shareholder to vote in the
              election of directors and on other matters taken up at
              shareholder meetings or by proxy.
            </Text>

            <Text style={styles.SecondaryHeadingText}>Bonds</Text>

            <Text style = {styles.StocksText}> 
              Bonds are loans that investors make to a corporation
              or a government body in exchange for regular interest
              payments and the return of principal at a future date.
            </Text>

            <br></br>
            
            <Text style = {styles.StocksText}>
              Companies issue corporate bonds to raise money for
              capital expenditures, operations and acquisitions. But
              unlike stockholders, bondholders don’t receive ownership
              rights in the corporation.
            </Text>

            <Text style={styles.SecondaryHeadingText}>Municipal Bonds</Text>

            <Text style = {styles.StocksText}> 
              Dividend payments from municipal bonds are usually
              exempt from federal income tax because they are issued
              by local authorities—such as cities, states and counties. 
            </Text>

            <br></br>

            <Text style = {styles.StocksText}>
              Even though municipal bonds often pay lower yields than
              other government bonds, their after-tax rates of return
              can be attractive to investors in higher tax brackets. 
            </Text>

          <Text style={styles.SecondaryHeadingText}>Risks of Investing</Text>

            <Text style = {styles.StocksText}> 
              The stock and bond markets tend to reward risk-taking
              over the long term. This is called the risk-reward tradeoff.
              Over the short term, however, high-risk investments such
              as small-company stocks can be extremely volatile.
            </Text>

            <br></br>
            
            <Text style = {styles.StocksText}>
              The less willing you are to take that risk, the more you might
              want to emphasize investments that provide a regular
              return with less volatility, such as high-quality short-term
              bonds.
            </Text>

            <Text style={styles.SecondaryHeadingText}>The impacts of bankruptcy</Text>

            <Text style = {styles.StocksText}> 
              Among those with claims to a bankrupt company’s
              assets, shareholders of common stock have the last claim
              on any assets.
            </Text>

            <br></br>

            <Text style = {{fontSize: 17, color: 'black', textAlign: 'center', textAlignVertical: 'center', paddingBottom: "20px"}}>
              They fall in line behind secured creditors, bondholders and 
              owners of preferred shares. Common shareholders may not receive 
              anything if the secured and unsecured creditors’ claims aren’t fully repaid. 
            </Text>

          </View>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    Main:
    {
      flex: 1,
      backgroundColor: 'black',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    MainHeadingView: 
    {
      flex: 1,
      width: '100%',
      backgroundColor: "#99ccff",
    },
    
    MainHeadingText: 
    {
      paddingTop: '15px',
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },

    WelcomeHeadingText: 
    {
      paddingBottom: "5px",
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },
  
    SearchBar: 
    {
      backgroundColor: 'white',
      marginHorizontal: 50,
      //textAlign: "center",
      borderStyle: "solid"
    },
  
    SecondaryHeadingText: 
    {
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      marginTop: '10px',
      paddingBottom: "15px",
      backgroundColor: "#99ccff",
    },
  
    StocksFlatList: 
    {
      paddingHorizontal: '20px',
      paddingTop: '5px',
      paddingBottom: '5px',
      border: "solid",
      borderWidth: 1
    },

    StocksView: 
    {
      width: '100%',
      backgroundColor: 'white',

    },

    StocksText: 
    {
      fontSize: 17,
      color: 'black',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  
    AppPage: 
    {
      flex: 8,
      width: '100%',
      backgroundColor: 'white',
    },
  });
  */