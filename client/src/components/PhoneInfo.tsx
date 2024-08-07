import React, {Component, Fragment} from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    // 컴포넌트가 리렌더링 할지 말지를 결정하는 메서드
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const {info, onUpdate} = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange = (e: string) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {name, phone, id} = this.props.info;
        const {editing} = this.state;
        console.log(name);

        return (
            <div>
                {
                    editing ? (
                        <Fragment>
                            <input
                                type="text"
                                name={"name"}
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <input
                                type="text"
                                name={"phone"}
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>{id}</div>
                            <div>{name}</div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;