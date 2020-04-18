import React, { Component } from 'react';
import Select from 'react-select';
import itemCategories from '../../data';

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            categories: '',
            description: '',
            price: '',
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
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Categories</label>
                            <Select
                                value={this.state.formData.categories}
                                isMulti
                                name="categories"
                                onChange={this.handleChangeCategories}
                                options={itemCategories}
                                required
                            />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input className="form-control"
                            name="price"
                            value={this.state.formData.price}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Zipcode</label>
                        <input className="form-control"
                            name="zipcode"
                            value={this.state.formData.zipcode}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button className="btn"
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