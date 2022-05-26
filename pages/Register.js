import React from 'react'

const Register = () => {
  return (
    <>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <center>
        <div className="container ml-10 form-container">
          <div className="row">
            <form>
              <div class="mb-3">
                <label for="" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="enter your name"
                />
              </div>

              <div class="mb-3">
                <label for="" class="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  class="form-control"
                  id=""
                  placeholder="enter your mobile number"
                />
              </div>

              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="enter valid email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="enter your password"
                />
              </div>

            
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </center>
    </>
  )
}

export default Register