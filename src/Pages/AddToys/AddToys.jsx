import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddToys = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add Toys')

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.sellerName.value;
        const seller_email = form.email.value;
        const img = form.photo.value;
        const toy_name = form.toyName.value;
        const sub_category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newToy = {
            seller_name,
            seller_email,
            img,
            toy_name,
            sub_category,
            quantity,
            price,
            rating,
            description
        }
        console.log(newToy);

        fetch(`https://toys-paradise-server.vercel.app/allToys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your toy has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='container-x section'>
            <div className='mx-auto max-w-3xl'>
                <div className='mb-8 text-center'>
                    <span className='eyebrow'>Share your collection</span>
                    <h2 className='section-title mt-3'>Add Toys</h2>
                </div>

                <div className="card-surface p-6 sm:p-8">
                    <form onSubmit={handleAddToy}>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className="form-control">
                                <label className="field-label">
                                    Seller Name
                                </label>
                                <input type="text" placeholder="Seller Name" name='sellerName' className="field-input" defaultValue={user?.displayName}/>
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Seller Email
                                </label>
                                <input type="email" placeholder="Seller Email" name='email' className="field-input" defaultValue={user?.email}/>
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Image URL
                                </label>
                                <input type="text" placeholder="Image URL" name='photo' className="field-input" />
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Toy Name
                                </label>
                                <input type="text" placeholder="Toy Name" name='toyName' className="field-input" />
                            </div>
                            <div className="form-control w-full">
                                <label className="field-label">
                                    Sub Category
                                </label>
                                <select className="field-input capitalize" name='category'>
                                    <option value='suv'>SUV</option>
                                    <option value='classic'>Classic</option>
                                    <option value='sports'>Sports</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Available Quantity
                                </label>
                                <input type="text" placeholder="Available Quantity" name='quantity' className="field-input" />
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Price
                                </label>
                                <input type="text" placeholder="Price" name='price' className="field-input" />
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Rating
                                </label>
                                <input type="text" placeholder="Rating" name='rating' className="field-input" />
                            </div>
                        </div>
                        <div className="form-control mt-5">
                            <label className="field-label">
                                Detail Description
                            </label>
                            <textarea className='field-input resize-y' name="description" id="" cols="30" rows="6"></textarea>
                        </div>
                        <div className="form-control mt-7">
                            <button className="btn btn-primary btn-pill w-full py-3 shadow-lg shadow-primary/25 sm:w-auto sm:px-10">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;
