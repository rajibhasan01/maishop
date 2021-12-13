import React from 'react';

const Banner = () => {
    return (
        <div className='px-md-5'>
            <div className='container-fluid mt-2'>
                <div className="row g-2">
                    <div className="col-12 col-md-9 pe-md-2">
                        <div className='w-100'>
                            <img src="https://i.ibb.co/vLkTcDR/B-shoe.jpg" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="row g-2">
                            <div className="col-6 col-md-12 pb-md-1">
                                <div className='w-100 imgHover'>
                                    <img src="https://i.ibb.co/xsRHxFj/18899269.jpg" alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className="col-6 col-md-12">
                                <div className='w-100 imgHover'>
                                    <img src="https://i.ibb.co/GJdBmVQ/18899255.jpg" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;