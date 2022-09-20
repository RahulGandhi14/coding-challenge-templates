import React from 'react'

const SupervisorForm = () => {
    return (
        <div className="container w-50">
            <div className="row justify-content-md-center bg-light">
                <div className="p-3 mb-2 bg-info text-dark text-center">
                    Notification Form
                </div>
                <div className="w-100">
                    <form>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="firstName">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <small className="mb-2">
                                How would you prefer to get notified?
                            </small>
                            <div className="col">
                                <div className="form-group">
                                    <div className="d-flex gap-2">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                        />
                                        <label for="email">Email</label>
                                    </div>

                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <div className="d-flex gap-2">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                        />
                                        <label for="email">Phone Number</label>
                                    </div>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneNumber"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="d-flex justify-content-center">
                                <select
                                    className="form-select w-50"
                                    aria-label="Default select example"
                                >
                                    <option selected>Select Supervisor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SupervisorForm
