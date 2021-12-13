import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import './Contact.css';
import Map from './Map';
import ContactForm from '../../Component/ContactFrom/ContactForm';

function Contact() {
  return (
    <Grid container spacing={6} className='section pt_45'>
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <Grid className='section_title'>
              <span></span>
              <h6 className='section_title_text'>Contact Me</h6>
            </Grid>
          </Grid>
          {/* Contact form */}
          <ContactForm />
        </Grid>
      </Grid>
      {/* Contact info */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Contact Info</h6>
          </Grid>
          <Grid container className='contact_info_container'>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Location: </span>
                {resumeData.location}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Address: </span>
                {resumeData.address}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Emial: </span>
                {resumeData.email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='contact_info_item'>
                <span>Phone: </span>
                {resumeData.phone}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='contact_info_social_container'>
            {Object.keys(resumeData.socials).map((social) => {
              return (
                <Grid
                  item
                  className='contact_info_social_icon'
                  key={resumeData.socials[social].link}
                >
                  <a
                    href={resumeData.socials[social].link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {resumeData.socials[social].icon}
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Map />
    </Grid>
  );
}

export default Contact;
