import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import itemCategories from '../../data';

class EditItemPage extends Component {
    state = {
        selectedOption: null,
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
        this.props.handleUpdateItem(this.state.formData);
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeCategories = (value, { action, removedValue }) => { // eslint-disable-next-line
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
        let categoryChoices = value ? [...this.state.formData.categoryChoices, value.value] : [];
        let formData = { ...this.state.formData, categoryChoices }
        let selectedOption = categoryChoices[0]
        this.setState({ formData, selectedOption, invalidForm: !this.formRef.current.checkValidity() });
    }


    render() {
        return (
            <>
                <h1>Edit Item</h1>
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
                        value={this.state.selectedOption}
                        isMulti
                        name="categoryChoices"
                        onChange={this.handleChangeCategories}
                        options={itemCategories}
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
                        SAVE ITEM
                    </button>&nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}

export default EditItemPage;