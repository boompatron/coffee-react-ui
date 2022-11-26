import React from "react";

export function Product(props) {
    const id = props.id;
    const productName = props.productName;
    const category = props.category;
    const price = props.price;
    const handleAddBtnClicked = e =>{
        props.onAddClick(id);
    };

    return (
        <>
            <div className="col-2"><img className="img-fluid" src="./sample_files/HKOFQYa.jpeg" alt=""/></div>
            <div className="col">
                <div className="row text-muted">{category}</div>
                <div className="row">{productName}</div>
            </div>
            <div className="col text-center price">{price}원</div>
            <div className="col text-end action">
                <button
                onClick={handleAddBtnClicked}
                    className="btn btn-small btn-outline-dark"
                        href="https://grepp-programmers.s3.amazonaws.com/production/lecture/learn/attachment/file/5618/sample.html"> 추가
                </button>
            </div>
        </>
    )
}