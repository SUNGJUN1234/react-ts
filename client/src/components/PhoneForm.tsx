import React, {Component} from 'react';

class PhoneForm extends Component {
    input = React.createRef();
    state = { name: "", phone: ""}

    handleChange = (e: string) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        })
        this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    name={"name"}
                    placeholder={"이름"}
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={this.input}
                />
                <input
                    name={"phone"}
                    placeholder={"전화번호"}
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
        );
    }
}

export default PhoneForm;