import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToys = () => {
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newToy = {
            sellerName,
            sellerEmail,
            photo,
            toyName,
            category,
            quantity,
            price,
            rating,
            description
        }
        console.log(newToy);
    }

    return (
        <div>
            <h2>Add Toys</h2>
            <div className="card-body">
                <form onSubmit={handleAddToy}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name='sellerName' className="input input-bordered" defaultValue={user?.displayName}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" placeholder="Seller Email" name='email' className="input input-bordered" defaultValue={user?.email}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="Image URL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="select select-bordered" name='category'>
                                <option>suv</option>
                                <option>classic</option>
                                <option>sports</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea className='input input-bordered' name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;