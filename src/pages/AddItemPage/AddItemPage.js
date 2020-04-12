import React, { Component } from 'react';

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            quantity: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Add Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Item</label>
                    <input
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                    />
                        <label>Quantity</label>
                        <input
                            name="quantity"
                            value={this.state.formData.quantity}
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