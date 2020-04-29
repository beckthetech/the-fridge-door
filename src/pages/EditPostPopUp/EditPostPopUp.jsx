import React, { Component } from 'react';
import Select from 'react-select';
import { Link, Redirect } from 'react-router-dom';
import tags from '../../data';

class EditPostPopUp extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.post : null
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

    handleChangeTags = tags => {
        this.setState({
            formData: { ...this.state.formData, tags },
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    renderEditPostForm() {
        return (
            <>
                <h1>Edit Magnet</h1>
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
                    <div className="form-group description-input-div">
                        <label>Description</label>
                        <input className="form-control"
                            name="description"
                            value={this.state.formData.content}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button className="btn"
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Save Magnet
                    </button>&nbsp;&nbsp;
                    <Link to='/marketplace'>Cancel</Link>
                </form>
            </>
        )
    }

    render() {
        return this.state.formData ? this.renderEditPostForm() : <Redirect to='/marketplace' />;
    }
}


export default EditPostPopUp;