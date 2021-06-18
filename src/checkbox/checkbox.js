import { Component } from 'react';

export default class MyComponent extends Component {

    prefixInteger = (num) => {
        return (Array(7).join(0) + num.toString(2)).slice(-7);
    }

    changeStr = (str, index, changeStr) => {
        return str.substring(0, index) + changeStr + str.substring(Number(index) + 1);
    }

    siteParam = 0b0111110;
    oddParam = this.siteParam & 0b0101010;
    evenParam = this.siteParam & 0b0010100;
    siteParamStr = this.prefixInteger(this.siteParam);

    state = {
        all: true,
        odd: true,
        even: true,
        c: this.prefixInteger(this.siteParam)
    }

    handleChange = (e) => {

        const { c } = this.state
        let myC = c

        if (e.target.checked === true) {
            myC = this.changeStr(myC, e.target.id, '1')
        } else {
            myC = this.changeStr(myC, e.target.id, '0')
        }

        let myAll
        if (this.prefixInteger(this.siteParam) === myC) {
            myAll = true
        } else {
            myAll = false
        }
        console.log("myAll", myAll)

        this.setState({
            ...this.state, c: myC, all: myAll
        })

    }

    handleChangeAll = (e) => {
        // console.log(this.prefixInteger(this.siteParam), this.prefixInteger(this.oddParam), this.prefixInteger(this.evenParam))
        let myC = '0000000'
        let myAll = false
        let myOdd = false
        let myEven = false
        if (e.target.checked === true) {
            myC = this.prefixInteger(this.siteParam);
            myAll = true
            myOdd = true
            myEven = true
        }
        this.setState({
            ...this.state, c: myC, all: myAll, odd: myOdd, even: myEven
        })
    }

    handleChangeOdd = (e) => {
        let myC
        const { c } = this.state
        const currentC = parseInt(c, 2);
        console.log("c", c)
        console.log("currentC", this.prefixInteger(currentC.toString(2)))
        console.log("oddParam", this.prefixInteger(this.oddParam.toString(2)))

        if (e.target.checked === true) {
            myC = this.prefixInteger(this.oddParam | currentC);
        } else {
            myC = this.prefixInteger((~this.oddParam) & currentC);
        }
        console.log("myC", myC)
        this.setState({
            ...this.state, c: myC, odd: !this.state.odd
        })

    }

    handleChangeEven = (e) => {
        let myC
        const { c } = this.state
        const currentC = parseInt(c, 2);

        if (e.target.checked === true) {
            myC = this.prefixInteger(this.evenParam | currentC);
        } else {
            myC = this.prefixInteger((~this.evenParam) & currentC);
        }
        console.log("myC", myC)
        this.setState({
            ...this.state, c: myC, even: !this.state.even
        })
    }

    componentDidMount() {

        const { s0 } = this;
        // s0.target.setAttribute("hidden", true);
    }

    render() {
        // console.log("c", this.state.c)
        // console.log("a", this.state.c.charAt(1) === '1')
        return (
            <div>
                <h2>Checkbox Demo</h2>
                <span hidden={this.siteParamStr.charAt(0) === '0' ? true : false} ><input type="checkbox" id="0" checked={this.state.c.charAt(0) === '1' ? true : false} onChange={this.handleChange} />  周日&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(1) === '0' ? true : false} ><input type="checkbox" id="1" display="block" checked={this.state.c.charAt(1) === '1' ? true : false} onChange={this.handleChange} /> 周一&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(2) === '0' ? true : false} ><input type="checkbox" id="2" checked={this.state.c.charAt(2) === '1' ? true : false} onChange={this.handleChange} /> 周二&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(3) === '0' ? true : false} ><input type="checkbox" id="3" checked={this.state.c.charAt(3) === '1' ? true : false} onChange={this.handleChange} /> 周三&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(4) === '0' ? true : false} ><input type="checkbox" id="4" checked={this.state.c.charAt(4) === '1' ? true : false} onChange={this.handleChange} /> 周四&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(5) === '0' ? true : false} ><input type="checkbox" id="5" checked={this.state.c.charAt(5) === '1' ? true : false} onChange={this.handleChange} /> 周五&nbsp;</span>
                <span hidden={this.siteParamStr.charAt(6) === '0' ? true : false} ><input type="checkbox" id="6" checked={this.state.c.charAt(6) === '1' ? true : false} onChange={this.handleChange} /> 周六&nbsp;</span><br />

                <input type="checkbox" id="10" checked={this.state.all} onChange={this.handleChangeAll} /> 全部&nbsp;
                <input type="checkbox" id="11" checked={this.state.odd} onChange={this.handleChangeOdd} /> 周一三五&nbsp;
                <input type="checkbox" id="12" checked={this.state.even} onChange={this.handleChangeEven} /> 周二四&nbsp;
            </div>
        )
    }
}