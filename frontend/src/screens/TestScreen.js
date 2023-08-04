import { SSOAdmin } from 'aws-sdk';
import React ,{useState,useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import Axios from "axios";
//lưu ý khi ta save file này tình huống mà không có gì thay đổi (spam ctrl+s) thì web sẽ bị đứng cần refesh thủ công lại web, còn nếu có thay đổi bất kì nội dung gì trong file này kể cả phần comment thì web sẽ tự động refesh
function TestScreen(props)//khi ta refresh lại trang web nó sẽ chạy lại từ đầu cái function screen hay nói cách khác các tham số sẽ được gán lại như trong function
{
    const [s, setS] = useState(0);
    const Test1 = () => {
        setS(s+1);//sẽ làm tăng giá trị s lên 1 
        //return s=s+1; sẽ làm máy đơ luôn khi nhấn button chạy funcion Test1
    };
    
    const Test2 = () => {
        return <div> You lair </div>
        
    };

    const toggleShowTest2 = () => {
        setShowTest2((prev) => !prev);
      };//cách để linh hoạt cho giá trị ShowTest2, ví dụ:ShowTest2 đang false thì sẽ trở thành true khi hàm này đc gọi và ngược lại
    

      const dispatch = useDispatch();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
    dispatch(signin(email, password));
    };
        //e.preventDefault();
        //Axios.post("http://localhost:5000/api/users/signin" , { email, password } );
    
    const [showTest2, setShowTest2] = useState(false);
    return(//nếu để dấu ngoặc này xuống dòng sẽ không biên dịch được !!!!!, lưu ý không được viết sai onClick thành onclick vì nó có phân biệt chữ hoa chữ thường!!!
        
         <div>
            <button onClick={Test1}>
                submit
            </button>
            <p>Giá trị s : {s+1}</p>{/* { } trong html là để lấy giá trị của tham số hoặc của một công thức nào đó*/}
            {/* hiển thị s+1 chứ không phải s=s+1 !!!! */}
            <button onClick={toggleShowTest2}>
            {/* <button onClick={() => toggleShowTest2()}>  cách viết này cho kết quả tương tự cách viết trên*/}
            {/* <button onClick={() => toggleShowTest2}> sẽ ko cho đúng kết quả mong muốn */}
        submit
      </button>
      
      {showTest2 ? <div>You liar</div>: <></>}    {/*cách viết dạng if else trong html */}
      {showTest2 && <div>You liar</div>}    {/* cách viết dạng if không có else trong html */}
      {showTest2 && Test2()}
      {/* hiển thị 3 lần nghĩa là cả 3 cách viết là như nhau !!! */}




      



<form onSubmit={submitHandler} >
<label>
    Email: 
    <input type="text" name='email' value ={email} onChange={(e) =>setEmail( e.target.value)}/>
</label>
<label>
    Pass: 
    <input type="text" name='password' value ={password} onChange={(e) =>setPassword( e.target.value)}/>
</label>

<button type="submit">  Submit </button> 
</form>
{email}
{password}

<ul className="filter">
      <li>
        <form onSubmit={submitHandler}>
          <input
            name="searchKeyword"
            //onChange={(e) => setSearchKeyword(e.target.value)}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </li>
      <li>
        Sort By{' '}
        <select name="sortOrder" >
          <option value="">Newest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </li>
    </ul>


      </div>
    

    );


//     const [value, setValue] = useState('');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <label>
//         Nhập giá trị:
//         <input type="text" value={value} onChange={handleChange} />
//         {/* onChange giúp ta có thể nhập được chữ và hiển thị các chữ ta vừa nhập còn nếu ko có thì nó sẽ không hiển thị các chữ ta vừa nhập */}
//       </label>
//       <p>Bạn đã nhập: {value}</p>
//     </div>
//   );

    // return(//nếu để dấu ngoặc này xuống dòng sẽ không biên dịch được !!!!!
    //     <>
    //      <div>
    //         <button onClick="Test1"> dùng onClick của HTML còn cái trên là dùng onClick của React nên khi ta dùng "Test1" trong react sẽ ko dùng được
    //             submit
    //         </button>
    //         <p>Giá trị s : {s}</p>

    //      </div>
    //     </>

    // );

}

// function TestScreen(props) {
//     const [s, setS] = useState(0);
  
//     const handleTest1 = () => {
//       setS(1);
//     };
  
//     return (
//       <>
//         <div>
//           <button onClick={handleTest1}>
//             submit
//           </button>
//           <p>Giá trị s : {s}</p>
//         </div>
//       </>
//     );
//   }
  
//   export default TestScreen;


//làm thử signin với onSubmit={submitHandler}
// const submitHandler = (e) => {
//     ....

//   }
// lấy action là localhost:5000/api/user/signin và phương thức post để xem có ra kết quả giống postman hay không!!! 



export default TestScreen;