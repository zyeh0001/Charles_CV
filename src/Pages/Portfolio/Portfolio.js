import React, { useState } from 'react';
import './Portfolio.css';
import {
  Grid,
  Tabs,
  Tab,
  CardMedia,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import Gallery from '../../Component/ImageGallery/ImageGallery';

function Portfolio() {
  const [tabValue, setTabValue] = useState('All');
  const [porjectDialog, setProjectDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const catalog = [...new Set(resumeData.projects.map((item) => item.tag))];

  return (
    <Grid container spacing={1} className='section pb_45 pt_30'>
      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/* add mui tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='primary'
          className='custom_tab'
          onChange={(event, newValue) => {
            setTabValue(newValue);
          }}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All' ? 'custom_tab_item active' : 'custom_tab_item'
            }
          />
          {catalog.map((tag) => {
            return (
              <Tab
                key={tag}
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? 'custom_tab_item active'
                    : 'custom_tab_item'
                }
              />
            );
          })}
        </Tabs>
      </Grid>
      {/* Project section */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => {
            return (
              <>
                {tabValue === project.tag || tabValue === 'All' ? (
                  <Grid item xs={12} sm={6} md={4} key={project.title}>
                    <Grow in timeout={1000}>
                      <Card
                        className='project_card'
                        onClick={() => {
                          setProjectDialog(project);
                          setOpenDialog(true);
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            className='project_image'
                            image={project.images[0]}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography className='card_title'>
                              {project.title}
                            </Typography>
                            <Typography
                              variant='caption'
                              className='card_content'
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            );
          })}
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        className='projectDialog'
        onClose={() => {
          setProjectDialog(false);
          setOpenDialog(false);
        }}
        maxWidth={'md'}
      >
        <DialogTitle>
          <Typography className='projectDialog_title'>
            {porjectDialog.title}
          </Typography>
        </DialogTitle>

        <DialogContent style={{ height: '80vh' }}>
          {porjectDialog.images && (
            <Gallery key={porjectDialog.images} images={porjectDialog.images} />
          )}
          <Typography className='projectDialog_title mt_20 mb_20'>
            {porjectDialog.title}
          </Typography>
          <Typography variant='caption' className='projectDialog_description'>
            {porjectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_action'>
          {porjectDialog?.links?.map((link) => {
            return (
              <>
                <a
                  href={link.link}
                  key={link.type}
                  target='_blank'
                  rel='noreferrer'
                  className='projectDialog_icon'
                >
                  {link.icon}
                </a>
              </>
            );
          })}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;
