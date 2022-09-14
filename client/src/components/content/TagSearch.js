import React ,{useState, useEffect }from 'react';
import ContentStore from '../../store/ContentStore';
import CastingStore from '../../store/CastingStore';
import TagApi from '../../api/TagApi';
import { useNavigate  } from 'react-router-dom';
import SearchList from '../main/VideoSearchList';
import dbtags from '../../utils/tags';

function TagSearch({type}) {
    const [hasText, setHasText] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState(type==="update"? CastingStore.casting.tag : []);
    const [limit, setLimit] = useState(0);

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
            if(type==="update"){
                CastingStore.setCastingValue("tag", [...tags, dbtags[clickedOption]])
            }
            ContentStore.addTags(dbtags[clickedOption]);
            setLimit(limit+1);
            setInputValue(""); setHasText(!hasText)
        }
    };

    const handleDeleteTag = (x) =>{
        setTags(tags.filter((tag) => tag !== x));
        if(type==="update"){
            console.log("@@@", tags.filter((tag) => tag !== x))
            CastingStore.setCastingValue("tag", tags.filter((tag) => tag !== x));
        }
        setLimit(limit-1);
        ContentStore.removeTags(x)
    }

    const handleClearTag = () =>{
        setTags([]); 
        if(type==="update"){
            CastingStore.setCastingValue("tag", [])
        }
        ContentStore.resetTags(); 
        setLimit(0);
    }

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
                <div  onClick={(e)=>{handleDeleteTag(x)}}>&times;</div>
            </div>
            )}
        <div style={{color:'red'}} onClick={(e)=>{handleClearTag()}}>&times;</div>
      {inputValue?<DropDown  options={dbtags} handleComboBox={inputValue} onClick={(e)=>handleDropDownClick(e)}/>:null}
        </div>
    );
}


export default TagSearch;