import './form.css';

function Form(){
    return(
        <div class="form">
            <div className="middle">
            <form action="">
                <div>
                    <h1>Login to Check</h1>
                </div>
                <div>
                    <label htmlFor="">User Name : </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="password" />
                </div>
                <div className="btn">
                    <button type='submit'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Form;