import React, { Component } from 'react';
import Select from 'react-select';
import itemCategories from '../../data';

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            categoryChoices: [],
            description: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
    }

    handleChange = e => {
        console.log(e)
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        console.log(formData)
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeCategories = (value, { action, removedValue }) => {
        // console.log(value, action, removedValue)
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = itemCategories.filter(v => v.isFixed);
                break;
        }
        let categoryChoices = [...this.state.formData.categoryChoices, value.value]
        // categoryChoices.push(value.value)
        console.log(categoryChoices)
        let formData = { ...this.state.formData, ['categoryChoices']: categoryChoices }
        this.setState({ formData, invalidForm: !this.formRef.current.checkValidity() });
        // console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Add Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Categories</label>
                    <Select
                        name="categoryChoices"
                        options={itemCategories}
                        value={this.state.formData.categoryChoices}
                        onChange={this.handleChangeCategories}
                        required
                    />
                    <label>Description</label>
                    <input
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        required
                    />
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        ADD ITEM
                    </button>
                </form>
            </>
        );
    }
}

export default AddItemPage;