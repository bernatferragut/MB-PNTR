# microbit-js

## global variables will become characteristics

> ACCELEROMETER service
> ACCELEROMETER data
> ACCELEROMETER period

> MAGNETOMETER service
> MAGNETOMETER data
> MAGNETOMETER period
> MAGNETOMETER bearing

> BUTTON service
> BUTTON A_state
> BUTTON B_state

> IO PIN service
> IO PIN data
> IO PIN config

> IO PIN_Power
> IO AD_config (Ground)

> LED service
> LED state
> LED text
> LED scroll

> TEMPERATURE service
> TEMPERATURE data
> TEMPERATURE period

```js
class uBit {
    // accelerometer definition
    this.accelerometer ={
        x:0,
        y:0,
        z:0
    };

    //magnetometer definition
    this.magnetometer ={
        x:0,
        y:0,
        z:0
    };

    // temperature definiton 
    this.temperature = 0;

    // buttons definition
    this.buttonA = 0;
    this.buttonACallBack=function(){};

    this.buttonB = 0;
    this.buttonBCallBack=function(){};

    this.connected = false;

    this.onConnectCallback=function(){};
    
    this.onDisconnectCallback=function(){};



}
```