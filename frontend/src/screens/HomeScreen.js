import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import { useSelector, useDispatch } from 'react-redux';
//import { listProducts } from '../actions/productActions';
//import Rating from '../components/Rating';







function HomeScreen(props) {
 // const [searchKeyword, setSearchKeyword] = useState('');
  //const [sortOrder, setSortOrder] = useState('');
  //const category = props.match.params.id ? props.match.params.id : '';
  //const productList = useSelector((state) => state.productList);
  //const { products, loading, error } = productList;
  //const dispatch = useDispatch();
  //useEffect(() => {
   // dispatch(listProducts(category));

    //return () => {
      //
  //   };
  // }, [category]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  // };
  // const sortHandler = (e) => {
  //   setSortOrder(e.target.value);
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  // };

  return (
   
                    <div className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src="./image/IMG_6891.png" alt="product" />
                                <div className="product-name">
                                    <a href="product.html">Sách bài tập toán</a>
                                </div>
                                <div className="product-price">10.000đ</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="./image/IMG_6891.png" alt="product" />
                                <div className="product-name">
                                    <a href="product.html">Sách bài tập toán</a>
                                </div>
                                <div className="product-price">10.000đ</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="./image/IMG_6891.png" alt="product" />
                                <div className="product-name">
                                    <a href="product.html">Sách bài tập toán</a>
                                </div>
                                <div className="product-price">10.000đ</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="./image/IMG_6891.png" alt="product" />
                                <div className="product-name">
                                    <a href="product.html">Sách bài tập toán</a>
                                </div>
                                <div className="product-price">10.000đ</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="./image/IMG_6891.png" alt="product" />
                                <div className="product-name">
                                    <a href="product.html">Sách bài tập toán</a>
                                </div>
                                <div className="product-price">10.000đ</div>
                                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                            </div>
                        </li>
                    </div>
                
    
           

  );
}
export default HomeScreen;
