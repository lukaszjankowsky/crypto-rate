import React, {Component} from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';


class Crypto extends Component {
    constructor(props) {
        super(props);

        //this state pozwala aktualizowac pole przekazywane po kluczu
        this.state = {
            currentRates: [],
            inputValue: ""
        }
    }
    componentDidMount() {
        this.getData();

        setInterval (() => {
            if (this.state.inputValue === '') {
                this.getData ();

            }
            
        }, 5000);
      }
    
      getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
      .then(response =>  {
          let data = response.data;
          const oldData = this.state.currentRates;
          let currentRates = [];

            //state - stare dane z poprzedniej iteracji
            //response - nowe dane

            Object.keys(data).forEach(currency => {
              let newCurrency = {
                  currency: currency,
                  last: data[currency].last,
                  symbol: data[currency].symbol,
                  className: 'blue'
              };
            
            //const oldCurrency = oldData.find(cur => cur.currency=== newCurrency.currency); - analogiczny zapis ponizej wyszukuje elementy
            //   const oldCurrency = oldData.find(cur =>  {
            //       if (cur.currency === newCurrency.currency) {
            //           return true;
            //       } else {
            //           return false;
            //       }
            //   });

              
            const oldCurrency = oldData.find(cur => cur.currency === newCurrency.currency);
            if (oldCurrency !== undefined) {
                if (newCurrency.last > oldCurrency.last) {
                    newCurrency.className = 'green';
                } else if (newCurrency.last < oldCurrency.last) {
                    newCurrency.className = 'red';
                } 
            }
              currentRates.push(newCurrency)
              
            }
            
            )
            
          this.setState ({ currentRates: currentRates});
        // handle success
        console.log(data);
        Object.keys(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });


      }
    

      onFilter = (event) => {
        let value = event.target.value;

        if (value.length === 0) {
            this.getData();
        }

        value = value.trim().toUpperCase();
        let currentRates = this.state.currentRates;

        currentRates = currentRates.filter(rate => {
            console.log(value)
            return rate.currency.includes(value);
        })

        this.setState({inputValue: value, currentRates: currentRates}); //jezeli klucz obiektu jest rowny wartosci mozemy dac currentRates zamiast "currentRates: currentRates"

        

        //console.log(value)
      }

    
    render() {
        return (
            <div className="crypto">
                <h1>Crypto list</h1>
                <input type="text" value = {this.state.inputValue} onChange={this.onFilter}/>
                <CryptoList rates={this.state.currentRates}/>
            </div>
        )
    }


}


 export default Crypto;
 
 