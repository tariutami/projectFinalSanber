// disini saya menggunakan konsep ifting State Up untuk mengubah dolar menjadi rupiah dan menggunakan Hooks
// di routing bisa diakses melalui /convert
// *contoh ini saya ikuti dari hasil searching berbagai referensi

import React, { useState, useEffect } from 'react';
import './App.css';

class CurrencyInput extends React.Component {

    _handleChange = (e) => {
        this.props.onChangeCurrency(e.target.value);
    }



    render(){
        const { currency, curLabel } = this.props;

        return (
            <>
            <label>
                {curLabel === 'Rp' ? 'Rupiah' : 'Dollar'}:
                <input type="number" value={currency} onChange={this._handleChange} />
                </label>
                <br/>
            </>
        )
    }
}

function Konversi(props)  {
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        rupiah: 0,
        dollar: 0
    });
    // componentDidMount
    useEffect( () => {
        console.log('yes');

        return() => {
            console.log('Unmounting')
        }
    }, [])

    // componentDidUpdate
    useEffect( () => {
        console.log('DidUpdate');
    })

    // componentDidUpdate
    useEffect( () => {
        return() => {
            console.log('Unmounting')
        }
    }, [show])

    const onChangeRupiah = (rupiah) => {
        let dollar = (parseFloat(rupiah) / 14272.85).toString();
        setState({rupiah, dollar});
    }

    const onChangeDollar = (dollar) => {
        let rupiah = (parseFloat(dollar) * 14272.85).toString();
        setState({rupiah, dollar});
    }

    const {rupiah, dollar} = state;

    const onSubmit = (e) => {
        e.preventDeafult();
        alert(`rupiah:: ${rupiah} dengan dollar: ${dollar}`)
    }
    return (
        <>
        <button onClick={() =>setShow(!show)}>{show ? 'Tutup Info' : 'Cek Kurs'}</button>
        <form onSubmit={onSubmit}>
        {show && <div> Kurs dollar hari ini Harga Jual: 14.573,51 (+55,28) Harga Beli:14.428,50 (+54,73)</div>}
        <CurrencyInput curLabel="Rp" currency={rupiah} onChangeCurrency={onChangeRupiah} />
        <CurrencyInput curLabel="$" currency={dollar} onChangeCurrency={onChangeDollar} />
        <button type="submit">Convert</button>
        </form>
        </>
    );
    
}


export default Konversi;


