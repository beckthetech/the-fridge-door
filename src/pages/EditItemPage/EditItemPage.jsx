import React, { Component } from 'react';
import Select from 'react-select';
import { Link, Redirect } from 'react-router-dom';
import itemCategories from '../../data';

import './EditItemPage.css'


class EditItemPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.item : null
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

    handleChangeCategories = categories => {
        this.setState({
            formData: { ...this.state.formData, categories },
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    renderEditItemForm() {
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
                    <label>Price</label>
                    <input
                        name="price"
                        value={this.state.formData.price}
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
                        SAVE ITEM
                    </button>&nbsp;&nbsp;
                    <Link to='/'>CANCEL</Link>
                </form>
            </>
        )
    }

    render() {
        return this.state.formData ? this.renderEditItemForm() : <Redirect to='/login' />;
    }
}


export default EditItemPage;