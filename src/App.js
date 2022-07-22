import React, { useEffect,  useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';
import axios from  'axios';

      



const App = () => {


    const [data, setData] = useState();

    useEffect(() => {
        axios.post('http://localhost:8080/test.json')
            .then(response => {
                setData(response.data.Data);
                console.log(response.data.Data);
            });
    }, []);





    const [search, setSearch] = useState([]);
    useEffect (() => {
        axios.post('http://localhost:8080/test.json')
        .then(response => {
        setSearch(response.data.Data);
        });
    })







    const onChange = (e) => {
        setSearch(e.target.value);
        
    }





    const columnDefs = [
        { field: 'mdcl_nstt', headerName: '의료기관' , width: 100},
        { field: 'user_code', headerName: '사용자코드', width: 120},
        { field: 'pssw' , headerName: '패스워드', width: 120},
        { field: 'user_name' , headerName: '사용자명' ,width: 120},
        { field: 'user_mnmr' , headerName: '사용자약명',width: 120},
        { field: 'fflt' , headerName: '소속과',width: 120},
        { field: 'dprt_dvsn' , headerName: '부서구분',width: 120},
        { field: 'pstn' , headerName: '직책',width: 120},
        { field: 'lcns_nmbr' , headerName: '면허번호',width: 120},
        { field: 'spec_nmbr' , headerName: '전문의번호',width: 120},
        { field: 'call_nmbr' , headerName: '전화번호',width: 120},
        { field: 'rsdn_nmbr' , headerName: '주민번호',width: 120}
    ];

    

    











    return (
        
        <>
            <div >                                                {/* 검색창 */}
                    <label for = 'searchName' className='btn'>사용자명</label> 

                    
&nbsp;              <input className='inp' id='searchName' onChange={onChange} value={search}></input>

&nbsp;              <button id='sch' style={{color:'black',backgroundColor:'yellow',border: 'solid blue',  padding:'8px', cursor:'pointer'}}>조회</button>
                   



                    <div style={{float:'right'}}>
                       <button  className='btn'>신규</button>   {/* 등록(insert)문으로 만들기 */}
&nbsp;                 <button  className='btn'>수정</button>        {/* 저장문(update)으로 만들기 */}
&nbsp;                 <button  className='btn'>삭제</button>       {/* 삭제(delet)문으로 만들기 */}   
                    </div>

            </div>
            <br></br>




            <div className="ag-theme-alpine"  style={{width:'70%',height:'600px',float:'left'}}>
            
                <AgGridReact 
                    rowData={data}
                    columnDefs={columnDefs}>       
                </AgGridReact> 
            </div >

                     
                <porm style={{width:'30%', float:'right'}}>
                    <label for ='mdcl_nstt' className='pbtn'>의료기관 </label><input id='mdcl_nstt' className='pinp'/>
                    <br/>
                    <label for='user_code'  className='pbtn'>사용자코드</label><input id='user_code' className='pinp'/>
                    <br/>
                    <label for='pssw'  className='pbtn'>패스워드</label><input id='pssw' className='pinp'/>
                    <br/>
                    <label for='user_name'  className='pbtn'>사용자명</label><input id='user_name' className='pinp'/>
                    <br/>
                    <label for='user_mnmr'  className='pbtn'>사용자약명</label><input id='user_mnmr' className='pinp'/>
                    <br/>
                    <label for='fflt'  className='pbtn'>소속과</label><input id='fflt' className='pinp'/>
                    <br/>
                    <label for='dprt_dvsn'  className='pbtn' >부서구문</label><input id='dprt_dvsn'  className='pinp'/>
                    <br/>
                    <label for='pstn'  className='pbtn' >직책</label><input id='pstn'  className='pinp'/>
                    <br/>
                    <label for='lcns_nmbr'  className='pbtn' >면허번호</label><input id='lcns_nmbr' className='pinp'/>
                    <br/>
                    <label for='spec_nmbr'  className='pbtn' >전문의번호</label><input id='spec_nmbr' className='pinp'/>
                    <br/>
                    <label for='call_nmbr'  className='pbtn' >전화번호</label><input id='call_nmbr' className='pinp'/>
                    <br/>
                    <label for='rsdn_nmbr'  className='pbtn' >주민번호</label><input id='rsdn_nmbr'  className='pinp'/>
                    <br/>
                    <label for='go'  className='pbtn' >사용여부</label><input id='go' className='pinp'/>
                </porm>        
            
        <br></br><br></br>
        

            
        </>
    );
};

export default App;