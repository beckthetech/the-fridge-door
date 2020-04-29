import React, { Component } from 'react';
import Select from 'react-select';
import tags from '../../data';

class AddPostPopUp extends Component {
    state = {
        invalidForm: true,
        formData: {
            tags: '',
            name: '',
            content: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPost(this.state.formData);
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeTags = tags => {
        this.setState({ formData: { ...this.state.formData, tags } });
    }

    render() {
        return (
            <>
                <h1>Add Magnet</h1>
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
                        <label>Tags</label>
                        <Select
                            value={this.state.formData.tags}
                            isMulti
                            name="tags"
                            onChange={this.handleChangeTags}
                            options={tags}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control"
                            name="content"
                            value={this.state.formData.content}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button className="btn"
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Add Magnet
                    </button>
                </form>
            </>
        );
    }
}

export default AddPostPopUp;