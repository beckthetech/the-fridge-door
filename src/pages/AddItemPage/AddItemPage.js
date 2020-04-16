import React, { Component } from 'react';
import Select from 'react-select';
import itemCategories from '../../data';

import './AddItemPage.css'

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            categories: '',
            description: '',
            zipcode: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeCategories = categories => {
        this.setState({ formData: { ...this.state.formData, categories } });
    }

    render() {
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
                    <div className='categories-selector'>
                        <Select
                            value={this.state.formData.categories}
                            isMulti
                            name="categories"
                            onChange={this.handleChangeCategories}
                            options={itemCategories}
                            required
                        />
                    </div>
                    <label>Description</label>
                    <input
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Zipcode</label>
                    <input
                        name="zipcode"
                        value={this.state.formData.zipcode}
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