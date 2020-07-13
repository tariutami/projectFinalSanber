import React from 'react';
import Halamanku from './halaman';

class Komponenku extends React.Component{
    render(){
        return (
        <Halamanku colorTheme={this.props.colorTheme} onChangeTheme={this.props.onChangeTheme} />
    )}
}

export default Komponenku;