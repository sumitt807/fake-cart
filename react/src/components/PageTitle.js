import React from 'react'

const PageTitle = (props) => {
    if (props.title) {
        return (
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>{props.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <></>
        );
    }
}

export default PageTitle