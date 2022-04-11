import React, {useState} from "react";

function Form(){
    const [nama, setNama] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [gender, setGender] = useState('');
    const [agama, setAgama] = useState('');
    const [pesan, setPesan] = useState('');

    const [userHobi, setUserHobi] = useState({ 
        hobi: [], 
        response: [], 
    });
    
    const [display, setDisplay] = useState(false);

    const getHobi = (e) => { 
        // Destructuring 
        const { value, checked } = e.target; 
        const { hobi } = userHobi; 
    
        // Case 1 : if user checking the box
        if (checked) { 
          setUserHobi({ 
            hobi: [...hobi, value],
            response: [...hobi, value], 
          }); 
        }

        // Case 2  : if user uncheck the box
        else { 
          setUserHobi({ 
            hobi: hobi.filter((e) => e !== value), 
            response: hobi.filter((e) => e !== value), 
          }); 
        }
    }
    
    const changeNama = (e) =>{
        setNama(e.target.value);
        setDisplay(false);
    }
    
    const changeTglLahir = (e) =>{
        setTglLahir(e.target.value);
        setDisplay(false);
    }

    const changeGender = (e) => {
        setGender(e.target.value);
        setDisplay(false);
    }

    const changeAgama = (e) => {
        setAgama(e.target.value);
        setDisplay(false);
    }

    const changePesan = (e) => {
        setPesan(e.target.value);
        setDisplay(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function resetField() {
        document.getElementById("namaLengkap").value = "";
        document.getElementById("tglLahir").value = "";
        var ele = document.getElementsByName("jenisKelamin");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        ele = document.getElementsByName("hobi");
        for(i=0;i<ele.length;i++)
            ele[i].checked = false;
        document.getElementById("agama").value = "";
        document.getElementById("pesan").value = "";
        setDisplay(true);
    }

    return(    
        <div>
            <h3>Biodata</h3>
            <form id="form-input" onSubmit={handleSubmit}>
                <div id="form-field">
                    <label for="namaLengkap" className="form-label">Nama Lengkap</label><br></br>
                    <input className="form-control" type="text" id="namaLengkap" name="nama" placeholder="isi nama lengkap ..." onChange={changeNama} ></input>
                </div>
                <div id="form-field">
                    <label for="tglLahir" className="form-label" >Tanggal Lahir</label><br></br>
                    <input className="form-control" type="date" id="tglLahir" name="tglLahir" onChange={changeTglLahir} ></input>
                </div>
                <div id="form-field">
                <label className="form-label">Jenis Kelamin</label><br></br>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin1" name="jenisKelamin" value="Laki-Laki" onChange={changeGender}/>
                        Laki-Laki
                    </label>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin2" name="jenisKelamin" value="Perempuan" onChange={changeGender}/> 
                        Perempuan
                    </label>
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" id="jenisKelamin3" name="jenisKelamin" value="Other" onChange={changeGender}/> 
                        Other
                    </label>
                </div>
                <div id="form-field">
                <label className="form-label">Hobi</label><br></br>
                    <input className="form-check-input" type="checkbox" id="hobi1" name="hobi" value="Ngoding" onChange={getHobi}/>
                    <label className="form-check-label">Ngoding</label> 
                    <input className="form-check-input" type="checkbox" id="hobi2" name="hobi" value="Rebahan" onChange={getHobi}/>
                    <label className="form-check-label">Rebahan</label> 
                    <input className="form-check-input" type="checkbox" id="hobi3" name="hobi" value="Melamun" onChange={getHobi}/> 
                    <label className="form-check-label">Melamun</label> 
                    <input className="form-check-input" type="checkbox" id="hobi4" name="hobi" value="Baca Buku" onChange={getHobi}/>
                    <label className="form-check-label">Baca Buku</label> 
                    <input className="form-check-input" type="checkbox" id="hobi5" name="hobi" value="Nonton Youtube" onChange={getHobi}/>
                    <label className="form-check-label">Nonton Youtube</label> 
                    <input className="form-check-input" type="checkbox" id="hobi6" name="hobi" value="Dengerin Lagu" onChange={getHobi}/> 
                    <label className="form-check-label">Dengerin Lagu</label> 
                    <input className="form-check-input" type="checkbox" id="hobi7" name="hobi" value="Other" onChange={getHobi}/>
                    <label className="form-check-label">Other</label> 
                </div>
                <div id="form-field">
                <label for="agama" className="form-label">Agama</label><br></br>
                    <select className="form-select" id="agama" name="agama" onChange={changeAgama} >
                        <option value="" disable selected hidden>Pilih Agama ...</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Protestan">Protestan</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Kong Hu Cu">Kong Hu Cu</option>
                    </select>
                </div>
                <div id="form-field">
                    <label for="pesan" className="form-label">Pesan</label>
                    <textarea className="form-control" id="pesan" rows="7" placeholder="Tinggalkan Pesan...." onChange={changePesan}></textarea>
                </div>
                <div id="submit-btn">
                    <button className="btn btn-primary" type="submit" id="mybtn" onClick={resetField}> Submit </button>
                 </div>
            </form>
            <div className="table-responsive">
                <table id="tableBio" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="lbl-width">Label</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Nama</th>
                            {
                                display?
                                <td id="outName">{nama}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Tanggal Lahir</th>
                            {
                                display?
                                <td id="outTgl">{tglLahir}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Jenis Kelamin</th>
                            {
                                display?
                                <td id="outJK">{gender}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Hobi</th>
                            {
                                display?
                                <td id="outHobi" onChange={getHobi}>{userHobi.response.join(", ")}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Agama</th>
                            {
                                display?
                                <td id="outAgama">{agama}</td>
                                :null
                            }
                        </tr>
                        <tr>
                            <th scope="row">Pesan</th>
                            {
                                display?
                                <td id="outPesan">{pesan}</td>
                                :null
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Form;