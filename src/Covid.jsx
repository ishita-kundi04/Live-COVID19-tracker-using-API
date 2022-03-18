import React, { useEffect , useState } from "react";

// https://data.covid19india.org/data.json

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch (err){
            console.log(err);
        }
    };

    useEffect(()=>{
        getCovidData();
    }, []);

    return(
        <>
        <section>
            <h1> 🔴 LIVE </h1>
            <h2> COVID-19 CORONAVIRUS TRACKER </h2>
                <div className="bada_dabba">
                
                    <div className="card_main d1">
                        <div className="card_inner">
                            <p className="card_name"> <span>OUR</span> COUNTRY</p>
                            <p className="card_total">INDIA</p>
                        </div>
                    </div>
                

                
                    <div className="card_main d2">
                        <div className="card_inner">
                            <p className="card_name"> <span>TOTAL</span> RECOVERED</p>
                            <p className="card_total">{data.recovered}</p>
                        </div>
                    </div>
                

                
                    <div className="card_main d3">
                        <div className="card_inner">
                            <p className="card_name"> <span>TOTAL</span> CONFIRMED</p>
                            <p className="card_total">{data.confirmed}</p>
                        </div>
                    </div>
                

                
                    <div className="card_main d4">
                        <div className="card_inner">
                            <p className="card_name"> <span>TOTAL</span> DEATH</p>
                            <p className="card_total">{data.deaths}</p>
                        </div>
                    </div>
                

                
                    <div className="card_main d5">
                        <div className="card_inner">
                            <p className="card_name"> <span>TOTAL</span> ACTIVE</p>
                            <p className="card_total">{data.active}</p>
                        </div>
                    </div>
                

                
                    <div className="card_main d6">
                        <div className="card_inner">
                            <p className="card_name"> <span>LAST</span> UPDATED</p>
                            <p className="card_total">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
};

export default Covid;