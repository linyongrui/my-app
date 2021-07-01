import { Component } from 'react';

export default class MyComponent extends Component {

    numToStr = (num) => {
        return (Array(7).join(0) + num.toString(2)).slice(-7);
    }

    strToNum = (str) => {
        return parseInt(str, 2);
    }

    changeStr = (str, index, changeStr) => {
        return str.substring(0, index) + changeStr + str.substring(Number(index) + 1);
    }

    siteParamStr = '1111111';
    siteParamNum = this.strToNum(this.siteParamStr);
    oddParamNum = this.siteParamNum & 0b0101010;
    evenParamNum = this.siteParamNum & 0b0010100;
    oddParamStr = this.numToStr(this.oddParamNum);
    evenParamStr = this.numToStr(this.evenParamNum);

    state = {
        all: true,
        odd: true,
        even: true,
        c: this.siteParamStr
    }

    handleChange = (e) => {
        const { c } = this.state
        let myC = c

        if (e.target.checked === true) {
            myC = this.changeStr(myC, e.target.id, '1')
        } else {
            myC = this.changeStr(myC, e.target.id, '0')
        }
        this.setState({
            c: myC
        })
        this.syncAll(myC)
        this.syncOdd(myC)
        this.syncEven(myC)
    }

    handleChangeAll = (e) => {
        let myC = '0000000'
        let myAll = false
        let myOdd = false
        let myEven = false
        if (e.target.checked === true) {
            myC = this.siteParamStr;
            myAll = true
            myOdd = true
            myEven = true
        }
        this.setState({
            c: myC, all: myAll, odd: myOdd, even: myEven
        })
    }

    handleChangeOdd = (e) => {
        let myC
        const { c } = this.state
        const currentC = this.strToNum(c);

        if (e.target.checked === true) {
            myC = this.numToStr(this.oddParamNum | currentC);
        } else {
            myC = this.numToStr((~this.oddParamNum) & currentC);
        }

        this.setState({
            c: myC, odd: !this.state.odd
        })
        this.syncAll(myC)
        // this.syncEven(myC)
    }

    handleChangeEven = (e) => {
        let myC
        const { c } = this.state
        const currentC = parseInt(c, 2);

        if (e.target.checked === true) {
            myC = this.numToStr(this.evenParamNum | currentC);
        } else {
            myC = this.numToStr((~this.evenParamNum) & currentC);
        }
        console.log("myC", myC)
        this.setState({
            c: myC, even: !this.state.even
        })
        this.syncAll(myC)
        // this.syncOdd(myC)
    }

    syncAll = (myC) => {
        let myAll
        if (this.siteParamStr === myC) {
            myAll = true
        } else {
            myAll = false
        }

        this.setState({
            all: myAll
        })
    }

    syncOdd = (myC) => {
        let myOdd
        const currentC = this.strToNum(myC);
        if (this.oddParamStr === this.numToStr(this.oddParamNum & currentC)) {
            myOdd = true
        } else {
            myOdd = false
        }
        this.setState({
            odd: myOdd
        })
    }

    syncEven = (myC) => {
        let myEven
        const currentC = this.strToNum(myC);
        if (this.evenParamStr === this.numToStr(this.evenParamNum & currentC)) {
            myEven = true
        } else {
            myEven = false
        }
        this.setState({
            even: myEven
        })
    }

    render() {
        return (
            <div>
                <h2>Checkbox Demo</h2>
                <span hidden={this.siteParamStr.charAt(0) === '0' ? true : false} ><input type="checkbox" id="0" checked={this.state.c.charAt(0) === '1' ? true : false} onChange={this.handleChange} /> 周日&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(1) === '0' ? true : false} ><input type="checkbox" id="1" checked={this.state.c.charAt(1) === '1' ? true : false} onChange={this.handleChange} /> 周一&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(2) === '0' ? true : false} ><input type="checkbox" id="2" checked={this.state.c.charAt(2) === '1' ? true : false} onChange={this.handleChange} /> 周二&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(3) === '0' ? true : false} ><input type="checkbox" id="3" checked={this.state.c.charAt(3) === '1' ? true : false} onChange={this.handleChange} /> 周三&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(4) === '0' ? true : false} ><input type="checkbox" id="4" checked={this.state.c.charAt(4) === '1' ? true : false} onChange={this.handleChange} /> 周四&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(5) === '0' ? true : false} ><input type="checkbox" id="5" checked={this.state.c.charAt(5) === '1' ? true : false} onChange={this.handleChange} /> 周五&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(6) === '0' ? true : false} ><input type="checkbox" id="6" checked={this.state.c.charAt(6) === '1' ? true : false} onChange={this.handleChange} /> 周六&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input type="checkbox" id="10" checked={this.state.all} onChange={this.handleChangeAll} /> 全部&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="11" checked={this.state.odd} onChange={this.handleChangeOdd} /> 周一三五&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="12" checked={this.state.even} onChange={this.handleChangeEven} /> 周二四&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input type="text" value={this.state.c} disabled />
            </div>
        )
    }
}