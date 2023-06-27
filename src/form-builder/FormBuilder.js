
import { useState, useRef } from "react";
import '../App.css';
import closeIcon from "../assets/close.png";


const FormBuilder = () => {
let ref = useRef(null);

    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [select, setSelect] = useState([{ select: 0 }]);
    const [radio, setRadio] = useState([{ radio: 0 }]);
    const [checkbox, setCheckbox] = useState([{ checkbox: 0 }]);
    const [file, setFile] = useState([{ file: [] }]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
      };
    
      const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
      };
    
      const handleServiceAdd = () => {
        setServiceList([...serviceList, { service: "" }]);
        ref.current.style.display = "block";
      };


 // select

  const handleSelectChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...select];
    list[index][name] = value;
    setSelect(list);
  };

  const handleSelectRemove = (index) => {
    const list = [...select];
    list.splice(index, 1);
    setSelect(list);
  };

  const handleSelectAdd = () => {
    setSelect([...select, { select: "" }]);
  };

 // radio

      const handleRadioChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...radio];
        list[index][name] = value;
        setRadio(list);
      };

      const handleRadioRemove = (index) => {
        const list = [...radio];
        list.splice(index, 1);
        setRadio(list);
      };
    
      const handleRadioAdd = () => {
        setRadio([...radio, { select: "" }]);
      };

 // checkbox

       const handleCheckboxChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...checkbox];
        list[index][name] = value;
        setCheckbox(list);
      };

      const handleCheckBoxRemove = (index) => {
        const list = [...checkbox];
        list.splice(index, 1);
        setCheckbox(list);
      };
    
      const handleCheckboxAdd = () => {
        setCheckbox([...checkbox, { checkbox: "" }]);
      };

    // file

           const handleFileChange = (e, index) => {
            const { name, value } = e.target;
            const list = [...file];
            list[index][name] = value;
            setFile(list);
          };

          const handleFileRemove = (index) => {
            const list = [...file];
            list.splice(index, 1);
            setFile(list);
          };
        
          const handleFileboxAdd = () => {
            setFile([...file, { checkbox: "" }]);
          };

    return(
        <>
        <div className="row">
            <div className="col-md-1">
                <div className="wrapper">
                    <span onClick={handleServiceAdd}>TextBox</span>
                    <span onClick={handleSelectAdd}>ComboBox</span>
                    <span onClick={handleFileboxAdd}>File Upload</span>
                    <span onClick={handleCheckboxAdd}>Checkbox</span>
                    <span onClick={handleRadioAdd}>Radio Button</span>
                </div>
             </div>
            <div className="col-md-8" >
                <div className="row">
                    <div className="col-md-6">
                        <form className="App" autoComplete="off">
                            <div className="form-field"  >
                                <label htmlFor="service">input</label>
                                {serviceList.map((singleService, index) => (
                                <div key={index} className="services">
                                    <div className="first-division">
                                    <input
                                        name="service"
                                        type="text"
                                        id="service"
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                        required
                                    />
                                    {serviceList.length - 1 === index && serviceList.length < 10 && (
                                        <div className="output">
                                        {serviceList &&
                                            serviceList.map((singleService, index) => (
                                            <ul key={index}>
                                                {singleService.service && <li>{singleService.service}</li>}
                                            </ul>
                                            ))}
                                        </div>
                                    )}
                                    </div>
                                    <div className="second-division">
                                    {serviceList.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleServiceRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                                    
                                </div>
                                ))}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form className="App" autoComplete="off">
                            <div className="form-field">
                            <label htmlFor="select">select</label>
                            {select.map((singleService, index) => (
                            <div key={index} className="services">
                                <div className="first-division">
                                <select id="select" onChange={(e) => handleSelectChange(e, index)}>
                                    <option value='one'>one</option>
                                    <option value='tow'>tow</option>
                                    <option value='three'>three</option>
                                </select>
            
                                </div>
                    
                                <div className="second-division">
                                    {select.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleSelectRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                            </div>
                            ))}
                            </div>
                        </form>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form className="App" autoComplete="off">   
                            <div className="form-field">
                                <label htmlFor="radio">radio</label>
                                {radio.map((singleService, index) => (
                                <div key={index} className="services">
                                    <div className="first-division">
                                    <input
                                        name="radio"
                                        type="radio"
                                        id="radio"
                                        value={singleService.service}
                                        onChange={(e) => handleRadioChange(e, index)}
                                        required
                                    />
                                    </div>

                                    <div className="second-division">
                                    {radio.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleRadioRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form className="App" autoComplete="off">
                        <div className="form-field">
                            <label htmlFor="checkbox">checkbox</label>
                            {checkbox.map((singleService, index) => (
                            <div key={index} className="services">
                                <div className="first-division">
                                <input
                                    name="checkbox"
                                    type="checkbox"
                                    id="checkbox"
                                    value={singleService.service}
                                    onChange={(e) => handleCheckboxChange(e, index)}
                                    required
                                />
                                </div>
                                <div className="second-division">
                                    {checkbox.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleCheckBoxRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                            </div>
                            ))}
                        </div>
                        </form>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form className="App" autoComplete="off">   
                            <div className="form-field">
                                <label htmlFor="file">file</label>
                                {file.map((singleService, index) => (
                                <div key={index} className="services">
                                    <div className="first-division">
                                    <input
                                        name="file"
                                        type="file"
                                        id="file"
                                        value={singleService.file}
                                        onChange={(e) => handleFileChange(e, index)}
                                        required
                                    />
                                    </div>
                                    <div className="second-division">
                                    {file.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleFileRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                                </div>
                                ))}
                            </div>
                         </form>
                    </div>
                    <div className="col-md-6">
                        {/* <form className="App" autoComplete="off">
                        <div className="form-field">
                            <label htmlFor="service">checkbox</label>
                            {checkbox.map((singleService, index) => (
                            <div key={index} className="services">
                                <div className="first-division">
                                <input
                                    name="checkbox"
                                    type="checkbox"
                                    id="checkbox"
                                    value={singleService.service}
                                    onChange={(e) => handleCheckboxChange(e, index)}
                                    required
                                />
                                </div>
                                <div className="second-division">
                                    {checkbox.length !== 1 && (
                                        <span
                                        type="button"
                                        onClick={() => handleCheckBoxRemove(index)}
                                        className="remove-btn"
                                        >
                                        <img src={closeIcon}/>
                                        </span>
                                    )}
                                    </div>
                            </div>
                            ))}
                        </div>
                        </form> */}
                    </div>

                </div>
      
            </div>
            <div className="col-md-3" >
                    <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                            <div key={index}>
                                {singleService.service && 
                                <td>{singleService.service}</td>
                                }
                            </div>
                            ))
                        } 
                        <td></td>
                    </tr>
                    <tr>
                        <td>Class</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Required</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Value</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Label</td>
                        <td></td>
                    </tr>
                    </table>


            </div>
        </div>
       
        </>
    )
}

export default FormBuilder