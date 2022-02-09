import React, { useRef, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomButton from '../../Component/Button/CustomButton';
import emailjs from 'emailjs-com';
// import FormControl from '@mui/material/FormControl';
import { Form, Row } from 'react-bootstrap';

const Result = () => {
  return <Typography>Your message has been sent!</Typography>;
};

function ContactForm() {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pm64d75',
        'template_m1i32cs',
        form.current,
        'user_Ji17d9cTtzhQtM75jRQ0H'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Form onSubmit={sendEmail} >
          <Row xs={1} md={2} className='mt-3'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name:</Form.Label>
              <Form.Control type='name' name='name' placeholder='your name' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                name='user_email'
                placeholder='name@example.com'
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message:</Form.Label>
            <Form.Control as='textarea' rows={3} name='message' />
          </Form.Group>
          <Grid container spacing={2}>
            <Grid item>
              <CustomButton text='Submit' type='submit'></CustomButton>
            </Grid>
            <Grid item>{result ? <Result /> : null}</Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>

    // <FormControl ref={form}>
    //   <Grid container>
    //     <Grid item xs={12} lg={6}>
    //       <TextField
    //         fullWidth
    //         id='outlined-required'
    //         label='Name'
    //         name='name'
    //       />
    //     </Grid>
    //     <Grid item xs={12} lg={6}>
    //       <TextField
    //         fullWidth
    //         id='outlined-required'
    //         name='user_email'
    //         label='Email'
    //       ></TextField>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <TextField
    //         fullWidth
    //         id='outlined-required'
    //         name='message'
    //         label='Message'
    //         multiline
    //         rows={4}
    //       ></TextField>
    //     </Grid>
    //     <Grid item xs={12} className='pt_30'>
    //       <CustomButton
    //         text='Submit'
    //         onClick={sendEmail}
    //         type='submit'
    //       ></CustomButton>
    //       <CustomButton
    //         text='Reset'
    //         color='default'
    //         //   onClick={}
    //       ></CustomButton>
    //     </Grid>
    //   </Grid>
    // </FormControl>
  );
}

export default ContactForm;
