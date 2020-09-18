import { extend } from 'jquery'
import React from 'react'
import './data.css';
// import Peta from '../images/peta.jpg';

class Data extends React.Component {
    render(){
        return(
            <div>
                    <div class="title2">DATA TERKINI</div>
                    <div class="terakhir">UPDATE TERAKHIR : 17 September 2020, 16:47 WIB</div><hr/>
                    <div class="peta">
                        <img src="/images/data.jpg"/>  
                    </div>


                <div class="container">
                    <div class="title">PETA PERSEBARAN COVID-19 INDONESIA</div>
                </div>
                <div class="peta">
                    <img src="/images/peta.jpg"/>  
                    </div>
            </div>
        )
    }
}
export default Data;