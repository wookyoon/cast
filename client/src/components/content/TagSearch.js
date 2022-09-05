import React ,{useState, useEffect }from 'react';
import ContentStore from '../../store/ContentStore';
import TagApi from '../../api/TagApi';
import { useNavigate  } from 'react-router-dom';
import SearchList from '../main/VideoSearchList';
import dbtags from '../../utils/tags';

function TagSearch({search}) {
    const [hasText, setHasText] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);
    const [limit, setLimit] = useState(0);
    const searchtype= search;
    const navigate = useNavigate();

    useEffect( () => {
        if (inputValue === '') {
        setHasText(false);
        } 
    }, [inputValue]);

     
    const checkLimit = () =>{
        if (limit === 5){
            alert('Limit 5');
            return false;
        }else{
            return true;
        }
    }

    const handleDropDownClick = (clickedOption) => {
            if (checkLimit()){
                setTags([...tags, dbtags[clickedOption]]);
                ContentStore.addTags(dbtags[clickedOption]);
                setLimit(limit+1);
                setInputValue(""); setHasText(!hasText)
            }
    };

   const DropDown = ({ options, handleComboBox, onClick }) => {
        return (
            <div>
             {options.map((x,i)=>
      x.indexOf(handleComboBox)>-1?<div  key={i} onClick={()=>onClick(i)}>{x}</div>:null
      )}
             </div>  
        );
    };

    return (
        <div>
            <input onChange= {(e)=>{setInputValue(e.target.value); setHasText(!hasText)}}/>
            {/* <input type="button" value="add" onClick={(e)=>{addTag(e)}}/> */}
            {tags.map( (x,i)=> 
            <div  key={i}>
                {x}
                <div  onClick={(e)=>{setTags(tags.filter((tag) => tag !== x));setLimit(limit-1);ContentStore.removeTags(x)}}>&times;</div>
            </div>
            )}
        <div style={{color:'red'}} onClick={(e)=>{setTags([]); ContentStore.resetTags(); setLimit(0);}}>&times;</div>
      {inputValue?<DropDown  options={dbtags} handleComboBox={inputValue} onClick={(e)=>handleDropDownClick(e)}/>:null}
        </div>
    );
}


export default TagSearch;