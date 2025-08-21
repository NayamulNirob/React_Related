function Form(){
    return(
        <div>
        <form className="form">
          <fieldset>
            <legend>
              <h2>Fill Up The Form</h2>
            </legend>
            <label>Name</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>Phone Number</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <lable>Address</lable>
            <br></br>
            <input type="text"></input>
            <br></br>
            <lable>Photo</lable>
            <br></br>
            <input type="file"></input>
            <br></br>
            <lable>Account number </lable>
            <br></br>
            <input type="number"></input>
            <br></br>
            <label>Date</label>
            <br></br>
            <input type="date"></input>
            <br></br>
            <input type="radio" name="gender" value="Male"></input>
            <label>Male</label>
            <br></br>
            <input type="radio" name="gender" value="Female"></input>
            <label>Female</label>
            <br></br>
            <input type="radio" name="gender" value="Lesbiain"></input>
            <label>Lesbiain</label>
            <br></br>
            <input type="radio" name="gender" value="Gay"></input>
            <label>Gay</label>
            <br></br>
            <input type="radio" name="gender" value="Bisexual"></input>
            <label>Bisexual</label>
            <br></br>
            <input type="radio" name="gender" value="Transgender"></input>
            <label>Transgender</label>
            <br></br>
            <label>Account Type </label>
            <br></br>
            <input
              type="checkbox"
              id="account1"
              name="account1"
              value="Savings"
            />
            <label>Savings</label>
            <input
              type="checkbox"
              id="account2"
              name="account2"
              value="Loan"
            ></input>
            <label>Loan Account</label>
            <input
              type="checkbox"
              id="account3"
              name="account3"
              value="Deposite"
            ></input>
            <label>Deposite Account</label>
            <br></br>
            <label>Tell About Yourself</label>
            <br></br>
            <textarea rows={3}></textarea>
            <br></br>

            <label for="cars">Choose a car:</label>
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              <option value="none">None</option>
            </select>
            <br></br>
            <input list="browsers"/>
            <datalist id="browsers">
              <option value="Edge"/>
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
        

            <br></br>
            <input type="button" value="submit"></input>
          </fieldset>
        </form>
      </div>
    )
}

export default Form;