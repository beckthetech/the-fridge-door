import React, { Component } from 'react';
import Select from 'react-select';
import itemCategories from '../../data';

class AddItemPage extends Component {
    state = {
        selectedOption: null,
        invalidForm: true,
        formData: {
            name: '',
            categories: '',
            description: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
        console.log(this.state.formData)
        console.log(this.state.selectedOption)
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeCategories = categories => { // eslint-disable-next-line
        console.log(categories);
        // switch (action) {
        //     case 'remove-value':
        //     case 'pop-value':
        //         if (removedValue.isFixed) {
        //             return;
        //         }
        //         break;
        //     case 'clear':
        //         value = itemCategories.filter(v => v.isFixed);
        //         break;
        // }
        // let categories = [...this.state.formData.categories, value.value];
        // let formData = { ...this.state.formData, categories }
        // let selectedOption = categories[0]

        this.setState({ formData: { ...this.state.formData, categories } });
        console.log(`category choices: `, categories)

        // this.setState({ formData, selectedOption, invalidForm: !this.formRef.current.checkValidity() });
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
                    <Select
                        value={this.state.formData.categories}
                        isMulti
                        name="categories"
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
                        ADD ITEM
                    </button>
                </form>
            </>
        );
    }
}

export default AddItemPage;