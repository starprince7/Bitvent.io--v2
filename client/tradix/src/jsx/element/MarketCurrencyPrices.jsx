import React from "react";

function MarketCurrencyPrices() {

    const style = {
        height: "62px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        boxSizing: "border - box", 
        borderRadius:  "4px",
        textAlign: "right",
        lineHeight: "14px",
        blockSize: "62px", 
        fontSize: "12px",
        fontFeatureSettings: "normal", 
        textSizeAdjust: "100%",
        padding: "1px",
        margin: "0px", 
        width: "100 %",
    }
    // "padding: 0px",
    
    const style2 = {
        height: "40px",
        padding: "0px",
        margin: "0px",
        width: "100 %",
    }

    const style3 = {
        color: "#FFFFFF",
        background: "#d9121d",
        lineHeight: "14px",
        fontWeight: "400",
        fontSize: "11px",
        boxSizing: "border - box",
        padding: "2px 6px", 
        width: "100%",
        fontFamily: "Verdana, Tahoma, Arial, sans - serif"
    }

    const style4 = {
        fontWeight: "500",
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "11px"
    }

  return (
    <div>
      <div id="live_market_track">
        <div style={style}>
          <div style={style2}>
            <iframe
              src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
              width="100%"
              height="36px"
              scrolling="auto"
              marginwidth="0"
              marginheight="0"
              frameborder="0"
              border="0"
              style="border:0;margin:0;padding:0;"
            ></iframe>
          </div>
          <div style={style3}>
            <a
              href="https://coinlib.io"
              target="_blank"
              style={style4}
            >
              Cryptocurrency Prices
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketCurrencyPrices;
