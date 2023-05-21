import React from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {_id} = toy
    useTitle('Update Toys');

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {
            price,
            quantity,
            description
        }
        console.log(updateToy);

        fetch(`https://toys-paradise-server.vercel.app/myToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy has been updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div>
            <h2>Add Toys</h2>
            <div className="card-body">
                <form onSubmit={handleUpdateToy}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea className='input input-bordered' name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;