# LZRBIT v.4

## Adding mobile orientation capability
1. Create a tiny app ui interface which will be stored in the cloud ( surge / netifly )
2. This app will detect the following orientation data:
    2.1 alpha, beta, gamma (x,y,z)
    2.2 4 double buttons (+,-) for thickness and (+,-) for color change
3. This data will be stored packed inisde ab object to a ( firebase / push ) realtime database
4. From there the data should be sent ( cloud functions ) to the LZRBIT app for realtime drawing