import { useState } from 'react'
import emailjs from 'emailjs-com'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_1sjevko', 'template_ie75hf7', 'user_os', e.target, 'user_essV1uVXwiBpFUKi1nPDE'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      ).then(
        alert("ההודעה נשלחה בהצלחה, תודה על פנייתך")
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>יצירת קשר</h2>
                <p>

                  בבקשה למלא את הטופס למטה כדי לשלוח אימייל,
                  ואני אשיב בהקדם האפשרי.
                </p>
              </div>

              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <Grid container alignItems="flex-end" >
                        <Grid item>
                          <AlternateEmailIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            type='email'
                            required
                            id='email'
                            name='email'
                            label="כתובת דואל"
                            placeholder='כתובת המייל שלך'
                            tabIndex="0"
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div >
                      <Grid container alignItems="flex-end" >
                        <Grid item>
                          <AccountCircle />
                        </Grid>
                        <Grid item>
                          <TextField
                            id="name"
                            name='name'
                            label="שם"
                            placeholder='היי איך קוראים לך?'
                            required

                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>פרטים</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> כתובת
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> טלפון
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> אימייל
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; כל הזכויות שמורות דנה להצלחה{' '}

          </p>
        </div>
      </div>
    </div>
  )
}
