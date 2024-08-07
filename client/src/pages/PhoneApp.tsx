import React, {Component} from 'react';
import PhoneForm from "../components/PhoneForm.tsx";
import PhoneInfoList from "../components/PhoneInfoList.tsx";

class PhoneApp extends Component {

    id = 3;
    state = {
        information : [
            {
                id: 0,
                name: '홍길동',
                phone: '010-0000-0001',
            },{
                id: 1,
                name: '가가가',
                phone: '010-0000-0002',
            },{
                id: 2,
                name: '나나나',
                phone: '010-0000-0003',
            },
        ],
        keyword: '',
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }

    handleCreate = (data: object) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
                id: this.id++
            })
        });
    }
    handleRemove = (id: number) => {
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    handleUpdate = (id: number, data: object) => {
        const {information} = this.state;
        this.setState({
            information: information.map((info) => {
                if(info.id === id) {
                    return {
                        id,
                        ...data
                    };
                }
                return info;
            })
        })
    }

    render() {
        return (
            <>
                <PhoneForm onCreate={this.handleCreate}/>
                <input
                    type="text"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    placeholder={"검색..."}
                />
                <PhoneInfoList
                    data={this.state.information.filter(
                        info =>
                            info.name.indexOf(this.state.keyword) > -1
                    )}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </>
        );
    }
}

export default PhoneApp;